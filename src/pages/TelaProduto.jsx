import Axios  from 'axios';
import React, { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Table from '../Table/TabelaProdutos';
import Button from 'react-bootstrap/Button';
import './Css/TelaProduto.css';
import HeaderApp from './headerApp';
import jwtDecode from 'jwt-decode';


const TelaProduto = () =>{

    const navigate = useNavigate();
    const[dadosProdutos, setDadosProdutos] = useState([]);
    const [search, setSearch] = useState('');
    const [usuario, setUsuario] = useState([]);

    
    
    useEffect(() =>{
        const token = sessionStorage.getItem('token');
        if(token){
            const decodeToken = jwtDecode(token);
            const {permissao} = decodeToken;
            setUsuario(permissao);
        }
 
        },[]);

        

    const head = {
        idProduto: 'ID',
        codigoEan: 'Código',
        descricaoProduto: 'Descrição',
        quantidade: 'Quantidade',
        preco: 'Preço R$',
        grupo: 'Grupo',
        ala: 'Ala'
        
    }

    React.useEffect(()=>{
        async function buscarDados(){

            const axi = await Axios.get('http://localhost:3000/produto/buscarTodos', {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                }
            })
            
            setDadosProdutos(axi.data);
            
            
        

        }
        buscarDados();
    },[])

   // console.log(produtoEtiqueta)

    const filterDados = search.length > 0 ? dadosProdutos.filter(dadosPrp => dadosPrp.codigoEan.includes(search) || dadosPrp.descricaoProduto.includes(search)) : [];

    return(
        <div className='telaInicio'>
            <HeaderApp/>
            <div className="areaTable">
                <div className='areaBotoes'>
                    <Button id="TelaProduto" className='btns' disabled >Produto</Button> 
                    {usuario.cargo === "gerente" && (
                        <Button id="TelaUsuario" className='btns' onClick={() => navigate('/TelaUsuario')}>Usuário</Button>
                    )}  
                    
                    {usuario.cargo !== "funcionario" && (
                        <Button id="TelaEtiqueta" className='btns' onClick={() => navigate('/TelaEtiqueta')}>Etiqueta</Button>
                    )}
                    <input className='areaPesquisa' type='text' placeholder='Buscar...' onChange={e => setSearch(e.target.value)} value={search}/>
                </div>
                <div className='te'>
                <div className='tableProd'>
                    <Table dadosProdutos = {dadosProdutos} head={head} filterDados={filterDados}  />
                </div>
                </div>
                <div className='btsAdd'>
                    {usuario.cargo !== "funcionario" && (
                        <>
                        <Button className='btns' onClick={() => navigate('/TelaCadastrarGrupo')}>Grupo +</Button>
                        <Button className='btns' onClick={() => navigate('/TelaCadastrarAla')}>Ala +</Button>
                        <Button className='btns' onClick={() => navigate('/TelaCadastrarProduto')}>Produto +</Button>
                        </>
                    )}
                    <Button className='btns' onClick={() => navigate('/TelaInicio')}>Fechar</Button>
                </div>
            </div>
        </div>
    );
}

export default TelaProduto;