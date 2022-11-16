//Работа с классами
// 1
// let elem = document.getElementById('elem');
// elem.classList.add('www');
// console.log(elem.classList);

//2
// let elem = document.getElementById('elem');
// elem.classList.remove('www');
// console.log(elem.classList);

// 3
// let elem = document.getElementById('elem');
// console.log(elem.classList.contains("www"));
// if (elem.classList.contains("www") == true){
//     console.log('У эелемента есть класс www');
// }else{
//     console.log('У жлемента нет класса www')
// }

// 4
// let elem = document.getElementById('elem');
// let bool = elem.classList.contains("www");
// if (bool == true){
//     elem.classList.remove('www');
//     console.log('Класс  www  есть у элемента, удаляем...');
// }else{
//     elem.classList.add('www');
//     console.log('Класса  www  нет у элемента, добавляем...');
// }
// 4.2
// function btnClick(){
//     let elem = document.getElementById('elem');
//     elem.classList.toggle('www')
// }

// 5
// let elem = document.getElementById('elem');
// console.log(elem.classList.length);

// 6
// let elem = document.getElementById('elem');
// for(let i = 0; i < elem.classList.length; i++){
//     alert(elem.classList[i])
// }

// Работат с CSS

// 1
// let elem = document.getElementById('elem');
// elem.style.cssText = 'background: red; width: 30px; height:30px;border:green solid';

//  Свойство tagName
// 1)Дан элемент #elem. По клику на него выведите название его тега.

// function btnClick(){
//     let elem = document.getElementById("elem");
//     alert(elem.tagName);
// }

// 2

// function btnClick(){
//     let elem = document.getElementById("elem");
//     alert(elem.tagName.toLowerCase());
// }

// 3
// let elements = document.getElementsByClassName('www');
// for (let i = 0; i < elements.length;  i++){
//     elements[i].innerHTML += '   ' + elements[i].tagName.toLowerCase()    
// }

//  Дан ol. Вставьте ему в конец li с текстом 'пункт'.

// function addElement() {
//     let nnt = document.querySelector('#parent');
//     let li = document.createElement('li');
// 	li.innerHTML = 'пункт';
// 	parent.appendChild(li);
// }

// 2 Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li

// let arr = ['1 elem','2 elem','3 elem','4 elem','5 elem','6 elem'];
// for(let i = 0; i < arr.length; i++){
//     let parent = document.querySelector('#parent');
//     let li = document.createElement('li');
// 	li.innerHTML = arr[i];
// 	parent.appendChild(li);

// }

// 1
// let elem = document.getElementById('elem');
// elem.insertAdjacentHTML('beforebegin', '<span>!!!</span>');

// 2
// let elem = document.getElementById('elem');
// elem.insertAdjacentHTML('afterend', '<span>!!!</span>');

// 3
// let elem = document.getElementById('elem');
// elem.insertAdjacentHTML('afterbegin', '<span>!!!</span>')

// 4
// let elem = document.getElementById('elem');
// elem.insertAdjacentHTML('beforeend', '<span>!!!</span>')


// 1
// function btnClc(){
//     let child = document.getElementById('child');
//     let parent = document.getElementById('parent');
//     parent.removeChild(child)
// }

// 2
// function btnClc(){
//     let childs = document.getElementsByClassName('child')
//     let parent = document.getElementById('parent');
//     parent.removeChild(childs[childs.length - 1]);
//     childs[childs.length - 1].innerHTML = 'О нет!!, я стал последним ребёнком((('
// }

// 3-4
// function btnClc(elem){
//     let parent = document.getElementById('parent');
//     alert('Неееееееееееееееееееееееет')
//     parent.removeChild(elem);
// }

// 5
// function btnClick(){
//     let elem = document.getElementById('input')
//     let input = document.getElementById('input')
//     let clone_input = input.cloneNode(true)
//     document.body.appendChild(clone_input);
// }

// Потомки

// 1
// const list = document.getElementById("parent");
// list.firstElementChild.style.color = 'red'
// 2
// const list = document.getElementById("parent");
// list.lastElementChild.style.color = 'red'
// 3
// const list = document.getElementById("parent");
// let childs = list.children
// for (let i = 0;i > childs.length; i++ ){
//     childs[i] = childs[i].textContent + '!'
// }

// Соседи

// 1
// let el = document.getElementById("div-3").previousElementSibling;
// el.innerHTML = el.textContent + '!'

// 2

// let el = document.getElementById("div-1").nextElementSibling;
// el.innerHTML = el.textContent + '!'
// 3

// let el = document.getElementById("div-1").nextElementSibling.nextElementSibling;
// el.innerHTML = el.textContent + '!'

//Родители 

// 1

// let child = document.getElementById('child');
// child.parentElement.style.color = 'red'

// 2
// let child = document.getElementById('child');
// child.parentNode.parentNode.style.color = 'red'

// На величину границы

// 1
// function btnClick(){
//     let elem = document.getElementById('elem')
//     alert(elem.clientTop)}

// 2
// function btnClick(){
//     let elem = document.getElementById('elem')
//     alert(elem.clientLeft)}

// На полный размер элемента

// function btnClick(){
    // let elem = document.getElementById('elem')
    // // 1
    // alert(elem.offsetWidth)
    // // 2
    // alert(elem.offsetHeight)}

    // На размер элемента без границ, но с padding
    // function btnClick(){
    //     let elem = document.getElementById('elem')
    //     // 1
    //     alert(elem.clientWidth)
    //     // 2
    //     alert(elem.clientHeight)
    // }


    // Работа с getComputedStyle
//     let elem = document.querySelector('#elem');
//     let style = getComputedStyle(elem); 
//    alert('Ширина блока равна '+style.width + ',а высота блока равна '+ style.height)


// <!-- Прокрутка элемента-->

// function btnClick(){
//     let elem = document.getElementById('elem')
//     // // 1
//     // alert(elem.scrollTop);
//     // // 2
//     // alert(elem.scrollLeft);
//     // // 3
//     // elem.scrollTop = 100;
//     // // 4
//     // elem.scrollTop += 100;
//     // // 5
//     // alert(elem.scrollHeight);
//     // // 6
//     // alert(elem.scrollWidth);
//     // // 7
//     // elem.scrollHeight - 100;
//     // // 8
//     // alert(pageYOffset);
//     // // 9
//     // alert(pageXOffset);
//     // // 10
//     // window.scrollTo(300, 500);
//     // // 11
//     // window.scrollBy(0, 300);
// }


// Практика
// function btnClick(s){
//     // //1
//     // window.scrollTo(0, document.body.clientHeight);
//     // //2
//     // window.scrollBy(0, 400);
//     // //3
//     // if (document.documentElement.scrollHeight - document.documentElement.scrollTop == document.documentElement.clientHeight) {
// 	// 	window.scrollTo(0, 100);
// 	// }
//     //4
// function btnClick() {
//     let elem = document.getElementById('elem');
// 	elem.style.width = elem.offsetWidth * 2 + 'px';
// 	elem.style.height = elem.offsetHeight * 2 + 'px';
// }
// }