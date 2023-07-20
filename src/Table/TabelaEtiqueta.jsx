import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from "react"
import Axios from 'axios';
import './Css/TabelaUsuario.css';

import {useNavigate} from 'react-router-dom';
import { BsFillPencilFill } from "react-icons/bs";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import jwtDecode from 'jwt-decode';


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
    
    const navigate = useNavigate();
    const [icon, setIcon] = useState('');
    const [usuario, setUsuario] = useState([]);

    console.log(record)
    useEffect(() =>{
        record.statusEtiqueta === 1 ? setIcon(<BsToggleOn/>): setIcon(<BsToggleOff/>);

        const token = sessionStorage.getItem('token');
        if(token){
            const decodeToken = jwtDecode(token);
            const {permissao} = decodeToken;
            setUsuario(permissao);
        }
        },[]);
    
    return(
        
        
        <tr key={record.idEtiqueta}> {''} 
            {
                columns.map((column) => <td>{formatarDados(column, record)}</td>)
            }
            
            {usuario.cargo === "gerente" && (
            <Button className="bteditar"onClick={async () =>{
                    
                    if(record.statusEtiqueta === 1){
                        await Axios.put('http://localhost:3000/etiqueta/atualizar/'+record.idEtiqueta, {statusEtiqueta: 0}, {
                            headers: {
                                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                            }
                        })
                        
                        window.alert("Etiqueta desativada");
                        setIcon(<BsToggleOff/>)
                        record.statusEtiqueta = 0;
                        

                    }else{
                        await Axios.put('http://localhost:3000/etiqueta/atualizar/'+record.idEtiqueta, {statusEtiqueta: 1}, {
                            headers: {
                                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                            }
                        })
                        
                        window.alert("Etiqueta ativada");
                        setIcon(<BsToggleOn/>)
                        record.statusEtiqueta = 1;
                    }
                    
                }}>{icon}</Button>

                )}



            <Button  className="bteditarUsu" onClick={async () =>{
                navigate(`/TelaEditarEtiqueta/${record.idEtiqueta}`);                       
            }}><BsFillPencilFill/></Button>
            



        </tr> 
        
        )
    }


const table = ({filterTest,filterDados,dadosEtiqueta, head}) =>{
    const keys = Object.keys(head)

    const columns = [
        {
            property: 'idEtiqueta',
        },
        {
            property: 'ipEtiqueta',
        },
        {
            property: 'nomeEtiqueta',
        },
        {
            property: 'corredor',
        },
        {
            property: 'pratilheira'
        }
    ]
    
   
    return(
         
    
        <Table striped>
                        <Head keys={keys} head={head}/>
                        <tbody>

                                {filterDados == 0 ? dadosEtiqueta.map(record => <Row key={record.idEtiqueta} columns={columns} record={record}/>): filterDados.map(record => <Row key={record.idEtiqueta} columns={columns} record={record}/>)}
                                
                                
                        </tbody>
    
        </Table>
    )

}

export default table;