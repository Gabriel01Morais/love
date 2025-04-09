const fotos = [
    "01.jpg",
    "02.jpg",
    
    "04.jpg",
    "05.jpg",
    "06.jpg"
  ];
  
  setInterval(() => {
    const aleatoria = fotos[Math.floor(Math.random() * fotos.length)];
    document.getElementById("foto").src = aleatoria;
  }, 5000);
  
  const dataInicio = new Date(2020, 1, 29);
  function atualizarContador() {
    const agora = new Date();
    const diff = agora - dataInicio;
    const segundos = Math.floor(diff / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const anos = Math.floor(dias / 365);
    const diasRestantes = dias % 365;
    const horasRestantes = horas % 24;
    const minutosRestantes = minutos % 60;
    const segundosRestantes = segundos % 60;
  
    document.getElementById("contador").textContent =
      `${anos} anos, ${diasRestantes} dias, ${horasRestantes} horas, ${minutosRestantes} minutos e ${segundosRestantes} segundos`;
  }
  
  setInterval(atualizarContador, 1000);
  atualizarContador();
  
  // Animação de corações e rosas
  const canvas = document.getElementById('efeitosCanvas');
  const ctx = canvas.getContext('2d');
  
  const largura = canvas.width = window.innerWidth;
  const altura = canvas.height = window.innerHeight;
  
  const emojis = ['💖', '🌹', '❤️'];
  const particulas = [];
  
  for (let i = 0; i < 50; i++) {
    particulas.push({
      x: Math.random() * largura,
      y: Math.random() * -altura,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      tamanho: Math.random() * 24 + 20,
      velocidade: Math.random() * 1.5 + 0.5
    });
  }
  
  function desenhar() {
    ctx.clearRect(0, 0, largura, altura);
  
    particulas.forEach(p => {
      ctx.font = `${p.tamanho}px serif`;
      ctx.fillText(p.emoji, p.x, p.y);
      p.y += p.velocidade;
  
      if (p.y > altura) {
        p.y = -50;
        p.x = Math.random() * largura;
      }
    });
  
    requestAnimationFrame(desenhar);
  }
  
  desenhar();
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  let tes = document.getElementById('tes')
  function Clicar(){
    tes.innerHTML = 'Meu amor por você é algo que cresce a cada dia. Você não é só a minha companheira, é o amor da minha vida. Você é minha melhor amiga, minha confidente, minha pessoa favorita no mundo. É com você que eu quero ficar até o fim da vida, até meu último suspiro. Você é tudo pra mim, representa tudo pra mim: a definição de amor, felicidade, carinho, apego... tudo que realmente importa, eu posso definir apenas falando o seu nome. Você é a mulher mais incrível do mundo, e eu quero tudo contigo, meu amor. Tudo, até o fim.'
  }
