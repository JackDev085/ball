import React, { useState, useEffect } from 'react';

function Teste() {
  const [cor, setCor] = useState('');
  const cores = ["Azul", "Preto", "Branco"];
  let i = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCor(cores[i]);
      i = (i + 1) % cores.length;
    }, 2000);

    return () => clearInterval(intervalId); // Limpa o intervalo na desmontagem
  }, []);

  useEffect(() => {
    const synth = window.speechSynthesis;

    function speakText(text) {
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    }

    if (cor) {
      speakText(cor);
    }
  }, [cor]);

  return (
    <>
      <h1>Testando</h1>
      <div>{cor}</div>
    </>
  );
}

export default Teste;