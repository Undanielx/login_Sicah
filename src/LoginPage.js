import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes implementar la lógica para verificar el usuario y la contraseña.
  };

  return (
    <div className="login-container">
        <h1>SICAH</h1>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    <div className="button-container">
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
    </div>
  );
};

export default LoginPage;
