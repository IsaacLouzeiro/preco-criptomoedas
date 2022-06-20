<template>
    <section id="secaoCriptomoedas" class="pt-3 pb-4 mt-0">
        <div class="container pb-3">
            <hr class="pb-4 m-0">
            <h2 class="text-center fw-bold mt-4 mb-4">Procure sua criptomoeda preferida</h2>

            <!-- menu de pesquisa -->
            <ul id="menuLista" class="nav position-relative d-flex justify-content-start justify-content-sm-around mx-auto">
                <!-- botao de pesquisa -->
                <li :class="inputLiberado">
                    <button type="button" class="btnPesquisa mx-2 btn" :class="{ selecionado: pesqCripto }" @click="pesquisarCripto(), inputLiberado = 'inputLiberado'"><i class="fas fa-search"></i></button>
                    <input type="text" class="form-control inputPesquisar w-100 py-2">
                    <button type="button" class="btnFechar btn" @click="principaisCriptomoedas(), inputLiberado = ''"><i class="fas fa-times"></i></button>
                </li>

                <li>
                    <button type="button" class="btn mx-2 d-block" :class="{ selecionado: princCriptos }" @click="principaisCriptomoedas()">
                        Pricipais&nbsp;Criptomoedas
                    </button>
                </li>

                <li>
                    <button type="button" class="btn mx-2" :class="{ selecionado: token }" @click="tokens()">
                    Tokens
                    </button>
                </li>

                <li>
                    <button type="button" class="btn mx-2" :class="{ selecionado: deFiS }" @click="deFi()">
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
                    <!-- principais criptomoedas -->
                    <tr v-for="item in criptoCurrency" :key="item.id" v-show="pesqCripto == true">
                        <th scope="row" class="py-3">Pesquisa
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

                        <td class="d-md-table-cell d-none py-2 text-end"><a href="#" class="btn btn-outline-success">Veja Mais</a></td>
                    </tr>

                    <!-- principais criptomoedas -->
                    <tr v-for="item in criptoCurrency" :key="item.id" v-show="princCriptos == true">
                        <th scope="row" class="py-3">Princ cript
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

                        <td class="d-md-table-cell d-none py-2 text-end"><a href="#" class="btn btn-outline-success">Veja Mais</a></td>
                    </tr>

                    <!-- Tokens -->
                    <tr v-for="item in criptoCurrency" :key="item.id" v-show="token == true">
                        <th scope="row" class="py-3">Tokens
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

                        <td class="d-md-table-cell d-none py-2 text-end"><a href="#" class="btn btn-outline-success">Veja Mais</a></td>
                    </tr>

                    <!-- DeFi -->
                    <tr v-for="item in criptoCurrency" :key="item.id" v-show="deFiS == true">
                        <th scope="row" class="py-3">DeFi
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

                        <td class="d-md-table-cell d-none py-2 text-end"><a href="#" class="btn btn-outline-success">Veja Mais</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
export default {
    name: 'secaoCriptomoedas',

    data() {
        return {
            inputLiberado: '',
            pesqCripto: false,
            princCriptos: true,
            token: false,
            deFiS: false
        }
    },

    props: {
        criptoCurrency: Array
    },

    methods: {
        pesquisarCripto() {
            this.pesqCripto = true
            this.princCriptos = false
            this.token = false
            this.deFiS = false
        },
        principaisCriptomoedas() {
            this.princCriptos = true
            this.pesqCripto = false
            this.token = false
            this.deFiS = false
        },
        tokens() {
            this.token = true
            this.pesqCripto = false
            this.princCriptos = false
            this.deFiS = false
        },
        deFi() {
            this.deFiS = true
            this.pesqCripto = false
            this.princCriptos = false
            this.token = false
        }
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

            // se o item for selecionado
            &.selecionado {
                border-color: $color1;
            }
            
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
            background-color: rgba($color3, .04);
        }

        tbody {
            th { font-weight: 500; background-color: rgba($color3, .04); }
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