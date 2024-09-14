// console.log(localStorage);
// localStorage.setItem('test', [{ name: 'bob' }]);

// console.log(JSON.parse(localStorage.getItem('test1')));

export function addDataToLocalStorage(key, value) {
  try {
    const normalizeState = JSON.stringify(value);
    localStorage.setItem(key, normalizeState);
  } catch (error) {
    console.log(error.message);
  }
}

export function getDataFromLocalStorage(key) {
  try {
    const normalizeState = JSON.parse(localStorage.getItem(key));
    return normalizeState === null ? undefined : normalizeState;
  } catch (error) {
    console.log(error.message);
  }
}

export function removeDataLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error.message);
  }
}

export function removeAllDataLocalStorage(key) {
  localStorage.clear();
}
