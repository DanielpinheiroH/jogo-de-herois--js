class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.hp = 100;
    this.nivel = 1;
    this.xp = 0;
  }

  ganharExperiencia(pontos) {
    this.xp += pontos;
    console.log(`${this.nome} ganhou ${pontos} XP!`);

    // A cada 100 XP, sobe de nível
    while (this.xp >= 100) {
      this.xp -= 100;
      this.nivel++;
      this.hp += 20;
      console.log(`${this.nome} subiu para o nível ${this.nivel}!`);
    }
  }

  estaVivo() {
    return this.hp > 0;
  }

  status() {
    console.log(`🧝 ${this.nome} | Tipo: ${this.tipo} | Nível: ${this.nivel} | HP: ${this.hp} | XP: ${this.xp}`);
  }
}

// Subclasses específicas com ataques diferentes
class Mago extends Heroi {
  constructor(nome, idade) {
    super(nome, idade, 'mago');
  }

  atacar(alvo) {
    let dano = Math.floor(Math.random() * 15) + 10;
    if (Math.random() < 0.2) {
      dano *= 2;
      console.log(`🔥 CRÍTICO!`);
    }
    alvo.hp -= dano;
    console.log(`${this.nome} lançou uma magia e causou ${dano} de dano em ${alvo.nome}`);
    this.ganharExperiencia(20);
  }
}

class Guerreiro extends Heroi {
  constructor(nome, idade) {
    super(nome, idade, 'guerreiro');
  }

  atacar(alvo) {
    let dano = Math.floor(Math.random() * 20) + 5;
    if (Math.random() < 0.15) {
      dano *= 2;
      console.log(`💥 CRÍTICO!`);
    }
    alvo.hp -= dano;
    console.log(`${this.nome} atacou com espada e causou ${dano} de dano em ${alvo.nome}`);
    this.ganharExperiencia(20);
  }
}

class Monge extends Heroi {
  constructor(nome, idade) {
    super(nome, idade, 'monge');
  }

  atacar(alvo) {
    let dano = Math.floor(Math.random() * 12) + 8;
    if (Math.random() < 0.25) {
      dano *= 2;
      console.log(`🥋 GOLPE CRÍTICO!`);
    }
    alvo.hp -= dano;
    console.log(`${this.nome} atacou com artes marciais e causou ${dano} de dano em ${alvo.nome}`);
    this.ganharExperiencia(20);
  }
}

class Ninja extends Heroi {
  constructor(nome, idade) {
    super(nome, idade, 'ninja');
  }

  atacar(alvo) {
    let dano = Math.floor(Math.random() * 18) + 6;
    if (Math.random() < 0.3) {
      dano *= 2;
      console.log(`🗡️ ATAQUE SURPRESA!`);
    }
    alvo.hp -= dano;
    console.log(`${this.nome} atacou com shuriken e causou ${dano} de dano em ${alvo.nome}`);
    this.ganharExperiencia(20);
  }
}

function simularBatalha(heroiA, heroiB) {
  console.log(`⚔️ Iniciando a batalha entre ${heroiA.nome} e ${heroiB.nome}!\n`);
  let rodada = 1;
  while (heroiA.estaVivo() && heroiB.estaVivo()) {
    console.log(`--- Rodada ${rodada} ---`);
    heroiA.atacar(heroiB);
    if (!heroiB.estaVivo()) break;
    heroiB.atacar(heroiA);
    heroiA.status();
    heroiB.status();
    console.log("\n");
    rodada++;
  }

  const vencedor = heroiA.estaVivo() ? heroiA.nome : heroiB.nome;
  console.log(`🏆 ${vencedor} venceu a batalha!\n`);
}

// Demonstração
const guerreiro = new Guerreiro("Thoran", 35);
const mago = new Mago("Ezren", 70);

guerreiro.status();
mago.status();


simularBatalha(guerreiro, mago);