import { translateVar } from "./translateVariabels.js";
var button = document.getElementById('En-Rus_Button');

if(localStorage.getItem('lang')==='EN'){
    button.textContent = 'EN';   
    ChangeLang('EN')
}
else{
    button.textContent = 'RU';
    ChangeLang('RU')
}

export function ChangeLang(LangValue){
    const translation =  translateVar[LangValue];
	const elements = document.querySelectorAll('[data-i18]');
	
	//button.textContent = LangValue;
	
	localStorage.setItem('lang',LangValue);
	
	elements.forEach((element)=>{
		const key = element.getAttribute('data-i18');
		const translatedText = translation[key];
		
		element.textContent = translatedText;
	}
	)
}

document.addEventListener('DOMContentLoaded', function() {   
  
    button.addEventListener('click', function(){
       
        if (button.textContent === 'Язык') {   
            button.textContent = 'EN';       
            ChangeLang('EN')
        } 
    
        else {    
            button.textContent = 'Язык';
            ChangeLang('RU')
        }
    }
    );

});





