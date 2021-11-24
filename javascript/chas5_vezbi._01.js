const rectangle = {
  width: 100,
  height: 300,
};

function rectArea(area) {
  return area.width * area.height;
}

//Team points

console.log(rectArea(rectangle));
// win 3 loss -1 draw 1
const team = {
  wins: 3,
  losses: 2,
  draws: 3,
};
// dekonstrukcija const {wins, losses, draws} = teams
function winLossRatio(teams) {
  const { wins, losses, draws } = teams;
  return wins * 3 + losses * -1 + draws;
}
console.log(winLossRatio(team));

//Zivotni

const farmAnimal = [
  { tip: "Horse", numberOfLegs: 4 },
  { tip: "Sheep", numberOfLegs: 4 },
  { tip: "Chicken", numberOfLegs: 2 },
  { tip: "Fish", numberOfLegs: 0 },
];

const animalsMoreThan4Legs = (animals) => {
  animals.forEach((animal) => {});
};
