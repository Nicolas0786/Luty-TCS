
import Table from '../Table/TabelaRelarioIntegracao';
import React, { useState } from 'react';
import Axios  from 'axios';


const TelaRelatorio = () =>{

    const [dados, setDados] = useState([]);

    const head = {
        idProdutoEtiqueta: 'ID',
        dataIntegracao: 'Data',
        descricaoProduto: "Descrição",
        preco: "Preço",
        nomeEtiqueta: "Nome Etiqueta",
        corredor: "Corredor",
        pratilheira: "Pratilheira",
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

    return(
        <div>
            <Table dados={dados} head={head}/>
        </div>
    );
}

export default TelaRelatorio;