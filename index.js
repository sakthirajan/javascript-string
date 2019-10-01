// Import stylesheets
import "./style.css";

// Write Javascript code!
const one = document.getElementById("1");
one.innerHTML = `1.)Write a JavaScript function to check whether an 'input' is a string or not.

Test Data:
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false`;

function is_string(str) {
  if (typeof str === "string") {
    return true;
  } else {
    return false;
  }
}
console.log(is_string("str"));
console.log(is_string([1, 2, 3, 4]));

const two = document.getElementById("2");
two.innerHTML = `2.)Write a JavaScript function to check whether a string is blank or not.

Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false`;

function is_Blank(str) {
  if (str.length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(is_Blank("str"));
console.log(is_Blank(""));

const three = document.getElementById("3");
three.innerHTML = `3.)Write a JavaScript function to split a string and convert it into an array of words.

Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]`;

function string_to_array(str) {
  return str.trim().split("");
}

console.log(string_to_array("Sakthirajan"));

const four = document.getElementById("4");
four.innerHTML = `4.)Write a JavaScript function to extract a specified number of characters from a string.
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"`;

function truncate_string(str, length) {
  if (typeof str === "string" && str.length > 0) {
    return str.slice(0, length);
  }
}
console.log(truncate_string("Robin Singh", 4));

const five = document.getElementById("5");
five.innerHTML = `5.)Write a JavaScript function to convert a string in abbreviated form.
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."`;

function abbrev_name(str) {
  var split_names = str.trim().split(" ");
  if (split_names.length > 1) {
    return split_names[0] + " " + split_names[1].charAt(0) + ".";
  }
}
console.log(abbrev_name("Robin Singh"));

const six = document.getElementById("6");
six.innerHTML = `6.)Write a JavaScript function to hide email addresses to protect from unauthorized user.
Test Data:
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"`;

function prodect_email(email) {
  var splitted, part1, part2, avg;
  splitted = email.trim().split("@");
  part1 = 
  avg = splitted[0].length / 2;
}
