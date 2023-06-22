import Axios  from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from '../Table/TabelaUsuario';
import {useNavigate} from 'react-router-dom';
import {BiEdit} from "react-icons/bi";
import {AiOutlineSetting} from "react-icons/ai";
import './Css/TelaUsuario.css';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
        <><body>
            <header>
                <div>
                    <h1>Luty</h1>
                    <AiOutlineSetting />
                </div>
            </header>
            <nav>
                <Button id='usuario'>Usuario</Button>{''}
                <Button id='produto' onClick={() => navigate('/TelaProduto')}>Produto</Button>{''}
                <Button id='Etiqueta' onClick={() => navigate('/TelaEtiqueta')}>Etiqueta</Button>{''}
                <input type='text' placeholder='Buscar' onChange={e => setSearch(e.target.value)} value={search}/>
            </nav>

            <main>
                <Table dadosUsuario={dadosUsuario} head={head} filterDados={filterDados} />
            </main>

            <footer>
                <Button id='novoUsuario'>Novo</Button>
                <Button id='fechar' onClick={() => navigate('/TelaInicio')}>Fechar</Button>
            </footer>


        </body><div className='divCadastroUsuario'>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control id="nome" type="text" />
                    </Form.Group>

                    <Form.Group as={Col} md="6">
                        <Form.Label>Login</Form.Label>
                        <Form.Control id="login" type="text" />
                    </Form.Group>

                    <Form.Group as={Col} md="6">
                        <Form.Label>Matricula</Form.Label>
                        <Form.Control id="matricula" type="text" />
                    </Form.Group>

                    <Form.Group as={Col} md="6">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control id="senha" type="text" />
                    </Form.Group>

                    <Form.Group className='confirmasenhaa' as={Col} md="6">
                        <Form.Label>Confirma Senha</Form.Label>
                        <Form.Control id="confirmasenha" type="text" />
                    </Form.Group>
                </Row>


            </div></>
    );
}

export default TelaUsuario;