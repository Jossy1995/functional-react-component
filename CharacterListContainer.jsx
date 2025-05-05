import React, { useState, useEffect } from 'react';
import ListComponent from './ListComponent';

const CharacterListContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => {
        if (!res.ok) throw new Error('API request failed');
        return res.json();
      })
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading characters...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h2>Characters</h2>
      <ListComponent
        items={characters}
        renderItem={(char) => (
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
            <img src={char.image} alt={char.name} width="60" />
            <div>
              <strong>{char.name}</strong><br />
              <small>{char.species}</small>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default CharacterListContainer;
