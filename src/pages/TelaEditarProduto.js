import React, {useContext, useState} from "react";
import {useNavigate} from 'react-router-dom';
import MyContext from "../contexts/myContext";
import Axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const TelaEditarProduto = () => {
    const navigate = useNavigate();

    const {editarr, setEditarr, codigoEan, setCodigoEan, descricaoProduto, setDescricaoProduto, grupo, setGrupo, ala, setAla, quantidade, setQuantidade, custo, setCusto, porcentagem, setPorcentagem, preco, setPreco} = useContext(MyContext);
 

    async function atualizarProduto (){

    const alal = await Axios.patch("http://localhost:3000/produto/atualizar/"+ editarr.idProduto, {descricaoProduto, grupo, ala, quantidade, custo, porcentagem});
    //console.log(alal)

     navigate('/TelaProduto')

    }


    return(
             <div>
                <header>
                <Nav variant="tabs"  className="nav1" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/">Luty</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link >Cadastro</Nav.Link>        
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link >Etiqueta Eletronica</Nav.Link>        
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link >Estoque</Nav.Link>        
                    </Nav.Item>
                </Nav>

                <Nav variant="tabs"  className="nav2" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link >Cadastrar Usuario</Nav.Link>        
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link >Cadastrar Produto</Nav.Link>        
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link >Cadastrar Grupo/ala</Nav.Link>        
                    </Nav.Item>
                </Nav>
                </header>
                <br></br>

           <Button id="voltarPG" onClick={() => navigate('/TelaProduto')}>Voltar</Button>
                
                
           <div className="forms">
            <h2>Produtos</h2>     
                <Form>
                <h5>Cadastro</h5>
                    <div>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control id="descricao" type="text" defaultValue={editarr.descricaoProduto} onChange ={(e)=> setDescricaoProduto(e.target.value)} placeholder= "Descrição"/>
                        </Form.Group>
                        
                        <Form.Group as={Col} md="2">
                            <Form.Label>Quantidade</Form.Label>
                            <Form.Control id="quantidade" type="number" defaultValue={editarr.quantidade} onChange ={(e)=> setQuantidade(e.target.value)} placeholder= "Quantidade" />
                        </Form.Group>
                    
                        <Form.Group as={Col} md="1">
                            <Form.Label>%</Form.Label>
                            <Form.Control id="porcentagem" type="number" defaultValue={editarr.porcentagem} onChange ={(e)=> setPorcentagem(e.target.value)} placeholder= " % " />
                         </Form.Group>
            
                    </Row>
                    </div>

                    <div>
                    <Row className="mb-3">
                         <Form.Group as={Col} md="4">
                            <Form.Label>Grupo</Form.Label>
                            <Form.Control id="grupo" type="text" defaultValue={editarr.grupo} onChange ={(e)=> setGrupo(e.target.value)} placeholder= "Grupo" />
                            <Form.Select onChange={(e)=> setGrupo(e.target.value)}>
                                <option></option>
                                <option>{editarr.grupo}</option>
                                <option></option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} md="3">
                            <Form.Label>Ala</Form.Label>
                            <Form.Control id="ala" type="text" defaultValue={editarr.ala} onChange ={(e)=> setAla(e.target.value)} placeholder= "Ala" />
                        </Form.Group>
                        
                        <Form.Group as={Col} md="3">
                            <Form.Label>Custo</Form.Label>
                            <Form.Control id="custo" type="number" defaultValue={editarr.custo} onChange ={(e)=> setCusto(e.target.value)} placeholder= "Custo R$" />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>Preço R$</Form.Label>
                            <Form.Control id="preco" type="number" defaultValue={editarr.preco} readOnly/>
                        </Form.Group>
                    </Row>
                    </div>

                    <div>
                        <div className="codigoEan">
                            <Form.Label for="codigoEan">Codigo Ean</Form.Label>
                            <Form.Control id="codigoEan" type="number" defaultValue={editarr.codigoEan} placeholder= "Código Ean" readOnly />
                        </div>
                    </div>

                    <br></br>
                    <Button id="cancelar" onClick={()=> navigate('/TelaProduto')}>X Cancelar</Button>
                    <Button id="salvar" onClick={atualizarProduto}>Salvar</Button>
                </Form>
                </div>
               
            </div>    
        );
    
}

export default TelaEditarProduto;