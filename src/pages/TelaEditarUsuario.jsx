import { useParams } from 'react-router-dom';
import React, {useState} from "react";
import Axios from 'axios';



const TelaEditarUsuario = () =>{
    const {login} = useParams();
    //console.log(login)
    const [editUsu, setEditUsu] = useState([]);

    React.useEffect(()=>{
        async function buscarDados(){
    
            
        const  backUsu = await Axios.get(`http://localhost:3000/usuario/buscarPorLogin/${login}`, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        });
        
            setEditUsu(backUsu.data);
            console.log(editUsu);
        }
        buscarDados()
    },[])



    return(
        <div>
            ola
        </div>
    );
}

export default TelaEditarUsuario;