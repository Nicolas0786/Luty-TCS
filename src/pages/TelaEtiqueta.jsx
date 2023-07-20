import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Axios  from 'axios';
import Table from '../Table/TabelaEtiqueta';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './Css/TelaEtiqueta.css';
import HeaderApp from "./headerApp";
import jwtDecode from 'jwt-decode';



const TelaEtiqueta = () =>{
    
    const navigate = useNavigate();
    const [dadosEtiqueta, setDadosEtiqueta] = useState([]);
    const [search, setSearch] = useState('');
    const [usuario, setUsuario] = useState([]);

    const head = {
        idEtiqueta: "ID",
        ipEtiqueta: "IP - Etiqueta",
        nomeEtiqueta: "Nome", 
        corredor: "Corredor",
        pratilheira: "Prateleira"
    }

    useEffect(() =>{
        const token = sessionStorage.getItem('token');
        if(token){
            const decodeToken = jwtDecode(token);
            const {permissao} = decodeToken;
            setUsuario(permissao);
        }
        },[]);


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
        <div className='telaInicio'>
            <HeaderApp/>
            <div className='areaTable'>
                <div className='areaBotoes'>
                    <Button className='btns' disabled>Etiqueta</Button>
                    {usuario.cargo === "gerente" &&(
                    <Button className='btns' onClick={()=> navigate('/TelaUsuario')}>Usuario</Button>
                    )}
                    <Button className='btns' onClick={()=> navigate('/TelaProduto')}>Produto</Button>
                    <input  className='areaPesquisa' id="Buscar" type="text" onChange={e => setSearch(e.target.value)} value={search} placeholder= "Buscar"/>
                </div>
                <div className='teEt'>
                <div className="tableET">
                    <Table dadosEtiqueta={dadosEtiqueta} head={head} filterDados={filterDados} />
                </div>
                </div>
                <div className='btsAdd'>
                    <Button className='btns' onClick={()=> navigate('/TelaCadastrarEtiqueta')}>Novo</Button>
                    <Button className='btns' onClick={()=> navigate('/TelaInicio')}>Fechar</Button>
                </div>
            </div>
        </div>
    );
}

export default TelaEtiqueta;