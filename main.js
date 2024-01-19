// Получаем все элементы с классом "col-sm-8"
var colSm4Elements = document.querySelectorAll(".col-sm-8");

// Создаем пустой массив для хранения элементов, которые соответствуют условию
var elementsWithOptionSet = [];

// Проходимся по всем элементам с классом "col-sm-4" и проверяем наличие дочерних элементов с классом "option-set"
for (var i = 0; i < colSm4Elements.length; i++) {
  var element = colSm4Elements[i];
  if (element.querySelector(".option-set")) {
    elementsWithOptionSet.push(element);
  }
}
//добавляем класс к нужному элементу
elementsWithOptionSet.forEach(element=>element.classList.add("button-wrapping"))
// кликабельная таблица 

// document.addEventListener("click", function(event) {
//   const clickedElement = event.target;

//   // Check if the clicked element has a class
//   if (clickedElement.classList) {
//       // Get the class name of the clicked element
//       const className = clickedElement.classList[0]; // Use [0] to access the first class (if there are multiple)
//       console.log("Clicked element class:", className.toString());
//       if(className&&(className.toString() == "clickMe")){
//         alert("You clicked CLICKME class");
//         console.log("True");
//       }else{console.log(className.toString(),"  instead of ","clickMe")};
//   }
// });

// Function to switch english\only russian translation
// translateToEng()


  // create new button menu

let appermenu = document.querySelector(".pull-right")
let button = document.querySelector(".button-translator")
appermenu.insertBefore(button, appermenu.lastElementChild)

// Save language information to browser parametrs

let savedDisplay = localStorage.getItem('displayStatus')
updateTranslatedElementsDisplay(savedDisplay)

//Execute update function

function updateTranslatedElementsDisplay(displayStatus) {
  $('.translated').css('display', displayStatus)
  displayStatus === 'none' ? $('#language-switcher').text("ENG") :$('#language-switcher').text("RU")
}

// Change date to Today date

// window.addEventListener('load', (event) => {
  changeActualDate()
// });
