import { Outlet } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import React, {useEffect, useContext } from "react";
import MyContext from '../contexts/myContext';

const Laout =  ()=>{
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

    return(
        <Outlet/>
    );
}

export default Laout;