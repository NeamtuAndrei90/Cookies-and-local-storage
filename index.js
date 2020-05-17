//For local storage

function setLocalStorage(){
    const romana = document.getElementById('romana');
    const english = document.getElementById('english');
    romana.addEventListener("click", () => {
        localStorage.setItem('language', 'ro-RO')
    })
    english.addEventListener("click", () => {
        localStorage.setItem('language', 'en-US')
    })
    if(romana.value === localStorage.language){
        romana.checked = 'checked';
    };
    if(english.value === localStorage.language){
        english.checked = 'checked';
    }
}
setLocalStorage();
console.log(localStorage.getItem('language'));

//For cookies

function getcookiesAsObjects(){
    let cookieArray = document.cookie.split(";") 
    let cookieObj = {};
    cookieArray.forEach((element) => {
    let cookieData = element.split("=")
    cookieObj[cookieData[0]] = cookieData[1]
})
return cookieObj;
}

document.cookie = "_name=Neamtu Andrei; expires=Mon, 18 May 2020 12:00:00 UTC; path=/"

function setCookies(){
    const cookieObject = getcookiesAsObjects();
    const languageRadio = document.getElementsByName('userLanguage');
    for(let i = 0; i < languageRadio.length; i++){
        if(languageRadio[i].value === cookieObject.language){
            languageRadio[i].checked = "checked"
        }
        languageRadio[i].addEventListener("click", (event) => {
            document.cookie = `language=${event.target.value}`;
        })
    }
}
setCookies();