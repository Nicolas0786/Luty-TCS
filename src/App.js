import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css' ;

import {Routes, BrowserRouter, Route} from 'react-router-dom';

import MyContext from './contexts/myContext';

import TelaCadastrarProduto from './pages/TelaCadastrarProduto';
import TelaProduto from './pages/TelaProduto';
import TelaUsuario from './pages/TelaUsuario';
import TelaEditarProduto from './pages/TelaEditarProduto'
import TelaLogin from './pages/TelaLogin';
import TelaInicio from './pages/TelaInicio';
import TelaMandarEtiqueta from './pages/TelaMandarEtiqueta';
import TelaEtiqueta from './pages/TelaEtiqueta';
import TelaCadastrarUsuario from "./pages/TelaCadastrarUsuario";
import TelaEditarUsuario from "./pages/TelaEditarUsuario";


function App() {

  const [codigoEan, setCodigoEan] = useState();
  const [descricaoProduto, setDescricaoProduto] = useState("");
  const [grupos, setGrupos] = useState();
  const [alas, setAlas] = useState();
  const [quantidade, setQuantidade] = useState();
  const [custo, setCusto] = useState();
  const [porcentagem, setPorcentagem] = useState();
  const [preco, setPreco] = useState();

  const [editarr, setEditarr] = useState([]);
  const [etq, setEtq] = useState([]);

  
  return (
    <MyContext.Provider value={{ etq, setEtq, editarr, setEditarr, codigoEan, setCodigoEan, descricaoProduto, setDescricaoProduto, grupos, setGrupos, alas, setAlas, quantidade, setQuantidade, custo, setCusto, porcentagem, setPorcentagem, preco, setPreco }}>

    

      <BrowserRouter>
        <Routes>
          <Route path='/TelaProduto' element={<TelaProduto />} />
          <Route path='/TelaCadastrarProduto' element={<TelaCadastrarProduto />} />
          <Route path='/TelaEditarProduto/:id' element={<TelaEditarProduto />} />
          <Route path='/TelaUsuario' element={<TelaUsuario />} />
          <Route path='/TelaLogin' element={<TelaLogin />} />
          <Route path='/TelaInicio' element={<TelaInicio />} />
          <Route path='/TelaMandarEtiqueta/:id' element={<TelaMandarEtiqueta />} />
          <Route path='/TelaEtiqueta' element={<TelaEtiqueta />} />
          <Route path='/TelaCadastrarUsuario' element={<TelaCadastrarUsuario/>}/>
          <Route path='/TelaEditarUsuario/:login' element={<TelaEditarUsuario/>}/>
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
    
    
  );
  
  
}

export default App;
