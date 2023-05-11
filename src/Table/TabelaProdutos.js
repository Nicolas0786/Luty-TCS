
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

const Row = ({record}) => {
    const navigate = useNavigate();
    const {editarr, setEditarr} = useContext(MyContext);
    const keys = Object.keys(record)
    return(
        
        <tr key={record.id}> {''} 
            {
                keys.map(key => <td key={key}>{record[key]} </td>)
            }
            <Button className="bteditar" onClick={async () =>{

                const  back = await Axios.get(`http://localhost:3000/produto/buscarPorId/${record.idProduto}`)
                console.log(back.data)
               setEditarr(back.data);
               navigate('/TelaEditarProduto');
              
            }}>editar</Button>
            
        </tr> 
        
    )
}


const table = ({dadosProdutos, head}) =>{

const keys = Object.keys(head)
return(
    
    <Table striped>
                    <Head keys={keys} head={head}/>
                    <tbody>
                      
                            {dadosProdutos.map(record => <Row record={record}/>)}
                            
                    </tbody>

    </Table>
)

}

export default table;


