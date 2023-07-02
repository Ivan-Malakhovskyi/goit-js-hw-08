import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const selectors = {
  form: document.querySelector('.feedback-form'),
};

selectors.form.addEventListener('input', throttle(onInput, 500));
selectors.form.addEventListener('submit', onSubmitForm);

valueTextForm();

function onInput(evt) {
  try {
    const { email, message } = evt.target.form.elements;

    const data = {
      email: email.value,
      message: message.value,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function onSubmitForm(evt) {
  evt.preventDefault();

  const data = getFormData();

  if (data.email === '' || data.message === '') {
    alert('Усі поля повинні бути заповнені!😉');
  } else {
    console.log(data);

    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
  }
}

function valueTextForm() {
  try {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
      const { email, message } = JSON.parse(savedMessage);
      selectors.form.elements.email.value = email;
      selectors.form.elements.message.value = message;
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function getFormData() {
  const { email, message } = selectors.form.elements;

  return {
    email: email.value,
    message: message.value,
  };
}
