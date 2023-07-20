
import imgIni from '../imagens/ini.png';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Css/TelaCadastrarGrupo.css';
import {useNavigate} from 'react-router-dom';
import React, {useContext, useState, useEffect} from 'react';
import Axios from "axios";
import HeaderApp from './headerApp';
import jwtDecode from 'jwt-decode';


const TelaCadastrarGrupo = () => {
    const navigate = useNavigate();
    const [descricaoGrupo, setDescricaoGrupo] = useState();
    const [usuario, setUsuario] = useState('');

    useEffect(() =>{
        const token = sessionStorage.getItem('token');
        if(token){
            const decodeToken = jwtDecode(token);
            const {idUsuario} = decodeToken;
            setUsuario(idUsuario);
        }
        },[]);

    

    async function salvar(){

        try {
            
      const res = await Axios.post("http://localhost:3000/grupo/criar", {descricaoGrupo:descricaoGrupo, usuario: usuario}, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        })

        if(res.status === 201){
            window.alert("Grupo Cadastrado");
            setDescricaoGrupo('');
            navigate('/TelaProduto')
        }
        
        

    } catch (error) {
        console.log(error)
            if(error.response.status === 400){
                window.alert("Preencha o campo descrição")
            }
    }

    }



return(
<>
        
    <HeaderApp/>
           
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12  full-screen-div">
                <div className='fundo'>
                    <Form>
                            <h1 className='tituloGrupo'>Grupo</h1>  
                        <Row className='rowGro'>
                            <div className=' descricao'>
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control id="descricao" type="text" value={descricaoGrupo} onChange={(e) => setDescricaoGrupo(e.target.value)} placeholder= "Descrição..."/>
                            </div>
                        </Row>  
                    </Form>    
                </div>
                <div className='bbGrup'>
                    <Button className='botaoGrup' onClick={salvar}>Salvar</Button>
                    <Button className='botaoGrup' onClick={()=> navigate('/TelaProduto')}>Cancelar</Button>
                </div>
            </div>
        </div>
    </div>
    
</>
);

}

export default TelaCadastrarGrupo;