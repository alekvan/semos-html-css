console.log("Hello World");

const people = [
  {
    name: "Boban Sugareski",
    club: "Arsenal",
  },
  {
    name: "Zoki",
    club: "Bregalnica",
  },
  {
    name: "Ivo",
    club: null,
  },
];
people.forEach((person) => {
  if (person.club !== String) {
    console.log("Nema klub");
  } else console.log(person.club);
});
