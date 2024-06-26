import './components/_burger';

document.querySelectorAll('.request-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('#form-request').classList.add('open');
  });
});

document.addEventListener('click', e => {
  if (e.target.id === 'form-request') {
    document.querySelector('#form-request').classList.remove('open');
  }
});
