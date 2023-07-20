import Axios  from 'axios';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Table from '../Table/TabelaUsuario';
import {useNavigate} from 'react-router-dom';
import jwtDecode from 'jwt-decode';


import './Css/TelaUsuario.css';

import HeaderApp from './headerApp';



const TelaUsuario = () =>{

    const [dadosUsuario, setDadosUsuario] = useState([]);
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const head = {
        idUsuario: 'ID',
        nome: 'Nome',
        matricula: 'Matricula',
        login: 'Login'
    }

    const [usuario, setUsuario] = useState([]);
    
    useEffect(() =>{
        const token = sessionStorage.getItem('token');
        if(token){
            const decodeToken = jwtDecode(token);
            const {permissao} = decodeToken;
            setUsuario(permissao);
        }
        },[]);
    

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
   
    return(
        <div className='telaInicio'>
            <HeaderApp/>
            <div className='areaTable'>
                <div className='areaBotoes'>
                <Button disabled className='btns'>Usuário</Button>
                    {usuario.cargo !== 'adm' &&(
                        <>
                        <Button className='btns' id='produto' onClick={() => navigate('/TelaProduto')}>Produto</Button>{''}
                        <Button className='btns' id='Etiqueta' onClick={() => navigate('/TelaEtiqueta')}>Etiqueta</Button>{''}
                    </>
                    )}
                    <input  className='areaPesquisa' type='text' placeholder='Buscar' onChange={e => setSearch(e.target.value)} value={search}/>
                </div>
                <div className='teUs'>
                <div className='tableUs'>
                    <Table dadosUsuario={dadosUsuario} head={head} filterDados={filterDados} />
                </div>
                </div>
                <div className='btsAdd'>
                    <Button className='btns' id='novoUsuario' onClick={() => navigate('/TelaCadastrarUsuario')}>Novo</Button>
                    <Button className='btns' id='fechar' onClick={() => navigate('/TelaInicio')}>Fechar</Button>
                </div>
            </div>
        </div>
    );
}

export default TelaUsuario;