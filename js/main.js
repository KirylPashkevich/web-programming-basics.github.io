let tab = function () {
    let tabNav = document.querySelectorAll('.tab'),
        tabContent = document.querySelectorAll('.tabs-content'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    })
    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active')
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContenet(tabName);
    }
    function selectTabContenet(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName)? item.classList.add('is-active'): item.classList.remove('is-active');
        })
    }
};
tab();



// Иконка сердца меняет цвет

const heartColor = document.querySelector('.properties-wrapper');
heartColor.addEventListener('click', (event) => {
    event.target.classList.toggle('like--red')
});



// Мобильное меню 

const btn = document.querySelectorAll('.menu__btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const closeIcon = document.querySelector('.close__icon');

btn.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	if (e.target === modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});

closeIcon.addEventListener('click', (e) => {
	if (e.target === closeIcon) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});

if (localStorage.getItem("Logged") !== null) {
    // for admin
    let splitUserData = JSON.parse(localStorage.getItem("Logged"));

    if (splitUserData.role === "admin") {
        // ... (код для админа) ...
    } else {
  
        document.getElementById("header-content-nav-login").style.display = "none";

        document.getElementById("ham-admin").style.display = "none";
    }
}
else{
    document.getElementById("header-content-nav-logout").style.display = "none";
    document.getElementById("header-content-nav-location").style.display = "none";
    document.getElementById("header-content-nav-news").style.display = "none";

    document.getElementById("ham-admin").style.display = "none";
}

document.getElementById("header-content-nav-logout").addEventListener("click", () => {
    localStorage.removeItem("Logged");

window.location.reload();
});