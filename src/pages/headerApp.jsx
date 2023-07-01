import imgIni from '../imagens/ini.png';
import { IoMdExit } from "react-icons/io";
import {useNavigate} from 'react-router-dom';
import Image from 'react-bootstrap/Image'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const HeaderApp = () =>{
    const navigate = useNavigate();

    function sair() {
        const confirme = window.confirm("Deseja realmente sair?");
         
        if(confirme){
         sessionStorage.removeItem('token');
         navigate('/TelaLogin')
        }
        
     }

     const styles = {
        backgroundColor: ' #FCF4F4'
      };

    return(
        <Navbar expand="lg" className="bg-body-tertiary" style={styles}>
            <Container>
            <Navbar.Brand ><Image src={imgIni} className = 'imgIni'></Image></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                </Navbar.Collapse>
            <IoMdExit  className=' exit' onClick={sair}/>
            </Container>
      </Navbar>
    );

}

export default HeaderApp;