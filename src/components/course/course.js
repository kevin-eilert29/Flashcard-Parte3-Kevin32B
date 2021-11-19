import React from "react";
import {Link, useNavigate} from "react-router-dom";
import api from '../../api'

const Cursos = (props) => {
  const navigate = useNavigate();

  const excluir = async (e) => {
    e.preventDefault();

    if(window.confirm("Excluir o curso '" + props.course.nome + "'?")){
      await api.delete("/" + props.course.colecaoId);
      navigate(0)
    }
  }

  return (
      <div class="col s3">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" alt="" src= "https://materializecss.com/images/sample-1.jpg" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{props.course.nome}<i class="material-icons right">more_vert</i></span>
            <Link to={"/forms/editar/" + props.course.colecaoId}><a href="a">Editar -</a></Link>
            <a href="#" onClick={excluir}>- Excluir</a>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Descrição<i class="material-icons right">close</i></span>
            <p>{props.course.descricao}</p>
          </div>
        </div>
      </div>
  );
};

export default Cursos;