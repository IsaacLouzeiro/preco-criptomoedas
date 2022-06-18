<template>
    <!-- cabecalho da parte principal -->
    <header class="pt-5 mt-5">
        <div id="coverBg" class="container px-2 carousel slide rounded text-white" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#coverBg" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#coverBg" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#coverBg" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner rounded">
                <div class="carousel-item active">
                    <img src="../assets/img/bg-header.jpg" class="d-block w-100" alt="...">
                    <h4>Você quer saber sobre a cotação das suas criptomoedas preferidas?</h4>
                </div>
                
                <div class="carousel-item">
                    <img src="../assets/img/bg-header3.jpg" class="d-block w-100" alt="...">
                    <h4><a href="#secaoCriptomoedas">Clique aqui para ver as cotações.</a></h4>
                </div>
    
                <div class="carousel-item">
                    <img src="../assets/img/bg-header2.jpg" class="d-block w-100" alt="...">
                    <h4>Não quer burocracia? Não perca tempo, e venha com a gente!</h4>
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
    </header>
</template>

<script>
export default {
    name: 'SecaoHeader'
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/cores.scss';

    // cabecalho da parte principal
    #coverBg {
        width: 100%;
        height: 300px;
        .carousel-inner {
            background-color: $color1;
            .carousel-item {
                position: relative;
                height: 300px;
                background-color: $color1;
                
                h4 {
                    position: absolute;
                    margin: auto;
                    font-weight: 400;
                    width: 75%;
                    z-index: 1;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;

                    a {
                        text-decoration: none;
                        color: $color2;
                    }

                    @media only screen and (max-width: 765px) {
                        font-size: 1.1em;
                    }
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: .4;
                }
            }
        }
        
        h4 {
            // background-color: $color3;
            font-size: 1.3em;
        }
    }
</style>