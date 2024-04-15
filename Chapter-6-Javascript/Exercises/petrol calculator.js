document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculateBtn");

    calculateBtn.addEventListener("click", function() {
        const cost = parseFloat(document.getElementById("cost").value);
        const liters = parseFloat(document.getElementById("liters").value);

        const totalCost = cost * liters;

        document.getElementById("result").textContent = `Total cost: $${totalCost.toFixed(2)}`;
    });
});
