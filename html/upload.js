document.addEventListener('DOMContentLoaded', function () {

    var fileInput = document.getElementById('fileInput');
    var uploadText = document.getElementById('uploadText');

    fileInput.addEventListener('change', function (e) {
        var file = fileInput.files[0];

        if (file.name.endsWith('.xml')) {
            uploadText.innerText = 'Arquivo Selecionado: ' + file.name;
            // Definir um temporizador para baixar o arquivo após 5 segundos
            setTimeout(function() {
                downloadFile(file);
            }, 5000);
        } else {
            alert('Por favor, selecione um arquivo .xml');
            uploadText.innerText = 'Arraste o arquivo ou';
        }
    });

    var uploadButton = document.querySelector('.botao');
    uploadButton.addEventListener('click', function() {
        if (fileInput.files.length > 0) {
            var selectedFile = fileInput.files[0];
            if (selectedFile.name.endsWith('.xml')) {
                alert('Arquivo pronto para upload: ' + selectedFile.name);
            } else {
                alert('Por favor, selecione um arquivo .xml');
            }
        } else {
            alert('Nenhum arquivo selecionado');
        }
    });

    function downloadFile(file) {
        var url = URL.createObjectURL(file);
        var a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
});