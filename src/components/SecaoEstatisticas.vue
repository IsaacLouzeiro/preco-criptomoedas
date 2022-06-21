<template>
    <section id="secaoEstatisticas" class="pt-1 pb-5">
        <div class="container">
            <h2 class="text-center fw-bold mb-4" style="margin-top: 1.5em;">Crescimento da comunidade Cripto</h2>

            <!-- caixa agrupando os valores -->
            <div class="row g-0 justify-content-around grupoEstatistica">
                <!-- caixa com os valores -->
                <div class="col-lg-3 text-center pt-3">
                    <h3><span>+ {{ animarValor1 }}</span> {{ valor1Texto }}</h3>
                    <p>Ipsum aspernatur non maiores nobis temporibus minima!</p>
                </div>

                <!-- caixa com os valores -->
                <div class="col-lg-3 text-center pt-3">
                    <h3><span>+ {{ animarValor2 }}</span> {{ valor2Texto }}</h3>
                    <p> Mollitia quis sunt deserunt iusto sunt quibusdam adipisci.</p>
                </div>

                <!-- caixa com os valores -->
                <div class="col-lg-3 text-center pt-3">
                    <h3><span>+ {{ animarValor3 }}</span> {{ valor3Texto }}</h3>
                    <p>Lorem ipsum dolor sit, amet elit consectetur adipisicing.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import gsap from 'gsap'

export default {
    name: 'SecaoEstatisticas',
    data() {
        return {
            valor1Inicial: 0,
            valor1Final: 0,
            valor1Texto: 'Bilhoes',
            valor2Inicial: 0,
            valor2Final: 0,
            valor2Texto: "Projetos",
            valor3Inicial: 0,
            valor3Final: 0,
            valor3Texto: "Milhões",
        }
    },

    mounted() {
        this.valor1Inicial = 300
        this.valor2Inicial = 499
        this.valor3Inicial = 244

    },

    // animacao de crescimento
    computed: {
        animarValor1() {
            return this.valor1Final.toFixed(0);
        },
        animarValor2() {
            return this.valor2Final.toFixed(0);
        },
        animarValor3() {
            return this.valor3Final.toFixed(0);
        }
    },

    watch: {
        valor1Inicial(novoValor) {
            gsap.to(this.$data, { duration: 10, valor1Final: novoValor })
        },
        valor2Inicial(novoValor) {
            gsap.to(this.$data, { duration: 20, valor2Final: novoValor })
        },
        valor3Inicial(novoValor) {
            gsap.to(this.$data, { duration: 30, valor3Final: novoValor })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/cores.scss';

    #secaoEstatisticas {
        background-color: $color1;
        color: $color2;
    }

    .grupoEstatistica {
        h3 {
            font-size: 2.5em;
            color: $color3;
            text-align: center;

            @media only screen and (max-width: 767px) {
                font-size: 2em;
            }

            @media only screen and (max-width: 500px) {
                font-size: 1.8em;
            }
        }
    }
</style>