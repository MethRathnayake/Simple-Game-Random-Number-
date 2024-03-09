console.log("Good Night!")

let step = 3;

let num = Math.round(Math.random()*10);
console.log(num);

let input_value;
function input(){
input_value = document.getElementById("input_no").value;
input_value=Number(input_value);
console.log(typeof(input_value));
console.log(input_value);
if(num === input_value){
    console.log("abc");
    alert("You Win 🏅");
    location.reload();
}
else {
    step--;
    let type = `<h3>You have ${step} more time left (Don't Give Up) </h3>`;
    document.getElementById("type").innerHTML = type;
    console.log(step);
    document.getElementById("input_no").value=""
    if(input_value<num){
        document.getElementById("type").innerHTML += document.getElementById("type").innerHTML = `<h3>Your Number, ${input_value} less than Random Number </h3>`
    }
    else if(input_value>num){
        document.getElementById("type").innerHTML += document.getElementById("type").innerHTML = `<h3>Your Number, ${input_value} Greater than Random Number </h3>`
    }

   if(step === 0){
    alert("You loose ☹️ (Try Again)")
    reset();
   }
}


}

function reset(){
    location.reload();

}
// let date = new Date();
// console.log(date)
// let a = Math.floor(4,20);
// console.log(a)

// let customer={
//     name:"Meth",
//     age :16,
//     DOB : "27.04.2007"}

//     console.log(customer)

//     let jsonObj = JSON.stringify(customer);
//     console.log(jsonObj);

//     let jsObj = JSON.parse(jsonObj);
//     console.log(jsObj.DOB);
//     console.log(jsObj)

//     let b = '{"name":"Meth","age":16,"DOB":"27.04.2007"}';
//     console.log(b)
//     console.log(JSON.parse(b));

    // let fun = van => {return "Hello World!!!"+van};
    // console.log(fun(10));  
  

