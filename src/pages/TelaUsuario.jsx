import Axios  from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Table from '../Table/TabelaUsuario';
import {useNavigate} from 'react-router-dom';
import {BiEdit} from "react-icons/bi";
import {AiOutlineSetting} from "react-icons/ai";
import './Css/TelaUsuario.css';
import MyContext from '../contexts/myContext';



const TelaUsuario = () =>{

    const [dadosUsuario, setDadosUsuario] = useState([]);
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const {logado, setLogado} =useContext(MyContext);

    const head = {
        nome: 'Nome',
        matricula: 'Matricula',
        login: 'Login'
    }

    useEffect(() =>{
        const token = sessionStorage.getItem('token');
        
        if(logado === false && !token){
            //console.log("não estou logado e não tem token")
            //console.log(logado)
            navigate('/TelaLogin');
        }
        
        },[]);

    React.useEffect(()=>{
        async function buscarUsuarios(){
            
            console.log('eu',sessionStorage.getItem("token"));
            const dados = await Axios.get('http://localhost:3000/usuario/buscarTodos', {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                }
            })
            setDadosUsuario(dados.data);
        }
        buscarUsuarios();
    },[]);

    const filterDados = search.length > 0 ? dadosUsuario.filter(dadosUsu => dadosUsu.login.includes(search)) : [];
   // console.log(dadosUsuario);
    //console.log(filterDados);
    return(
        <body>
            <header>
                <div>
                    <h1>Luty</h1>
                    <AiOutlineSetting />
                </div>
            </header>
            <nav>
                <Button id='produto' onClick={() => navigate('/TelaProduto')}>Produto</Button>{''}
                <Button id='Etiqueta' onClick={() => navigate('/TelaEtiqueta')}>Etiqueta</Button>{''}
                <input type='text' placeholder='Buscar' onChange={e => setSearch(e.target.value)} value={search}/>
            </nav>

            <main>
                <Table dadosUsuario={dadosUsuario} head={head} filterDados={filterDados} />
            </main>

            <footer>
                <Button id='novoUsuario' onClick={() => navigate('/TelaCadastrarUsuario')}>Novo</Button>
                <Button id='fechar' onClick={() => navigate('/TelaInicio')}>Fechar</Button>
            </footer>

        </body>
    );
}

export default TelaUsuario;