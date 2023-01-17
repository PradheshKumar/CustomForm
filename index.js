let checkedFields = [];
let submitted = false,
  inputFields;
const submitBtn = document.querySelector(".submitBtn");
if (localStorage.getItem("sinkurrefgs") == "treghjk") {
  alert("You Have Already Submitted The Form.");
  window.location.href = "submission.html";
}
const ques = {
  "1.	Which of the following are not a pop up box function in JavaScript": [
    "alert()",
    "error()",
    "confirm()",
    "prompt()",
  ],
  "2.Which of the following is an incorrect way of checking the \
  condition \
  <pre><b>if a is equal to b </b></pre>": [
    "if(a=b)",
    "if(a==b)",
    "if(a===b)",
    "None of The Above",
  ],
  "3.Which of the following method is used when we send a API request using our browser ?":
    ["GET", "POST", "PATCH", "None of The Above"],
  "4.Which of the following is the correct order in terms of font size of a heading tag in HTML ?":
    [
      "h1 < h2 < h3 < h4 < h5 < h6 ",
      "h3 < h4 < h1 < h2 < h5 < h6",
      "h1 = h2 = h3 = h4 = h5 = h6(All are equal)",
      "None of The Above",
    ],
  "5.Which of the following tags is used to display a web page within a web page ?":
    ["< webView />", "< iframe />", "< canvas />", "All Of The Above"],
  "6.Which of the following input type was not newly included in HTML 5 ?": [
    "file",
    "time",
    "url",
    "date",
  ],
  "7.Does HTML 5 tags work even if we did not give < !DOCTYPE html> ? ": [
    "Yes",
    "No",
  ],
  "8.Which of the following not a CSS framework ?": [
    "Bootstrap",
    "Gumby",
    "Foundation",
    "None Of The Above",
  ],
  "9.Which of the following is an incorrect selector to add styles to h1 tag in the below HTML ? <b> <pre> < div class='content'> \n< a id='anchor'> \n< h3 class='heading3'>H3 Tag< /h3> \n< h1 class='heading1'>H1 Tag< /h1> \n < /a>< /div> <br /> </pre></b>":
    [
      ".content #anchor .heading1",
      ".content#anchor.heading1",
      ".content a h1",
      "a h1",
    ],
  "10.The == operator checks equality only whereas === checks equality and also the data type .True or False?":
    ["True", "False"],
  "11.Which of the following are server side coding languages ?": [
    "Python",
    "JavaScript",
    "C#",
    "All of The Above",
  ],
  "12.What is the dimension of the array myArray?<pre>\n<b>Let myArray =[[[]]]</b></pre>":
    ["1", "2", "3", "4"],
  "13.What will be the value of fruits after the splice operation is performed?<b>\n<pre>\nvar fruits = ['Banana', 'Orange', 'Apple', 'Mango'];\nfruits.splice(2, 1, 'Lemon', 'Kiwi');</pre></b>":
    [
      "Apple,Lemon,Kiwi,Mango",
      "Banana,Orange,Lemon,Kiwi,Mango",
      "Banana,Lemon,Kiwi,Mango",
      "Banana,Lemon,Kiwi,Apple,Mango",
    ],
  "14.Which of the following syntax is valid for creating a RegExp object?<b><pre>\n1.let txt=new RegExp(pattern,attributes);\n2.let txt=/pattern/attributes; </pre></b>":
    ["Only 1", "Only 2", "Both 1 and 2", "None of The Above"],
  "15.Which of the following command is used to install the Node.js express module?":
    [
      "npm install express",
      "node install express",
      "install express",
      "All of the above",
    ],
  "16.Which of the following extension is used to save the Node.js files?": [
    ".js",
    ".node",
    ".java",
    ".nodejs",
  ],
  "17.Which of the following node.js module is used to read and write a .txt file ?":
    ["fileSystem", "fs", "fileManager", "fm"],
  "18.Which of the following attribute is used to provide a unique name to an element?":
    ["class", "id", "type", "None of The Above"],
  "19.Which of the following syntax is correct in CSS to make each word of a sentence start with a capital letter?":
    [
      "text-style : capital;",
      "transform : capitalize;",
      "text-transform : capital;",
      "text-transform : capitalize;",
    ],
  "20.Are negative values allowed in padding property?": ["Yes", "No"],
};
let questMarkup = "<div><label>{QUESTION}</label><br />",
  choiceMarkup = "",
  finalMarkup = "";
const checkedLength = 82;
Object.keys(ques).forEach((el, j) => {
  questMarkup = "<div class='ques'><label>" + el + "</label><br />";
  choiceMarkup = loadQuestion(el, j);
  finalMarkup += questMarkup + choiceMarkup + "</div>";
});
document.querySelector(".mainContent").innerHTML = finalMarkup;
function loadQuestion(question, j) {
  if (j == 0) j = 0;
  const choice = ques[question]
    .map((el, i) => {
      return `<input type="radio" name="${j}" id="${j}${i}" value="${
        ques[Object.keys(ques)[j]][i]
      }" /><label for="${j}${i}">${
        ques[Object.keys(ques)[j]][i]
      }</label><br />`;
    })
    .join(" ");
  return choice;
}

submitBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("sinkurrefgs") == "treghjk") {
    alert("You Have Already Submitted The Form.");
    window.location.href = "submission.html";
    return;
  }
  e.preventDefault();
  inputFields = document.querySelectorAll("input");
  for (let i = 0; i < 7; i++) {
    ///////
    if (inputFields[i].value == "") {
      alert("Enter Your Details");
      return;
    }
  }
  inputFields.forEach((el, i) => {
    if (i < checkedLength)
      if (el.checked) {
        checkedFields.push(el.value);
      }
  });
  if (checkedFields.length != Object.keys(ques).length + 8) {
    ////////////
    console.log(Object.keys(ques).length + 8, checkedFields);
    alert("Answer All The Questions");
    checkedFields = [];
    return;
  }
  submit();
});
function submit() {
  let j = 0;
  for (let i = 82; i < inputFields.length; i++) {
    ///
    inputFields[i].value = checkedFields[j++];
  }

  document.querySelector(".formSubmit").submit();
  submitted = true;
}
function submitFn() {
  if (submitted) {
    localStorage.setItem("sinkurrefgs", "treghjk");
    window.location.href = "submission.html";
  }
}
