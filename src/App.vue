<template>
    <header class="d-flex justify-content-between p-3">
        <!-- logo -->
        <a href="#" class="brand d-flex align-items-center"><img src="@/assets/logo.png" alt="Logo" width="30" class="me-1">Cripto<span>Moeda</span></a>


        
        <!-- redes sociais -->
        <div class="d-flex align-items-center text-white socialNetwork">
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-google-plus-g me-0"></i></a>
        </div>

    </header>
    <SecaoPrincipal class="container" />
</template>

<script>
import SecaoPrincipal from './components/SecaoPrincipal.vue'

export default {
    name: 'App',
    data() {
        return {
            
        }
    },
    components: {
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
    header {
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
