import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import imgIni from '../imagens/ini.png';
import imgExit from '../imagens/exit.png';
//import imgPr from '../imagens/ImgPrinc.png';
import './Css/TelaInicio.css';
import { IoMdExit } from "react-icons/io";

const TelaInicio = () => {
    const navigate = useNavigate();

    return (
        <body className='bodyPri'>
            <header className='inicio'>

            <Image src={imgIni} className = 'imgIni'></Image>
            <IoMdExit  className=' exit'/>
            </header>
                <main className='telaInicio'>
                    
                    <div className='inicio-container'>
                 
                  {/* <Image src={imgPr} className="imgPri" /> */}

                    <Button className='botaoIni' href='/TelaUsuario'>Usuário</Button>
                    <Button className='botaoIniic' href="/TelaProduto">Produto</Button>
                    <Button className='botaoInii' href="/TelaEtiqueta" >Etiqueta</Button>
                    </div>
                </main>
        </body>
    );

}

export default TelaInicio;