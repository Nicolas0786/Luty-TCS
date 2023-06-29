import Button from 'react-bootstrap/Button';

import './Css/TelaInicio.css';


import React, { useEffect } from 'react';
import HeaderApp from './headerApp';

const TelaInicio = () =>{
    

    
    

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
                    {true && (
                    <Button className='botaoRel'>Relatorio</Button>               
                    )}
                </div>
            </main>
        </body>
    );

}

export default TelaInicio;