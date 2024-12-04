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
    console.log(tasks);
  });
};
recupDonnees();
