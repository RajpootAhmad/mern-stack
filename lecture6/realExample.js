function update(){
    console.log("update");
    var input =document.getElementById("myinput");
    console.log(input.value);
    var output =document.getElementById("output");
    console.log(output.value);
    output.innerHTML = input.value;
}