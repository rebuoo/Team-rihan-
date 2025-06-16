document.getElementById('quantity').addEventListener('input', function () {
  const quantity = parseInt(this.value) || 0;
  const pricePer = 4; // 4x profit
  const total = quantity * pricePer;
  document.getElementById('amountText').textContent = `Amount: ₹${total}`;
});
