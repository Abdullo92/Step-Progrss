const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
const stepsEl = document.querySelectorAll('.step');
const progressHrEl = document.querySelector('.progress-bar-front');

console.log(stepsEl);
let currentPosCheck = 1;

btnNext.addEventListener('click', ()=> {
    currentPosCheck++;
    if (currentPosCheck > stepsEl.length) {
        currentPosCheck = stepsEl.length
    }
    updateStepProgress();
});
btnPrev.addEventListener('click', ()=> {
    currentPosCheck--;
    if (currentPosCheck < 1) {
        currentPosCheck = 1;
    }
    updateStepProgress();
});

function updateStepProgress() {
    stepsEl.forEach((stepEl, index) => {
        if (index < currentPosCheck) {
            stepEl.classList.add('checked');
            stepEl.innerHTML = `
            <i class="fas fa-check"></i>
            <small>${index === 0 ? "Start" : index === stepsEl.length - 1 ? "Final" : "Step" + index}</small>
            `;
        } else {
            stepEl.classList.remove("checked");
            stepEl.innerHTML = `
            <i class="fas fa-times"></i>
            `;
        }
    });
    const checkClass = document.querySelectorAll('.checked');
    progressHrEl.style.width = ((checkClass.length - 1) / (stepsEl.length - 1) * 100 + "%");

    //Check to set disabled on the button  !!!!!!
    if (currentPosCheck === 1) {
        btnPrev.disabled = true;
    } else if (currentPosCheck === stepsEl.length) {
        btnNext.disabled = true
    } else {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}