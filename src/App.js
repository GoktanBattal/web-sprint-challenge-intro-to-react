import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import axios from 'axios';
import styled from "styled-components";

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 20px;
  width: 100wv;
  height: 100vh;
`;
const App = () => {

  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getData = () => {
      setLoading(true);
      axios.get('https://swapi.dev/api/people/').then((response) => {
        const data = response.data;
        console.log('date:',data);
        if (data && data.length > 0) {
          setCharacters(data);
        }
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        console.error('Error: ', error);
      });
    }

    getData();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {loading && <Loading>Loading...</Loading>}
      {!loading && characters && characters.map((character, index) => <BodyContainer><Character info={character} key={index}/></BodyContainer>)}
    </div>
  );
}

export default App;
