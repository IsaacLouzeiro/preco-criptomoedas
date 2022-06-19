<template>
    <section id="secaoCriptomoedas">
        <hr class="mt-4">
        <h2 class="text-center fw-bold mt-4 mb-4">Procure sua criptomoeda preferida</h2>

        <ul id="lista" class="nav position-relative d-flex justify-content-center mx-auto px-2">
            <!-- botao de pesquisa -->
            <li :class="inputLiberado">
                <button type="button" class="btnPesquisa mx-2 btn" @click="inputLiberado = 'inputLiberado'"><i class="fas fa-search"></i></button>
                <input type="text" class="form-control inputPesquisar w-100 py-2">
                <button type="button" class="btnFechar btn" @click="inputLiberado = ''"><i class="fas fa-times"></i></button>
            </li>

            <li>
                <button type="button" class="btn mx-2">
                    Pricipais Criptomoedas
                </button>
            </li>

            <li>
                <button type="button" class="btn mx-2">
                Tokens
                </button>
            </li>

            <li>
                <button type="button" class="btn mx-2">
                DeFi
                </button>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'secaoCriptomoedas',

    data() {
        return {
            inputLiberado: '',
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/cores.scss';

    #lista {
        max-width: 700px;

        .btn {
            border-top: none;
            border-left: none;
            border-right: none;
            border-bottom: 2px solid $color3;
            border-radius: 0;
            
            &:focus, &:hover { opacity: .7; }

            &.btnFechar {
                display: none;
                
                i { font-size: 1.2em; }
            }
        }

        .inputPesquisar {
            display: none;
            font-size: 1.2em;
        }

        .inputLiberado {
            display: flex;
            width: 100%;
            position: absolute;
            border: 1px solid $color3;

            .inputPesquisar {
                display: block;
                border: none;
                padding: 0;

                &:focus, &:hover { border: none; box-shadow: none; }
            }

            .btn {
                border: none;
                opacity: .7;
                background-color: $color2;
                cursor: default;
                &.btnFechar {
                    cursor: pointer;
                    display: block;
                }
            }
        }
    }
</style>