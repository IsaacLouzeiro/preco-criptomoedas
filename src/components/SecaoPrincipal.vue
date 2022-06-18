<template>
    <section id="secaoPrincipal" class="mt-2 rounded p-0 text-white">
        <div id="coverBg" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#coverBg" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#coverBg" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#coverBg" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/bg-header.jpg" class="d-block w-100" alt="...">
                    <h4 class="text-center">Você precisa saber sobre a cotação das suas criptomoedas preferidas?</h4>
                </div>
                <div class="carousel-item">
                    <img src="../assets/bg-header.jpg" class="d-block w-100" alt="...">
                    <h4 class="text-center">Você precisa saber sobre a cotação das suas criptomoedas preferidas?</h4>
                </div>
                <div class="carousel-item">
                    <img src="../assets/bg-header.jpg" class="d-block w-100" alt="...">
                    <h4 class="text-center">Você precisa saber sobre a cotação das suas criptomoedas preferidas?</h4>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#coverBg" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#coverBg" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SecaoPrincipal',
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/cores.scss';

    #secaoPrincipal {
        background-image: url(../assets/bg-header.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 350px;

        #coverBg {
            width: 100%;
            height: 350px;
            background-color: rgba($color1, .5);
            .carousel-inner {
                background-color: $color1;
                .carousel-item {
                    position: relative;
                    height: 350px;
                    align-items: center;
                    justify-content: center;
                    display: flex;
                   
                    h4 {
                        position: absolute;
                        margin: auto;
                    }
                    img {
                        opacity: .2;
                    }
                }
            }
            
            h4 {
                // background-color: $color3;
                font-size: 1.3em;
            }
        }
    }
</style>