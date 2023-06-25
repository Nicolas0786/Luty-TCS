import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../contexts/myContext';
import FormSelect from 'react-bootstrap/esm/FormSelect';
import Axios  from 'axios';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


const TelaMandarEtiqueta = () =>{
    const {etq, setEtq} = useContext(MyContext);
    const {id} = useParams();
    const [ip, setIp] = useState();
    const [tes, setTes] = useState([]);

    const navigate = useNavigate();
    const {logado, setLogado} =useContext(MyContext);
    
    //console.log(ip)

    useEffect(() =>{
    const token = sessionStorage.getItem('token');
    
    if(logado === false && !token){
        //console.log("não estou logado e não tem token")
        //console.log(logado)
        navigate('/TelaLogin');
    }
    
    },[]);
    
    React.useEffect(()=>{
        async function buscarDados(){

            const etque = await Axios.get('http://localhost:3000/etiqueta/buscarTodas')
            //console.log(etque);
            setTes(etque.data)

            const etqq = await Axios.get(`http://localhost:3000/produto/buscarPorId/${id}`)
            setEtq(etqq.data);
        }
        buscarDados()
    },[])


    async function alterarPreco(){


        try {
            const idProduto = etq.idProduto;
        const idEtiqueta = ip;
        const dados = {idEtiqueta , idProduto};

        console.log(dados);
        const res = await Axios.post('http://localhost:3000/etiqueta/alterar/' , dados, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        })

        console.log(res)

        window.alert(res.data);
        navigate('/TelaProduto')
        } catch (error) {
            console.log(error.message)
            window.alert("Verifique a comunicação")
            
        }
        

    }

 const et = (tes || []).map((etiqueta) => <option value={etiqueta.idEtiqueta} key={etiqueta.idEtiqueta}>{etiqueta.ipEtiqueta}</option>);

    return(
        <body>
            <main>
                <div>
                <Form>
                    <Row className="mb-3">
                            <Form.Group as={Col} md="1">
                                <Form.Label>ID</Form.Label>
                                <Form.Control id="id" type="number" defaultValue={etq.idProduto} disabled placeholder= "Id"/>
                            </Form.Group>

                            <Form.Group as={Col} md="1">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control id="des" type="text" defaultValue={etq.descricaoProduto} disabled placeholder= "Descrição"/>
                            </Form.Group>

                            <Form.Group as={Col} md="1">
                                <Form.Label>Código</Form.Label>
                                <Form.Control id="cod" type="number" defaultValue={etq.codigoEan} disabled placeholder= "Código"/>
                            </Form.Group>

                            <Form.Group as={Col} md="1">
                                <Form.Label>Preço</Form.Label>
                                <Form.Control id="prec" type="number" defaultValue={etq.preco} disabled placeholder= "Preço"/>
                            </Form.Group>

                    </Row>    
                </Form>
            </div>       
            <div>
                <Form>
                    <Row className="mb-3">

                            <Form.Group as={Col} md="1">
                                <Form.Label>ID</Form.Label>
                                <Form.Control id="id" type="number" defaultValue={etq.idProduto} disabled placeholder= "Id"/>
                            </Form.Group>

                            <Form.Group as={Col} md="4">
                                <Form.Label >IP</Form.Label>
                                <FormSelect onChange ={(e)=> setIp(e.target.value)}>
                                <option></option>
                                    {et}
                                </FormSelect>
                            </Form.Group>

                            <Form.Group as={Col} md="1">
                                <Form.Label>Código</Form.Label>
                                <Form.Control id="cod" type="number" defaultValue={etq.codigoEan} disabled placeholder= "Código"/>
                            </Form.Group>

                            <Form.Group as={Col} md="1">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control id="des" type="text" defaultValue={etq.descricaoProduto} disabled placeholder= "Descrição"/>
                            </Form.Group>

                            <Form.Group as={Col} md="1">
                                <Form.Label>Preço</Form.Label>
                                <Form.Control id="prec" type="number" defaultValue={etq.preco} disabled placeholder= "Preço"/>
                            </Form.Group>

                    </Row>
                </Form>
                </div>
                <Button onClick={alterarPreco}>Salvar</Button>
                <Button onClick={()=> navigate('/TelaProduto')}>Fechar</Button>
            </main>
        </body>
    );

}

export default TelaMandarEtiqueta;