import Axios  from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Table from '../Table/TabelaUsuario';
import {useNavigate} from 'react-router-dom';
import {BiEdit} from "react-icons/bi";
import {AiOutlineSetting} from "react-icons/ai";
import './Css/TelaUsuario.css';
import MyContext from '../contexts/myContext';
import imgIni from '../imagens/ini.png';
import Image from 'react-bootstrap/Image'
import { IoMdExit } from "react-icons/io";
import HeaderApp from './headerApp';



const TelaUsuario = () =>{

    const [dadosUsuario, setDadosUsuario] = useState([]);
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const head = {
        nome: 'Nome',
        matricula: 'Matricula',
        login: 'Login'
    }

    

    React.useEffect(()=>{
        async function buscarUsuarios(){
        
            const dados = await Axios.get('http://localhost:3000/usuario/buscarTodos', {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                }
            })
            setDadosUsuario(dados.data);
        }
        buscarUsuarios();
    },[]);

    const filterDados = search.length > 0 ? dadosUsuario.filter(dadosUsu => dadosUsu.login.includes(search) || dadosUsu.nome.includes(search) || dadosUsu.matricula.toString().includes(search)): [];
   // console.log(dadosUsuario);
    //console.log(filterDados);
    return(
        <body>
            <header>
                <HeaderApp/>
            </header>

            <main className='telaInicio'>
            <div className='botoes'>
                <Button className='btUsuario' id='produto' onClick={() => navigate('/TelaProduto')}>Produto</Button>{''}
                <Button className='btUsuario' id='Etiqueta' onClick={() => navigate('/TelaEtiqueta')}>Etiqueta</Button>{''}
                <input  className='btPesquisa' type='text' placeholder='Buscar' onChange={e => setSearch(e.target.value)} value={search}/>

                <a class="botao-search" href="#">
                <i class="fas fa-search"></i>
                </a>
            </div>

           

            <div className='inici'>
                <Table dadosUsuario={dadosUsuario} head={head} filterDados={filterDados} />
            </div>
            <div className='btsBaixo'>
                <Button className='btBaixo' id='novoUsuario' onClick={() => navigate('/TelaCadastrarUsuario')}>Novo</Button>
                <Button className='btBaixo' id='fechar' onClick={() => navigate('/TelaInicio')}>Fechar</Button>
            </div>

            </main>
           

        </body>
    );
}

export default TelaUsuario;