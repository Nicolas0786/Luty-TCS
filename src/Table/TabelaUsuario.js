import MyContext from "../contexts/myContext"
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useContext } from "react";
import Axios from 'axios';
import './TabelaUsuario.css'

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
    return(
        
        <tr key={record.id}> {''} 
            {
                keys.map(key => <td key={key}>{record[key]} </td>)
            }
            <Button className="bteditarUsu" onClick={async () =>{
                const dadosUsu = await Axios.get(`http://localhost:3000/usuario/buscarPorLogin/${record.login}`)

                        //console.log(record);

                        console.log(dadosUsu.data)

            }}>Editar</Button>

        </tr> 
        
        )
    }


const table = ({dadosUsuario, head}) =>{
    const keys = Object.keys(head)
    return(
    
        <Table striped>
                        <Head keys={keys} head={head}/>
                        <tbody>
                          
                                {dadosUsuario.map(record => <Row record={record}/>)}
                                
                        </tbody>
    
        </Table>
    )

}

export default table;