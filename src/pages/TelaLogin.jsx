import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import Axios from "axios";
import {useNavigate} from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import './Css/TelaLogin.css'
import imgLog from '../imagens/imgLogin.png';

import MyContext from "../contexts/myContext";

const TelaLogin = () =>{    

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const {logado, setLogado, user, setUser} =useContext(MyContext);

   
    
    return(
        <>
            <main className='telLog' id="inicializa">
                <div className='areaLogin'>
                    <div>
                        <Image className='imgLogin' src={imgLog} rounded ></Image>
                    </div>
                    <div className='inputsLogin'>
                        <Form.Group as={Col} md="12">
                            <Form.Control id="usuario" type="text" value={username} onChange ={(e)=> setUsername(e.target.value)}  placeholder= "Usuário"/>
                            <Form.Control id="senha" type="password" value={password} onChange ={(e)=> setPassword(e.target.value)} placeholder= "Senha"/>
                        </Form.Group>         
                        <Button style={{ marginTop: '5%' }} className='entrar' onClick={entrar}>Entrar</Button>
                    </div>
                </div>
            </main>
            </>   
        
    );

     async function entrar() {


        try {

            const response = await  Axios.post('http://localhost:3000/usuario/login', null, {params:{username, password}});

            //console.log(response.data.access_token);

            sessionStorage.setItem("token", response.data.access_token);
            setLogado(true);
            

            navigate('/TelaInicio')
            
        } catch (error) {
            //window.alert("Verefique a Senha ou Usuario")
            window.alert(error.response.data.message);
            console.log(error.response);

        }

            
    }


}

export default TelaLogin;