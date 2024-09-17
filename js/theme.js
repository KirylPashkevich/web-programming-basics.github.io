let DayNightButton = document.getElementById('theme-toggle'); 
const NightColor = '#000000a5';

if(localStorage.getItem('Theme')==='DAY'){
    ChangeTheme('DAY')
}
else{
    ChangeTheme('NIGHT')
}


  


function ChangeTheme (ThemeValue){
    if(ThemeValue==='DAY'){
        localStorage.removeItem('Theme')
        localStorage.setItem('Theme','DAY');
        document.body.style.backgroundColor = '#f3f4f2';
        document.body.style.color = 'Black'; 
        document.body.classList.remove('body.dark');
        document.getElementById("todel").style.display="block";
        document.querySelector('.featured-section__container').style.backgroundColor = "#f9f9f9";
    const allTextElements = document.querySelectorAll("span, a, h2, p, h3, h4, button, select");
    allTextElements.forEach((element) => {
        element.style.color = "Black";
    });

        document.body.classList.add("body.light");
        document.querySelectorAll(".propertie-block").forEach(element => {
            element.style.backgroundColor = "White";
          });
          document.querySelectorAll(".featured-section__item").forEach(element => {
            element.style.backgroundColor = "White";
          });
          
    }
    else if(ThemeValue==='NIGHT'){

        localStorage.removeItem('Theme')
        localStorage.setItem('Theme','NIGHT');
        document.body.style.backgroundColor = NightColor;
        document.body.style.color = '#fff';
        document.querySelector('.featured-section__container').style.backgroundColor = NightColor;
        document.body.classList.remove('body.light');
        document.body.classList.add('body.dark'); 
        document.querySelectorAll(".propertie-block").forEach(element => {
            element.style.backgroundColor = "Gray";
          });
          document.querySelectorAll(".featured-section__item").forEach(element => {
            element.style.backgroundColor = "Gray";
          });
           document.getElementById("todel").style.display="none";
     
            const allTextElements = document.querySelectorAll("span, a, h2, p, h3, h4, button, select");
            allTextElements.forEach((element) => {
                element.style.color = "#fff"; 
            });
           

    }
}

document.addEventListener('DOMContentLoaded', function() {
    DayNightButton.addEventListener('click', function() {
        if (document.body.classList.contains('body.dark')) { 
            ChangeTheme('DAY')
        } else {
            ChangeTheme('NIGHT')
        }
    });
});