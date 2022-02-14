import React, { useState, useEffect } from 'react'
import { Spin } from 'antd';
import Header from '../components/layout/Header';
import MainNews from '../components/news/MainNews';
import InfiniteScroll from 'react-infinite-scroller';
import LineSeparator from '../components/separators/LineSeparator';
import IdleTimerContainer from '../components/IdleTimerContainer';
import { useHistory } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import { orderByRelevance } from '../utils/sortData';
import { getPosts } from '../services/newsService';
import { filterBeetwen, filterByTextOrTitle } from '../utils/filterData';
import NewsList from '../components/news/NewsList';

const Home = (props) => {

   const { style } = props

   const [data, setData] = useState([])
   const [filteredData, setFilteredData] = useState([])
   const [newsToShow, setNewsToShow] = useState(10)
   const [loading, setLoading] = useState(true)
   const logged = JSON.parse(localStorage.getItem('logged')) || false
   const history = useHistory()

   useEffect(() => {
      if (logged) {
         getPosts()
            .then(data => {
               // Ordenamos data por relevancia
               const orderedData = orderByRelevance(data);
               setData(orderedData) //Guardamos data original en estado
               setFilteredData(orderedData)
               setLoading(false)
            })
      } else {
         history.push("/")
      }
   }, [history, logged])

   // Render de Noticias
   function renderNews() {
      //Retornamos resto de noticias obviando primeras 5. newsToShow irá aumentando al realizar scroll
      const news = filterBeetwen(5, newsToShow, filteredData);
      return <NewsList news={news}/>
   }

   function _onSearch(value) {
      //Filtramos por título y texto
      let newData = filterByTextOrTitle(data, value)
      setFilteredData(newData)
   }

   const numberOfNews = filteredData.length

   return (
      loading ?
   <div className={"spin-container"}>
      <Spin size="large"/>
   </div>
         :
         <div style={style}>
            <IdleTimerContainer/> {/*Componente encargado de cerrar sesión por inactividad*/}

            <Header
               onSearch={(value) => _onSearch(value)}
            />

      <div className={"body-home"}>
         {
            numberOfNews > 0 && (
               <div>
                  <MainNews
                     data={filteredData} //Datos a renderizar (unicamente primeros 5)
                  />

                  <LineSeparator size={'small'}/>

                  {
                     numberOfNews > 5 ?
                        <div>
                           <h2>Más Noticias</h2>
                           <InfiniteScroll
                              className={"news-container"}
                              key={0}
                              pageStart={0}
                              loadMore={() => setNewsToShow(newsToShow + 10)}
                              hasMore={newsToShow <= filteredData.length}
                              loader={<div className={"spin-loader-more-container"}><Spin size="large"/></div>}
                           >
                              {
                                 renderNews()
                              }
                           </InfiniteScroll>
                        </div>
                        :
                        <h2>Modifique los patrones de búsqueda para obtener más resultados</h2>
                  }


               </div>
             )
         }
      </div>
         </div>
   )
}

export default Home