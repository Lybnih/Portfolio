let trilho = document.querySelector('.trilho input[type="checkbox"]');
let body = document.querySelector('body');

trilho.addEventListener('change', () => {
    if (trilho.checked) {
        body.classList.add('claro');
    } else {
        body.classList.remove('claro');
    }
});
