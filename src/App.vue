<template>
<div id="app" :class="{scrolledApp: scrolled }">
    <nav id="menuNavegacao" class="navbar navbar-expand-lg w-100 p-3 fixed-top" :class="{scrolled: scrolled }" @scroll.passive="stickyTop()">
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
                    <a class="nav-link" aria-current="page" href="#header">Início</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#secaoCriptomoedas">Criptomoedas</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#secaoFaq">Sobre</a>
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

    <!-- bootstrap scrollspy -->
    <div data-bs-spy="scroll" data-bs-target="#menuNavegacao" data-bs-root-margin="0px" data-bs-smooth-scroll="true" tabindex="0">
        <SecaoHeader />
        
        <SecaoPrincipal />
        
        <SecaoCriptomoedas />
        
        <SecaoEstatisticas />
    
        <SecaoFaq />
        
        <SecaoNewsletter />

        <SecaoFooter />
    </div>
</div>
</template>

<script>
import SecaoPrincipal from './components/SecaoPrincipal.vue'
import SecaoHeader from './components/SecaoHeader.vue'
import SecaoCriptomoedas from './components/SecaoCriptomoedas.vue'
import SecaoFaq from './components/SecaoFaq.vue'
import SecaoEstatisticas from './components/SecaoEstatisticas.vue';
import SecaoNewsletter from './components/SecaoNewsletter.vue'
import SecaoFooter from './components/SecaoFooter.vue'

export default {
    name: 'App',
    data() {
        return {
            // para animacao de rolagem da pagina
            scrolled: false
        }
    },
    // ler a rolagem da pagina
    created() {
        window.addEventListener("scroll", this.stickyTop);
    },
    unmounted() {
        window.removeEventListener("scroll", this.stickyTop);
    },
    // animacao ao rolar a pagina
    methods: {
        stickyTop() {
            console.log(window.scrollY)
            if(window.scrollY >= 40)
                this.scrolled = true
            else
                this.scrolled = false
        }
    },
    components: {
        SecaoHeader,
        SecaoPrincipal,
        SecaoCriptomoedas,
        SecaoFaq,
        SecaoEstatisticas,
        SecaoNewsletter,
        SecaoFooter
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
        transition: margin-top .3s ease-in;

        &.scrolledApp {
            margin-top: -56px;
        }
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
