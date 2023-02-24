<template>
    <main>
        <section id="personal-info">
            <div class="profile-file">
                <img src="/profile.jpg" alt="Foto de perfil">
            </div>
            <div>
                <p>
                    <strong>Desenvolvedor Front end.</strong> Você pode conhecer um pouco mais sobre mim <strong>
                        <router-link class="hover" to="/about">aqui</router-link></strong>.
                </p>

                <ul>
                    <li>
                        <i class="fa-brands fa-github"></i> <a href="https://github.com/euheber" class="github"
                            target="_blank"> Github</a>
                    </li>

                    <li>
                        <i class="fa-brands fa-linkedin "></i> <a
                            href="https://www.linkedin.com/in/heber-robert-2426a9180/" class="linkedin"
                            target="_blank">Linkedin</a>
                    </li>
                </ul>
            </div>
        </section>

        <div id="divider">
            <h1>Projetos</h1>
        </div>

        <section id="projects">
            <div class="project">
                <img src="/card-images/Blizzard-landpage_.png" alt="Blizzard landpage">

                <div class="project-info">
                    <h1>Blizzard Landpage</h1>
                    <p>Primeiro projeto em que usei Vue e também o que mais me proporcionou aprendizado com a linguagem.
                    </p>
                    <p>O projeto faz parte de um desafio do <a href="https://www.brchallenges.com/" target="_blank"
                            class="project-info-hover">BRChallenges</a></p>
                    <ul class="stack">
                        <li><i class="fa-brands fa-vuejs vue"></i></li>
                        <li><i class="fa-brands fa-square-js js"></i></li>
                        <li><i class="fa-brands fa-sass sass"></i></li>
                        <li><i class="fa-brands fa-css3-alt css"></i></li>
                        <li><i class="fa-brands fa-html5 html"></i></li>
                    </ul>
                </div>

                <div class="code-demo">
                    <button>
                        <a href="https://github.com/euheber/Blizzard-landpage" target="_blank" class="github"> <i
                                class="fa-brands fa-github"></i> Repositório</a>
                    </button>

                    <button>
                        <a href="https://euheber.github.io/Blizzard-landpage/" target="_blank" class="hover"><i
                                class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>
                    </button>
                </div>
            </div>

            <div class="project" v-motion-fade-visible>
                <img src="/card-images/Empire-Burguer_.png" alt="Empire Burguer Landpage" loading="lazy">
                <div class="project-info">
                    <h1>Empire Burguer Landpage</h1>
                    <p>
                        Primeiro desafio disponibilizado pela plataforma <a href="https://www.brchallenges.com/"
                            target="_blank" class="project-info-hover">BRChallenges</a>.
                    </p>
                    <p>
                        A dificuldade escolhida para fazer o projeto foi a díficil, nela tive que seguir alguns
                        critérios: Usar o CSS grid e o conteúdo do cardárpio precisava ser feito por meio de uma
                        requisição de API.
                    </p>

                    <ul class="stack">
                        <li><i class="fa-brands fa-square-js js"></i></li>
                        <li><i class="fa-brands fa-css3-alt css"></i></li>
                        <li><i class="fa-brands fa-html5 html"></i></li>
                    </ul>


                    <div class="code-demo">
                        <button>
                            <a href="https://github.com/euheber/Empire-Burguer" target="_blank" class="github"> <i
                                    class="fa-brands fa-github"></i> Repositório</a>
                        </button>

                        <button>
                            <a href="https://euheber.github.io/Empire-Burguer/" target="_blank" class="hover"><i
                                    class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>
                        </button>
                    </div>
                </div>
            </div>

            <div class="project" v-motion-fade-visible>
                <img src="/card-images/Spotify-website-clone_.png" alt="Empire Burguer Landpage" loading="lazy">
                <div class="project-info">
                    <h1>Spotify clone</h1>
                    <p>
                        Clonar o spotify foi uma experiência muito boa como desenvolvedor e foi algo que partiu de mim
                        mesmo. Foi com esse desafio que percebi o quanto evoluí minhas habilidades com CSS e
                        responsividade.
                    </p>
                    <ul class="stack">
                        <li><i class="fa-brands fa-square-js js"></i></li>
                        <li><i class="fa-brands fa-css3-alt css"></i></li>
                        <li><i class="fa-brands fa-html5 html"></i></li>
                    </ul>

                    <div class="code-demo">
                        <button>
                            <a href="https://github.com/euheber/Spotify-website-clone" target="_blank" class="github"><i
                                    class="fa-brands fa-github"></i> Repositório</a>
                        </button>

                        <button>
                            <a href="https://euheber.github.io/Spotify-website-clone/" target="_blank" class="hover"><i
                                    class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>
                        </button>
                    </div>
                </div>
            </div>

            <div class="project" v-motion-fade-visible>
                <img src="/card-images/Rock-paper-scissors-game_.png" alt="Pedra, papel, tesoura" loading="lazy">
                <div class="project-info">
                    <h1>Pedra, papel, tesoura</h1>
                    <p>
                        Fazer um jogo simples como pedra, papel e tesoura se provou uma ótima maneira de exercitar a
                        lógica de programação. Com esse projeto pude colocar em pratica boa parte do que aprendi com o
                        curso de javascript.
                    </p>
                    <p>O projeto faz parte de um desafio do <a href="https://www.frontendmentor.io/" target="_blank"
                            class="project-info-hover">Frontend Mentor</a></p>
                    <ul class="stack">
                        <li><i class="fa-brands fa-square-js js"></i></li>
                        <li><i class="fa-brands fa-css3-alt css"></i></li>
                        <li><i class="fa-brands fa-html5 html"></i></li>
                    </ul>

                    <div class="code-demo">
                        <button>
                            <a href="https://github.com/euheber/Rock-paper-scissors-game" target="_blank"
                                class="github"> <i class="fa-brands fa-github"></i> Repositório</a>
                        </button>

                        <button>
                            <a href="https://euheber.github.io/Rock-paper-scissors-game/" target="_blank"
                                class="hover"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <h3>
            <RouterLink :to="{name: 'project'}" class="hover">Ver mais</RouterLink>
        </h3>
    </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'; 
</script>

<style scoped lang="scss" src="../assets/scss/homeComponent/home.scss"/>
