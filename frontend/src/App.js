import React, { useEffect, useState } from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './Components/DevItem';
import DevForm from './Components/DevForm';

function App() {

  const [devs, setDevs] = useState([]);//Iniciando com o mesmo formato de campo que irá amarzenar depois

  

  //Listar Devs buscando na api
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  //Criando Usuário
  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    //Assim fazemos uma adição detro do Array assim quando cadastrarmos um novo usuario ele aparecerá na listagem
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
