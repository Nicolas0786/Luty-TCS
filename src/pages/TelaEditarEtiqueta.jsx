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
import { useParams } from 'react-router-dom';
import HeaderApp from './headerApp';
import './Css/TelaCadastrarEtiqueta.css';

const TelaEditarEtiqueta = () =>{
    const navigate = useNavigate();
    const [ipEtiqueta, setIpEtiqueta] = useState(undefined);
    const [nomeEtiqueta, setNomeEtiqueta] = useState(undefined);
    const [corredor, setCorredor] = useState(undefined);
    const [pratilheira, setPratilheira] = useState(undefined);

    const [dadosEtiqEdit, setDadosEtiqEdit] = useState([]);

    const {id} = useParams();
    console.log(id);

    React.useEffect(()=>{
        async function buscarDados(){

            const axi = await Axios.get(`http://localhost:3000/etiqueta/buscarPorID/${id}`, {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                }
            });
            
            setDadosEtiqEdit(axi.data);
            
        }
        buscarDados()
    },[])
    

    async function salvar(){
        const idEtiqueta = id;

        try {
            
        const res = await Axios.put('http://localhost:3000/etiqueta/atualizar/'+idEtiqueta, {ipEtiqueta, nomeEtiqueta, corredor, pratilheira}, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        });

        setIpEtiqueta('');
        setNomeEtiqueta('');
        setCorredor('');
        setPratilheira('');
        window.alert(res.data.message);
        navigate('/TelaEtiqueta');

    } catch (error) {
        window.alert(error.response.data.message);
    }
    }


    return(
        <>
        <div className="telaEditEtiqueta">
            <HeaderApp/>
            <div className='formsEditEtiqueta'>
                <Form className='formEtiqueta'>
                    <Form.Group as={Col} md="4">
                        <Form.Label>IP - Etiqueta</Form.Label>
                        <Form.Control id="ip" type="text" defaultValue={dadosEtiqEdit.ipEtiqueta} onChange={(e) => setIpEtiqueta(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control id="nome" type="text" defaultValue={dadosEtiqEdit.nomeEtiqueta} onChange={(e) => setNomeEtiqueta(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Corredor</Form.Label>
                        <Form.Control id="corredor" type="text"  defaultValue={dadosEtiqEdit.corredor} onChange={(e) => setCorredor(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Prateleira</Form.Label>
                        <Form.Control id="pratilheira" type="text" defaultValue={dadosEtiqEdit.pratilheira} onChange={(e) => setPratilheira(e.target.value)}/>
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

export default TelaEditarEtiqueta;