function getRandomDropletSize() {
	const size = ["lg", "md", "sm"];
	const randomIndex = Math.floor(Math.random() * size.length);
	return size[randomIndex];
}

const rainContainer = document.querySelector(".rain");

for (let i = 0; i < 30; i++) {
	const span = document.createElement("span");
	span.className = "droplet " + getRandomDropletSize();
	rainContainer.appendChild(span);
}

const droplets = rainContainer.querySelectorAll(".droplet");
droplets.forEach((el, i) => {
	el.style.left = `${Math.floor(Math.random() * 450)}px`;
	el.style.animation = `rain-drop ${
		600 + Math.random() * 1500
	}ms ease-out infinite both`;
	el.style.opacity = `${Math.random()}`;
	el.style.animationDelay = `${500 + Math.random() * 2000}ms`;
});
