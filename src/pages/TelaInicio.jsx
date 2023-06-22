import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import imgPr from '../imagens/ImgPrinc.png';

const TelaInicio = () =>{
    const navigate = useNavigate();

    return(
        <body>
            <header>
                
            </header>
            <main>
                <Button href='/TelaUsuario'>Usuário</Button>
                <Button href="/TelaProduto">Produto</Button>
                <Button href="/TelaEtiqueta">Etiqueta</Button>
            </main>
        </body>
    );

}

export default TelaInicio;