import React, {useContext, useState} from "react";
import {useNavigate} from 'react-router-dom';
import MyContext from "../contexts/myContext";
import Axios from 'axios';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useParams } from 'react-router-dom';
import HeaderApp from "./headerApp";

const TelaEditarProduto = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [gruposSelecionar, setGruposSelecionar] = useState([]);
    const [alasSelecionar, setAlasSelecionar] = useState([]);
    const [dadosEdt, setDadosEdt] = useState([]);
    const [grupos, setGrupos] = useState('');
    const [alas, setAlas] = useState('');


    const { descricaoProduto, setDescricaoProduto, grupo, setGrupo, ala, setAla, quantidade, setQuantidade, custo, setCusto, porcentagem, setPorcentagem, preco, setPreco} = useContext(MyContext);
 

React.useEffect(()=>{
    async function buscarDados(){

    const  back = await Axios.get(`http://localhost:3000/produto/buscarPorId/${id}`, {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        }
    });
    setDadosEdt(back.data);

    
    const grupos = await Axios.get('http://localhost:3000/grupo/buscarTodos', {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        }
    });
    setGruposSelecionar(grupos.data);

    const alas = await Axios.get('http://localhost:3000/ala/buscarTodas', {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        }
    });
    setAlasSelecionar(alas.data);

    }
    buscarDados()
},[])


const gruposSeleciondado = Object.values(dadosEdt).map(edt => edt.descricaoGrupo);

const alaSelecionada = Object.values(dadosEdt).map(edt => edt.descricao);


    async function atualizarProduto (){

        try {
            
        const alal = await Axios.patch("http://localhost:3000/produto/atualizar/"+ dadosEdt.idProduto, {descricaoProduto, grupos, alas, quantidade, custo, porcentagem}, {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        }
    });

    window.alert(alal.data.message);
     navigate('/TelaProduto');

    } catch (error) {
        window.alert(error.response.data.message);
        
    }



    }

    
    const alaa = Object.values(alasSelecionar).map(alas => <option value={alas.idAla} key={alas.idAla}>{alas.descricao}</option>)
    
    const grupoo = Object.values(gruposSelecionar).map(grupos => <option value={grupos.idGrupo} key={grupos.idGrupo}>{grupos.descricaoGrupo}</option>)
    

    return(
        <>
            <header>
                <HeaderApp/>
            </header>
             <div>
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
                            <Form.Control id="descricao" type="text" defaultValue={dadosEdt.descricaoProduto || []} onChange ={(e)=> setDescricaoProduto(e.target.value || [])} placeholder= "Descrição"/>
                        </Form.Group>
                        
                        <Form.Group as={Col} md="2">
                            <Form.Label>Quantidade</Form.Label>
                            <Form.Control id="quantidade" type="number" defaultValue={dadosEdt.quantidade} onChange ={(e)=> setQuantidade(e.target.value)} placeholder= "Quantidade" />
                        </Form.Group>
                    
                        <Form.Group as={Col} md="1">
                            <Form.Label>%</Form.Label>
                            <Form.Control id="porcentagem" type="number" defaultValue={dadosEdt.porcentagem} onChange ={(e)=> setPorcentagem(e.target.value)} placeholder= " % " />
                         </Form.Group>
            
                    </Row>
                    </div>

                    <div>
                    <Row className="mb-3">
                         <Form.Group as={Col} md="4">
                            <Form.Label>Grupo</Form.Label>
                            <Form.Select onChange={(e)=> setGrupos(e.target.value)}>
                                <option>{gruposSeleciondado}</option>
                                {grupoo}
                                
                                
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} md="3">
                            <Form.Label>Ala</Form.Label>
                            <Form.Select onChange={(e)=> setAlas(e.target.value)}>
                                <option>{alaSelecionada}</option>
                                {alaa}
                            
                            </Form.Select>
                            
                        </Form.Group>
                        
                        <Form.Group as={Col} md="3">
                            <Form.Label>Custo</Form.Label>
                            <Form.Control id="custo" type="number" defaultValue={dadosEdt.custo} onChange ={(e)=> setCusto(e.target.value)} placeholder= "Custo R$" />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>Preço R$</Form.Label>
                            <Form.Control id="preco" type="number" defaultValue={dadosEdt.preco} readOnly/>
                        </Form.Group>
                    </Row>
                    </div>

                    <div>
                        <div className="codigoEan">
                            <Form.Label for="codigoEan">Codigo Ean</Form.Label>
                            <Form.Control id="codigoEan" type="number" defaultValue={dadosEdt.codigoEan} placeholder= "Código Ean" readOnly />
                        </div>
                    </div>

                    <br></br>
                    <Button id="cancelar" onClick={()=> navigate('/TelaProduto')}>X Cancelar</Button>
                    <Button id="salvar" onClick={atualizarProduto}>Salvar</Button>
                </Form>
                </div>
               
            </div>   

        </> 
        );
    
}

export default TelaEditarProduto;