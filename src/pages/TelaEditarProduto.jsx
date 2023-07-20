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


    const { descricaoProduto, setDescricaoProduto, grupo, setGrupo, ala, setAla, quantidade, setQuantidade, custo, setCusto, porcentagem, setPorcentagem, preco, setPreco, codigoEan, setCodigoEan} = useContext(MyContext);
 

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
            
        const alal = await Axios.patch("http://localhost:3000/produto/atualizar/"+ dadosEdt.idProduto, {descricaoProduto, grupos, alas, quantidade, custo, porcentagem, codigoEan}, {
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
            
                <HeaderApp/>
            
        <div  className="container-fluid">
                <div className="row">
                    <div className="col-12 full-screen-div">  

           <Button className='btVolt' onClick={() => navigate('/TelaProduto')}>Voltar</Button>
                
                
           <div className="forms">
                <h2>Cadastro de Produto</h2> 
                    <br></br>

                <Form>
                
                   
                    <Row className="rowPro">
                        <Form.Group as={Col} md="4">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control id="descricao" type="text" defaultValue={dadosEdt.descricaoProduto || []} onChange ={(e)=> setDescricaoProduto(e.target.value || [])}/>
                        </Form.Group>
                        
                        <Form.Group as={Col} md="2">
                            <Form.Label>Quantidade</Form.Label>
                            <Form.Control id="quantidade" type="number" defaultValue={dadosEdt.quantidade} onChange ={(e)=> setQuantidade(e.target.value)}  />
                        </Form.Group>
                    
                        <Form.Group as={Col} md="2">
                            <Form.Label>Porcentagem %</Form.Label>
                            <Form.Control id="porcentagem" type="number" defaultValue={dadosEdt.porcentagem} onChange ={(e)=> setPorcentagem(e.target.value)}  />
                         </Form.Group>
            
                    </Row>
                   

                    <div>
                    <Row className="rowPro">
                         <Form.Group as={Col} md="2">
                            <Form.Label>Grupo</Form.Label>
                            <Form.Select onChange={(e)=> setGrupos(e.target.value)}>
                                <option>{gruposSeleciondado}</option>
                                {grupoo}
                                
                                
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>Ala</Form.Label>
                            <Form.Select onChange={(e)=> setAlas(e.target.value)}>
                                <option>{alaSelecionada}</option>
                                {alaa}
                            
                            </Form.Select>
                            
                        </Form.Group>
                        
                        <Form.Group as={Col} md="2">
                            <Form.Label>Custo</Form.Label>
                            <Form.Control id="custo" type="number" defaultValue={dadosEdt.custo} onChange ={(e)=> setCusto(e.target.value)}  />
                        </Form.Group>

                        <Form.Group as={Col} md="2">
                            <Form.Label>Preço R$</Form.Label>
                            <Form.Control id="preco" type="number" defaultValue={dadosEdt.preco} readOnly/>
                        </Form.Group>
                    </Row>
                    </div>

                    <div>
                        <div className="codigoEan">
                        <Form.Group as={Col} md="4">
                            <Form.Label for="codigoEan">Codigo Ean</Form.Label>
                            <Form.Control id="codigoEan" pattern='^[0-9]{0,3}$' type="text"  maxLength={14} defaultValue={dadosEdt.codigoEan} onChange={(e) => setCodigoEan(e.target.value)} />
                        </Form.Group>
                        </div>
                    </div>

                    <br></br>


                   
                </Form>

                
                
                </div>
                <div className='areaBtProd'>
                    <Button  className='btsProd' onClick={()=> navigate('/TelaProduto')}>X Cancelar</Button>
                    <Button  className='btsProd' onClick={atualizarProduto}>Salvar</Button>

                </div>
               
                    </div>   
                </div>
            </div>
            
        </> 

        );
    
}

export default TelaEditarProduto;