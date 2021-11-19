import React, { useState, useEffect } from "react";
import { Row, Col, Input, Button } from 'react-materialize'
import {NavLink, useParams} from 'react-router-dom'
import api from "../../api"
const FormCurso = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const { cursoId } = useParams('');

    useEffect(async () =>{
        const curso = await api.get("/"+cursoId);
        setNome(curso.data.nome);
        setDescricao(curso.data.descricao);
    }, []);

    const editar = async () =>{
		await api.put("/"+cursoId, {nome:nome,descricao:descricao});
	}
    return (
        <Row>
            <Input placeholder="Digite o nome do curso:" label="Nome do curso" value={nome}
                onChange={event => setNome(event.target.value)} s={12} />
            <Input placeholder="Digite a descrição do curso:" label="Descrição" value={descricao}
                onChange={event => setDescricao(event.target.value)} s={12} />
            <Col s={12} m={12}>
                <NavLink to="/cursos"><Button onClick={editar} waves='light' className="right darken-2">Editar</Button></NavLink>
            </Col>
        </Row>
    );
}
export default FormCurso;