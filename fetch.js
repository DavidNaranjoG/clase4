fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        datos(data);
    })

const datos = (datos) => {
    const nombre = document.getElementById("nombre");
    const phone = document.getElementById("phone");
    const webside = document.getElementById("website");
    
    for (let i = 0; i < datos.length; i++) {
        nombre.textContent = datos[i].name;
        phone.textContent = datos[i].phone;
        webside.textContent = datos[i].website;

        const filaClonada = document.getElementById("fila").cloneNode(true);
        document.getElementById("tableBody").appendChild(filaClonada);
    }
}