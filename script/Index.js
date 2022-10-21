const btn = document.querySelector('button')
const amount = document.querySelector('#amount')
const  bill = document.querySelector('#bill')
const  noofnotes = document.querySelector('.no-notes')
const error = document.querySelector('.error');



const  showMessage = ( msg  ) => {
    error.style.display = "block"
    error.textContent =  msg
 }

btn.addEventListener('click' , (e) => {


const a = parseInt(amount.value) ; 
const b = parseInt(bill.value)   ;


calculatevalue([0,0,0,0,0,0,0])

if(a<0|| b<0 ) showMessage("CashGiven or billAmount can't be negative.");
else{if(b>0){
    if(a>=b){
        const amountToBeReturned = a-b;
        noofnotes.querySelectorAll('td').forEach(e  => e.remove())
        calculatevalue(amountToBeReturned);
    }else{
        showMessage("Cash given is lesser than the bill amount")
    }
}else{
    showMessage("Invalid Bill amount");
}}


 


} )


function calculatevalue(val) {
noofnotes.querySelectorAll('td').forEach(e  => e.remove())
let p = val
const divisor = [2000,500,100,20,10,5,1]
console.log('sahi');
 divisor.map(e => {
const i = Math.trunc(p/e) >= 0 ? Math.trunc(p/e)  : ''
console.log(i);
p = p % e ;
const el  = document.createElement('td')
el.textContent = i 
noofnotes.appendChild(el)
    
} )
}

