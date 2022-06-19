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
        <table class="table mx-auto" id="lista">
            <thead>
                <tr>
                <th scope="col" class="d-md-table-cell d-none">Cripto</th>
                <th scope="col" class="text-center  d-md-table-cell d-none">Sigla</th>
                <th scope="col" class="text-end text-md-center d-md-table-cell d-none">Valor</th>
                <th scope="col" class="text-center d-md-table-cell d-none">24H</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in criptoCurrency" :key="item.id">
                    <th scope="row" class="py-3">
                        {{ item.name }}<br>
                        <span class="d-block d-md-none mt-1">
                            {{ item.code }}
                        </span>
                    </th>

                    <td class="py-3 d-md-table-cell d-none">{{ item.code }}</td>

                    <td class="py-3 d-md-table-cell d-none">{{ item.price }}</td>
                    
                    <td class="py-3 text-end text-md-center">
                        {{ item.day }}<br>
                        <span class="d-block d-md-none mt-1 fw-bold">
                            R$
                            {{ item.price }}
                        </span>
                    </td>

                    <td class="d-md-table-cell d-none py-2 text-end pe-0"><a href="#" class="btn btn-outline-success">Veja Mais</a></td>
                </tr>
            </tbody>
        </table>
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

    #secaoCriptomoedas {
        background-color: rgba($color2, .9);
    }

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

            @media only screen and (max-width: 768px) {
                font-size: large;
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
        max-width: 700px;

        thead {
            border: rgba(0,0,0,0);
        }
        
        td {
            text-align: center;
        }

        tbody {
            th { font-weight: 500; }
        }

        @media only screen and (max-width: 768px) {
            th, td {
                font-size: large;
            }

            tbody {
                th { font-weight: 400; }
            }
        }
    }
</style>