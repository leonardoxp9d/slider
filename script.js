const totalRadioInputs = document.querySelectorAll('input[type="radio"]').length;
let count = 1;
document.getElementById("radio1").checked = true;

// Iniciar o processo após a página ser carregada
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(nextImage, 5000);
});

function nextImage() {
    for (let i = 1; i <= totalRadioInputs; i++) {
        const radioElement = document.getElementById("radio"+i);

        if (radioElement.checked) {
            count = i % totalRadioInputs + 1;
            break;
        }
    }

    document.getElementById("radio"+count).checked = true;
    setTimeout(nextImage, 5000);
}

