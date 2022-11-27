 function submit(inputId,check,inputText,price){
    
    const inputInner = document.getElementById(inputId);
    const inputValue = inputInner.value;

    // if er por caile amra sora sori condition er name ta di dite pare aykhan a condition ta true dore nibe
    if(check){
        const input = parseInt(inputValue) + 1 ;
        inputInner.value = input ;
    
    }else if ( inputValue > 0){
        const input = parseInt(inputValue) - 1 ;
        inputInner.value = input ;
    } 
    const plusText = document.getElementById(inputText);
    plusText.innerText = inputInner.value * price ;
    // inner text
    const subtotal =document.getElementById('subtotal');
    const subtatalInner = subtotal.innerText;

    const percentage =document.getElementById('percentage');
    const percentageInner = percentage.innerText;

    const total =document.getElementById('total');
    const totalInner = total.innerText;
    
    // total ammount
    const firstAmmount = document.getElementById('text').innerText;
    const secondAmmount = document.getElementById('product-text').innerText;
    const totalAmmount = parseInt(firstAmmount) + parseInt(secondAmmount);
    subtotal.innerText = totalAmmount;
    // percentage
    const subtotalper = subtotal.innerText / 10 ;
    percentage.innerText = subtotalper;
    
    // total
    const totalPrice = parseFloat(subtotal.innerText) +  parseFloat(percentage.innerText) ;
    total.innerText = totalPrice ;

 }

 document.getElementById('minus').addEventListener('click',function(){
    submit("input",false,"text",1000);
 })

document.getElementById('plus').addEventListener('click',function(){
    submit("input",true,"text",1000);
    
})

// 2i tai to same kaj tahole kno code er id er nam ta change kore dite hoi same dile input ase na kno
document.getElementById('product-minus').addEventListener('click',function(){
    submit("product-input",false,"product-text",500);

})
document.getElementById('product-plus').addEventListener('click',function(){
    submit("product-input",true,"product-text",500);
    
})
// display hide
document.getElementById('cross').addEventListener('click',function(){
    document.getElementById("firstDiv").style.display = "none";
})
document.getElementById('secondCross').addEventListener('click',function(){
    document.getElementById("secondDiv").style.display = "none";
})