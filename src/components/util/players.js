const players = [
  {
    name: "Gabigol",
    num: 9,
    img: "https://img.a.transfermarkt.technology/portrait/big/244275-1623847700.jpg?lm=1",
  },
  {
    name: "Arrascaeta",
    num: 14,
    img: "https://img.a.transfermarkt.technology/portrait/big/248410-1610006665.jpg?lm=1",
  },
  {
    name: "Pedro",
    num: 21,
    img: "https://img.a.transfermarkt.technology/portrait/big/432895-1533634320.jpg?lm=1",
  },
  {
    name: "Éverton Ribeiro",
    num: 7,
    img: "https://img.a.transfermarkt.technology/portrait/big/52896-1610006872.jpg?lm=1",
  },
  {
    name: "João Gomes",
    num: 35,
    img: "https://img.a.transfermarkt.technology/portrait/big/735570-1623845811.jpg?lm=1",
  },
  {
    name: "Vidal",
    num: 32,
    img: "https://img.a.transfermarkt.technology/portrait/big/37666-1502276644.jpg?lm=1",
  },
  {
    name: "Filipe Luis",
    num: 16,
    img: "https://img.a.transfermarkt.technology/portrait/big/21725-1447152742.jpg?lm=1",
  },
  {
    name: "David Luiz",
    num: 23,
    img: "https://img.a.transfermarkt.technology/portrait/big/46741-1472656986.jpg?lm=1",
  },
  {
    name: "Rodrigo Caio",
    num: 3,
    img: "https://img.a.transfermarkt.technology/portrait/big/172054-1471615155.jpg?lm=1",
  },
  {
    name: "Rodinei",
    num: 22,
    img: "https://img.a.transfermarkt.technology/portrait/big/185966-1611222363.jpg?lm=1",
  },
  {
    name: "Santos",
    num: 20,
    img: "https://img.a.transfermarkt.technology/portrait/big/140811-1554731294.jpg?lm=1",
  },
  {
    name: "Pulgar",
    num: 12,
    img: "https://img.a.transfermarkt.technology/portrait/big/215616-1643971374.png?lm=1"
  },
  {
    name: "Cebolinha",
    num: 19,
    img: "https://img.a.transfermarkt.technology/portrait/big/321239-1603795820.jpg?lm=1",
  },
  {
    name: "Thiago Maia",
    num: 8,
    img: "https://img.a.transfermarkt.technology/portrait/big/294873-1457513224.jpg?lm=1"
  },
  {
    name: "Lázaro",
    num: 13,
    img: "https://img.a.transfermarkt.technology/portrait/big/574772-1574058091.jpg?lm=1"
  },
  {
    name: "Vitinho",
    num: 11,
    img: "https://img.a.transfermarkt.technology/portrait/big/213605-1447749971.jpg?lm=1"
  },
  {
    name: "Bruno Henrique",
    num: 27,
    img: "https://img.a.transfermarkt.technology/portrait/big/353108-1605189960.jpg?lm=1"
  },
  {
    name: "Léo Pereira",
    num: 4,
    img: "https://img.a.transfermarkt.technology/portrait/big/288431-1494244050.jpg?lm=1"
  },
  {
    name: "Matheuzinho",
    num: 34,
    img: "https://img.a.transfermarkt.technology/portrait/big/594226-1639506313.jpg?lm=1"
  },
  {
    name: "Fabricio Bruno",
    num:15,
    img: "https://img.a.transfermarkt.technology/portrait/big/432773-1652345536.jpg?lm=1"
  },
  {
    name: "Pablo",
    num: 30,
    img: "https://img.a.transfermarkt.technology/portrait/big/149577-1617369576.png?lm=1"
  },
  {
    name: "Ayrton Lucas",
    num: 6,
    img: "https://img.a.transfermarkt.technology/portrait/big/349585-1632577645.png?lm=1"
  },
  {
    name: "Diego Alves",
    num: 1,
    img: "https://img.a.transfermarkt.technology/portrait/big/42373-1543845950.jpg?lm=1"
  },
  {
    name: "Hugo Neneca",
    num: 45,
    img: "https://img.a.transfermarkt.technology/portrait/big/574901-1541567933.jpg?lm=1"
  }
];
const sortedPlayers = players.sort((a,b)=> a.num - b.num)

export {sortedPlayers};
