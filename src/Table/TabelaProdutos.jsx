
import React, { useContext, useState, useEffect } from "react"
import MyContext from "../contexts/myContext"
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Css/TabelaProduto.css';
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


const Row = ({ record, columns}) => {
    const navigate = useNavigate();
    
    const [test, setTest] = useState('');

    const [usuario, setUsuario] = useState([]);
     
    
    useEffect(() =>{
        record.statusProduto === 1 ? setTest(<BsToggleOn/>): setTest(<BsToggleOff/>);
        const token = sessionStorage.getItem('token');
        if(token){
            const decodeToken = jwtDecode(token);
            const {permissao} = decodeToken;
            setUsuario(permissao);
        }
        },[]);
               
    
    return(
        
        <tr key={record.idProduto}> 
            {   
                columns.map((column) => <td>{formatarDados(column, record, comando)}</td>)
            }
            
            {usuario.cargo !== "funcionario" && (
                <>
                <Button className="bteditar"onClick={async () =>{
                    
                    if(record.statusProduto === 1){
                        await Axios.patch('http://localhost:3000/produto/atualizar/'+record.idProduto, {statusProduto: 0}, {
                            headers: {
                                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                            }
                        });
                        
                        window.alert("Produto desativado");
                        setTest(<BsToggleOff/>)
                        record.statusProduto = 0;
                        

                    }else{
                        await Axios.patch('http://localhost:3000/produto/atualizar/'+record.idProduto, {statusProduto: 1}, {
                            headers: {
                                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                            }
                        });
                        
                        window.alert("Produto ativado");
                        setTest(<BsToggleOn/>)
                        record.statusProduto = 1;
                    }
                    
                }}>{test}</Button>
            

                <Button className="bteditar" onClick={async () =>{
                        navigate(`/TelaEditarProduto/${record.idProduto}`);        
                }}><BsFillPencilFill/></Button>
                </>
            )}

             {usuario.cargo === "gerente" &&(  
                <Button className="btetiq" onClick={async () => {
                    if(record.statusProduto === 0){
                        window.alert("Esse produto está desativado");
                    }else{
                        navigate(`/TelaMandarEtiqueta/${record.idProduto}`)
                    }
            }}>Etiqueta</Button>
            )} 
        </tr> 
        
    )
}


const table = ({dadosProdutos, head, filterDados}) =>{
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
        },
        {
            property: 'alas.descricao'
        }
    ]


return(
    
    <Table striped>
                    <Head keys={keys} head={head}/>
                    <tbody>
                      
                            {filterDados == 0 ? dadosProdutos.map((record)=> <Row key={record.idProduto} columns={columns} record={record}></Row>): filterDados.map((record)=> <Row key={record.idProduto} columns={columns} record={record}></Row>)}
                            
                    </tbody>

    </Table>
)

}

export default table;


