// 1. Function Declaration: Được hoisting, gọi trước khi khai báo
turnOnLight("Living Room");

function turnOnLight(room) {
  console.log(`Bật đèn: ${room}`);
}

// 2. Function Expression: Không hoisting, gọi trước sẽ báo lỗi
try {
  turnOffLight("Living Room");
} catch (err) {
  console.log("Lỗi Function Expression:", err.message);
}

const turnOffLight = function (room) {
  console.log(`Tắt đèn: ${room}`);
};

// 3. Arrow Function: Không hoisting, gọi trước sẽ báo lỗi
try {
  setTemp(25);
} catch (err) {
  console.log("Lỗi Arrow Function:", err.message);
}

const setTemp = (temp) => {
  console.log(`Nhiệt độ: ${temp}°C`);
};

// Gọi sau khi khai báo
turnOffLight("Bedroom");
setTemp(24);