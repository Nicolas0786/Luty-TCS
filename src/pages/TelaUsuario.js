import Axios  from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from '../Table/TabelaUsuario';
import {useNavigate} from 'react-router-dom';

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
            <header>
                luty
            </header>
            <nav>
                <Button id='usuario'>Usuario</Button>{''}
                <Button id='produto' onClick={()=> navigate('/TelaProduto')}>Produto</Button>{''}
                <Button id='Etiqueta'>Etiqueta</Button>{''}
            </nav>

            <main>
                <Table dadosUsuario = {dadosUsuario} head = {head}/>
            </main>

            <footer>
                <Button id='novoUsuario'>Novo</Button>
                <Button id='fechar' onClick={()=> navigate('/TelaInicio')}>Fechar</Button>
            </footer>
        </body>
    );
}

export default TelaUsuario;