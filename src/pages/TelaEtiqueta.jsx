import MyContext from "../contexts/myContext";
import {useContext, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const TelaEtiqueta = () =>{
    const {logado, setLogado} =useContext(MyContext);
    const navigate = useNavigate();


    return(
        <div>

        </div>
    );
    
}

export default TelaEtiqueta;