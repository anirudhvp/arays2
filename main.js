var display_array=[]
var nameofstudent=[];
function submit(){
for(var j=1;j<=4;j++){
    var name_student=document.getElementById("name_"+j).value;
    console.log(name_student);
nameofstudent.push(name_student)
}
var leghnth_array=nameofstudent.length;
for(var k=0;k<leghnth_array;k++){
display_array.push("<h4>name"+nameofstudent[k]+"</h4>");
console.log(display_array)
}

    document.getElementById("display_name").innerHTML=display_array
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
    display_array.sort()
    document.getElementById("display_name").innerHTML=display_array;
}