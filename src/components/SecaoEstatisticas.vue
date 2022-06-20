<template>
    <section id="secaoEstatisticas" class="pt-1 pb-5">
        <div class="container">
            <h2 class="text-center fw-bold mt-5 mb-4">Crescimento da comunidade Cripto</h2>

            <!-- caixa agrupando os valores -->
            <div class="row g-0 justify-content-around grupoEstatistica">
                <!-- caixa com os valores -->
                <div class="col-3">
                    <h3><span>+ {{ valor1 }}</span> {{ valor1Texto }}</h3>
                    <p>Ipsum aspernatur non maiores nobis temporibus minima!</p>
                </div>

                <!-- caixa com os valores -->
                <div class="col-3">
                    <h3><span>+ {{ valor2 }}</span> {{ valor2Texto }}</h3>
                    <p> Mollitia quis sunt deserunt iusto sunt quibusdam adipisci.</p>
                </div>

                <!-- caixa com os valores -->
                <div class="col-3">
                    <h3><span>+ {{ valor3 }}</span> {{ valor3Texto }}</h3>
                    <p>Lorem ipsum dolor sit, amet elit consectetur adipisicing.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SecaoEstatisticas',
    data() {
        return {
            valor1: 244,
            valor1Texto: 'Bilhoes',
            valor2: 499,
            valor2Texto: "Projetos",
            valor3: 244,
            valor3Texto: "Milhões",
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
        }
    }
</style>