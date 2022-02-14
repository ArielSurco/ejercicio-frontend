import React, { useRef } from 'react'

import PropTypes from 'prop-types'
import IdleTimer from 'react-idle-timer'
import { useHistory } from 'react-router-dom';
import { notification } from 'antd';
import { useLogin } from '../hooks/useLogin';

const IdleTimerContainer = (props) => {

   const idleTimerRef = useRef(null)

   let history = useHistory();
   const { logout } = useLogin();

   const onIdle = () => {
         notification['warning']({
            duration: 0,
            message: 'Sesión expirada',
            description:
               'Su sesión ha expirado por superar el tiempo de inactividad. Inicie sesión nuevamente',
         })
         
      logout()
      history.push('/')
   }

   return (
      <IdleTimer
         ref={idleTimerRef}
         timeout={300 * 1000} // Asignamos tiempo permitido de inactividad
         onIdle={onIdle}
      />
   )
}

IdleTimerContainer.propTypes = {
   style: PropTypes.any
}

export default IdleTimerContainer
