import Axios  from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Table from '../Table/TabelaProdutos';
import Row from '../Table/TabelaProdutos';
import Button from 'react-bootstrap/Button';




const TelaProduto = () =>{

    const navigate = useNavigate();
    const[dadosProdutos, setDadosProdutos] = useState([]);

    const head = {
        idProduto: 'Id',
        codigoEan: 'Código',
        descricaoProduto: 'Descrição',
        grupo: 'Grupo',
        quantidade: 'Quantidade',
        preco: 'Preço R$'

    }

    React.useEffect(()=>{
        async function buscarDados(){

            const axi = await Axios.get('http://localhost:3000/produto/buscarTodos')
            //console.log(axi.data);
            
            setDadosProdutos(axi.data);
            console.log(axi.data)
            
            
        
        }
        buscarDados()
    },[])

    
  

 

    return(
        <div>

            <header>

            </header>
            <Button id="novoProduto"  onClick={() => navigate('/TelaCadastrarProduto')}>Novo Produto</Button> 
            <div>
                <Table dadosProdutos = {dadosProdutos} head={head} />
            </div>
        </div>
    );
}

export default TelaProduto;