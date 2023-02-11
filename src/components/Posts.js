import Post from "./Post";

export default function Posts() {
    const infoPosts = [
        {nomePerfil: "meowed", nomeCurtidas: "respondeai", conteudo: "gato-telefone"},
        {nomePerfil: "barked", nomeCurtidas: "adorable_animals", conteudo: "dog"},
        {nomePerfil: "meowed", nomeCurtidas: "9gag", conteudo: "gato-coberto"}
    ]

    return (
        <div class="posts">
            {infoPosts.map((elem) => 
                <Post nomePerfil={elem.nomePerfil} 
                nomeCurtidas={elem.nomeCurtidas} 
                conteudo={elem.conteudo} />
            )}
        </div>
    )
}