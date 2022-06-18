<template>
    <nav class="navbar navbar-expand-lg w-100 p-md-3">
        <div class="container-fluid">
            <!-- logo -->
            <a href="#" class="navbar-brand brand d-flex align-items-center"><img src="@/assets/logo.png" alt="Logo" width="30" class="me-1">Cripto<span>Moeda</span></a>
            
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
                    <a class="nav-link" href="#">Criptomoedas</a>
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
    
    <SecaoPrincipal class="container" />
</template>

<script>
import SecaoPrincipal from './components/SecaoPrincipal.vue'
import SecaoHeader from './components/SecaoHeader.vue'

export default {
    name: 'App',
    data() {
        return {
            
        }
    },
    components: {
        SecaoHeader,
        SecaoPrincipal
    },

    created() {
       
    },

    methods: {
        
    }
}
</script>

<style lang="scss">
    @import 'assets/cores.scss';
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
        height: 100%;
    }

    #app {
        background-image: url(./assets/bg.svg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    // cabecalho
    nav.navbar {
        background-color: $color1;
        
        
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
