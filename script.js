
function logar(e) {
    e.preventDefault();

    let input_usuario = document.getElementById("usuario");
    let input_senha = document.getElementById("senha");
    let msg = document.getElementById("loginMsg");

    msg.innerText = "";

    if (!input_usuario || !input_senha) return;

    let usuario = input_usuario.value;
    let senha = input_senha.value;

    if (!usuario || !senha) {
        msg.style.color = "red";
        msg.innerText = "Preencha todos os campos!";
        return;
    }

    fetch("http://localhost:1880/autenticacao/autenticar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, senha })
    })
    .then(resposta => {
        if (!resposta.ok) throw new Error();
        return resposta.json();
    })
    .then(dados => {
        msg.style.color = "limegreen";
        msg.innerText = `Olá, ${dados.usuario}`;
    })
    .catch(() => {
        msg.style.color = "red";
        msg.innerText = "Usuário ou senha inválidos!";
    });
}

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let indiceEdicao = null;

function openTab(tabId) {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.style.display = "none";
    });

    document.getElementById(tabId).style.display = "block";

    if (tabId === "usuarios") {
        listarUsuarios();
    }
}

openTab("login");

function cadastrar() {
    let user = document.getElementById("cadUser").value;
    let pass = document.getElementById("cadPass").value;
    let msg = document.getElementById("cadMsg");

    msg.innerText = "";

    if (!user || !pass) {
        msg.style.color = "red";
        msg.innerText = "Preencha todos os campos!";
        return;
    }

    usuarios.push({ user, pass });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    msg.style.color = "limegreen";
    msg.innerText = "Usuário cadastrado com sucesso!";

    document.getElementById("cadUser").value = "";
    document.getElementById("cadPass").value = "";
}

function listarUsuarios() {
    let lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";

    usuarios.forEach((u, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span>${u.user}</span>
            <div>
                <button onclick="editarUsuario(${index})">Editar</button>
                <button onclick="excluirUsuario(${index})">Excluir</button>
            </div>
        `;

        lista.appendChild(li);
    });
}

function editarUsuario(index) {
    indiceEdicao = index;

    document.getElementById("editarBox").style.display = "block";
    document.getElementById("editUser").value = usuarios[index].user;
    document.getElementById("editPass").value = usuarios[index].pass;

    document.getElementById("editMsg").innerText = "";
}

function salvarEdicao() {
    let user = document.getElementById("editUser").value;
    let pass = document.getElementById("editPass").value;
    let msg = document.getElementById("editMsg");

    msg.innerText = "";

    if (!user || !pass) {
        msg.style.color = "red";
        msg.innerText = "Preencha todos os campos!";
        return;
    }

    usuarios[indiceEdicao] = { user, pass };
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    msg.style.color = "limegreen";
    msg.innerText = "Usuário atualizado com sucesso!";

    listarUsuarios();
}

function excluirUsuario(index) {
    if (!confirm("Tem certeza que deseja excluir este usuário?")) return;

    usuarios.splice(index, 1);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    listarUsuarios();
}
