// Tạo số ngẫu nhiên từ 1 đến 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userInput = document.getElementById("userGuess").value;
    const result = document.getElementById("result");

    const userNumber = parseInt(userInput);

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
        result.innerHTML = "❗ Vui lòng nhập một số hợp lệ từ 1 đến 10.";
        return;
    }

    if (userNumber === randomNumber) {
        result.innerHTML = `✅ Chính xác! Bạn đã đoán đúng số <strong>${randomNumber}</strong> 🎉`;
    } else {
        result.innerHTML = `❌ Sai rồi! Hãy thử lại...`;
    }
}
