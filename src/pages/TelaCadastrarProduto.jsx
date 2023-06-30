

import Axios from "axios";
import {useNavigate} from 'react-router-dom';
import React, {useContext, useState, useEffect} from 'react';
import MyContext from "../contexts/myContext";
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormSelect from 'react-bootstrap/esm/FormSelect';
import './Css/TelaCadastrarProduto.css';
import imgIni from '../imagens/ini.png';
import Image from 'react-bootstrap/Image'
import HeaderApp from "./headerApp";
import jwtDecode from 'jwt-decode';




const TelaCadastrarProduto = ()=>{

    const navigate = useNavigate();
    const {logado, setLogado, editarr, setEditarr, codigoEan, setCodigoEan, descricaoProduto, setDescricaoProduto, grupos, setGrupos, alas, setAlas, quantidade, setQuantidade, custo, setCusto, porcentagem, setPorcentagem} = useContext(MyContext);

    //window.location = window.location;
    const [test, setTest] = useState([]);
    const [test1, setTest1] = useState([]);
    const [usuario, setUsuario] = useState('');
    //console.log(editarr);

    useEffect(() =>{
        const token = sessionStorage.getItem('token');
        if(token){
            const decodeToken = jwtDecode(token);
            const {idUsuario} = decodeToken;
            setUsuario(idUsuario);
        }
        },[]);

    React.useEffect(()=>{
        async function buscarDados(){
    
            const grupos = await Axios.get('http://localhost:3000/grupo/buscarTodos', {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                }
            })
            const alas = await Axios.get('http://localhost:3000/ala/buscarTodas', {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                }
            })
            //console.log(axi.data);
            
            setTest(grupos.data);
        
            setTest1(alas.data);
            
        
        }
        buscarDados()
    },[])


    //console.log(test)

const grup = test.map((grupo) => <option value={grupo.idGrupo}  key={grupo.idGrupo}>{grupo.descricaoGrupo}</option>);

const all = test1.map((ala) => <option value={ala.idAla} key={ala.idAla}>{ala.descricao}</option>);




   async function salvarProdutos(){

         const dadosFront = {codigoEan, descricaoProduto, grupos, alas, quantidade, custo, porcentagem, usuario};

         if(!Number(codigoEan)){
            window.alert("So pode conter números no campo Código Ean");
          }try {
           const res = await Axios.post("http://localhost:3000/produto/cadastrar", dadosFront, {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                }
            });

            window.alert(res.data.message);
            setCodigoEan(''); setQuantidade(''); setPorcentagem(''); setCusto(''); setDescricaoProduto('');
            navigate('/TelaProduto');
         } catch (error) {
            console.log(error);
                window.alert(error.response.data.message);
            
          
    }
}
    

    return (
        <>
            <header>
                <HeaderApp/>
            </header>
            
            
            
            <div  className="container-fluid">
            <div className="row">
            <div className="col-12 full-screen-div">
       <Button id="voltarPG" onClick={()=> navigate('/TelaProduto')}> Voltar</Button>
           
           <div className="forms">
            <h2>Cadastro de Produto</h2> 
            <br></br>    
                <Form >
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control id="descricao" type="text" value={descricaoProduto} onChange ={(e)=> setDescricaoProduto(e.target.value)}/>
                        </Form.Group>
                        
                        <Form.Group as={Col} md="2">
                            <Form.Label>Quantidade</Form.Label>
                            <Form.Control id="quantidade" type="number" value={quantidade} onChange ={(e)=> setQuantidade(e.target.value)}  />
                        </Form.Group>
                    
                        <Form.Group as={Col} md="1">
                            <Form.Label>porcentagem %</Form.Label>
                            <Form.Control id="porcentagem" type="number" value={porcentagem} onChange ={(e)=> setPorcentagem(e.target.value)}  />
                         </Form.Group>
            
                    </Row>
                   

                    <div>
                    <Row className="mb-2">
                         <Form.Group as={Col} md="3">
                            <Form.Label >Grupo</Form.Label>
                            <FormSelect onChange ={(e)=> setGrupos(e.target.value)} >
                           <option></option>
                           {grup}
                
                            </FormSelect>
                        </Form.Group>

                        <Form.Group as={Col} md="3">
                            <Form.Label>Ala</Form.Label>
                            <FormSelect onChange ={(e)=> setAlas(e.target.value)} >
                           <option></option>
                           {all}
                
                            </FormSelect>


                        </Form.Group>
                        
                        <Form.Group as={Col} md="3">
                            <Form.Label>Custo R$</Form.Label>
                            <Form.Control id="custo" type="number" value={custo} onChange ={(e)=> setCusto(e.target.value)}  />
                        </Form.Group>
                    </Row>
                    </div>

                    <div>
                        <div className="codigoEan">
                            <Form.Label>Codigo Ean</Form.Label>
                            <Form.Control id="codigoEan" pattern='^[0-9]{0,3}$' type="text" value={codigoEan} onChange ={(e)=> setCodigoEan(e.target.value)}  maxLength={13} />
                        </div>
                    </div>

                    <br></br>
                    
                   
                </Form>
                <Button  id="cancelar" onClick={()=> navigate('/TelaProduto')}>Cancelar</Button>
                <Button  id="salvar" onClick={salvarProdutos}>Salvar</Button>
                </div>
               
                
                </div>
                </div>
                </div>
                </>   
    );
}

export default TelaCadastrarProduto;