import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import imgPr from '../imagens/ImgPrinc.png';
import MyContext from "../contexts/myContext";
import {useContext } from 'react';

import React, { useEffect } from 'react';

const TelaInicio = () =>{
    const navigate = useNavigate();
    const {logado, setLogado} =useContext(MyContext);


    useEffect(() =>{
        const token = sessionStorage.getItem('token');

    if(logado === false && !token){
        //console.log("não estou logado e não tem token")
        //console.log(logado)
        navigate('/TelaLogin');
    }

    },[]);

    
    
    //console.log(logado);

    return(
        <body>
            <header>
                
            </header>
            <main>
                <Button href='/TelaUsuario'>Usuário</Button>
                <Button href="/TelaProduto">Produto</Button>
                <Button href="/TelaEtiqueta">Etiqueta</Button>
            </main>
        </body>
    );

}

export default TelaInicio;