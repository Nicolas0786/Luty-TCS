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
        idProduto: 'Id',
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
        buscarDados()
    },[])

    const filterDados = search.length > 0 ? dadosProdutos.filter(dadosPrp => dadosPrp.codigoEan.includes(search) || dadosPrp.descricaoProduto.includes(search)) : [];

    return(
        <div>

            <header>
                <HeaderApp/>
            </header>

            <div className='botoes'>
              {usuario.cargo === "gerente" && (
                <Button id="TelaUsuario"  onClick={() => navigate('/TelaUsuario')}>Usuário</Button>
              )}  
            
            <Button id="TelaProduto"  disabled >Produto</Button> 

            {usuario.cargo !== "funcionario" && (
                <Button id="TelaEtiqueta"  onClick={() => navigate('/TelaEtiqueta')}>Etiqueta</Button>
            )}
            
            <input className='btPesquisa' type='text' placeholder='Buscar...' onChange={e => setSearch(e.target.value)} value={search}/>
            </div>

            <div className='inici'>
                <Table dadosProdutos = {dadosProdutos} head={head} filterDados={filterDados} />
            </div>

            <div className='btsBaixo'>
                {usuario.cargo !== "funcionario" && (
                    <>
                    <Button className='btGrupo' onClick={() => navigate('/TelaCadastrarGrupo')}>Grupo +</Button>
                    <Button className='btAla' onClick={() => navigate('/TelaCadastrarAla')}>Ala +</Button>
                    <Button className='btBaixoProduto' onClick={() => navigate('/TelaCadastrarProduto')}>Produto +</Button>
                    </>
                )}
             
            <Button className='btBaixoProduto' onClick={() => navigate('/TelaInicio')}>Fechar</Button>
            </div>
        </div>
    );
}

export default TelaProduto;