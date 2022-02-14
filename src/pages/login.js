import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import LoginForm from '../components/forms/LoginForm'
import { useHistory } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'

const Login = (props) => {

   const { style } = props
   const { login, isLogged } = useLogin();
   const [rememberUserNews] = useState(JSON.parse(localStorage.getItem('rememberUserNews')))

   const logged = isLogged();

   let history = useHistory()

   useEffect(() => {
      logged && history.push("/home")
   }, [logged])

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
