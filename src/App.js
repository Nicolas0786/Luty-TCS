
import './App.css';

import React, { useState } from "react";

import {Routes, BrowserRouter, Route} from 'react-router-dom';
import TelaCadastrarProduto from './pages/TelaCadastrarProduto';
import TelaProduto from './pages/TelaProduto';
import TelaUsuario from './pages/TelaUsuario';

import MyContext from './contexts/myContext';
import TelaEditarProduto from './pages/TelaEditarProduto';

import  'bootstrap/dist/css/bootstrap.min.css' ;
import TelaLogin from './pages/TelaLogin';
import TelaInicio from './pages/TelaInicio';


function App() {

  const [codigoEan, setCodigoEan] = useState();
  const [descricaoProduto, setDescricaoProduto] = useState("");
  const [grupo, setGrupo] = useState();
  const [ala, setAla] = useState();
  const [quantidade, setQuantidade] = useState();
  const [custo, setCusto] = useState();
  const [porcentagem, setPorcentagem] = useState();
  const [preco, setPreco] = useState();

  const [editarr, setEditarr] = useState();


  return (
    <MyContext.Provider value={{editarr, setEditarr, codigoEan, setCodigoEan, descricaoProduto, setDescricaoProduto, grupo, setGrupo, ala, setAla, quantidade, setQuantidade, custo, setCusto, porcentagem, setPorcentagem,  preco, setPreco}}>

  <BrowserRouter>
    <Routes>
      <Route path='/TelaProduto' element={<TelaProduto/>}/>  
      <Route path='/TelaCadastrarProduto' element={<TelaCadastrarProduto />}/>
      <Route path='/TelaEditarProduto' element={<TelaEditarProduto/>}/>
      <Route path='/TelaUsuario' element={<TelaUsuario/>}/>
      <Route path='/TelaLogin' element={<TelaLogin/>}/>
      <Route path='/TelaInicio' element={<TelaInicio/>}/>
    </Routes>
  </BrowserRouter>
  </MyContext.Provider>
  );
}

export default App;
