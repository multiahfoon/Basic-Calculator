const button = document.querySelectorAll('button');
const numDisplay = document.querySelector('.numDisplay');

for(var i = 0; i < button.length; i++){
    var prevBtn = [];
    button[i].addEventListener('click', function(){
        
        // capture button value as string
        var currentBtn = this.innerText;

        if(currentBtn === "="){
            let total = eval(numDisplay.innerText);
            console.log(total);
            prevBtn = [];
            return numDisplay.innerText = total;
        }else if(currentBtn === "clear"){
            prevBtn = [];
            return numDisplay.innerText = "0";
        }

        // value added to previouse button values array
        prevBtn.push(currentBtn);
        console.log(prevBtn);

        // display buttons that have been pressed
        // also removes commas from array output
        numDisplay.innerText = prevBtn.join("");
    });
};


