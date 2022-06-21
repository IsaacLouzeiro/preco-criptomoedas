<template>
    <section id="secaoNewsletter" class="pt-1 pb-5">
            <h2 class="text-center fw-bold mt-4">Acesse nossa Newsletter</h2>
            <p class="mb-4 text-center mx-2">Para receber novidades e atualizações diárias sobre o mundo Crypto</p>

            <form class="d-flex align-items-center justify-content-center">
                <div>
                    <label for="inputEmail" class="form-label  position-absolute">Endereco de email</label>
                    <input type="email" class="form-control border-dark" id="inputEmail">
                </div>
                <button type="submit" class="btn btn-primary ms-2" @click.prevent="">Enviar</button>
            </form>
    </section>
</template>

<script>
export default {
    name: 'SecaoNewsletter'
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/cores.scss';

    #secaoNewsletter {
        background-color: $color1;
        color: $color2;
    }

    p {
        color: $color3;
    }
    
    label {
        opacity: 0;
    }
    .btn {
        background-color: $color3;

        &:hover {
            opacity: .7;
        }
    }

    .btn, input[type="email"] {
        box-shadow: none;
        border: 0;

        &:hover, &:focus, &:active {
            box-shadow: none;
            border: 0;
        }

        @media only screen and (min-width: 767px) {
            font-size: 1.3em;
            padding: .5em 1em;
        }
    }
</style>