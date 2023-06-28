import Axios  from 'axios';
import React, { useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Table from '../Table/TabelaProdutos';
import Row from '../Table/TabelaProdutos';
import Button from 'react-bootstrap/Button';
import MyContext from '../contexts/myContext';
import './Css/TelaProduto.css';
import { IoMdExit } from "react-icons/io";
import imgIni from '../imagens/ini.png';
import Image from 'react-bootstrap/Image'

const TelaProduto = () =>{

    const navigate = useNavigate();
    const[dadosProdutos, setDadosProdutos] = useState([]);
    const {logado, setLogado} =useContext(MyContext);
    const [search, setSearch] = useState('');

    useEffect(() =>{
        const token = sessionStorage.getItem('token');
        
        if(logado === false && !token){
            //console.log("não estou logado e não tem token")
            //console.log(logado)
            navigate('/TelaLogin');
        }
        
        },[]);

    const head = {
        idProduto: 'Id',
        codigoEan: 'Código',
        descricaoProduto: 'Descrição',
        quantidade: 'Quantidade',
        preco: 'Preço R$',
        grupo: 'Grupo'
        
    }

    React.useEffect(()=>{
        async function buscarDados(){

            const axi = await Axios.get('http://localhost:3000/produto/buscarTodos', {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                }
            })
            //console.log(axi.data);
            
            setDadosProdutos(axi.data);
            
            //console.log(axi.data[0].grupos.descricaoGrupo)

            /*const teste = axi.data.map((grup, i)=> {
               console.log( grup.grupos.descricaoGrupo);
               setDadosProdutos(grup.grupos.descricaoGrupo)
            })*/
        }
        buscarDados()
    },[])

    const filterDados = search.length > 0 ? dadosProdutos.filter(dadosPrp => dadosPrp.codigoEan.includes(search)) : [];

    return(
        <div>

            <header className='inicio'>
                <Image src={imgIni} className = 'imgIni'></Image>
                <IoMdExit  className=' exit'/>
            </header>

            <div className='botoes'>
            <Button id="TelaUsuario"  onClick={() => navigate('/TelaUsuario')}>Usuário</Button>
            <Button id="TelaProduto"  onClick={() => navigate('/TelaProduto')}>Produto</Button> 
            <Button id="TelaEtiqueta">Etiqueta</Button>
            <input className='btPesquisa' type='text' placeholder='Buscar...' onChange={e => setSearch(e.target.value)} value={search}/>
            </div>

            <div className='inici'>
                <Table dadosProdutos = {dadosProdutos} head={head} filterDados={filterDados}/>
            </div>

            <div className='btsBaixo'>
            <Button className='btGrupo' onClick={() => navigate('/TelaCadastrarGrupo')}>Grupo +</Button>
            <Button className='btAla' onClick={() => navigate('/TelaCadastrarAla')}>Ala +</Button>

            <Button className='btBaixoProduto' id="novoProduto"  onClick={() => navigate('/TelaCadastrarProduto')}>Produto +</Button> 
            <Button className='btBaixoProduto' onClick={() => navigate('/TelaInicio')}>Fechar</Button>
            </div>
        </div>
    );
}

export default TelaProduto;