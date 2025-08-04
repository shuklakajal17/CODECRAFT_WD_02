const output = document.getElementById("output");
const link = document.getElementById("openLink");

function success(decodedText) {
  output.textContent = "Scanned: " + decodedText;

  if (decodedText.startsWith("http")) {
    link.href = decodedText;
    link.textContent = "Open Link";
    link.style.display = "inline-block";
  } else {
    link.style.display = "none";
  }

  scanner.clear(); // stop scanning after one scan
}

function error(err) {
  // Do nothing for now
}

const scanner = new Html5Qrcode("reader");
scanner.start({ facingMode: "environment" }, { fps: 10, qrbox: 250 }, success, error);
