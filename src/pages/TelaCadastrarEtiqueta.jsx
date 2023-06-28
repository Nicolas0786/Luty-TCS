import imgIni from '../imagens/ini.png';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import React, {useContext, useState, useEffect} from 'react';
import Axios from "axios";
import jwtDecode from 'jwt-decode';

const TelaCadastrarEtiqueta = () =>{

    const [ipEtiqueta, setIpEtiqueta] = useState('');
    const [nomeEtiqueta, setNomeEtiqueta] = useState('');
    const [corredor, setCorredor] = useState('');
    const [pratilheira, setPratilheira] = useState('');
    

    async function salvar(){

        try {
           const dadosEtiqueta = {ipEtiqueta, nomeEtiqueta, corredor, pratilheira};

           const res = await Axios.post("http://localhost:3000/etiqueta/cadastrar", dadosEtiqueta, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
           });
           console.log(res);
           

        } catch (error) {
            
        }
    }

    return(
        <>
            <header className='inicio'>
                <Image src={imgIni} className = 'imgIni'></Image>
            </header>
            <div className='forms'>
                <Form>
                    <Form.Group as={Col} md="4">
                        <Form.Label>IP - Etiqueta</Form.Label>
                        <Form.Control id="ip" type="text" value={ipEtiqueta} onChange={(e) => setIpEtiqueta(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control id="nome" type="text" value={nomeEtiqueta} onChange={(e) => setNomeEtiqueta(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Corredor</Form.Label>
                        <Form.Control id="corredor" type="text" value={corredor} onChange={(e) => setCorredor(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Pratilheira</Form.Label>
                        <Form.Control id="pratilheira" type="text" value={pratilheira} onChange={(e) => setPratilheira(e.target.value)}/>
                    </Form.Group>
                        <br></br>
                    <Button>Cancelar</Button>
                    <Button onClick={salvar}>Salvar</Button>
                </Form>
            </div>
        </>
    );

}

export default TelaCadastrarEtiqueta;