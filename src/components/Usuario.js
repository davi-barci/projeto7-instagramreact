import React from 'react'

export default function Usuario() {
    const [nomePerfil, setNomePerfil] = React.useState("catanacomics");
    const [fotoPerfil, setFotoPerfil] = React.useState("assets/img/catanacomics.svg");

    function changeName(){
        const novoNome = prompt("Digite seu novo nome de usuário...");

        if (novoNome.trim() !== ""){
            setNomePerfil(novoNome);
        }
    }

    function changeImage(){
        const novaImagem = prompt("Defina sua nova foto de perfil...");

        if (novaImagem.trim() !== ""){
            setFotoPerfil(novaImagem);
        }
    }

    return (
        <div class="usuario">
            <img src={fotoPerfil} alt="imagem de perfil" onClick={changeImage} data-test="profile-image"/>
            <div class="texto">
                <span>
                    <strong data-test="name">{nomePerfil}</strong>
                    <ion-icon name="pencil" onClick={changeName} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}