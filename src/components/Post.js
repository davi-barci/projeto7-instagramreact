function Curtidas(props) {
    const imgCurtidas = `assets/img/${props.nomeCurtidas}.svg`;

    return (
        <div class="curtidas">
            <img src={imgCurtidas} alt={props.nomeCurtidas} />
            <div class="texto">
                Curtido por <strong>{props.nomeCurtidas}</strong> e <strong>outras 101.523 pessoas</strong>
            </div>
        </div>
    )
}

function Acoes() {
    return (
        <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    )
}

function Fundo(props) {
    return (
        <div class="fundo">
            <Acoes />
            <Curtidas nomeCurtidas={props.nomeCurtidas}/>
        </div>
    )
}

function Conteudo(props) {
    const imgPost = `assets/img/${props.conteudo}.png`;

    return (
        <div class="conteudo">
            <img src={imgPost} alt={props.conteudo} />
        </div>
    )
}

function Topo(props) {
    const imgPerfil = `assets/img/${props.nomePerfil}.svg`;

    return (
        <div class="topo">
            <div class="usuario">
                <img src={imgPerfil} alt={props.nomePerfil} />
                {props.nomePerfil} 
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

export default function Post(props) {
    return (
        <div class="post">
            <Topo nomePerfil={props.nomePerfil}/>
            <Conteudo conteudo={props.conteudo}/>
            <Fundo nomeCurtidas={props.nomeCurtidas}/>
        </div>
    )
}