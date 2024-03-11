



document.querySelector(".js-haich-button").addEventListener("click", () => { 
    playGame("haich");
});
document.querySelector(".js-chuluu-button").addEventListener("click", () => { 
    playGame("chuluu");
});
document.querySelector(".js-daawuu-button").addEventListener("click", () => { 
    playGame("daawuu");
});

function playComputer(computer) {
    const randomNumber = Math.random(); //[0.1]
    let computerMove = "";
    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = "haich" ; 
    }
    else if(randomNumber >= 1 /3 && randomNumber < 2/3){
        computerMove = "chuluu" ; 
    }
    else if(randomNumber >= 2 /3 && randomNumber < 1){
        computerMove = "daawuu" ; 
    }
}






function playGame(playUser){
    let result= "";
    if(playUser === "haich"){
        if(computer ==="haich"){
        result ="Тэнцлээ";    
        } else if(computer ==="chuluu"){
            result= "Яллаа";
        } else if(computer ==="daawuu"){
            result= "Ялагдлаа";
        }
    }   
    if(playUser === "chuluu"){
        if(computer ==="haich"){
        result ="Яллаа";    
        } else if(computer ==="chuluu"){
            result= "Тэнцлээ";
        } else if(computer ==="daawuu"){
            result= "Ялагдлаа";
    }
}
    if(playUser === "daawuu"){
        if(computer ==="haich"){
        result ="Ялагдлаа";    
        } else if(computer ==="chuluu"){
            result= "Яллаа";
        } else if(computer ==="daawuu"){
            result= "Тэнцлээ";
    }
    }

    

    document.querySelector(".result").innerHTML = result;
document.querySelector(".js-moves").innerHTML = `Та
    <img src="images/${playUser}.PNG" class="move-icon" >
    <img src="images/${computer}.PNG" class="move-icon" > Компьютэр`;
}