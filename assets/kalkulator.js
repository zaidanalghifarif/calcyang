window.addEventListener('load', () => {
  Swal.fire({
    title: 'masukkan kode uniknya ya ayang',
    // text: "You won't be able to revert this!",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3 085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Iya',
    cancelButtonText: 'Males',
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector('.song').play();
      resolveFetch().then(animationTimeline());
    } else {
      resolveFetch().then(animationTimeline());
    }
  })
})

const calculator = {
  displayText: '0',
  firstNumber: null,
  isWaitForSecondNumber: false,
};
 
function updateDisplay() {
  document.querySelector('#displayText').innerText = calculator.displayText;
}

function inputDigit(digit) {
  calculator.displayText += digit;
}

function clearCalculator() {
  calculator.displayText = '0';
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.isWaitForSecondNumber = false;
}

function msg1(text) {
  if (calculator.displayText === '011100') {
    calculator.displayText = 'i love u ayang';
  } else {
    calculator.displayText += digit;
  }
}

function msg2(text) {
  if (calculator.displayText = '040222') {
    calculator.displayText = "semangat ayangku";
  } else {
    calculator.displayText += digit;
  }
}

function perform() {
  if (calculator.displayText === '040222') {
    calculator.displayText = "semangat ayangku <3";
  } 
    else if (calculator.displayText === '011100') {
    calculator.displayText = "ayangku yang paling sablaa, sing paling geulis";
  }
    else if (calculator.displayText === '060822') {
    calculator.displayText = "cepat pulang, aku kangen :(";
  }
    else {
    calculator.displayText += digit;
  }
}

const buttons = document.querySelectorAll('.button');
  for (const button of buttons) {
    button.addEventListener('click', function (event) {
      // mendapatkan objek elemen yang diklik
      const target = event.target;

      if (target.classList.contains('clear')) {
        clearCalculator();
        updateDisplay();
        return;
      }

      if (target.classList.contains('equals')) {
        perform();
        updateDisplay();
        return;
      }

      inputDigit(target.innerText);
      updateDisplay();
    });
  }

const message = document.querySelector('')