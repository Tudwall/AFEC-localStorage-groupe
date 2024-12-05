let id = 0;
let tasks = [];

const affiche = (tableau) => {
	const table = document.getElementById("tasktable");
	table.innerHTML = "";

	tableau.forEach((element) => {
		const nom = element.name;
		const ligne = document.createElement("tr");
		const celluleNom = document.createElement("td");
		const celluleOk = document.createElement("td");
		const celluleSuppr = document.createElement("td");

		celluleNom.textContent = nom;

		const boutonOk = document.createElement("button");
		if (element.completed) {
			boutonOk.textContent = "terminé";
		} else {
			boutonOk.textContent = "pas fait";
		}
		celluleOk.appendChild(boutonOk);

		const boutonSup = document.createElement("button");
		boutonSup.textContent = "supprimer";
		celluleSuppr.appendChild(boutonSup);

		ligne.appendChild(celluleNom, celluleOk, celluleSuppr);
		ligne.appendChild(celluleOk);
		ligne.appendChild(celluleSuppr);

		table.appendChild(ligne);
	});
};

const addTask = (arr) => {
	const taskInput = document.querySelector("input");
	const task = {
		id: `${id++}`,
		name: `${taskInput.value}`,
		completed: false,
	};
	arr.push(task);
	localStorage.setItem("task-array", JSON.stringify(arr));
	recupDonnees();
};

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	addTask(tasks);
});

const recupDonnees = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(JSON.parse(localStorage.getItem("task-array")));
		}, 1000);
	}).then((data) => {
		affiche(data);
	});
};

document.addEventListener("DOMContentLoaded", () => {
	recupDonnees();
});
