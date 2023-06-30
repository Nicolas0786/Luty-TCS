import Button from 'react-bootstrap/Button';
import jwtDecode from 'jwt-decode';

import './Css/TelaInicio.css';


import React, { useEffect, useState } from 'react';
import HeaderApp from './headerApp';

const TelaInicio = () =>{
    const [usuario, setUsuario] = useState([]);
    
    useEffect(() =>{
        const token = sessionStorage.getItem('token');
        if(token){
            const decodeToken = jwtDecode(token);
            const {permissao} = decodeToken;
            setUsuario(permissao);
        }
        },[]);

    console.log(usuario.cargo === "gerente")
    

    return(
        <body className='bodyPri'>
            <header>
            <HeaderApp/>
            </header>
            <main className='telaInicio'>
                <div className='inicio-container'>
                    <Button className='botaoIni' href='/TelaUsuario'>Usuário</Button>
                    <Button className='botaoIniic' href="/TelaProduto">Produto</Button>
                    <Button className='botaoInii' href="/TelaEtiqueta">Etiqueta</Button>
                    {usuario.cargo === "gerente" && (
                    <Button className='botaoRel' >Relatorio</Button>               
                    )}
                </div>
            </main>
        </body>
    );

}

export default TelaInicio;