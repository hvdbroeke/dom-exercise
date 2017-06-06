/*global alert, console*/

//Task #1

//Access HTML Element Id tag-line
var tagLine = document.getElementById("tag-line");
console.log(tagLine);
//Access all heading of div class=bg-main-content
var mainContentHeadings = document.querySelectorAll(".bg-main-content h2");
console.log(mainContentHeadings);
//Create the variable collect and assign it with content of tag-line.
var collect = tagLine.innerHTML + "\n------------------------------------------\n\n";
console.log(collect);
//Loop through the array of headings and append the content of each heading to variable collect
var i;
for (i = 0; i < mainContentHeadings.length; i += 1) {
    collect += mainContentHeadings[i].innerHTML + "\n";
}

//After the loop, use alert to print collect
alert(collect);

//Task #2

//Access 13th div with class name box that belongs to div with the class name bg-main-content. You can name the variable when_to_launch.
var when_to_launch = document.querySelectorAll(".bg-main-content .box")[12];
console.log(when_to_launch);

//Use property children to "scoop" in array all HTML elements that belong to that div.
var childrenScoop = when_to_launch.children;
console.log(childrenScoop);
//Create the variable collect and assign it with content of heading that belongs to gotten array.
var collectTwo = childrenScoop[0].innerHTML + "\n------------------------\n\n";

//Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
for (i = 1; i < childrenScoop.length; i += 1) {
    collectTwo += childrenScoop[i].innerHTML + "\n\n";
}
//After the loop, use alert to print collect
alert(collectTwo);
