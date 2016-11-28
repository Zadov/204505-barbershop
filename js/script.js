// Окно логина

var link = document.querySelector(".login");
var popup = document.querySelector(".modal_content");
var close = popup.querySelector(".modal_content_close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal_content_show");
	if(storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal_content_show");
	popup.classList.remove("modal_error");
});

form.addEventListener("submit", function(event) {
	event.preventDefault();
	if (!login.value || !password.value) {
		popup.classList.remove("modal_error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal_error");
	} else {
		localStorage.setItem("login", login.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal_content_show")) {
			popup.classList.remove("modal_content_show");
			popup.classList.remove("modal_error");
		}
	}
})

// Окно карты

var mapOpen = document.querySelector(".js_open_map");
var mapPopup = document.querySelector(".modal_content_map");
var overlay = document.querySelector(".modal_overlay");
var mapClose = mapPopup.querySelector(".modal_content_close");

mapOpen.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.add("modal_content_show");
	overlay.classList.add("modal_overlay_add");
});

mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.remove("modal_content_show");
	overlay.classList.remove("modal_overlay_add");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (mapPopup.classList.contains("modal_content_show")) {
			mapPopup.classList.remove("modal_content_show");
			overlay.classList.remove("modal_overlay_add");
		}
	}
});