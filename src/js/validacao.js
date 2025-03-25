const inputs = document.querySelectorAll('.inputs');
const labels = document.querySelectorAll('.validacao');
const btn = document.getElementById('btn');

inputs.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value.trim() !== "") {
            input.classList.add('borda-verde');
        } else {
            input.classList.remove('borda-verde');
        }
    })
});

btn.addEventListener('click', (event) => {
    event.preventDefault();

    inputs.forEach((input, index) => {
        const label = labels[index];

        if (input.value.trim() === "") {
            input.classList.add('borda-vermelha');
            label.classList.add('visivel');
        } else {
            input.classList.remove('borda-vermelha');
            label.classList.remove('visivel');
        }
    });
});