document.getElementById('encrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let encryptedText = encrypt(inputText);
    
    if (encryptedText) {
        document.getElementById('default-message').style.display = 'none';
        document.getElementById('result-message').style.display = 'block';
        document.getElementById('output-text').innerText = encryptedText;
    }
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let decryptedText = decrypt(inputText);
    
    if (decryptedText) {
        document.getElementById('default-message').style.display = 'none';
        document.getElementById('result-message').style.display = 'block';
        document.getElementById('output-text').innerText = decryptedText;
    }
});

document.getElementById('copy-btn').addEventListener('click', function() {
    let outputText = document.getElementById('output-text').innerText;
    navigator.clipboard.writeText(outputText).then(function() {
        alert('Texto copiado para a área de transferência!');
    }, function(err) {
        alert('Erro ao copiar o texto: ', err);
    });
});

function encrypt(text) {
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    return decryptedText;
}