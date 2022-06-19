<template>
    <section id="secaoCriptomoedas">
        <hr class="mt-4">
        <h2 class="text-center fw-bold mt-4 mb-4">Procure sua criptomoeda preferida</h2>

        <!-- menu de pesquisa -->
        <ul id="menuLista" class="nav position-relative d-flex justify-content-start justify-content-sm-around mx-auto">
            <!-- botao de pesquisa -->
            <li :class="inputLiberado">
                <button type="button" class="btnPesquisa mx-2 btn" @click="inputLiberado = 'inputLiberado'"><i class="fas fa-search"></i></button>
                <input type="text" class="form-control inputPesquisar w-100 py-2">
                <button type="button" class="btnFechar btn" @click="inputLiberado = ''"><i class="fas fa-times"></i></button>
            </li>

            <li>
                <button type="button" class="btn mx-2 d-block">
                    Pricipais&nbsp;Criptomoedas
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

        <!-- lista de criptomoedas -->
        <ul id="lista">
            <table class="table mx-auto">
                <thead>
                    <tr>
                    <th scope="col">Cripto</th>
                    <th scope="col" class="text-center">Sigla</th>
                    <th scope="col" class="text-center">Valor</th>
                    <th scope="col" class="text-center">24H</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in criptoCurrency" :key="item.id">
                        <th scope="row">{{ item.name }}</th>
                        <td>{{ item.code }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.day }}</td>
                        <td><a href="#" class="btn btn-outline-success">Veja Mais</a></td>
                    </tr>
                </tbody>
            </table>
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
    },

    props: {
        criptoCurrency: Array
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/cores.scss';

    #menuLista {
        max-width: 767px;
        overflow-x: auto;
        overflow-y: hidden;
        height: 60px;
        flex-wrap: nowrap;

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
            background-color: $color2;
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
                cursor: default;
                &.btnFechar {
                    cursor: pointer;
                    display: block;
                }
            }
        }
    }

    #lista {
        table.table {
            max-width: 767px;

            thead {
                border: rgba(0,0,0,0);
            }

            td {
                padding: 15px 0;
                text-align: center;
            }
        }
    }
</style>