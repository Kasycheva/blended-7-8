import { refs } from './helpers/refs.js';
import {
  addDataToLocalStorage,
  getDataFromLocalStorage,
} from './helpers/localstorage-api.js';
import { lsKey } from './helpers/keys.js';

refs.checkbox.addEventListener('click', onClick);
document.addEventListener('DOMContentLoaded', renderPage);

function onClick(event) {
  console.log(event.target.checked);
  if (event.target.checked) {
    refs.body.classList.replace('light', 'dark');
    addDataToLocalStorage(lsKey, 'dark');
  } else {
    refs.body.classList.replace('dark', 'light');
    addDataToLocalStorage(lsKey, 'light');
  }
}
function renderPage() {
  const lsData = getDataFromLocalStorage(lsKey);
  if (lsData === 'dark') {
    refs.body.classList.replace('light', 'dark');
    refs.checkbox.checked = true;
  } else {
    refs.body.classList.replace('dark', 'light');
  }
}
