const input = document.getElementById('text-input');
const button = document.getElementById('clickIcon');

// get element
const contentBody = document.querySelector('.content-body');

const deleteToDo = (event) => {
  const remove = event.target.parentNode.parentNode;
  contentBody.removeChild(remove);
};

const inputText = () => {
  const bodySection = document.createElement('div');
  const viewText = document.createElement('div');
  const dellIcon = document.createElement('button');
  const span = document.createElement('span');
  const i = document.createElement('i');
  const text = input.value;

  bodySection.className = 'content-body__section';
  viewText.className = 'viewText';
  dellIcon.className = 'dellIcon';

  contentBody.appendChild(bodySection);
  bodySection.appendChild(viewText);
  bodySection.appendChild(dellIcon);

  span.className = 'toDoList';
  span.textContent = text;
  i.className = 'far fa-trash-alt';

  viewText.appendChild(span);
  dellIcon.appendChild(i);

  dellIcon.addEventListener('click', deleteToDo);
  input.value = '';
};

button.addEventListener('click', inputText);
input.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    inputText();
  }
});