var corinthians = {
    nome: "Corinthians",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
  }
  
  var Santos = {
    nome: "Santos",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
  }
  var Palmeiras = {
    nome: "Palmeiras",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
  }
  var Flamengo = {
    nome: "Flamengo",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
  }
  var Vasco = {
    nome: "Vasco",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
  }
  
  corinthians.pontos = calculaPontos(corinthians);
  Palmeiras.pontos = calculaPontos(Palmeiras);
  Flamengo.pontos = calculaPontos(Flamengo);
  Vasco.pontos = calculaPontos(Vasco);
  Santos.pontos = calculaPontos(Santos);
  
  function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
  }
  
  var jogadores = [Palmeiras,corinthians,Flamengo,Vasco];
  
  exibirJogadoresNaTela(jogadores);
  
  function exibirJogadoresNaTela(jogadores) {
    var html = "";
    for (var i = 0; i < jogadores.length; i++) {
      html += "<tr><td>" + jogadores[i].nome + "</td>";
      html += "<td>" + jogadores[i].vitorias + "</td>";
      html += "<td>" + jogadores[i].empates + "</td>";
      html += "<td>" + jogadores[i].derrotas + "</td>";
      html += "<td>" + jogadores[i].pontos + "</td>";
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = html;
  }
  
  function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadoresNaTela(jogadores);
  }
  
  function adicionarEmpate(i) {
      var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadoresNaTela(jogadores);
  }
  
  function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibirJogadoresNaTela(jogadores);
  }
  