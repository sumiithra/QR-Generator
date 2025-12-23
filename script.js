let qrCode;

function generateQRCode() {
  const qrText = document.getElementById("qrText").value;
  const qrCodeBox = document.getElementById("qrCode");

  qrCodeBox.innerHTML = ""; // Clear previous QR code

  if (!qrText) {
    alert("Please enter some text or URL!");
    return;
  }

  qrCode = new QRCode(qrCodeBox, {
    text: qrText,
    width: 200,
    height: 200,
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H
  });
}
