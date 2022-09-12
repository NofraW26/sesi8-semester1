let lenghtPassword = document.getElementById("lenghtPassword");
let password = document.getElementById("password");
let downloadButton = document.getElementById("downloadButton");

const passwordGenerator = (len) => {
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const numeric = "0123456789";
  const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`";

  let data = upperAlphabet + lowerAlphabet + numeric + symbol;
  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
};

const submit = () => {
  if (lenghtPassword.value < 10) {
    alert("Password Terlalu Pendek, Minimal Bernilai 10!");
    password.value = "";
    return;
  }
  if (lenghtPassword.value > 1000000) {
    alert("Paswordnya Bakal Kepanjangan Cuy, Kecilin Dulu Angkanya");
    password.value = "";
    return;
  }
  const newPassword = passwordGenerator(lenghtPassword.value);
  setTimeout(() => {
    alert("berhasil");
  }, 500);

  password.value = newPassword;
};

const savePassword = () => {
  const document = password.value;
  if (password.value !== "") {
    downloadButton.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(`Password Saya: ${document}`));
    downloadButton.setAttribute("download", "MyPasswordGeneratorLOG.txt");
  } else {
    alert("Generate Dulu Cuy!");
  }
};
