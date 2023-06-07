function toggleMode(event) {
    const islight = (event.target.checked)
    const foto = document.getElementById("gato1")
    const texto = document.getElementById("texto")
    const consagrado = document.getElementById("consagrado")
    const insta = document.getElementById("insta")
    const twitch = document.getElementById("twitch")

    if (islight) {
        document.body.style.backgroundImage = "url(bg-desktop-light.jpg)"
        foto.src = "gatito 1.jpg"
        texto.style.color = "#000"
        consagrado.style.color = "#000"
        insta.src = "instagram.png"
        twitch.src = "twitch.png"

    } else {
        document.body.style.backgroundImage = "url(bg-desktop.jpg)"
        foto.src = "gatito 2.jpg"
        texto.style.color = "#fff"
        consagrado.style.color = "#fff"
        insta.src = "instagram white.png"
        twitch.src = "white-twitch.png"
    }
}
const botao = document.getElementById("trocar_tema")
botao.addEventListener("change", toggleMode)