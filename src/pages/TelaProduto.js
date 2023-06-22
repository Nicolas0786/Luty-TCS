import Axios  from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Table from '../Table/TabelaProdutos';
import Row from '../Table/TabelaProdutos';
import Button from 'react-bootstrap/Button';
import { IoMdExit } from "react-icons/io";
import imgIni from '../imagens/ini.png';
import Image from 'react-bootstrap/Image'
import './Css/TelaProduto.css';




const TelaProduto = () =>{

    const navigate = useNavigate();
    const[dadosProdutos, setDadosProdutos] = useState([]);

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

            const axi = await Axios.get('http://localhost:3000/produto/buscarTodos')
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

            <header className='inicio'>
                <Image src={imgIni} className = 'imgIni'></Image>
                <IoMdExit  className=' exit'/>
            </header>

            <main className='telaInicio'>
                <div className='botoes'>

                <Button className='btUsuario' id="TelaUsuario"  onClick={() => navigate('/TelaUsuario')}>Usuário</Button>
                <Button className='btUsuario' id="TelaProduto"  onClick={() => navigate('/TelaProduto')}>Produto</Button> 
                <Button className='btUsuario' id="TelaEtiqueta">Etiqueta</Button>
                <input className='btPesquisa' type='text' placeholder='Buscar...' ></input>
                </div>

                <div className='inici'>
                    <Table dadosProdutos = {dadosProdutos} head={head} />
                </div>
                <div className='btsBaixo'>
                    
                    <Button className='btGrupoAla'>Grupo +</Button>
                    <Button className='btGrupoAla'>Ala +</Button>

                    <Button className='btBaixoProduto' id="novoProduto"  onClick={() => navigate('/TelaCadastrarProduto')}>+ Produto</Button> 
                    <Button className='btBaixoProduto' onClick={() => navigate('/TelaInicio')}>Fechar</Button>
                </div>
            </main>


        </div>
    );
}

export default TelaProduto;