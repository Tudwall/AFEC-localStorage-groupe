let tasks = [
  {
    id: 1,
    name: "lessive",
    completed: false,
  },
  {
    id: 2,
    name: "vaiselle",
    completed: false,
  },
];

const recupDonnees = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  }).then(() => {
    return tasks;
  });
};
recupDonnees();

const affiche = (tableau) => {
  tableau.forEach((element) => {
    const nom = element.name;
    const ligne = document.createElement("tr");
    const celluleNom = document.createElement("td");
    const celluleOk = document.createElement("td");
    const celluleSupr = document.createElement("td");
  });
};
