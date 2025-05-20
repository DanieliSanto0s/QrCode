const inputConteudo = document.getElementById("conteudo");
const btnGerar = document.getElementById("btnGerar");
const msg = document.getElementById("mensagem");
const imagem = document.getElementById("imagemQR");


inputConteudo.addEventListener("input", () => {
    if (inputConteudo.value.trim() !== "") {
        btnGerar.disabled = false;
    } else {
        btnGerar.disabled = true;
        imagem.src = "";
        msg.textContent = "";
    }
});

function gerarQRCode() {
    const conteudo = inputConteudo.value.trim();

    if (!conteudo) {
        msg.textContent = "Por favor, preencha o campo antes de gerar o QR Code.";
        return;
    }

    msg.textContent = "Gerando QR Code...";

    fetch("http://127.0.0.1:8000/gerar_qrcode", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: conteudo }),
    })
        .then((response) => response.json())
        .then((data) => {
            imagem.src = data.image;
            msg.textContent = "";
        })
        .catch((error) => {
            msg.textContent = "Erro ao gerar QR Code.";
            console.error(error);
        });
}
