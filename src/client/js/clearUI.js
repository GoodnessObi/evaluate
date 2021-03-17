function clearUI() {
  document.querySelector('.error').style.display = 'none';
  document.querySelector('.results').classList.remove("fadeIn");
  document.querySelector('#error').classList.remove("fadeIn");
}

export { clearUI }