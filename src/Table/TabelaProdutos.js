
import React, { useContext } from "react"
import MyContext from "../contexts/myContext"
import TelaCadastrarProduto from "../pages/TelaCadastrarProduto"
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Css/TabelaProduto.css'



const Head = ({keys, head}) => {
    const tableHead = head || {}
    return (
        <thead>
            <tr>
                {
                    keys.map(key => <th key={key}>{tableHead[key] || key}</th>)
                }
            </tr>
        </thead>
    )
}


const formatarDados = (column, record, comando) => {
    // let valor = value || '';
    // const isObject = typeof valor === 'object';
    // if(isObject){
    //     const contemComando = comando[column];
    //     const isEvento = typeof contemComando === 'function';
    //     valor = isEvento ? contemComando(valor) : JSON.stringify(valor);
    // }
    const keys = column.property.split('.');
    const value = keys.reduce((prevValue, currentValue) => {
        return prevValue?.[currentValue]
    }, record)
    
    return(
        <td>{value}</td>
    )
}

const comando = {
    grupo: (oValor) => {
        const {descricaoGrupo} = { descricaoGrupo: 'Não definido', ...oValor };
        return descricaoGrupo;
    }
}


const Row = ({record, columns}) => {
    const navigate = useNavigate();
    const {editarr, setEditarr} = useContext(MyContext);
    const {etq, setEtq} = useContext(MyContext);
    
    return(
        
        <tr key={record.id}> {''} 
            {
                columns.map((column) => <td>{formatarDados(column, record, comando)}</td>)
            }
            <Button className="bteditar" onClick={async () =>{

                const  back = await Axios.get(`http://localhost:3000/produto/buscarPorId/${record.idProduto}`)
                console.log(back.data)
               setEditarr(back.data);
               navigate('/TelaEditarProduto');
              
            }}>editar</Button>

            <Button className="btetiq" onClick={async () => {
                const etqq = await Axios.get(`http://localhost:3000/produto/buscarPorId/${record.idProduto}`)
                
                setEtq(etqq.data);
                console.log(etq);
                navigate(`/TelaMandarEtiqueta/${record.idProduto}`)

            }} >Etiqueta</Button>
            
        </tr> 
        
    )
}


const table = ({dadosProdutos, head}) =>{
    console.log(dadosProdutos)
    const keys = Object.keys(head)

    const columns = [
        {
            property: 'idProduto'
        },
        {
            property: 'codigoEan',
        },
        {
            property: 'descricaoProduto',
        },
        {
            property: 'quantidade',
        },
        {
            property: 'preco',
        },
        {
            property: 'grupos.descricaoGrupo'
        }
    ]


return(
    
    <Table striped>
                    <Head keys={keys} head={head}/>
                    <tbody>
                      
                            {dadosProdutos.map((record)=> <Row key={record.idProduto} columns={columns} record={record}></Row>)}
                            
                    </tbody>

    </Table>
)

}

export default table;


