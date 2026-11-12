const dsiplay=document.getElementById("display");
const operator=['+','-','*','/'];

function appendValue(value){
    if(dsiplay.value==='Error') dsiplay.value='0';

    if (dsiplay.value==='0' && !operator.includes(value)) {
        dsiplay.value= value;
        
    }
    else{
        display.value +=value;
    }
}

function clearDisplay(){
    display.value= '0';
}

function calculateResult(){
    try{
        const result =eval(display.value);
        display.value = isFinite(result) ? result : 'Error';
    }
    catch (error){
        console.log('Real error:', error);
        display.value='Error';

    }
}

function deleteLast(){
    if (display.value==='Error'){
        display.value= '0';

    }
    else{
        display.value=display.value.slice(0, -1) || '0';
    }

}