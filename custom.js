



var randomSetup = document.querySelector('.random-setup');
var randomPunchline = document.querySelector('.random-punchline');
var randomBtn = document.querySelector('.random-btn');

randomBtn.addEventListener('click',function(){
    async function handlePromise(){
        const data = await fetch('https://official-joke-api.appspot.com/random_joke')
        
        const jsonValue = await data.json();
       
        randomSetup.innerHTML = jsonValue.setup;
        randomPunchline.innerHTML = jsonValue.punchline;
        randomSetup.style.backgroundColor = '#fff'
        randomPunchline.style.backgroundColor = '#fff'
    }
    handlePromise();
}

)




