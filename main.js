'use strict'

{

  const myfunc = document.getElementById("myfunc");
  const output = document.getElementById("output");
  const fragment = document.createDocumentFragment();
  const pElement = document.createElement('p');

  myfunc.addEventListener('click', () => {

    const fizz = document.getElementById("fizznumbers").value;
    const buzz = document.getElementById("buzznumbers").value;

    while (output.firstChild) {
      output.removeChild(output.firstChild);
    }

    if (/^\d+$/.test(fizz, buzz)) {

      for (let i = 1; i <= 99; i++) {
        const pElement = document.createElement('p');
        if (i % fizz === 0 && i % buzz === 0) {
          pElement.textContent = `FizzBuzz ${i}`;
          fragment.appendChild(pElement);

        } else if (i % fizz === 0) {
          pElement.textContent = `Fizz ${i}`;
          fragment.appendChild(pElement);

        } else if (i % buzz === 0) {
          pElement.textContent = `buzz ${i}`;
          fragment.appendChild(pElement);
        }
      }

    } else {
      pElement.textContent = "整数値を入れてください";
      fragment.appendChild(pElement);
    }

    output.appendChild(fragment);
  });
  
}