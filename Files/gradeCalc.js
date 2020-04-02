function submit()
{
  const arr = ["course","swone","swtwo","swthree","desired"];
  var allRows = [];
  for(let r = 1; r<= 10; r++)
  {
    var rowNum = [];
    for(let s = 0; s < 5; s++)
    {
      var i = "row-" + r + "-"+arr[s];
      var val = document.getElementById(i).value;
      rowNum.push(val);
    }
    allRows.push(rowNum);

  }
  var results = [];
  for(let r = 1; r<= 10; r++)
  {
      var calcs = [];
      var temp = allRows.pop();

      const desired = Number(temp.pop());
      const c3 = Number(temp.pop());
      const c2 = Number(temp.pop());
      const c1 = Number(temp.pop());

      calcs.push(temp.pop()); //adds class name in first
      calcs.push((3*desired)-c3-c2); //adds what is needed in 3rd six weeks
      calcs.push((c1+c2+c3)/3); //adds in semester grade before final exam
      calcs.push((desired-(c1+c2+c3)/3*0.85)/0.15); //adds what need on final based on current grades
      results.push(calcs); //adds in classes in reverse order
  }
  var output = "";
  output += "Class &emsp; 3rd SW exempt with desired grade &emsp; Semester before Exam &emsp; Final using current <br>";
  for(let r = 1; r<= 10; r++)
  {
    var temp = [];
    temp = results.pop();
      const finalGrade = temp.pop().toFixed(2);
      const oldSemGrade = temp.pop().toFixed(2);
      const thirdGrade = temp.pop().toFixed(2);
      const className = temp.pop();
    if(!(finalGrade == 0)){
        output += "" + className + "&emsp;" + thirdGrade + "&emsp;" + oldSemGrade + "&emsp;" + finalGrade + "<br>"; //make a table instead
    }
  }
  display(output);
}

function display (output){
    newWindow = window.open("", null, "height=500,width=700,status=yes,toolbar=no,menubar=no,location=no");
    newWindow.document.write(output);

}
