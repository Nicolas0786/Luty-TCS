

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




const TelaCadastrarProduto = ()=>{

    const navigate = useNavigate();
    const {logado, setLogado, editarr, setEditarr, codigoEan, setCodigoEan, descricaoProduto, setDescricaoProduto, grupos, setGrupos, alas, setAlas, quantidade, setQuantidade, custo, setCusto, porcentagem, setPorcentagem} = useContext(MyContext);

    //window.location = window.location;
    const [test, setTest] = useState([]);
    const [test1, setTest1] = useState([]);
    //console.log(editarr);

    

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

         const dadosFront = {codigoEan, descricaoProduto, grupos, alas, quantidade, custo, porcentagem};

         console.log(grupos)

         if(!Number(codigoEan)){
            window.alert("So pode conter números no campo Código Ean");
          }try {
            await Axios.post("http://localhost:3000/produto/cadastrar", dadosFront, {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                }
            })
          // console.log(post)        
           navigate('/TelaProduto');
         } catch (error) {
            console.log(error);
            if(error.response.status === 500){
                window.alert("Produto já existe na base de dados");
            }
          
    }
}
    

    return (
        <div>
            <body className="fundo">
            
            <header className='inicio'>
            <Image src={imgIni} className = 'imgIni'></Image>
            </header>
            
            <br></br>
       <Button id="voltarPG" onClick={()=> navigate('/TelaProduto')}> Voltar</Button>
           
           <div className="forms">
            <h2>Cadastro de Produto</h2>     
                <Form >
                
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control id="descricao" type="text" value={descricaoProduto} onChange ={(e)=> setDescricaoProduto(e.target.value)} placeholder= "Descrição"/>
                        </Form.Group>
                        
                        <Form.Group as={Col} md="2">
                            <Form.Label>Quantidade</Form.Label>
                            <Form.Control id="quantidade" type="number" value={quantidade} onChange ={(e)=> setQuantidade(e.target.value)} placeholder= "Quantidade" />
                        </Form.Group>
                    
                        <Form.Group as={Col} md="1">
                            <Form.Label>%</Form.Label>
                            <Form.Control id="porcentagem" type="number" value={porcentagem} onChange ={(e)=> setPorcentagem(e.target.value)} placeholder= " % " />
                         </Form.Group>
            
                    </Row>
                   

                    <div>
                    <Row className="mb-3">
                         <Form.Group as={Col} md="4">
                            <Form.Label >Grupo</Form.Label>
                            <FormSelect onChange ={(e)=> setGrupos(e.target.value)} placeholder="Grupo">
                           <option></option>
                           {grup}
                
                            </FormSelect>
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                            <Form.Label>Ala</Form.Label>
                            <FormSelect onChange ={(e)=> setAlas(e.target.value)} placeholder="Ala">
                           <option></option>
                           {all}
                
                            </FormSelect>


                        </Form.Group>
                        
                        <Form.Group as={Col} md="4">
                            <Form.Label>Custo</Form.Label>
                            <Form.Control id="custo" type="number" value={custo} onChange ={(e)=> setCusto(e.target.value)} placeholder= "Custo R$" />
                        </Form.Group>
                    </Row>
                    </div>

                    <div>
                        <div className="codigoEan">
                            <Form.Label>Codigo Ean</Form.Label>
                            <Form.Control id="codigoEan" pattern='^[0-9]{0,3}$' type="text" value={codigoEan} onChange ={(e)=> setCodigoEan(e.target.value)} placeholder= "Código Ean" maxLength={8} />
                        </div>
                    </div>

                    <br></br>
                    
                   
                </Form>
                </div>
                </body>
                <Button className="btBaixoCadastroProduto" id="cancelar" onClick={()=> navigate('/TelaProduto')}>Cancelar</Button>
                <Button className="btBaixoCadastroProduto" id="salvar" onClick={salvarProdutos}>Salvar</Button>
           
        </div>    
    );
}

export default TelaCadastrarProduto;