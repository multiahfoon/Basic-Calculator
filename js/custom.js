

const button = document.querySelectorAll('button');
const numDisplay = document.querySelector('.numDisplay');

for(var i = 0; i < button.length; i++){
    var prevBtn = [];
    button[i].addEventListener('click', function(){
        
        // capture button value as string
        const currentBtn = this.innerText;
        if(currentBtn === "="){
            const total = eval(numDisplay.innerText);
            if(total === isNaN || undefined){
                prevBtn = [];
                return numDisplay.innerText = "Error";                
            }else if(total == SyntaxError){
                console.log("not working");
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
// ERROR: eval producess error when a symbole is asked to be evaluated
// returns error 
// need better understanding of what type of problem eval is having

