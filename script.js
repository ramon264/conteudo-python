function logar(e){
    e.preventDefalt();


    let input_usuario = document.getElementById("usuario");
    let input_senha = document.getElementById("senha")

    if(input_usuario || !input_senha){
        return;
    }

console.log(input_usuario)

let usuario = input_usuario.value

}
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function openTab(tabId) {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.style.display = "none";
    });
    document.getElementById(tabId).style.display = "block";

    if (tabId === "usuarios") {
        listarUsuarios();
    }
}

function cadastrar() {
    let user = document.getElementById("cadUser").value;
    let pass = document.getElementById("cadPass").value;

    if (!user || !pass) {
        document.getElementById("cadMsg").innerText = "Preencha todos os campos!";
        return;
    }

    usuarios.push({ user, pass });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    document.getElementById("cadMsg").style.color = "green";
    document.getElementById("cadMsg").innerText = "Usuário cadastrado com sucesso!";
}

function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let encontrado = usuarios.find(u => u.user === user);

    if (!encontrado) {
        document.getElementById("loginMsg").innerText = "Usuário não encontrado!";
        return;
    }

    if (encontrado.pass !== pass) {
        document.getElementById("loginMsg").innerText = "Senha incorreta!";
        return;
    }

    document.getElementById("loginMsg").style.color = "green";
    document.getElementById("loginMsg").innerText = "Login realizado com sucesso!";
}

function listarUsuarios() {
    let lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";

    usuarios.forEach(u => {
        let li = document.createElement("li");
        li.innerText = u.user;
        lista.appendChild(li);
    });
}

// Abre a aba de login por padrão
openTab("login");
