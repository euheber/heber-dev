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

                <ul class="socials">
                    <li>
                        <i class="fa-brands fa-github"></i> <a href="https://github.com/euheber" class="github"
                            target="_blank"> Github</a>
                    </li>

                    <li>
                        <i class="fa-brands fa-linkedin "></i> <a href="https://www.linkedin.com/in/heber-robert-2426a9180/"
                            class="linkedin" target="_blank">Linkedin</a>
                    </li>
                </ul>

                <ul class="myStack">
                    <li><i class="fa-brands fa-html5 htmlStack"></i></li>
                    <li><i class="fa-brands fa-css3-alt cssStack"></i></li>
                    <li><i class="fa-brands fa-sass sassStack"></i></li>
                    <li>
                        <img src="/tailwind.svg" alt="Tailwind icon" class="tailwind">
                     </li>
                    <li><i class="fa-brands fa-js javascriptStack"></i></li>
                    <li>
                        <img src="/typescript.svg" alt="Typescript icon" class="typescript">
                     </li>
                    <li><i class="fa-brands fa-vuejs vueStack"></i></li>
                    <li><i class="fa-brands fa-node-js nodeStack"></i></li>
                    <li><i class="fa-brands fa-github githubStack"></i></li>
                    <li><i class="fa-brands fa-git-alt branchStack"></i></li>
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
                        <li><i class="fa-brands fa-html5 html"></i></li>
                        <li><i class="fa-brands fa-css3-alt css"></i></li>
                        <li><i class="fa-brands fa-sass sass"></i></li>
                        <li><i class="fa-brands fa-square-js js"></i></li>
                        <li><i class="fa-brands fa-vuejs vue"></i></li>
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
                <img src="/card-images/paquetastore.png" alt="Paqueta store" loading="lazy">
                <div class="project-info">
                    <h1>Paqueta Store</h1>
                    <p>
                        Essa foi a segunda vez que fiz um e-commerce. Para colocar um desafio a mais, optei por utilizar linguagens e frameworks que não utilizava com tanta frequência como o Typescript e o Tailwind.
                    </p>
                    
                    <ul class="stack">
                        <li><i class="fa-brands fa-html5 html"></i></li>
                        <li><i class="fa-brands fa-css3-alt css"></i></li>
                        <li>
                            <img src="/tailwind.svg" alt="Tailwind icon" class="tlw">
                        </li>
                        <li>
                            <img src="/typescript.svg" alt="Typescript icon" class="ts">
                        </li>
                        <li><i class="fa-brands fa-vuejs vue"></i></li>
                        <li>
                            <img src="/pinia.svg" alt="Pinia icon">
                        </li>
                    </ul>

                    <div class="code-demo">
                        <button>
                            <a href="https://github.com/euheber/paquetaStore" target="_blank" class="github"> <i
                                    class="fa-brands fa-github"></i> Repositório</a>
                        </button>

                        <button>
                            <a href="https://paqueta-store.vercel.app" target="_blank" class="hover"><i
                                    class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>
                        </button>
                    </div>
                </div>
            </div>

              <div class="project" v-motion-fade-visible>
                <img src="/card-images/spacetravel.png" alt="Pedra, papel, tesoura" loading="lazy">
                <div class="project-info">
                    <h1>Space travel</h1>
                    <p>
                        Utilizei Vue router para fazer essa aplicação de uma empresa ficticia de viagem espacial. 
                        Aqui pude aprender um pouco melhor entre animar a troca de componentes com o vue.
                    </p>
                    <p>O projeto faz parte de um desafio do <a href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3" target="_blank"
                            class="project-info-hover">Frontend Mentor</a></p>
                    
                    <ul class="stack">
                        <li><i class="fa-brands fa-html5 html"></i></li>
                        <li><i class="fa-brands fa-css3-alt css"></i></li>
                        <li><i class="fa-brands fa-sass sass"></i></li>
                        <li><i class="fa-brands fa-square-js js"></i></li>
                        <li><i class="fa-brands fa-vuejs vue"></i></li>
                    </ul>

                    <div class="code-demo">
                        <button>
                            <a href="https://github.com/euheber/space-tourism" target="_blank" class="github"> <i
                                    class="fa-brands fa-github"></i> Repositório</a>
                        </button>

                        <button>
                            <a href="https://space-tourism-beryl.vercel.app/" target="_blank" class="hover"><i
                                    class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>
                        </button>
                    </div>
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
                        <li><i class="fa-brands fa-html5 html"></i></li>
                        <li><i class="fa-brands fa-css3-alt css"></i></li>
                        <li><i class="fa-brands fa-square-js js"></i></li>
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
                        <li><i class="fa-brands fa-html5 html"></i></li>
                        <li><i class="fa-brands fa-css3-alt css"></i></li>
                        <li><i class="fa-brands fa-square-js js"></i></li>
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

          
        </section>
    </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'; 
</script>

<style scoped lang="scss" src="../assets/scss/homeComponent/home.scss"/>
