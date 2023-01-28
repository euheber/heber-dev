<template>
    <navigation />
    <main>
        <p>
            Tenho 25 anos, estudo programação há mais de um ano e recentemente venho me empenhando para conseguir a primeira
            vaga como programador e assim poder crescer e aprender mais como desenvolvedor. Antes de me dedicar
            totalmente aos estudos do Front end, trabalhei como redator, escrevendo manuais de instrução e
            posteriormente também fiz alguns trabalhos como freelancer, escrevendo alguns textos para blogs. Sou
            apaixonado por tudo que tem relação à storytelling e quando não estou codando estou procurando uma boa
            história para ler, jogar ou assistir.

            Sou formado em publicidade, mas a tecnologia é bem mais divertida, então deixei de escrever textos para
            escrever códigos.
        </p>


        <section id="myStack">
            <h2>Habilidades</h2>

            <ul>
                <li><i class="fa-brands fa-html5 html"></i></li>
                <li><i class="fa-brands fa-css3-alt css"></i></li>
                <li><i class="fa-brands fa-sass sass"></i></li>
                <li><i class="fa-brands fa-js javascript"></i></li>
                <li><i class="fa-brands fa-vuejs vue"></i></li>
                <li><i class="fa-brands fa-github github"></i></li>
                <li><i class="fa-brands fa-git-alt branch"></i></li>
            </ul>
        </section>
    </main>

    <footerComponent />
</template>

<script setup>
import navigation from '../components/navigation/navigation.vue';
</script>

<style lang="scss" scoped src="../assets/scss/aboutComponent/about.scss" />

   

