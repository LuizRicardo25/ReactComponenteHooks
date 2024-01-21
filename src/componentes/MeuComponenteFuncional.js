import React, { useState, useEffect } from 'react';

function MeuComponenteFuncional() {
  const [mensagem, setMensagem] = useState('Olá, este é o meu componente funcional!');

  useEffect(() => {
    // Aqui você pode adicionar qualquer efeito colateral que o componente deva executar
    document.title = mensagem;
  });

  return (
    <div>
      <p></p><center>{mensagem}</center>
    </div>
  );
}

export default MeuComponenteFuncional;
