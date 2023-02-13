import Sugestao from "./Sugestao";

function Titulo() {
    return (
        <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
    );
}

export default function Sugestoes() {
    const infoSugestoes = [
        { nome: "bad.vibes.memes", imagem: "assets/img/bad.vibes.memes.svg", razao: "Segue você" },
        { nome: "chibirdart", imagem: "assets/img/chibirdart.svg", razao: "Segue você" },
        { nome: "razoesparaacreditar", imagem: "assets/img/razoesparaacreditar.svg", razao: "Novo no Instagram" },
        { nome: "adorable_animals", imagem: "assets/img/adorable_animals.svg", razao: "Segue você" },
        { nome: "smallcutecats", imagem: "assets/img/smallcutecats.svg", razao: "Segue você" }
    ];

    return (
        <div className="sugestoes">
            <Titulo />
            {infoSugestoes.map((elem) =>
                <Sugestao nome={elem.nome} imagem={elem.imagem} razao={elem.razao} />
            )}
        </div>
    );
}