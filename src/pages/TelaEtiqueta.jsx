import MyContext from "../contexts/myContext";
import {useContext, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const TelaEtiqueta = () =>{
    const {logado, setLogado} =useContext(MyContext);
    const navigate = useNavigate();

    useEffect(() =>{
        const token = sessionStorage.getItem('token');
    
    if(logado === false && !token){
        //console.log("não estou logado e não tem token")
        //console.log(logado)
        navigate('/TelaLogin');
    }
    
    },[]);

    
}

export default TelaEtiqueta;