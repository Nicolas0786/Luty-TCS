import { useParams } from 'react-router-dom';
import React, {useState} from "react";
import Axios from 'axios';
import MyContext from "../contexts/myContext";
import {useContext, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';


const TelaEditarUsuario = () =>{
    const {login} = useParams();
    //console.log(login)
    const [editUsu, setEditUsu] = useState([]);
    const {logado, setLogado} =useContext(MyContext);
    const navigate = useNavigate();

    const [nome, SetNome] = useState(undefined);
    const [loginn, SetLoginn] = useState(undefined);
    const [matricula, SetMatricula] = useState(undefined);
    const [senha, SetSenha] = useState(undefined);
    const [confirsenha, SetConfirsenha] = useState(undefined);
    const [permissao, SetPermissao] = useState(undefined);

    

    const [permissoes, SetPermissoes] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const gerente = ['Cadastro Usuario', 'Cadastro Etiqueta', 'Cadastrar Produto', 'Consultar Produto', 'Atualizar Etiqueta', 'Cadastrar Grupo/Ala', 'Consultar Usuarios'];
    const coordenador = ['Atualizar Etiqueta', 'Cadastro Produto', 'Cadastro Grupo/Ala', 'Consultar Produto']
    const funcionario = ['Consultar Produto'];

    

    


    React.useEffect(()=>{
        async function buscarDados(){
    
         const backUsu = await Axios.get(`http://localhost:3000/usuario/buscarPorLogin/${login}`, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        });
        
            setEditUsu(backUsu.data);
            
            setSelectedOption(backUsu.data.permissao.cargo);
        }
        buscarDados()
    },[])

    
    const handleChange = (e) =>{
        //console.log(e.target.name)
        setSelectedOption(e.target.value);
        SetPermissao(e.target.id);
        console.log(e.target.id)

        if(e.target.name === 'radioGerent'){
           SetPermissoes(gerente.map(g => <li key={g}>{g}</li>))

        }else if(e.target.name === 'radioCoor'){
           SetPermissoes(coordenador.map(c => <li key={c}>{c}</li>))
        
       }else if(e.target.name === 'radioFunci'){
           SetPermissoes(funcionario.map(f => <li key={f}>{f}</li>))
       }
        
   }


   async function editarUsu(){
    
    const login = loginn;

    if(confirsenha !== senha){
        window.alert("As senhas são diferentes");
    }

    try {
           
        const res = await Axios.put("http://localhost:3000/usuario/atualizar/"+editUsu.idUsuario, {nome, matricula, login, senha, permissao}, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        })
        console.log(res);   

        if(res.status === 200){
            window.alert("Usuario atualizado com Sucesso");
            SetLoginn('');
            SetNome('');
            SetMatricula('');
            SetPermissao('');
            SetSenha('')
            SetConfirsenha('');
            SetPermissoes('');
            navigate('/TelaUsuario')

        }
        
    } catch (error) {
        window.alert(error.response.data.message);
    }

    
    
}





    return(
        <>
            
        <div className='divCadastroUsuario'>
        <Row className="mb-3">
            <h1>Cadastro Usuario</h1>
            <Form.Group as={Col} md="6">
                <Form.Label>Nome</Form.Label>
                <Form.Control id="nome" type="text" defaultValue={editUsu.nome} onChange ={(e)=> SetNome(e.target.value)}/>
            </Form.Group>

            <Form.Group as={Col} md="6">
                <Form.Label>Login</Form.Label>
                <Form.Control id="login" type="text"  defaultValue={login} onChange ={(e)=> SetLoginn(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} md="6">
                <Form.Label>Matricula</Form.Label>
                <Form.Control id="matricula" type="number" defaultValue={editUsu.matricula} onChange ={(e)=> SetMatricula(e.target.value)}/>
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
        <Form.Check type='radio'  label='Gerente' name='radioGerent' id='3' onChange={handleChange} value={"gerente"} checked={selectedOption === "gerente"} />
            
        <Form.Check type='radio' label='Coordenador' name='radioCoor' id='1' onChange={handleChange} value={"coordenador"} checked={selectedOption === "coordenador"}  />

        <Form.Check type='radio' label='Funcionario' name='radioFunci' id='2' onChange={handleChange} value={"funcionario"} checked={selectedOption === "funcionario"}/>
        <div className='descricaoPer'>
        {permissoes}
        </div>
    </div>
    <Button className='btSalva' onClick={editarUsu}>Salvar</Button>
    <Button className='btCancelar' onClick={() => navigate('/TelaUsuario')}>Cancelar</Button>
    </>
    );
}

export default TelaEditarUsuario;