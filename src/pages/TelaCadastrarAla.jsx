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
import MyContext from '../contexts/myContext';


const TelaCadastrarAla = () =>{

    const navigate = useNavigate();
    const [descricao, setDescricao] = useState();
    const {logado, setLogado} =useContext(MyContext);


    async function salvar(){

        try {
            
      const res = await Axios.post("http://localhost:3000/ala/criar", {descricao:descricao}, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        })

        if(res.status === 201){
            window.alert("Ala Cadastrada");
            setDescricao('');
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
                 <header className='inicio'>
                    <Image src={imgIni} className = 'imgIni'></Image>
                </header>
    <div className="container">
                
        <div className="row">
        
            <div className="col-md-6">
                <div className="d-flex justify-content-center align-items-center">
                <div className='fundo'>
                <Form className='formGrupo'> 
                    <h1>Ala</h1>   
                <Row className="mb-3">
                <Form.Group as={Col} md="4">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control id="descricao" type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder= "Descrição"/>
                </Form.Group>        
                </Row>   
                <Button onClick={salvar}>Salvar</Button>
                <Button onClick={()=> navigate('/TelaProduto')}>Cancelar</Button>     
                </Form>    
                </div>
                 </div>


            </div>
        </div>
    </div>
    </>
);


}

export default TelaCadastrarAla;