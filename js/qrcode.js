const wrapperqr = document.querySelector(".wrapper-qr"),
qrInput = wrapperqr.querySelector(".form-qr input"),
generateBtn = wrapperqr.querySelector(".form-qr button"),
qrImg = wrapperqr.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;  // se a entrada estiver vazia, retorne daqui
    generateBtn.innerText = "Gerando QR Code...";
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=190x190&data=${qrValue}';
    qrImg.addEventListener("load", () => {
        wrapperqr.classList.add("active");
        generateBtn.innerText = "Gerar QR Code";
    });
    
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapperqr.classList.remove("active");
    }
});