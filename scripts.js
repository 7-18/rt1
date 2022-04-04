const resumen = document.getElementById("resumen");
const button = document.getElementById("btn");
const Operation = () => {
  let num1 = parseFloat(
    document.getElementById("total").value.replace(",", "")
  );
  let num2 = parseFloat(
    document.getElementById("percentage").value.replace(",", "")
  );
  if (num1 && num2) {
    let a = num1 * num2;
    let b = a / 100;
    let c = Number(b) + Number(num1);
    let newNumber = new Intl.NumberFormat("en-US");
    return (resumen.innerHTML = `<div class="resumen">
  <h2 class="resumen-title">Resumen</h2>
  <div class="resumen-data-container">
  <div class="resumen-data-column">
  <h3 class="resumen-data-title">Total de la cuenta</h3>
  <h3 class="resumen-data-title">Propina</h3>
  <h3 class="resumen-data-title">Total a Pagar</h3>
  </div>
  <div class="resumen-data-column">
  <span class="resumen-data">$ ${newNumber.format(num1)}</span>
  <span class="resumen-data">$ ${newNumber.format(b)}</span>
  <span class="resumen-data">$ ${newNumber.format(c)}</span>
  </div>
  </div>
  </div>`);
  }
};

button.addEventListener("click", () => {
  Operation();
});
