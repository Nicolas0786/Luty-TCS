
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


const formatarDados = (column, record) => {
    
    const keys = column.property.split('.');
    const value = keys.reduce((prevValue, currentValue) => {
        return prevValue?.[currentValue]
    }, record)
    
    return(
        <td>{value}</td>
    )
}


const Row = ({record, columns}) => {
    
    return(
        
        <tr key={record.idProdutoEtiqueta}> {''} 
            {
                columns.map((column) => <td>{formatarDados(column, record)}</td>)
            }
            
        </tr> 
        
    )
}


const table = ({dados, head}) =>{
    const keys = Object.keys(head)

    const columns = [

        {
            property: 'idProdutoEtiqueta',
        },
        {
            property: 'dataIntegracao',
        },
        {
            property: 'produto.descricaoProduto',
        },
        {
            property: 'produto.preco',
        },
        {
            property: 'etiqueta.nomeEtiqueta',
        },
        {
            property: 'etiqueta.corredor',
        },
        {
            property: 'etiqueta.pratilheira',
        },
        {
            property: 'usuario.nome',
        }
    ]


return(
    
    <Table striped>
                    <Head keys={keys} head={head}/>
                    <tbody>
                      
                            {dados.map((record)=> <Row key={record.idProdutoEtiqueta} columns={columns} record={record}></Row>)}
                            
                    </tbody>

    </Table>
)

}

export default table;


