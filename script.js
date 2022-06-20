const input = document.querySelector('input')
const button = document.querySelector('button')
const todoInner = document.querySelector('.todoInner')
const boxTwo = document.querySelector(".boxTwo")
const boxOne = document.querySelector(".boxOne")
const bigBoxTwo = document.querySelector(".bigBoxTwo")
let deletElemnt
let allCreateDiv
let delBtt

class ToDo{
    constructor(text) {
        this.text = text
        this.$divOne = document.createElement("div")
        this.$divTwo = document.createElement("div")
        this.$divTwo.style.width = "200px";
        this.$divTwo.style.height = "250px";
        this.$divTwo.style.border = `1px solid black`;
        this.$divTwo.style.display = `flex`;
        this.$divTwo.style.flexDirection = `column`;
        this.$divTwo.style.alignItems = `center`;
        this.$divTwo.style.justifyContent = `space-between`;
        this.$divTwo.style.padding = `20px 20px`;
        this.$divTwo.style.borderRadius = `20px`;
        this.$divTwo.style.backgroundColor = `#ffe4c4`;
        this.$divTwo.innerHTML =
                                `<input class="inputDelet" type="checkbox">
                                <h3>${text}</h3>
                                <div>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </div>
                                <button style="border-radius: 15px; background-color: #ef0000; cursor: pointer;" class="delBtt">Delete</button>`
        this.$divOne.style.display = "inline-block"
        this.$divOne.style.marginLeft = "20px"
        this.$divOne.style.marginTop = "20px"
        this.$divOne.classList.add("liderDiv")
        this.$divOne.appendChild(this.$divTwo)
        todoInner.appendChild(this.$divOne);
    }
}

function create() {
    let createBox = new ToDo(input.value)
    input.value = ""
    allCreateDiv = document.querySelectorAll(".liderDiv")
    deletElemnt = document.querySelectorAll(".inputDelet")
    delBtt = document.querySelectorAll(".delBtt")
    delButton()
}

function delButton() {
    delBtt.forEach((item,index) =>{
        item.addEventListener('click', () => {
            allCreateDiv[index].style.display = "none"
        })
    })
}

button.addEventListener('click', () => {
    if(input.value) {
        create()
    }
})

addEventListener('keydown', eventTwo => {
    if(input.value) {
        if (eventTwo.code == 'Enter') { 
            create()
        }
    }
});

const deletBuuton = document.querySelector(".deletElement")

deletBuuton.addEventListener('click', () => {
    if(todoInner.innerHTML != "") {
        deletElemnt.forEach((item,index) => {
            if(item.checked) {
                allCreateDiv[index].style.display = "none"
            }
        })
    }
})

boxTwo.addEventListener('click', () => {
    bigBoxTwo.classList.toggle("block")
})

boxOne.addEventListener('click', () => {
    bigBoxTwo.classList.remove("block")
})

// let a = {
//     inputValue: "",
//     tasks: [],
//     selectedTasks: new Set()
// }
