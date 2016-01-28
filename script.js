var pinCode = "9999";

// leftPad by timrwood
// http://stackoverflow.com/questions/8043026/javascript-format-number-to-have-2-digit
function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

function check(combo){
	if(combo == pinCode){
    return true;
  }
  else false;
}

var found = false;
var count = 0;

while(!found && count < 10000){
  // alert("in while loop");
  var output = leftPad(count,4);
  // alert("got output: "+output);
  // alert("found is: " + check(output));
  found = check(output);


  count++;

if (found == true) {
	alert(output);
}
}
