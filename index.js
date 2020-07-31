
/*````````````Generate Pin Section Starts`````````````*/

function generatePin() {
    let pin = Math.round( 1000 + Math.random() * 9000 ) ;
    let showGeneratePin = document.getElementById ( 'show-generate-pin' ) ;
    showGeneratePin.value = pin ;
    showGeneratePin.style.textAlign = 'center' ;
}

/*````````````Generate Pin Section ends`````````````*/


/*````````````Calculator button Section Starts``````````*/

document.getElementById('calCulatorBody').addEventListener('click',(event)=> {
    let userInput = document.getElementById('userInput') ;
    userInput.style.textAlign = 'center' ;

    /*    Check the Number Button  starts */

    if( userInput.value.length < 4 ) {
        if( event.target.classname = 'button' ) {
            if( event.target.id!='deleteButton' && event.target.id!='submitButton' &&  event.target.id != 'try-left' ) {
                userInput.value += event.target.innerText ;
            }
        }
    }
     /*    Check the Number Button ends    */

     /*   Clear and Clean Button  starts */

     if( event.target.id == 'clearButton' ) {
         userInput.value = '' ;
     }

     if(event.target.id == 'deleteButton') {
         userInput.value = userInput.value.slice( 0,-1 ) ;
     }

    /*   Clear and Clean Button  ends  */

})

/*````````````Calculator Button Section ends```````````*/



/*Comparison generate pin and userSubmit pin section starts */

document.getElementById('submitButton').addEventListener('click',(event)=> {
    let showGeneratePin = document.getElementById ( 'show-generate-pin' ).value ;
    let userInput = document.getElementById('userInput').value ;

    if ( userInput >= 0 ) {
        if( showGeneratePin == '' || userInput == '' ) {
            alert("You didn't generate any pin or didn't give any input value") ;

        }
        else if ( showGeneratePin == userInput ) {
            document.getElementById( 'passwordMatched' ).style.display = 'block' ;
            document.getElementById( 'passwordWrong' ).style.display = 'none' ;
            
        }
    }




})


/* Comparison generate pin and userSubmit pin section ends  */
