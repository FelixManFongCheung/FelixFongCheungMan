document.querySelectorAll('.btn-group button').forEach(element => {
    element.addEventListener('click', function () {
        document.getElementById(element.dataset.project).classList.add('active');
        document.querySelector('.mask').style.display = 'block';
        document.querySelector('body').classList.add('no-scroll');
    })
})

document.querySelectorAll('.mask').forEach(element => {
    element.addEventListener('click', function () {
        element.parentElement.classList.remove('active');
    })
})

document.querySelector('.mask').addEventListener('click', function () {
    document.querySelector('.content.active').classList.remove('active');
    document.querySelector('.mask').style.display = 'none';
    document.querySelector('body').classList.remove('no-scroll');
})

