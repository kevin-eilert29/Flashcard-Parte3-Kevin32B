// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importantando o component Contact
import Cursos from "./components/course/courses";
// Importando os components necessárias da lib react-materialize
import { Container } from 'react-materialize';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Route, Routes } from 'react-router-dom'
import FormCurso from './components/course/formularioCurso'
import FormEditarCurso from './components/course/formularioEditarCurso'

const Main = (props) => (
  <main>
    <Container>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/forms' element={<FormCurso/>}/>
        <Route path='/forms/editar/:cursoId' element={<FormEditarCurso/>}/>
        <Route path='/cursos' element={<Cursos cursosInfo={props.cursosInfo}/>}/>
      </Routes>
    </Container>
  </main>
);

export default Main;