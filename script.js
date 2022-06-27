// Condição do login
function alertLogin() {
  const padraoEmail = 'tryber@teste.com';
  const padraoSenha = '123456';
  const valueEmail = document.querySelector('#email').value;
  const valueSenha = document.querySelector('#senha').value;
  if ((valueEmail === padraoEmail) && (valueSenha === padraoSenha)) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
document.querySelector('#buttonLogar').addEventListener('click', alertLogin);

const divRating = document.querySelector('#rating');

function createRate() {
  for (let index = 1; index < 11; index += 1) {
    const item = document.createElement('input');
    item.type = 'radio';
    item.name = 'rate';
    item.value = index;

    const label = document.createElement('label');
    label.innerHTML = index;

    divRating.appendChild(item);
    divRating.appendChild(label);
  }
}
createRate();

const check = document.querySelector('#agreement');

function ableButton() {
  document.getElementById('submit-btn').disabled = false;
}

check.addEventListener('click', ableButton);
window.onload = () => {
  document.getElementById('submit-btn').disabled = true;
};

const count = document.querySelector('#counter');
count.innerHTML = 500;

function countCaracteres() {
  const caracteres = document.querySelector('textarea').value.length;
  count.innerHTML = 500 - caracteres;
}

document.querySelector('textarea').addEventListener('keyup', countCaracteres);

function changeTitle() {
  const title = document.querySelector('h2');
  title.innerHTML = 'Formulário enviado.';
}

function dados() {
  const parentDados = document.querySelector('#dados');
  const name = document.createElement('p');
  const inputName = document.querySelector('#input-name').value;
  const inputLastName = document.querySelector('#input-lastname').value;
  name.innerHTML = `Nome: ${inputName} ${inputLastName}`;
  const email = document.createElement('p');
  const inputEmail = document.querySelector('#input-email').value;
  email.innerHTML = `Email: ${inputEmail}`;
  const house = document.createElement('p');
  const inputHouse = document.querySelector('#house').value;
  house.innerHTML = `Casa: ${inputHouse}`;
  document.querySelector('#dados').innerHTML = '';
  parentDados.appendChild(name);
  parentDados.appendChild(email);
  parentDados.appendChild(house);
}

function divFamily() {
  const parentFamily = document.querySelector('#family-subject #divFamily');
  const family = document.createElement('p');
  const optionFamily = document.querySelector('input[name="family"]:checked').value;
  family.innerHTML = `Família: ${optionFamily}`;
  parentFamily.innerHTML = '';
  parentFamily.appendChild(family);
}

function divSubjects() {
  const parentSubjects = document.querySelector('#family-subject #div-subject');
  const subject = document.createElement('p');
  const elements = document.querySelectorAll('#elements label input');
  const subjects = [];
  for (let index = 0; index < elements.length; index += 1) {
    if (elements[index].checked === true) {
      subjects.push(` ${elements[index].value}`);
    }
  }
  subject.innerText = `Matérias: ${subjects}`;
  parentSubjects.innerHTML = '';
  parentSubjects.appendChild(subject);
}

function rating() {
  const rate = document.createElement('p');
  const inputRating = document.querySelector('input[name="rate"]:checked').value;
  rate.innerHTML = `Avaliação: ${inputRating}`;
  divRating.innerHTML = '';
  divRating.appendChild(rate);
}

function textArea() {
  const parentText = document.querySelector('#evaluation-form');
  const text = document.createElement('p');
  const textAreaNote = document.querySelector('#textarea').value;
  text.innerHTML = `Observações: ${textAreaNote}`;
  const labelText = document.querySelector('#labelText');
  const textarea = document.querySelector('#textarea');
  parentText.removeChild(labelText);
  parentText.removeChild(textarea);
  parentText.appendChild(text);
}

function removeRemains() {
  const parentText = document.querySelector('#evaluation-form');
  const spanCounter = document.querySelector('#counter');
  const checkBox = document.querySelector('#divCheckbox');
  const buttonSubmit = document.querySelector('#submit-btn');

  parentText.removeChild(spanCounter);
  parentText.removeChild(checkBox);
  parentText.removeChild(buttonSubmit);
}

const buttonSubmit = document.querySelector('#submit-btn');
buttonSubmit.addEventListener('click', changeTitle);
buttonSubmit.addEventListener('click', dados);
buttonSubmit.addEventListener('click', divFamily);
buttonSubmit.addEventListener('click', divSubjects);
buttonSubmit.addEventListener('click', rating);
buttonSubmit.addEventListener('click', textArea);
buttonSubmit.addEventListener('click', removeRemains);
