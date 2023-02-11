import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

function Copyright() {
    return (
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    )
}

function Links() {
    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
            Hashtags • Idioma
        </div>
    )
}

export default function SideBar() {
    return (
        <div class="sidebar">
            <Usuario />
            <Sugestoes />
            <Links/>
            <Copyright/>
        </div>
    )
}