function login() {
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario == 'marco' && senha == '123456') {
        window.location.href = 'index.html';
        logado = 1;
    } else {
        alert("Acesso negado. Dados incorretos");
    };
};