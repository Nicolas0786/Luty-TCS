import React, {useContext, useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import MyContext from "../contexts/myContext";
import Axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useParams } from 'react-router-dom';

const TelaEditarProduto = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const {logado, setLogado, editarr, setEditarr, codigoEan, setCodigoEan, descricaoProduto, setDescricaoProduto, grupo, setGrupo, ala, setAla, quantidade, setQuantidade, custo, setCusto, porcentagem, setPorcentagem, preco, setPreco} = useContext(MyContext);
 
//console.log(editarr);



React.useEffect(()=>{
    async function buscarDados(){

    const  back = await Axios.get(`http://localhost:3000/produto/buscarPorId/${id}`, {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        }
    })

    setEditarr(back.data)

    }
    buscarDados()
},[])

//console.log(editarr)
//editarr.map(ala => console.log(ala))



    async function atualizarProduto (){

    const alal = await Axios.patch("http://localhost:3000/produto/atualizar/"+ editarr.idProduto, {descricaoProduto, grupo, ala, quantidade, custo, porcentagem}, {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        }
    });
    //console.log(alal)

     navigate('/TelaProduto')

    }

    const alaa = Object.values(editarr).map(tes => {return <option value={tes.idAla} key={tes.idAla}>{tes.descricao}</option>})

    
    const grupoo = Object.values(editarr).map(tess => {return <option key={tess.idGrupo}>{tess.descricaoGrupo}</option>})
    


    return(
             <div>
                <header>

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
                            <Form.Control id="descricao" type="text" defaultValue={editarr.descricaoProduto || []} onChange ={(e)=> setDescricaoProduto(e.target.value || [])} placeholder= "Descrição"/>
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
                            <Form.Select onChange={(e)=> setGrupo(e.target.value)}>
                                {grupoo}
                                
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} md="3">
                            <Form.Label>Ala</Form.Label>
                            <Form.Select onChange={(e)=> setAla(e.target.value)}>
                                {alaa}
                            </Form.Select>
                            
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