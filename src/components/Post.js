import React from 'react';

function CorpoPost(props) {
    const imgPost = `assets/img/${props.conteudo}.png`;
    const imgCurtidas = `assets/img/${props.nomeCurtidas}.svg`;
    const [salvar, setSalvar] = React.useState("bookmark-outline");
    const [curtir, setCurtir] = React.useState("heart-outline");
    const [animacao, setAnimacao] = React.useState("");

    function salvarPost() {
        if (salvar === "bookmark") {
            setSalvar("bookmark-outline");
        } else {
            setSalvar("bookmark");
        }
    }

    function curtirPost() {
        if (curtir === "heart") {
            setCurtir("heart-outline");
        } else {
            setCurtir("heart");
        }
    }

    function doubleClickLike(){
        if(curtir === "heart-outline"){
            setCurtir("heart");
            setAnimacao("clicked");
            setTimeout(() => { setAnimacao(""); }, 500);
        }
    }

    return (
        <>
            <div className="conteudo">
                <img src={imgPost} alt={props.conteudo} data-test="post-image" onDoubleClick={doubleClickLike}/>
                <ion-icon class={animacao} name="heart" onDoubleClick={doubleClickLike}></ion-icon>
            </div>
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={curtir} data-test="like-post" onClick={curtirPost} color={(curtir === "heart") ? "danger" : "dark"}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" name={salvar} onClick={salvarPost}></ion-icon>
                    </div>
                </div>
                <div className="curtidas">
                    <img src={imgCurtidas} alt={props.nomeCurtidas} />
                    <div className="texto">
                        Curtido por <strong>{props.nomeCurtidas}</strong> e 
                        <strong> outras <strong data-test="likes-number">{(curtir === "heart") ? (props.qtdCurtidas+1).toLocaleString("pt-br") 
                        : props.qtdCurtidas.toLocaleString("pt-br") }
                        </strong> pessoas</strong>
                    </div>
                </div>
            </div>
        </>
    )
};

function Topo(props) {
    const imgPerfil = `assets/img/${props.nomePerfil}.svg`;

    return (
        <div className="topo">
            <div className="usuario">
                <img src={imgPerfil} alt={props.nomePerfil} />
                {props.nomePerfil}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
};

export default function Post(props) {
    return (
        <div className="post" data-test="post">
            <Topo nomePerfil={props.nomePerfil} />
            <CorpoPost conteudo={props.conteudo} nomeCurtidas={props.nomeCurtidas} qtdCurtidas={props.qtdCurtidas} />
        </div>
    )
};