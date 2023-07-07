import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Axios  from 'axios';
import Table from '../Table/TabelaEtiqueta';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './Css/TelaEtiqueta.css';
import HeaderApp from "./headerApp";



const TelaEtiqueta = () =>{
    
    const navigate = useNavigate();
    const [dadosEtiqueta, setDadosEtiqueta] = useState([]);
    const [search, setSearch] = useState('');

    const head = {
        idEtiqueta: "ID",
        ipEtiqueta: "IP - Etiqueta",
        nomeEtiqueta: "Nome", 
        corredor: "Corredor",
        pratilheira: "Pratilheira"
    }

    React.useEffect(()=>{
        async function buscarDados(){

            const axi = await Axios.get('http://localhost:3000/etiqueta/buscarTodas', {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                }
            })
            //console.log(axi.data);
            
            setDadosEtiqueta(axi.data);
        
        }
        buscarDados()
    },[])

    const filterDados = search.length > 0 ? dadosEtiqueta.filter(dadosEtq => dadosEtq.nomeEtiqueta.includes(search) || dadosEtq.ipEtiqueta.includes(search)): [];
   
    return(

        <>
        <header>
            <HeaderApp/>
        </header>
        <div className="container-fluid">
            <Button disabled>Etiqueta</Button>
            <Button onClick={()=> navigate('/TelaUsuario')}>Usuario</Button>
            <Button onClick={()=> navigate('/TelaProduto')}>Produto</Button>
                <Form.Group as={Col} md="4"> 
                        <Form.Control id="Buscar" type="text" onChange={e => setSearch(e.target.value)} value={search} placeholder= "Buscar"/>
                </Form.Group>
        <div className="row">
        <div className="col-md-12">
        <div className="d-flex justify-content-center align-items-center">
            <Table dadosEtiqueta={dadosEtiqueta} head={head} filterDados={filterDados} />
        </div>
        </div>
        </div>
        <Button onClick={()=> navigate('/TelaCadastrarEtiqueta')}>Novo</Button>
        <Button onClick={()=> navigate('/TelaInicio')}>Fechar</Button>
        </div>

        </>
    );
    
}

export default TelaEtiqueta;