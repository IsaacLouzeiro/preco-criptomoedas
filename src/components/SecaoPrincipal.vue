<template>
    <section id="secaoPrincipal" class="mt-2 rounded p-0">
        <!-- titulo -->
        <h2 class="text-center fw-bold mt-4">Principais moedas do mercado!</h2>
        <!-- principais moedas do mercado -->
        <div class="row container mx-auto g-1 justify-content-between px-2 moedasPrincipais text-white pb-4">
            <div class="col-md-6">
                <section class="rounded">
                    <div class="headerCripto">
                        <span class="imgCripto"><i class="fa-brands fa-bitcoin"></i></span>
                        <span class="tituloCripto">{{ criptoCurrency[0].name }} <span>{{ criptoCurrency[0].code }}</span></span>
                    </div>
                </section>
            </div>
            <div class="col-md-6">
                <section class="rounded">
                    <div class="headerCripto">
                        <span class="imgCripto"><i class="fa-brands fa-ethereum"></i></span>
                        <span class="tituloCripto">{{ criptoCurrency[1].name }} <span>{{ criptoCurrency[1].code }}</span></span>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SecaoPrincipal',
    data() {
        return {
            
        }
    },

    props: {
        criptoCurrency: Array
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/cores.scss';

    #secaoPrincipal {
        color: $color1;
    }

    .moedasPrincipais {
        div {
            section {
                background-color: $color1;
                padding: 10px;

                .headerCripto {

                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .imgCripto {
                        width: 40px;
                        height: 40px;
                        border-radius: 20px;
                        display: inline-block;
                        background-color: rgba($color2, .9);
                        justify-content: center;
                        align-items: center;
                        display: flex;
        
                        i {
                            font-size: 1.4em;
                            text-shadow: 0 0 5px $color2;
        
                            &.fa-ethereum {
                                color: #3c3c3d;
                            }
        
                            &.fa-bitcoin {
                                color: #f7931a;
                            }
                        }
                    }
    
                    .tituloCripto {
                        font-weight: bold;
                        font-size: 1.2em;
                        color: $color2;
    
                        > span {
                            opacity: .8;
                            color: $color3;
                        }
                    }
                }

            }

        }
    }
</style>