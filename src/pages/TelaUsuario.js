import Axios  from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from '../Table/TabelaUsuario';
import {useNavigate} from 'react-router-dom';
import './Css/TelaUsuario.css';
import imgIni from '../imagens/ini.png';
import Image from 'react-bootstrap/Image'
import { IoMdExit } from "react-icons/io";
import InputGroup from 'react-bootstrap/InputGroup'

const TelaUsuario = () =>{

    const [dadosUsuario, setDadosUsuario] = useState([]);
    const navigate = useNavigate();


    const head = {
        nome: 'Nome',
        matricula: 'Matricula',
        login: 'Login'
    }

    React.useEffect(()=>{
        async function buscarUsuarios(){
            const dados = await Axios.get('http://localhost:3000/usuario/buscarTodos')

            setDadosUsuario(dados.data);
        }
        buscarUsuarios();
    },[]);

    return(
        <body>
            <header className='inicio'>
            <Image src={imgIni} className = 'imgIni'></Image>
            <IoMdExit  className=' exit'/>
            </header>

            <main className='telaInicio'>

                <div className='botoes'>
                    <Button className='btUsuario' id='usuario'>Usuario</Button>{''}
                    <Button className='btUsuario' id='produto' onClick={()=> navigate('/TelaProduto')}>Produto</Button>{''}
                    <Button className='btUsuario' id='Etiqueta'>Etiqueta</Button>{''}
                    <input className='btPesquisa' type='text' placeholder='Buscar...' ></input>
                    
                    <a class="botao-search" href="#">
                    <i class="fas fa-search"></i>
                    </a>

                </div>

            <div className='inici'>
            <Table dadosUsuario = {dadosUsuario} head = {head}/>
            </div>
            
            </main>

            <footer>
                <Button id='novoUsuario'>Novo</Button>
                <Button id='fechar' onClick={()=> navigate('/TelaInicio')}>Fechar</Button>
            </footer>
        </body>
    );
}

export default TelaUsuario;