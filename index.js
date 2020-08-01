/*````````````Generate Pin Section Starts`````````````*/

function generatePin() {
    let pin = Math.round( 1000 + Math.random() * 9000 ) ;
    let showGeneratePin = document.getElementById ( 'show-generate-pin' ) ;
    showGeneratePin.value = pin ;
    showGeneratePin.style.textAlign = 'center' ;
}

/*````````````Generate Pin Section ends`````````````*/



/*````````````Calculator button Section Starts``````````*/

document.getElementById( 'calc-body' ).addEventListener('click',function(event){
    let userInput = document.getElementById('userInput');

    if (userInput.value.length <4 ) {
        if(event.target.className == 'button' ){
            if (event.target.id!='deleteButton' && event.target.id!='submitButton' && event.target.id!='try-left') {

                userInput.value += event.target.innerText ;
            }
        }
    } 

    if(event.target.id == 'clearButton') {
        userInput.value = '' ;
    }
    if(event.target.id == 'deleteButton') {
        userInput.value = userInput.value.slice( 0,-1 ) ;
    }


})

/*````````````Calculator Button Section ends```````````*/






/*Comparison generate pin and userSubmit pin section starts */

document.getElementById('submitButton').addEventListener('click',(event)=> {
    let showGeneratePin = document.getElementById ( 'show-generate-pin' ).value ;
    let userInput = document.getElementById('userInput').value ;

    document.getElementById('userInput').style.textAlign = 'center' ;

    if ( showGeneratePin >=0 && userInput >=0 ) {
        if( (showGeneratePin =="" && userInput == "") || (showGeneratePin == "" || userInput == "")) {
            alert("You didn't generate any pin or didn't give any input value") ;

        }
        else if ( showGeneratePin == userInput ) {
            document.getElementById( 'passwordMatched' ).style.display = 'block' ;
            document.getElementById('passwordWrong').style.display = 'none' ;

        }
        else{
            document.getElementById('passwordWrong').style.display = 'block';
            document.getElementById('passwordMatched').style.display = 'none';
        
            let tryLeft = parseInt(document.getElementById('try-left').innerText);
            console.log(tryLeft) ;
            tryLeft = tryLeft-1;
            if(tryLeft>0){
                if( userInput.length<4 ){
                alert('Enter only 4 digits pin.Not more or less than that' );
            }
                document.getElementById('try-left').innerText = tryLeft +' try left';
            }
    
            else{
                document.getElementById('try-left').innerText = tryLeft +' try left';
                document.getElementById('submitButton').disabled = true;
                document.getElementById('blockedMessage').style.display = 'block';
                document.getElementById('passwordWrong').style.display = 'none';
                document.getElementById('passwordMatched').style.display = 'none';
            }
   
        }
        
 
        document.getElementById('userInput').value = "";
    }

})


/* Comparison generate pin and userSubmit pin section ends  */
