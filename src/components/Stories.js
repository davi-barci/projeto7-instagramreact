import Story from "./Story";

function Setinha(){
    return (
        <div className="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    );
}

export default function Stories() {
    const infoStories = [
        { nome: "9gag", imagem: "assets/img/9gag.svg"},
        { nome: "meowed", imagem: "assets/img/meowed.svg"},
        { nome: "barked", imagem: "assets/img/barked.svg"},
        { nome: "nathanwpylestrangeplanet", imagem: "assets/img/nathanwpylestrangeplanet.svg"},
        { nome: "wawawicomics", imagem: "assets/img/wawawicomics.svg"},
        { nome: "respondeai", imagem: "assets/img/respondeai.svg"},
        { nome: "filomoderna", imagem: "assets/img/filomoderna.svg"},
        { nome: "memeriagourmet", imagem: "assets/img/memeriagourmet.svg"}
    ];

    return (
        <div className="stories">
            {infoStories.map((elem) =>
                <Story nome={elem.nome} imagem={elem.imagem} />
            )}
            <Setinha/>
        </div>
    );
}