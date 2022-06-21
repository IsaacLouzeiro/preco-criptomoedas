<template>
    <footer class="pt-1 pb-3">
        <div class="row container mx-auto">
        <hr>
            <!-- logo -->
            <span class="logo col text-center">Cripto<span>Moeda</span></span>

            <!-- redes sociais -->
            <div class="d-flex justify-content-center socialNetwork">
                <a href="#" class="p-2"><i class="fa-brands fa-twitter"></i></a>
                <a href="#" class="p-2"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="p-2"><i class="fa-brands fa-google-plus-g me-0"></i></a>
            </div>

            <p>&copy; Todos os direitos reservados | por <a href="https://isaaclouzeiro.dev.br/">Isaac Louzeiro</a></p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'SecaoFooter'
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/cores.scss';

    footer {
        background-color: $color1;
        color: $color2;
    }

    .logo {
        font-weight: bold;
        color: $color2;
        font-size: 1.2em;

        span {
            color: $color3;
        }
    }

    .socialNetwork {
        a {
            color: $color2;

            &:hover {
                color: $color3;
            }
        }
    }

    p {
        text-align: center;
        a {
            text-decoration: none;
            font-weight: 500;
            color: $color3;

            &:hover {
                opacity: .7;
            }
        }
    }
</style>