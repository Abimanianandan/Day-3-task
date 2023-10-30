//question 1:-
//how to compare two JSON have the same properties without order?
let ob1={name:"person 1",age:5};
let obj2={age:5,name:"person 1"};
let JSON1=JSON.stringify(ob1);
let JSON2=JSON.stringify(obj2);
if(JSON1===JSON2){
    console.log("true");
}
else{
    console.log("false");
}

//question 2:-
//display all the  country flags in the console:-
    var message=new XMLHttpRequest(); 
    message.open("GET","https://restcountries.com/v3.1/all",true);
    message.send();
    message.onload=function(){
        var data=message.response;
        var result=JSON.parse(data);
        console.log(result);
        for(var i=0;i<result.length;i++){
            console.log(result[i].flags.png);
        }
    }

//question 3:-
// print all country names,regions,sub regions,populations:-
var request1=new XMLHttpRequest(); 
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload=function(){
    var data1=request1.response;
    var result1=JSON.parse(data1);
    console.log(result1);
    for(var i=0;i<result1.length;i++){
        console.log(result1[i].name.common,result1[i].region,result1[i].subregion,result1[i].population);
    }
}