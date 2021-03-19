const numberPerPage = 5;
const numberOfPage = 23;
const pages = [];
const button = document.querySelector(".btn");
const pageShow = document.querySelector(".page");
init();

function init() {
	createNumberPage();
	createBtn();
}

function createNumberPage() {
	for (let i = 1; i <= numberOfPage; i++) {
		pages.push(`document ${i}`);
		if (i <= numberPerPage) {
			const div = document.createElement("div");
			div.innerText = pages[i-1];
			pageShow.appendChild(div);
		}
	}
}

function createBtn() {
	const nbreButton = Math.ceil(pages.length / numberPerPage);
	for (let j = 0; j < nbreButton; j++) {
		const btn = document.createElement("button");
		btn.innerText = j + 1;
		button.appendChild(btn);
		btn.addEventListener("click", pageApparition);
	}
}

function pageApparition() {
	numberPage = this.innerText;
	let depart = numberPerPage*numberPage - numberPerPage;
	pageShow.innerText = "";
	for(let i = depart; i < depart + numberPerPage; i++) {
		if (pages[i]) {
			const div = document.createElement("div");
			div.innerText = pages[i];
			pageShow.appendChild(div);
		}
	}
}
