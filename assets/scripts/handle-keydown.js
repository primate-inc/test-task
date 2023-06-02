const button = document.querySelector('.cta__content-button');
// handle both click and return
button.addEventListener('keydown', handleKeyDown);
button.addEventListener('click', handleClick);

function handleKeyDown(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleClick();
  }
}

function handleClick() {
  console.log('Button clicked!');
}
