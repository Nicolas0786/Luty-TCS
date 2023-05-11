import Axios  from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from '../Table/TabelaUsuario';

const TelaUsuario = () =>{

    const [dadosUsuario, setDadosUsuario] = useState([]);

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
                <Button id='produto'>Produto</Button>{''}
                <Button id='Etiqueta'>Etiqueta</Button>{''}
            </nav>

            <main>
                <Table dadosUsuario = {dadosUsuario} head = {head}/>
            </main>

            <footer>
                <Button id='novoUsuario'>Novo</Button>
                <Button id='fechar'>Fechar</Button>
            </footer>
        </body>
    );
}

export default TelaUsuario;