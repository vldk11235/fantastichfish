// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {

//     anchor.addEventListener("click", function(event) {
//         event.preventDefault();
//         const blockID = anchor.getAttribute('href')
//         document.querySelector('' + blockID).scrollIntoView({
//             behavior: "smooth",
//             block: "start"
//         })

//     })
// }
const anchors = document.querySelectorAll('a[href^="#"]')
console.log(anchors);
// Цикл по всем ссылкам
for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Предотвратить стандартное поведение ссылок
        // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
        const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
        // Плавная прокрутка до элемента с id = href у ссылки
        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}