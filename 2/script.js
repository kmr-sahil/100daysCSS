const menu = document.querySelector(".container");

const handleClick = () => {
	menu.classList.toggle("active");
};

menu.addEventListener("click", handleClick);