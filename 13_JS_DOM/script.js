//? DOM = Document Object Model

const menuClicked = (curr) => {
  document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'))
  curr.classList.add('active')
};

