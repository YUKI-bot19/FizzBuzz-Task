'use strict'

{

  const MY_FUNC = document.getElementById("my-func");
  const OUTPUT = document.getElementById("output");
  const FRAGMENT = document.createDocumentFragment();
  const P_ELEMENT = document.createElement('p');

  MY_FUNC.addEventListener('click', () => {

    const FIZZ = document.getElementById("fizz-numbers").value;
    const BUZZ = document.getElementById("buzz-numbers").value;

    while (OUTPUT.firstChild) {
      OUTPUT.removeChild(OUTPUT.firstChild);
    }

    if (/^\d+$/.test(FIZZ) || /^\d+$/.test(BUZZ)) {

      for (let i = 1; i <= 99; i++) {
        const P_ELEMENT = document.createElement('p');
        if (i % FIZZ === 0 && i % BUZZ === 0) {
          P_ELEMENT.textContent = `FizzBuzz ${i}`;
          FRAGMENT.appendChild(P_ELEMENT);

        } else if (i % FIZZ === 0) {
          P_ELEMENT.textContent = `Fizz ${i}`;
          FRAGMENT.appendChild(P_ELEMENT);

        } else if (i % BUZZ === 0) {
          P_ELEMENT.textContent = `Buzz ${i}`;
          FRAGMENT.appendChild(P_ELEMENT);
        }
      }

    } else {
      P_ELEMENT.textContent = "整数値を入れてください";
      FRAGMENT.appendChild(P_ELEMENT);
    }

    OUTPUT.appendChild(FRAGMENT);
  });
  
}