const inputButton = document.getElementById("input-button")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputButton.value === ''){
        alert("You must add something")
    }else {
        li = document.createElement('li');
        li.innerHTML = inputButton.value;
        listContainer.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)

    }
    inputButton.value = '';
    storeData()
}

listContainer.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            storeData()
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            storeData()
        }
    },false);

    function storeData(){
        localStorage.setItem("data",listContainer.innerHTML);
    }

    function showList(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showList();