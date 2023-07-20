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

    return(
        <div className='areaPrincipalInicio'>
            <HeaderApp/>
            <div className='inicioContainer'>
                <div className='botoesPrincipais'>
                    {usuario.cargo === "gerente" | usuario.cargo === 'adm' &&(
                        <Button className='botoesInicio' href='/TelaUsuario'>Usuário</Button>
                    )}
                    
                    {usuario.cargo !== 'adm' &&(
                    <Button className='botoesInicio' href="/TelaProduto" style={{ marginLeft: '2%', marginRight: '2%',}}>Produto</Button>
                    )}

                    {usuario.cargo !== "funcionario" & usuario.cargo !== 'adm' && (
                        <Button className='botoesInicio' href="/TelaEtiqueta">Etiqueta</Button>
                    )}
                </div>
                <div className='botaoGerente'>
                    {usuario.cargo === "gerente" && (
                        <Button className='botoesInicio' href='/TelaRelatorio' >Relatorio</Button>               
                    )}
                </div>
            </div>
        </div>
    );
}

export default TelaInicio;