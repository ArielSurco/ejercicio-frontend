import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import LoginForm from '../components/forms/LoginForm'
import { message } from 'antd'
import { useHistory } from 'react-router-dom'

const Login = (props) => {

   const { style } = props

   const [users] = useState([{user:'admin', pass:'123123'}]);
   const [rememberUserNews] = useState(JSON.parse(localStorage.getItem('rememberUserNews')))

   const logged = JSON.parse(localStorage.getItem('logged')) || false

   let history = useHistory()

   useEffect(() => {
      logged && history.push("/home")
   }, [logged])

   const login = values => {
      const exist = users.find(x => {
        return x.user === values.username && x.pass === values.password
      });
      if (exist) {
         localStorage.setItem('logged', JSON.stringify(true))
         history.push("/home")
      } else {
         message.error('Usuario o contraseña incorrecta!', 5)
      }
   }

   return (
      <div style={style} className={"login-container"}>
         <h1 style={{ marginBottom: 40 }}>NOTICIAS COVID-19</h1>
         <LoginForm
            submit={login}
            initialValues={{
               username: rememberUserNews ? rememberUserNews.rememberUserNews : '',
               password: rememberUserNews ? rememberUserNews.password : ''
            }}
         />
      </div>
   )
}

export default Login