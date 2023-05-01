const PRICES = {
  modelo1: 5000,
  modelo2: 7000,
  modelo3: 9000
};

const calculateTotal = (model, quantity) => {
  const price = PRICES[model];
  const total = price * quantity;
  return total;
};

const calculateInstallment = (total, installments) => {
  const rate = installments > 1 ? 1.1 : 1;
  const installmentPrice = total * rate / installments;
  return installmentPrice;
};

const updateResult = () => {
  const model = document.getElementById("model").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const installments = parseInt(document.getElementById("installments").value);

  const total = calculateTotal(model, quantity);
  const installmentPrice = calculateInstallment(total, installments);

  let result = `Total: $${total}`;
  if (installments > 1) {
    result += ` (${installments} cuotas de $${installmentPrice.toFixed(2)} cada una)`;
  }

  document.getElementById("result").textContent = result;
};

document.getElementById("calculate").addEventListener("click", updateResult);