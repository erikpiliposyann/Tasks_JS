function isFalsy(value) {
    if(!value){
        return true;
    }
    else{
        return false;
    }
}
console.log(isFalsy(0));          
console.log(isFalsy(""));         
console.log(isFalsy(null));       
console.log(isFalsy(undefined));  
console.log(isFalsy(NaN));        
console.log(isFalsy(false));      

console.log(isFalsy(42));         
console.log(isFalsy("hello"));    
console.log(isFalsy(true));       
