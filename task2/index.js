const btn = document.getElementById("btn").addEventListener("click", calculate);

function calculate() {
  const bill = document.getElementById("billAmount").value;
  const percentage = document.getElementById("percentage").value;

  // bill = 1000, percentage = 10, result = 1100
  const result = (parseInt(bill) * parseInt(percentage)) / 100 + parseInt(bill);
  const display = document.getElementById("displayData");
    display.textContent = result;
    
    console.log(result);
}
