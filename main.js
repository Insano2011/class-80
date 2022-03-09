var name_of_the_student_array=[]
function submit()
{
    var display_student_array = [];

    for ( var j= 1 ; j <= 4; j ++){

        var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
        name_of_the_student_array.push(name_of_the_student);
    }
    var len=name_of_the_student_array.length;

    for ( var k=0; k<len;k++ ){

        display_student_array.push("<h4>Name - "+name_of_the_student_array[k]+"</h4>");
    }
   document.getElementById("display_name_with_commas").innerHTML=display_student_array;

   var remove_comma=display_student_array.join(" ");
   document.getElementById("display_name_without_commas").innerHTML=remove_comma;

   document.getElementById("submit_button").style.display="none";

   document.getElementById("sort_button").style.display="inline-block"; 

}
function sorting(){
name_of_the_student_array.sort();
var display_student=[]
var len=name_of_the_student_array.length;

    for ( var k=0; k<len;k++ ){

        display_student.push("<h4>Name - "+name_of_the_student_array[k]+"</h4>");
    }
    var remove_comma=display_student.join(" ");

    document.getElementById("display_name_with_commas").innerHTML=display_student
    document.getElementById("display_name_without_cammas").innerHTML=remove_comma;
}