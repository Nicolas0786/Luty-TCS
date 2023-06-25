import Axios  from 'axios';
import React, { useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Table from '../Table/TabelaProdutos';
import Row from '../Table/TabelaProdutos';
import Button from 'react-bootstrap/Button';
import MyContext from '../contexts/myContext';


const TelaProduto = () =>{

    const navigate = useNavigate();
    const[dadosProdutos, setDadosProdutos] = useState([]);
    const {logado, setLogado} =useContext(MyContext);

    useEffect(() =>{
        const token = sessionStorage.getItem('token');
        
        if(logado === false && !token){
            //console.log("não estou logado e não tem token")
            //console.log(logado)
            navigate('/TelaLogin');
        }
        
        },[]);

    const head = {
        idProduto: 'Id',
        codigoEan: 'Código',
        descricaoProduto: 'Descrição',
        quantidade: 'Quantidade',
        preco: 'Preço R$',
        grupo: 'Grupo'
        
    }

    React.useEffect(()=>{
        async function buscarDados(){

            const axi = await Axios.get('http://localhost:3000/produto/buscarTodos', {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                }
            })
            //console.log(axi.data);
            
            setDadosProdutos(axi.data);
            
            //console.log(axi.data[0].grupos.descricaoGrupo)

            /*const teste = axi.data.map((grup, i)=> {
               console.log( grup.grupos.descricaoGrupo);
               setDadosProdutos(grup.grupos.descricaoGrupo)
            })*/
        }
        buscarDados()
    },[])


    return(
        <div>

            <header>

            </header>
            <Button id="TelaUsuario"  onClick={() => navigate('/TelaUsuario')}>Usuário</Button>
            <Button id="TelaProduto"  onClick={() => navigate('/TelaProduto')}>Produto</Button> 
            <Button id="TelaEtiqueta">Etiqueta</Button>
            <div>
                <Table dadosProdutos = {dadosProdutos} head={head} />
            </div>
            <Button>Grupo +</Button>
            <Button>Ala +</Button>

            <Button id="novoProduto"  onClick={() => navigate('/TelaCadastrarProduto')}>Produto +</Button> 
            <Button onClick={() => navigate('/TelaInicio')}>Fechar</Button>
        </div>
    );
}

export default TelaProduto;