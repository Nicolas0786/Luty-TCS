import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Axios from "axios";
import {useNavigate} from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import './Css/TelaLogin.css'
import imgLog from '../imagens/imgLogin.png';

const TelaLogin = () =>{

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    
    return(
        <body>
            <main className='telLog'>
            <Image src={imgLog} rounded ></Image>
            <Row className="mb-3" center>
            
                        <Form.Group as={Col} md="12">
                            <Form.Control id="usuario" type="text" value={username} onChange ={(e)=> setUsername(e.target.value)}  placeholder= "Usuário"/>
                        
                        <br></br>
                        
                            <Form.Control id="senha" type="password" value={password} onChange ={(e)=> setPassword(e.target.value)} placeholder= "Senha"/>
                        </Form.Group>  
                        
            </Row>            
            <Button className='entrar' onClick={entrar}>Entrar</Button>
            </main>
        </body>
    );

     async function entrar() {


        try {

            const response = await  Axios.post('http://localhost:3000/usuario/login', {username: username, password: password})

            //console.log(response.data.access_token);

            sessionStorage.setItem("token", response.data.access_token);

            navigate('/TelaInicio')
            
        } catch (error) {
            window.alert("Verefique a Senha ou Usuario")
            console.log(error);

        }

            
    }


}

export default TelaLogin;