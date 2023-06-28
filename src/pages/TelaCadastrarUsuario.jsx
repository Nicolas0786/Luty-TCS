import './Css/TelaCadastrarUsuario.css';
import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';

import Axios from "axios";
import {useNavigate} from 'react-router-dom';
import MyContext from "../contexts/myContext";
import {useContext } from 'react';


const TelaCadastrarUsuario = () =>{

    const [permissoes, SetPermissoes] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    const [nome, SetNome] = useState('');
    const [login, SetLogin] = useState('');
    const [matricula, SetMatricula] = useState('');
    const [senha, SetSenha] = useState('');
    const [confirsenha, SetConfirsenha] = useState('');
    const [permissao, SetPermissao] = useState('');
    
    const {logado, setLogado} =useContext(MyContext);

const gerente = ['Cadastro Usuario', 'Cadastro Etiqueta', 'Cadastrar Produto', 'Consultar Produto', 'Atualizar Etiqueta', 'Cadastrar Grupo/Ala', 'Consultar Usuarios'];
const coordenador = ['Atualizar Etiqueta', 'Cadastro Produto', 'Cadastro Grupo/Ala', 'Consultar Produto']
const funcionario = ['Consultar Produto'];




    const handleChange = (e) =>{
         //console.log(e.target.name)
         setSelectedOption(e.target.value);
         SetPermissao(e.target.id);
         console.log(e.target.id)

         if(e.target.name === 'radioGerent'){
            SetPermissoes(gerente.map(g => <li key={g}>{g}</li>))

         }else if(e.target.name == 'radioCoor'){
            SetPermissoes(coordenador.map(c => <li key={c}>{c}</li>))
         
        }else if(e.target.name == 'radioFunci'){
            SetPermissoes(funcionario.map(f => <li key={f}>{f}</li>))
        }
         
         
    }
    
    async function criarUsu(){
        const dadosUser = {nome, matricula, login, senha, permissao};

        if(confirsenha !== senha){
            window.alert("As senhas são diferentes");
        }

        try {
            const res = await Axios.post("http://localhost:3000/usuario/criar", dadosUser, {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                }
            })
            console.log(res)
            if(res.status === 201){
                window.alert("Usuario Cadastrado com Sucesso");
                SetLogin('');
                SetNome('');
                SetMatricula('');
                SetPermissao('');
                SetSenha('')
                SetConfirsenha('');
                SetPermissoes('');
                navigate('/TelaUsuario')

            }

        } catch (error) {
            console.log(error);

            if(error.response.status === 400){
                window.alert("Preencha todos os Campos");
            }else if(error.response.status === 403){
                window.alert("Esse Login já está sendo utilizado");
            }else if(error.response.status === 500){
                window.alert("Esse Matricula já está sendo utilizado");
            }

        }
        
        
    

    }

    return(

            <>
            
            <div className='divCadastroUsuario'>
            <Row className="mb-3">
                <h1>Cadastro Usuario</h1>
                <Form.Group as={Col} md="6">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control id="nome" type="text" value={nome} onChange ={(e)=> SetNome(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} md="6">
                    <Form.Label>Login</Form.Label>
                    <Form.Control id="login" type="text" value={login} onChange ={(e)=> SetLogin(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} md="6">
                    <Form.Label>Matricula</Form.Label>
                    <Form.Control id="matricula" type="number" value={matricula} onChange ={(e)=> SetMatricula(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} md="6">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control id="senha" type="password" value={senha} onChange ={(e)=> SetSenha(e.target.value)} />
                </Form.Group>

                <Form.Group className='confirmasenhaa' as={Col} md="6">
                    <Form.Label>Confirma Senha</Form.Label>
                    <Form.Control id="confirmasenha" type="password" value={confirsenha} onChange ={(e)=> SetConfirsenha(e.target.value)}/>
                </Form.Group>
                
            </Row>

        </div>
        
        <div className='permissoes'>
            <h1>Permissões</h1>
            <Form.Check type='radio' label='Gerente' name='radioGerent' id='3' onChange={handleChange} value={"ger"} checked={selectedOption === "ger"} />
                
            <Form.Check type='radio' label='Coordenador' name='radioCoor' id='1' onChange={handleChange} value={"coor"} checked={selectedOption === "coor"}  />

            <Form.Check type='radio' label='Funcionario' name='radioFunci' id='2' onChange={handleChange} value={"func"} checked={selectedOption === "func"}/>
            <div className='descricaoPer'>
            {permissoes}
            </div>
        </div>
        <Button className='btSalva' onClick={criarUsu}>Salvar</Button>
        <Button className='btCancelar' onClick={() => navigate('/TelaUsuario')}>Cancelar</Button>
        </>
    );        

}

export default TelaCadastrarUsuario;