import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

const TelaInicio = () =>{
    const navigate = useNavigate();

    return(
        <body>
            <header>
                
            </header>
            <main>
                <Button href='/TelaUsuario'>Usuário</Button>
                <Button href="/TelaProduto">Produto</Button>
                <Button>Etiqueta</Button>
            </main>
        </body>
    );

}

export default TelaInicio;