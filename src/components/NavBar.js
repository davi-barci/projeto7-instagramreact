function IconesMobile() {
    <div class="icones-mobile">
        <ion-icon name="paper-plane-outline"></ion-icon>
    </div>
}

function Icones() {
    return (
        <div class="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    )
}

function Pesquisa() {
    return (
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    )
}

function Logo() {
    return (
        <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" alt="logo" />
        </div>
    )
}


export default function NavBar() {
    return (
        <div class="navbar">
            <div class="container">
                <Logo />
                <Pesquisa />
                <Icones />
                <IconesMobile />
            </div>
        </div>
    )
}