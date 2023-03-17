
import './TelaCadastrarProduto.css';
import Axios from "axios";
import {useNavigate} from 'react-router-dom';
import React, {useContext, useState} from 'react';
import MyContext from "../contexts/myContext";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import './TelaCadastrarProduto.css';
import FormSelect from 'react-bootstrap/esm/FormSelect';



const TelaCadastrarProduto = ()=>{

    const navigate = useNavigate();
    const {editarr, setEditarr, codigoEan, setCodigoEan, descricaoProduto, setDescricaoProduto, grupo, setGrupo, ala, setAla, quantidade, setQuantidade, custo, setCusto, porcentagem, setPorcentagem} = useContext(MyContext);

    const [test, setTest] = useState();
    //console.log(editarr);
    console.log(grupo); 

    React.useEffect(()=>{
        async function buscarDados(){
    
            const axi = await Axios.get('http://localhost:3000/produto/grupos')
            //console.log(axi.data);
            
            setTest(axi.data);
            console.log(axi.data);
        
        }
        buscarDados()
    },[])






   async function salvarProdutos(){

         const dadosFront = {codigoEan, descricaoProduto, grupo, ala, quantidade, custo, porcentagem};

         //console.log(dadosFront);

         if(!Number(codigoEan)){
            window.alert("So pode conter números no campo Código Ean");
          }try {
            await Axios.post("http://localhost:3000/produto/cadastrar", dadosFront)
          // console.log(post)        
           navigate('/TelaProduto')
         } catch (error) {
            console.log(error);
            if(error.response.status === 500){
                window.alert("Produto já existe na base de dados");
            }
          
    }
    }
    

    return (
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
       <Button id="voltarPG" onClick={()=> navigate('/TelaProduto')}> Voltar</Button>
           
           <div className="forms">
            <h2>Produtos</h2>     
                <Form >
                <h5>Cadastro</h5>
                    <div>
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
                    </div>

                    <div>
                    <Row className="mb-3">
                         <Form.Group as={Col} md="4">
                            <Form.Label >Grupo</Form.Label>
                            <Form.Control id="grupo" type="text" value={grupo} onChange ={(e)=> setGrupo(e.target.value)} placeholder= "Grupo" />
                            <FormSelect onChange ={(e)=> setGrupo(e.target.value)}>
                                <option></option>
                                <option>ala</option>
                                <option>alas</option>
                            </FormSelect>
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                            <Form.Label>Ala</Form.Label>
                            <Form.Control id="ala" type="text" value={ala} onChange ={(e)=> setAla(e.target.value)} placeholder= "Ala" />
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
                    <Button id="cancelar" onClick={()=> navigate('/TelaProduto')}>Cancelar</Button>
                    <Button id="salvar" onClick={salvarProdutos}>Salvar</Button>
                </Form>
                </div>
           
        </div>    
    );
}

export default TelaCadastrarProduto;