//question 1:-
//how to compare two JSON have the same properties without order?
var obj1=JSON.stringify(obj1);
var obj2=JSON.stringify(obj2);
console.log(obj1===obj2);

//question 2:-
//display all the  country flags in the console:-
    var request=new XMLHttpRequest(); 
    request.open("GET","https://restcountries.com/v3.1/all",true);
    request.send();
    request.onload=function(){
        var data=request.response;
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
    var data=request1.response;
    var result1=JSON.parse(data);
    console.log(result1);
    for(var i=0;i<result1.length;i++){
        console.log(result1[i].name.common,result1[i].region,result1[i].subregion,result1[i].population);
    }
}