import { useState } from 'react';
import './index.css';

function App() {
  const [nombre, setNombre] = useState('');

  return (
    <div className="app">
      <h1>Mi primera aplicación React</h1>
      <p>Proyecto desarrollado para mi tarea.</p>

      <div className="tarjeta">
        <h2>Bienvenido</h2>

        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <p>{nombre ? `¡Hola, ${nombre}!` : 'Escribe tu nombre arriba.'}</p>
      </div>
    </div>
  );
}

export default App;
