let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$/; 

    if (!nombre) {
        alert("Debes ingresar un nombre.");
        return;
    }
    if (!regex.test(nombre)) {
        alert("El nombre no puede contener caracteres especiales ni números.");
        return;
    }

    amigos.push(nombre);
    input.value = ''; 

    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en la página
function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista actual antes de actualizar

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, ingrese al menos un nombre.");
        return;
    }

    // Elegir un amigo secreto aleatoriamente
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el resultado del sorteo
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li><strong>El amigo secreto es:</strong> ${amigoSecreto}</li>`;

    // Ocultar la lista de amigos después del sorteo
    const lista = document.getElementById('listaAmigos');
    lista.style.display = 'none';
}
