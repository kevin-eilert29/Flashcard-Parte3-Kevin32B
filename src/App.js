// Importando o React
import React, { Component } from 'react';
// Importando o Component Header
import Header from './components/header/header'
// Importando o component Main
import Main from './main'
import api from './api'

class App extends Component {
  state = {
    cursosInfo: [],
  }
  async componentDidMount() {
    let resposta = await api.get('');
    this.setState({cursosInfo: resposta.data });
  }
  render() {
  	const {cursosInfo} = this.state;
    return (
      <div>
        <Header />
        <Main cursosInfo={cursosInfo} />
      </div>
    );
  }
}

export default App;