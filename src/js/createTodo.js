export const createTodo = (value) => {
    let li = document.createElement('li');
    let liButton = document.createElement('button');
    liButton.innerHTML = "Delete";
    liButton.className = "btn-delete";
    let checkbox = document.createElement('INPUT');
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = "form-check-input";
    li.prepend(checkbox);
    li.append(value, liButton);
    return li;
};
