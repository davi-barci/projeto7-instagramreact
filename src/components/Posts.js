import Post from "./Post";

export default function Posts() {
    const infoPosts = [
        {nomePerfil: "meowed", nomeCurtidas: "respondeai", conteudo: "gato-telefone", qtdCurtidas: 101523},
        {nomePerfil: "barked", nomeCurtidas: "adorable_animals", conteudo: "dog", qtdCurtidas: 98956},
        {nomePerfil: "meowed", nomeCurtidas: "9gag", conteudo: "gato-coberto", qtdCurtidas: 33564}
    ];

    return (
        <div className="posts">
            {infoPosts.map((elem) =>
                <Post nomePerfil={elem.nomePerfil}
                nomeCurtidas={elem.nomeCurtidas}
                conteudo={elem.conteudo}
                qtdCurtidas={elem.qtdCurtidas}/>
            )}
        </div>
    )
};