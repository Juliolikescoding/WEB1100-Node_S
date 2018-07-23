function closure(x){
    let y = 4
    return function inner(){
        console.log(y, x)
    }
}

const close = closure(2)
const close2 = closure(5)
console.log(close2())