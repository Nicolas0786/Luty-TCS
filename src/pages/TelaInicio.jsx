import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import imgPr from '../imagens/ImgPrinc.png';
import MyContext from "../contexts/myContext";
import {useContext } from 'react';
import './Css/TelaInicio.css';
import imgIni from '../imagens/ini.png';
import { IoMdExit } from "react-icons/io";

import React, { useEffect } from 'react';

const TelaInicio = () =>{
    const navigate = useNavigate();
    const {logado, setLogado} =useContext(MyContext);


    

    function sair() {
        sessionStorage.removeItem('token');
        navigate('/TelaLogin')
    }
    
    //console.log(logado);

    return(
        <body className='bodyPri'>
            <header className='inicio'>
            <Image src={imgIni} className = 'imgIni'></Image>
            <IoMdExit  className=' exit' onClick={sair} />
            </header>
            <main className='telaInicio'>
                <div className='inicio-container'>
                    <Button className='botaoIni' href='/TelaUsuario'>Usuário</Button>
                    <Button className='botaoIniic' href="/TelaProduto">Produto</Button>
                    <Button className='botaoInii' href="/TelaEtiqueta">Etiqueta</Button>
                </div>
            </main>
        </body>
    );

}

export default TelaInicio;