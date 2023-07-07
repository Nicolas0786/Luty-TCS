
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from "react"

import Axios from 'axios';
import './Css/TabelaUsuario.css';

import {useNavigate} from 'react-router-dom';
import { BsFillPencilFill } from "react-icons/bs";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";


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
  
    const keys = column.property.split('.');
    const value = keys.reduce((prevValue, currentValue) => {
        return prevValue?.[currentValue]
    }, record)
    
    return(
        <td>{value}</td>
    )
}


const Row = ({record, columns}) => {
    //const keys = Object.keys(record)
    const navigate = useNavigate();
    const [test, setTest] = useState('');

    console.log(record)
    useEffect(() =>{
        record.statusUsuario === 1 ? setTest(<BsToggleOn/>): setTest(<BsToggleOff/>);
        },[]);
    
    return(
        
        
        <tr key={record.idUsuario}> {''} 
            {
                columns.map((column) => <td>{formatarDados(column, record)}</td>)
            }
            

            <Button className="bteditar"onClick={async () =>{
                    
                    if(record.statusUsuario === 1){
                        await Axios.put('http://localhost:3000/usuario/atualizar/'+record.idUsuario, {statusUsuario: 0}, {
                            headers: {
                                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                            }
                        })
                        
                        window.alert("Usuario desativado");
                        setTest(<BsToggleOff/>)
                        record.statusUsuario = 0;
                        

                    }else{
                        await Axios.put('http://localhost:3000/usuario/atualizar/'+record.idUsuario, {statusUsuario: 1}, {
                            headers: {
                                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                            }
                        })
                        
                        window.alert("Usuario ativado");
                        setTest(<BsToggleOn/>)
                        record.statusUsuario = 1;
                    }
                    
                }}>{test}</Button>


            <Button  className="bteditarUsu" onClick={async () =>{
               
                navigate(`/TelaEditarUsuario/${record.login}`);
                        
            }}><BsFillPencilFill/></Button>
            

        </tr> 
        
        )
    }


const table = ({filterDados, dadosUsuario, head}) =>{
    const keys = Object.keys(head)

    const columns = [
        {
            property: 'nome',
        },
        {
            property: 'matricula',
        },
        {
            property: 'login',
        }
    ]
    
    
   
    return(
         
    
        <Table striped>
                        <Head keys={keys} head={head}/>
                        <tbody>

                                {filterDados == 0 ? dadosUsuario.map(record => <Row key={record.idUsuario} columns={columns} record={record}/>) : filterDados.map(record => <Row key={record.idUsuario} columns={columns} record={record}/>)}
                                
                        </tbody>
    
        </Table>
    )

}

export default table;