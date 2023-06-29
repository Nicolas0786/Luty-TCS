import MyContext from "../contexts/myContext"
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useContext } from "react";
import Axios from 'axios';
import './Css/TabelaUsuario.css';
import {BiEdit} from "react-icons/bi";
import {useNavigate} from 'react-router-dom';

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
    const keys = Object.keys(record)
    const {edt, setEdt} = useContext(MyContext);
    const navigate = useNavigate();
    
    return(
        
        
        <tr key={record.login}> {''} 
            {
                keys.map(key => <td key={key}>{record[key]} </td>)
            }
            
            <Button  className="bteditarUsu" onClick={async () =>{
               
                navigate(`/TelaEditarEtiqueta/${record.idEtiqueta}`);
                        //console.log(record.login);

                    
                       
            }}>Editar</Button>
            

        </tr> 
        
        )
    }


const table = ({filterTest,filterDados,dadosEtiqueta, head}) =>{
    const keys = Object.keys(head)
    console.log(filterTest)
    
    
   
    return(
         
    
        <Table>
                        <Head keys={keys} head={head}/>
                        <tbody>

                                {filterDados == 0 ? dadosEtiqueta.map(record => <Row record={record}/>): filterDados.map(record => <Row record={record}/>)}
                                
                                
                        </tbody>
    
        </Table>
    )

}

export default table;