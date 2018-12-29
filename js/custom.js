const button = document.querySelectorAll('button');
const numDisplay = document.querySelector('.numDisplay');

for(var i = 0; i < button.length; i++){
    var prevBtn = [];
    button[i].addEventListener('click', function(){
        
        // capture button value as string
        var currentBtn = this.innerText;
        if(currentBtn === "="){
            var total = eval(numDisplay.innerText);
            if(total === undefined || NaN){
                prevBtn = [];
                return numDisplay.innerText = "Error";                
            }else{
                console.log(total);
                prevBtn = [];
                return numDisplay.innerText = total;
            }
        }else if(currentBtn === "clear"){
            prevBtn = [];
            return numDisplay.innerText = "0";
        }else{
        // value added to previous button values array
        prevBtn.push(currentBtn);
        console.log(prevBtn);

        // display buttons that have been pressed
        // also removes commas from array when displayed 
        numDisplay.innerText = prevBtn.join("");
        }
    });
};


