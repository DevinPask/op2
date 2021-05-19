async function chooseCategoryHandler(category) {
    console.log(category);
    document.location.replace('/quizpage?category=' + category);
    return
}

let btnHorror = document.querySelector('#btn-horror');
btnHorror.addEventListener('click', (e) => {
    chooseCategoryHandler('Horror');
});

let btnRomance = document.querySelector('#btn-romance');
btnRomance.addEventListener('click', (e) => {
    chooseCategoryHandler('Romance');
});

let btnSciFi = document.querySelector('#btn-scifi');
btnSciFi.addEventListener('click', (e) => {
    chooseCategoryHandler('Fantasy/Sci-Fi');
});

let btnComedy = document.querySelector('#btn-comedy');
btnComedy.addEventListener('click', (e) => {
    chooseCategoryHandler('Comedy');
});

let btnAction = document.querySelector('#btn-action');
btnAction.addEventListener('click', (e) => {
    chooseCategoryHandler('Action');
});
