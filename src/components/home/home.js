import React from "react";
import { Row, Col, Card } from 'react-materialize';

const Home = () => (
  <Row>
    <Col m={11} s={12}>
        <h5 className="subtitle">Sobre nós</h5>
        <Card>
          <div>
            <p><b>Informações</b></p>
            <p>Nosso site utiliza o sistema de flashcards para ajudar no estudo de muitos alunos, podendo servir como uma forma de se prepararem para provas, vestibulares e afins.</p>
            <br/>
            <p><b>Objetivo do site</b></p>
            <p>Alcançar o maior número possível de estudantes que busquem aprimorar seus conhecimentos em diversas áreas, preparando-os para prestarem diversos tipos de vestibulares e afins.</p>
          </div>
        </Card>
    </Col>
  </Row>
);

export default Home;