
function myfunc() 
{
let FirstText = document. getElementById("ftext") . value;
let SecondText= document. getElementById("stext") . value;
let Result = FirstText.concat(' ', SecondText)
return Result;
}

function conCat(){
    let Result=myfunc();
    let output = document.getElementById("Rtext");
    output.value = Result;
}

function revConFun()
{
    let Result=myfunc();
    let revArr=[];
    let arrLength=Result.length;
    for(let i=arrLength;i>=0;i--){
        revArr.push(Result[i]);
    }

   let output = document.getElementById("Rtext");
   output.value=revArr.join('');
}

function splitHalf()
{
let Result=myfunc();
let arrLength=Result.length;
let str1=Result.slice(0,arrLength/2)
let str2=Result.slice(arrLength/2,arrLength)
alert("first split :"+" "+str1)
alert("second split :"+" "+str2)

    
}
function removeWhite(){

    let Result=myfunc(); 
    let newArr=Result.trim();
    let output = document.getElementById("Rtext");
    output.value=newArr;
}
function sample(){
    alert("Working...")
}
function clears(){
 document. getElementById("ftext").value=""
document. getElementById("stext").value=""
}




