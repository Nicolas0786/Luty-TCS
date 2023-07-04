
import React, { useContext, useState, useEffect } from "react"
import MyContext from "../contexts/myContext"
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Css/TabelaProduto.css';
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
    const {editarr, setEditarr} = useContext(MyContext);
    const {etq, setEtq} = useContext(MyContext);
    const [test, setTest] = useState('');
    const [ver, setVer] = useState(false);
    

    
    useEffect(() =>{
        record.statusProduto === 0 ? setTest(<BsToggleOn/>): setTest(<BsToggleOff/>);
        },[]);
            
        
    
    return(
        
        <tr key={record.id}> 
            {   
                columns.map((column) => <td>{formatarDados(column, record, comando)}</td>)
            }
            

            <Button className="bteditar"onClick={async () =>{
                 
                if(record.statusProduto === 0){
                     await Axios.patch('http://localhost:3000/produto/atualizar/'+record.idProduto, {statusProduto: 1}, {
                        headers: {
                            'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                        }
                    });
                    //console.log("desativado");
                    window.alert("Produto desativado");
                    setTest(<BsToggleOff/>)
                    record.statusProduto = 1;
                    

                }else{
                    await Axios.patch('http://localhost:3000/produto/atualizar/'+record.idProduto, {statusProduto: 0}, {
                        headers: {
                            'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                        }
                    });
                    
                    //console.log("ativado");
                    window.alert("Produto ativado");
                    setTest(<BsToggleOn/>)
                    record.statusProduto = 0;
                }
                
               
            }}>{test}</Button>


            <Button className="bteditar" onClick={async () =>{

                //const  back = await Axios.get(`http://localhost:3000/produto/buscarPorId/${record.idProduto}`) //verificar se ta sendo usado
                //console.log(back.data)
               //setEditarr(back.data);
               navigate(`/TelaEditarProduto/${record.idProduto}`);
              
            }}><BsFillPencilFill/></Button>

            <Button className="btetiq" onClick={async () => {
                const etqq = await Axios.get(`http://localhost:3000/produto/buscarPorId/${record.idProduto}`) // verificar se ta sendo usado
                
                setEtq(etqq.data);
                console.log(etq);
                navigate(`/TelaMandarEtiqueta/${record.idProduto}`)

            }} >Etiqueta</Button>
            
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


