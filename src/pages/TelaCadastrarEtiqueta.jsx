import imgIni from '../imagens/ini.png';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import React, {useState, useEffect} from 'react';
import Axios from "axios";
import jwtDecode from 'jwt-decode';
import {useNavigate} from 'react-router-dom';
import HeaderApp from './headerApp';
import './Css/TelaCadastrarEtiqueta.css';

const TelaCadastrarEtiqueta = () =>{

    const [ipEtiqueta, setIpEtiqueta] = useState('');
    const [nomeEtiqueta, setNomeEtiqueta] = useState('');
    const [corredor, setCorredor] = useState('');
    const [pratilheira, setPratilheira] = useState('');
    const [usuario, setUsuario] = useState();
    const navigate = useNavigate();

    
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
           const dadosEtiqueta = {ipEtiqueta, nomeEtiqueta, corredor, pratilheira, usuario};

           const res = await Axios.post("http://localhost:3000/etiqueta/cadastrar", dadosEtiqueta, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
           });
           console.log(res);
           if(res.status === 201){
            window.alert(res.data.message)
            setIpEtiqueta('');
            setNomeEtiqueta('');
            setCorredor('');
            setPratilheira('');
            navigate('/TelaEtiqueta');
           }
           

        } catch (error) {
            if(error.response.status === 400){
                window.alert("Prencha todos os campos");
            }else{
                window.alert(error.response.data.message);
            }
           
        }
    }

    return(
        <>
            <div className="telaEditEtiqueta">
                <HeaderApp/>
                <div className='formsEditEtiqueta'>
                    <Form className='formEtiqueta'>
                        <Form.Group as={Col} md="6">
                            <Form.Label>IP - Etiqueta</Form.Label>
                            <Form.Control id="ip" type="text" value={ipEtiqueta} onChange={(e) => setIpEtiqueta(e.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control id="nome" type="text" value={nomeEtiqueta} onChange={(e) => setNomeEtiqueta(e.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Corredor</Form.Label>
                            <Form.Control id="corredor" type="text" value={corredor} onChange={(e) => setCorredor(e.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Prateleira</Form.Label>
                            <Form.Control id="pratilheira" type="text" value={pratilheira} onChange={(e) => setPratilheira(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </div>
                <div className='areaBotoesEditEtiqueta'>
                    <Button className='btns' onClick={salvar}>Salvar</Button>
                    <Button className='btns' onClick={() => navigate('/TelaEtiqueta')}>Cancelar</Button>
                </div>
            </div>
        </>
    );

}

export default TelaCadastrarEtiqueta;