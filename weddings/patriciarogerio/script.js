const watermark = document.querySelector('#watermark');
const petalsContainer = document.querySelector('#petals-container');
const petalImages = [document.querySelector('#petal1'), document.querySelector('#petal2')];
const flowersTop = document.querySelector('#flowers-top');
const flowersBottom1 = document.querySelector('#flowers-bottom1');
const flowersBottom2 = document.querySelector('#flowers-bottom2');
const textPatricia = document.querySelector('#text-patricia');
const textE = document.querySelector('#text-e');
const textRogerio = document.querySelector('#text-rogerio');
const textInvite = document.querySelector('#text-invite');
const textDate = document.querySelector('#text-date');
const textLocation = document.querySelector('#text-location');
const textAddress = document.querySelector('#text-address');
const buttonList = document.querySelector('#button-container1');
const buttonLocation = document.querySelector('#button-container2');
const buttonConfirmation = document.querySelector('#button-container3');
const textButtonList = document.querySelector('#text-button-list');
const textButtonLocation = document.querySelector('#text-button-location');
const textButtonConfirmation = document.querySelector('#text-button-confirmation');
const petals = [];

let time = 0;

window.onload = () => {
	setTextSizes();
	startAnimations();
	setTimeout(animate, 1500);
};
addEventListener('resize', setTextSizes);

function setTextSizes() {
	textInvite.style.fontSize = `${textInvite.getBoundingClientRect().width / 3}%`;
	textDate.style.fontSize = `${textDate.getBoundingClientRect().width / 2.2}%`;
	textLocation.style.fontSize = `${textLocation.getBoundingClientRect().width / 3}%`;
	textAddress.style.fontSize = `${textAddress.getBoundingClientRect().width / 3.5}%`;
	textButtonList.style.fontSize = `${textButtonList.getBoundingClientRect().width * 1.1}%`;
	textButtonLocation.style.fontSize = `${textButtonLocation.getBoundingClientRect().width * 1.1}%`;
	textButtonConfirmation.style.fontSize = `${textButtonConfirmation.getBoundingClientRect().width * 1.1}%`;
}

function startAnimations() {
	watermark.classList.add('animate');
	flowersTop.classList.add('animate');
	flowersBottom1.classList.add('animate');
	flowersBottom2.classList.add('animate');
	textPatricia.classList.add('animate');
	textE.classList.add('animate');
	textRogerio.classList.add('animate');
	textInvite.classList.add('animate');
	textDate.classList.add('animate');
	textLocation.classList.add('animate');
	textAddress.classList.add('animate');
	buttonList.classList.add('animate');
	buttonLocation.classList.add('animate');
	buttonConfirmation.classList.add('animate');
	textButtonList.classList.add('animate');
	textButtonLocation.classList.add('animate');
	textButtonConfirmation.classList.add('animate');
}

function animate() {
	time += 1;
	flowersTop.style.transform = `translateY(${Math.sin(time / 45)}%) rotate(${Math.sin(time / 45)}deg)`;
	flowersBottom1.style.transform = `translateY(${Math.sin(time / 45)}%) rotate(${Math.sin(time / 45)}deg)`;
	flowersBottom2.style.transform = `translateY(${Math.sin(time / 45)}%) rotate(${Math.sin(time / 45)}deg)`;
	petals.forEach(petal => {
		petal.time += 1;
		petal.y += 0.1;
		petal.x += Math.sin(petal.time / 45) / 10;
		petal.el.style.top = `${petal.y}%`;
		petal.el.style.left = `${petal.x}%`;
		if (petal.y > 100) {
			petal.el.remove();
			petals.splice(petals.indexOf(petal), 1);
		}
	});
	if (Math.random() < 0.0075) {
		createPetal();
	}
	requestAnimationFrame(animate);
}

function createPetal() {
	const petal = document.createElement('img');
	petal.src = Math.random() <= 0.5 ? petalImages[0].src : petalImages[1].src;
	petal.classList = 'image';
	const petalObj = {
		x: Math.random() * 90 + 10,
		y: -10,
		time: Math.random() * 360,
		el: petal
	};
	petal.style.width = `${Math.random() * 2 + 4}%`;
	petal.style.top = `${petalObj.y}%`;
	petal.style.left = `${petalObj.x}%`;
	petal.style.transform = `rotate(${Math.random() * 360}deg)`;
	petalsContainer.appendChild(petal);
	petals.push(petalObj);
}