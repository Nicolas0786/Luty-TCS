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
import HeaderApp from './headerApp';
import jwtDecode from 'jwt-decode';
import './Css/TelaMandarEtiqueta.css';



const TelaMandarEtiqueta = () =>{
    const {etq, setEtq} = useContext(MyContext);
    const {id} = useParams();
    const [ip, setIp] = useState();
    const [tes, setTes] = useState([]);
    const [search, setSearch] = useState('');
    const [idUsuario, setIdUsuario] = useState('');
    
    const navigate = useNavigate();
   
    useEffect(() =>{
        const token = sessionStorage.getItem('token');
        if(token){
            const decodeToken = jwtDecode(token);
            const {idUsuario} = decodeToken;
            setIdUsuario(idUsuario);
        }
        },[]);


    React.useEffect(()=>{
        async function buscarDados(){

            const etque = await Axios.get('http://localhost:3000/etiqueta/buscarTodasAtivas', {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                }
            });
            //console.log(etque);
            setTes(etque.data)

            const etqq = await Axios.get(`http://localhost:3000/produto/buscarPorId/${id}`, {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                }
            });
            setEtq(etqq.data);
        }
        buscarDados()
    },[])

    

    const handleChange = (e) =>{
        setIp(e.target.value);
        setSearch(e.target.value);
        
    }
    

    const filterDados = search.length > 0 ? tes.filter(dadosEtq => dadosEtq.idEtiqueta.toString().includes(search)): 0;

    
    async function alterarPreco(){

        try {
            const idProduto = etq.idProduto;
        const idEtiqueta = ip;
        const dados = {idEtiqueta , idProduto, idUsuario};

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
        <div className='telaMandarEtiqueta'>
            <HeaderApp/>
            <div className="formsMandar">
                <Form className='formsMandarProduto'>
                    <Form.Group as={Col} md='1'>
                        <Form.Label>ID</Form.Label>
                        <Form.Control id="id" type="number" defaultValue={etq.idProduto} disabled />
                    </Form.Group>
                    <Form.Group as={Col} md='4'>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control id="des" type="text" defaultValue={etq.descricaoProduto} disabled />
                    </Form.Group>
                    <Form.Group as={Col} md='3'> 
                        <Form.Label>Código</Form.Label>
                        <Form.Control id="cod" type="number" defaultValue={etq.codigoEan} disabled />
                    </Form.Group>
                    <Form.Group as={Col} md='3'>
                        <Form.Label>Preço</Form.Label>
                        <Form.Control id="prec" type="number" defaultValue={etq.preco} disabled />
                    </Form.Group>
                </Form>    
                <Form className='formsMandarEtiqueta'>
                    <Form.Group as={Col} md='1'>
                        <Form.Label>ID</Form.Label>
                        <Form.Control id="id" type="text" defaultValue={(filterDados || []).map(fil => fil.idEtiqueta)} disabled />
                    </Form.Group>
                    <Form.Group as={Col} md='4'>
                        <Form.Label >IP</Form.Label>
                        <FormSelect onChange ={handleChange}>
                        <option></option>
                            {et}
                        </FormSelect>
                    </Form.Group>
                    <Form.Group as={Col} md='3'>
                        <Form.Label>Nome Etiqueta</Form.Label>
                        <Form.Control id="nome" type="text" defaultValue={(filterDados || []).map(fil => fil.nomeEtiqueta)} disabled />
                    </Form.Group>
                    <Form.Group as={Col} md='2'>
                        <Form.Label>Corredor</Form.Label>
                        <Form.Control id="corre" type="text" defaultValue={(filterDados || []).map(fil => fil.corredor)} disabled />
                    </Form.Group>
                    <Form.Group as={Col} md='2'>
                        <Form.Label>Prateleira</Form.Label>
                        <Form.Control id="prati" defaultValue={(filterDados || []).map(fil => fil.pratilheira)} type="text" disabled/>
                    </Form.Group>
                </Form>
            </div>
            <div className='areaBotoesMandarEtiqueta'>
                <Button className='btns' onClick={alterarPreco}>Salvar</Button>
                <Button className='btns' onClick={()=> navigate('/TelaProduto')}>Fechar</Button>
            </div>
        </div>
    );

}

export default TelaMandarEtiqueta;