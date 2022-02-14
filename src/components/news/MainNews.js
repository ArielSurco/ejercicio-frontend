import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { useMediaQuery } from 'react-responsive'
import { MainNewsStyles as styles } from './newsStyles';
import { filterBeetwen } from '../../utils/filterData';

const MainNews = (props) => {

   const { style, data } = props

   // RESPONSIVE
   const isMediumSize = useMediaQuery({
      query: '(max-device-width: 900px)'
   })

   const isSmallSize = useMediaQuery({
      query: '(max-device-width: 530px)'
   })

   const renderLittleNews = () => {

      //DESDE SEGUNDA NOTICIA A CUARTA
      const news = filterBeetwen(1, 4, data)

      return news.map((x, idx) => (
         <Link
            key={idx} style={{
            ...styles.littleNewsContainer,
            ...isMediumSize && {
               width: '50%',
               height: 200
            },
            ...isSmallSize && {
               width: '100%',
               height: 150
            }
         }} to={`news/${x.uuid}`}>
            <span style={{ ...styles.title, ...{ fontSize: 16 } }}>{x.title.substr(0, 50)}...</span>
            <img style={styles.littleImgContainer} src={x.thread.main_image} alt="News"/>
         </Link>
      ))

   }

   return (
      <div style={{ ...styles.container, ...style, ...isMediumSize && { flexDirection: 'column' } }}>
         {/*PRIMER NOTICIA*/}
         <Link to={`news/${data[0].uuid}`} style={{
            ...styles.newsContainer, ...isMediumSize && {
               width: '100%',
               height: 300
            }
         }}>
            <img style={styles.bigNewsImg} src={data[0].thread.main_image} alt="News"/>
            <span style={{ ...styles.title, ...{ fontSize: 18 } }}>{data[0].title}</span>
         </Link>
         <div style={{
            ...{ padding: 1 }, ...styles.newsContainer, ...isMediumSize && {
               width: '100%',
               height: 'auto'
            }
         }}>
            {renderLittleNews()}
         </div>
      </div>
   )
}

MainNews.propTypes = {
   style: PropTypes.any,
   data: PropTypes.array
}

export default MainNews
