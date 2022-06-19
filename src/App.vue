<template>
    <nav class="navbar navbar-expand-lg w-100 p-3 fixed-top" :class="scrolled" @scroll.passive="stickyTop()">
        <div class="container-fluid">
            <!-- logo -->
            <a href="#" class="navbar-brand brand d-flex align-items-center"><img src="@/assets/img/logo.png" alt="Logo" width="30" class="me-1">Cripto<span>Moeda</span></a>
            
            <!-- botao para abrir o menu -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Início</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#secaoCriptomoedas">Criptomoedas</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Sobre</a>
                    </li>
                </ul>
                <!-- redes sociais -->
                <div class="d-flex align-items-center text-white socialNetwork navbar-text">
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-google-plus-g me-0"></i></a>
                </div>
            </div>
        </div>
    </nav>

    <SecaoHeader />
    
    <SecaoPrincipal class="container" :criptoCurrency="criptoCurrency" />
    
    <SecaoCriptomoedas class="container pb-3" :criptoCurrency="criptoCurrency" />
</template>

<script>
import SecaoPrincipal from './components/SecaoPrincipal.vue'
import SecaoHeader from './components/SecaoHeader.vue'
import SecaoCriptomoedas from './components/SecaoCriptomoedas.vue'
import api from './services/api.js';

export default {
    name: 'App',
    data() {
        return {
            // para animacao de rolagem da pagina
            scrolled: '',
            
            criptoCurrency: [
                {
                    id: 1,
                    name: 'Bitcoin',
                    code: 'BTC',
                    price: '17,968.59',
                    day: '-12.69%',
                    week: '-37.13%',
                    marketCap: '342,677,468,113',
                    volume: '34,154,900,735'
                },
                {
                    id: 2,
                    name: 'Ethereum',
                    code: 'ETH',
                    price: '910.99',
                    day: '-16.18%',
                    week: '-41.04%',
                    marketCap: '110,431,019,114',
                    volume: '16,827,166,935'
                }
            ],
        }
    },
    // ler a rolagem da pagina
    created() {
        window.addEventListener("scroll", this.stickyTop);
    },

    mounted() {
        api.get('v1/cryptocurrency/listings/latest').then(response => {
            console.log(response.data)
        })
    },

    unmounted() {
        window.removeEventListener("scroll", this.stickyTop);
    },
    // animacao ao rolar a pagina
    methods: {
        stickyTop() {
            console.log(window.scrollY)
            if(window.scrollY >= 30)
                this.scrolled = 'scrolled'
            else
                this.scrolled = ''
        }
    },
    components: {
        SecaoHeader,
        SecaoPrincipal,
        SecaoCriptomoedas
    }
}
</script>

<style lang="scss">
    @import 'assets/sass/cores.scss';
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        font-family: 'Ubuntu', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html, body, #app {
        width: 100%;
        min-height: 100%;
    }

    #app {
        background-image: url(./assets/img/bg.svg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
    }

    // cabecalho
    nav.navbar {
        background-color: $color1;

        // animacao ao rolar a pagina
        transition: padding .2s ease;
        &.scrolled {
            padding-top: 5px!important;
            padding-bottom: 5px!important;
        }
        
        
        // logo
        .brand {
            font-weight: bold;
            color: $color2;
            font-size: 1.5em;
            text-decoration: none;

            span {
                color: $color3;
            }

            &:hover {
                color: $color2;
                opacity: .8;
            }
        }

        // botao para abrir o menu
        .navbar-toggler {
            i {
                color: $color3;
                font-size: 1.3em;
            }
        }

        // menu de navecagao
        #navbarText {
            .navbar-nav {
                .nav-item {
                    .nav-link {
                        color: $color2;

                        &.active {
                            opacity: .7;
                        }
                    }
                }
            }
        }

        // redes sociais
        .socialNetwork {
            a {
                i { margin: 0 .8em }
                color: $color3;
                transition: color .3s ease;

                &:hover {
                    color: $color2;
                }
            }
        }
    }
</style>
