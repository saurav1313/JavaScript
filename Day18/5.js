function FetchNextElement(array){
    let idx = 0;
    function next(){
        if(idx == array.length){
            return {value:undefined, done: true};
        }
        const nextElement = array[idx];
        idx++;
        return {value: nextElement, done: false};
    }
    return{next};
}
const automatically = FetchNextElement([4,8,9,10,12,13,14,15]);
console.log(automatically.next());
console.log(automatically.next());
console.log(automatically.next());
console.log(automatically.next());
console.log(automatically.next());
console.log(automatically.next());
// console.log(automatically.next());
// console.log(automatically.next());
// console.log(automatically.next());