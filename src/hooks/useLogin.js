import { useState } from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";
//Lo hice un hook para mantener la 'logica' que se viene manejando para el login
//Aunque lo normal es que el login sea un service tipo authService donde se realizan las peticiones
//a la API que indica si es un usuario valido.
export const useLogin = () => {
    const users = [{user:'admin', pass:'123123'}];
    const [logged, setLogged] = useState(JSON.parse(localStorage.getItem('logged')) || false);
    const history = useHistory();
    
    const login = values => {
        const exist = users.find(x => {
          return x.user === values.username && x.pass === values.password
        });
        if (exist) {
           localStorage.setItem('logged', JSON.stringify(true))
           setLogged(true);
           history.push("/home")
        } else {
           message.error('Usuario o contraseña incorrecta!', 5)
        }
    }

    const logout = () => {
        localStorage.removeItem('logged') // Eliminamos variable logged para cerrar sesión
        setLogged(false);
        history.push('/')
    }

    return { login, logout, logged }
}