
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

const Row = ({record}) => {
    const keys = Object.keys(record)
    const navigate = useNavigate();
    const [test, setTest] = useState('');

    console.log(record)
    useEffect(() =>{
        record.statusUsuario === 1 ? setTest(<BsToggleOn/>): setTest(<BsToggleOff/>);
        },[]);
    
    return(
        
        
        <tr key={record.idUsuario}> {''} 
            {
                keys.map(key => <td key={key}>{record[key]} </td>)
            }
            

            <Button className="bteditar"onClick={async () =>{
                    
                    if(record.statusUsuario === 1){
                        
                        
                        window.alert("Usuario desativado");
                        setTest(<BsToggleOff/>)
                        record.statusUsuario = 0;
                        

                    }else{
                        
                        
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
    
    
   
    return(
         
    
        <Table>
                        <Head keys={keys} head={head}/>
                        <tbody>

                                {filterDados == 0 ? dadosUsuario.map(record => <Row record={record}/>) : filterDados.map(record => <Row record={record}/>)}
                                
                        </tbody>
    
        </Table>
    )

}

export default table;