import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import {createTodo} from "./createTodo.js";
import {form, button, text, list} from "./getSelectors.js";



form.onsubmit = (event) => {
    event.preventDefault();
    if (text.value.trim().length !== 0) {
        list.append(
            createTodo(text.value),
            );
        text.value = '';
        return
    } else {
        text.classList.add("error");
        list.innerHTML = "Please, enter text";
        return
    }
};

text.oninput = () => {
    const isErrorField = text.classList.contains("error");
    if (isErrorField) {
        text.classList.remove("error");
        list.innerHTML = "";
    }
};

list.addEventListener("click", (event) => {
    const isDeleteButton = event.target.className === "btn-delete";
    if (isDeleteButton) {
        const liContentBlock = event.target.closest("li");
        liContentBlock.remove();
    }
});

list.onchange = (event) => {
    const checkbox = event.target;
    checkbox.setAttribute('disabled', 'disabled');  // or checkbox.disabled = true;
    const liContentBlock = event.target.closest("li");
    const button = liContentBlock.querySelector("button");
    button.setAttribute('disabled', 'disabled');  // or button.disabled = true;
};