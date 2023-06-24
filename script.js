const btns = document.querySelectorAll('p')

btns.forEach((btn) => btn.addEventListener('click', () =>{ 
    if(!btn.id){
    let val = btn.innerText
    console.log(val)

    let userInput = document.querySelector('#input').innerHTML 
    console.log(userInput);

    if(val === 'AC' ){
        document.querySelector('#input').innerHTML  = ''
    }else if(val === 'Del'){
        let finalStr = document.querySelector('#input').innerHTML .slice(0, userInput.length - 1)
        document.querySelector('#input').innerHTML  = finalStr
    }else if(val === '='){
        document.querySelector('#input').innerHTML  += val + calculate(userInput)
    }else{
        document.querySelector('#input').innerHTML  += val 
    }
}
}))

function calculate(string) {
    if (string.indexOf('+') !== -1) {
        let a = string.indexOf('+')
        let ans = Number(string.slice(0, a)) + Number(string.slice(a+1)) 
        return ans
    }else  if (string.indexOf('-') !== -1) {
        let a = string.indexOf('-')
        return string.slice(0, a) - string.slice(a+1)
    }else  if (string.indexOf('*') !== -1) {
        let a = string.indexOf('*')
        return string.slice(0, a) * string.slice(a+1)
    } else  if (string.indexOf('/') !== -1) {
        let a = string.indexOf('/')
        return string.slice(0, a) / string.slice(a+1) 
    }else  if (string.indexOf('%') !== -1) {
        let a = string.indexOf('%')
        return string.slice(0, a) % string.slice(a+1)
    }


}

console.log(calculate('3*8'))