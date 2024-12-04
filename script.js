/* let tasks = [
	{
		id: 1,
		name: "lessive",
		completed: false,
	},
	{
		id: 2,
		name: "vaiselle",
		completed: true,
	},
]; */

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

		celluleNom.textContent = nom;

		const boutonOk = document.createElement("button");
		if (element.completed) {
			boutonOk.textContent = "terminé";
		} else {
			boutonOk.textContent = "pas fait";
		}
		celluleOk.appendChild(boutonOk);

		const boutonSup = document.createElement("button");
		boutonSup.textContent = "supprimé";
		celluleSupr.appendChild(boutonSup);

		ligne.appendChild(celluleNom, celluleOk, celluleSupr);
		ligne.appendChild(celluleOk);
		ligne.appendChild(celluleSupr);

		document.getElementById("tasktable").appendChild(ligne);
	});
};

let id = 0;
let tasks = [];

const addTask = (arr) => {
	const taskInput = document.querySelector("input");
	const task = {
		id: `${id++}`,
		name: `${taskInput.value}`,
		completed: false,
	};
	arr.push(task);
	localStorage.setItem("task-array", JSON.stringify(arr));
};

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	addTask(tasks);
});
