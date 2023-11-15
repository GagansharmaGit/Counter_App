const currentValue = document.querySelector('#counter');

const increment = ()=>{
    let value = parseInt(currentValue.innerText);
    value = value+1;
    currentValue.innerText = value;
}

const decrement = ()=>{
    let value = parseInt(currentValue.innerHTML);
    value = value - 1;
    currentValue.innerText = value;
}