import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [vida, setVida] = useState(100);
  const [vivo, setVivo] = useState(true);

  const [jogar, setJogar] = useState(false)
  const [energia, setEnergia] = useState(100)
  const [irProCarnaval, setIrProCarnaval] = useState(false)

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (vida <= 0) {
        setVivo(false);
        clearInterval(intervalo);
        return 0;
      }
      setVida((vidaAtual) => vidaAtual - 1);
    }, 100000);
    return () => clearInterval(intervalo);
  }, [vida]);

  function curar() {
    if (vivo) {
      if (vida <= 90) {
        setVida(vida + 10);
      } else {
        setVida(100);
      }
    } else {
      alert('Acabou a cura');
    }
    console.log(vida);
  }

  return (
    <div className="App">
      <div className="atributos">
        <p>❤️ {vida}</p>
        <p>⚡ {energia}</p>
      </div>
  
      <div className="container">
        <div className="imagem">
          {vivo ? (
            <img src="/images/vivo.png" alt="Tamagotchi vivo" />
          ) : (
            <img src="/images/morto.png" alt="Tamagotchi morto" />
          )}
        </div>
      </div>
  
      <div className="botoes">
        <button className="botaoCurar" onClick={curar}>Curar</button>
        <button className="botaoCarnaval" onClick={curar}>Ir pro carnaval</button>
        <button className="botaoJogar" onClick={curar}>Jogar bola</button>
      </div>
  
      <div className="avisos">
        {vivo ? (
          <h1 className="avisoTexto">Neymar está vivo</h1>
        ) : (
          <h1 className="avisoTexto">Neymar está morto</h1>
        )}
      </div>
    </div>
  );
}

export default App;