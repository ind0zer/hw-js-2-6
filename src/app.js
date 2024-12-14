import { formData } from './javascript/saveForm';
import { success } from '@pnotify/core'; 
import '@pnotify/core/dist/PNotify.css'; 
import '@pnotify/core/dist/BrightTheme.css'; 

const form = document.getElementById('form');
const nameForm = document.getElementById('name');
const emailForm = document.getElementById('email');
const messageForm = document.getElementById('message');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  formData.addData('name', nameForm.value);
  formData.addData('email', emailForm.value);
  formData.addData('message', messageForm.value);

  success({
    title: 'Успішно!',
    text: 'Форма успішно відправлена!',
    delay: 2000,
  });

  console.log('Дані форми збережено:', formData.getData());
});