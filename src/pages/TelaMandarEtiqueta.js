import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useContext, useState } from 'react';
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
        const res = await Axios.post('http://localhost:3000/etiqueta/alterar/'+ip+"/"+etq.idProduto)
    }

 const et = (tes || []).map((etiqueta) => <option value={etiqueta.idEtiqueta} key={etiqueta.idEtiqueta}>{etiqueta.ipEtiqueta}</option>);

    return(
        <body>
            <main>
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

                <Button onClick={alterarPreco}>Salvar</Button>
                <Button onClick={()=> navigate('/TelaProduto')}>Fechar</Button>
            </main>
        </body>
    );

}

export default TelaMandarEtiqueta;