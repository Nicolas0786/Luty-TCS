
import Table from '../Table/TabelaRelarioIntegracao';
import React, { useState } from 'react';
import Axios  from 'axios';
import Button from 'react-bootstrap/esm/Button';
import {useNavigate} from 'react-router-dom';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


const TelaRelatorio = () =>{

    const [dados, setDados] = useState([]);
    const navigate = useNavigate();

    const head = {
        idProdutoEtiqueta: 'ID',
        dataIntegracao: 'Data',
        descricaoProduto: "Descrição",
        preco: "Preço",
        nomeEtiqueta: "Nome Etiqueta",
        corredor: "Corredor",
        pratilheira: "Prateleira",
        nome: 'Nome Usuario',
        
    }

    React.useEffect(()=>{
        async function buscarDados(){
        
            const dadosBack = await Axios.get('http://localhost:3000/etiqueta/integra', {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                }
            })
            setDados(dadosBack.data);
        }
        buscarDados();
    },[]);

    


function logPDF(){

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const titulo = [
        {
            text: "Integração Produto com a Etiqueta",
            fontSize: 12,
            bold: true,
            margin: [15,20,0,45]
        }
    ];

const dado = dados.map(log => {
    return[
        {text: log.idProdutoEtiqueta, fontSize: 7, margin: [0, 2, 0, 2]},
        {text: log.dataIntegracao, fontSize: 7, margin: [0, 2, 0, 2]},
        {text: log.descricaoProduto, fontSize: 7, margin: [0, 2, 0, 2]},
        {text: log.preco, fontSize: 7, margin: [0, 2, 0, 2]},
        {text: log.etiqueta.nomeEtiqueta, fontSize: 7, margin: [0, 2, 0, 2]},
        {text: log.etiqueta.corredor, fontSize: 7, margin: [0, 2, 0, 2]},
        {text: log.etiqueta.pratilheira, fontSize: 7, margin: [0, 2, 0, 2]},
        {text: log.usuario.nome, fontSize: 7, margin: [0, 2, 0, 2]},
    ]
})


    const meio = [
        {
            table:{
                headerRows: 1,
                widths: [12, '*', '*', 22, '*', 50, 50, '*'],
                body: [
                    [
                        {text: 'ID', style: 'tableHeader', fontSize: 8},
                        {text: 'Data', style: 'tableHeader', fontSize: 8},
                        {text: 'Descrição', style: 'tableHeader', fontSize: 8},
                        {text: 'Preço', style: 'tableHeader', fontSize: 8},
                        {text: 'Nome Etiqueta', style: 'tableHeader', fontSize: 8},
                        {text: 'Corredor', style: 'tableHeader', fontSize: 8},
                        {text: 'Prateleira', style: 'tableHeader', fontSize: 8},
                        {text: 'Nome Usuario', style: 'tableHeader', fontSize: 8},
                    ],
                    ...dado
                ]
            }
        }
    ];

   function rodape(currentPage, pageCount) {
        return[
            {
                text: currentPage + ' / ' + pageCount,
                alignment: 'rigth',
                fontSize: 9,
                margin: [0, 10, 20, 0]
            }

        ];
    }
    

    const definicao = {
        pageSize: 'A4',
        pageMargins: [20,50, 20, 40],

        info:{
            title: 'Relatório',
        },
        
        
        header: [titulo],
        content: [meio],
        footer: [rodape]
    }
    pdfMake.createPdf(definicao).download();
}

const style ={
    "margin": '0 1em',
    "background-color": 'green' 
}


    return(
        <>
        <h1>Integração Produto com a Etiqueta</h1>
        <div>
            <Button onClick={()=> navigate('/TelaInicio')}>Voltar</Button>
            <Button style={style} onClick={()=> logPDF()}>Gerar PDF</Button>
        </div>
        <div>
            <Table dados={dados} head={head}/>
        </div>
        </>
    );
}

export default TelaRelatorio;