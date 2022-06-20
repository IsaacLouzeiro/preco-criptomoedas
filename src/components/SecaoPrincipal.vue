<template>
    <section id="secaoPrincipal" class="py-2 rounded p-0">
        <div class="container">
            <!-- titulo -->
            <h2 class="text-center fw-bold mt-4 mb-4">Principais moedas do mercado</h2>
            <!-- principais moedas do mercado -->
            <div class="row container mx-auto g-1 justify-content-between px-2 moedasPrincipais text-white pb-4">
                <div class="col-lg-6">
                    <section class="rounded">
                        <div class="headerCripto">
                            <span class="imgCripto"><i class="fa-brands fa-bitcoin"></i></span>
                            <span class="tituloCripto">{{ criptoCurrency[0].name }} <span>{{ criptoCurrency[0].code }}</span></span>
                        </div>
                        <hr class="mt-2">
                        <div class="secaoCripto">
                            <span class="itemCripto">Valor <span>{{ criptoCurrency[0].price }}</span></span>
                            <span class="itemCripto">24H% <span>{{ criptoCurrency[0].day }}</span></span>
                            <p class="w-100 m-1"></p>
                            <span class="itemCripto">Volume <span>{{ criptoCurrency[0].volume }}</span></span>
                            <span class="itemCripto">7d% <span>{{ criptoCurrency[0].week }}</span></span>
                            <p class="w-100 m-0"></p>
                            <p class="m-1"> &nbsp;</p>
                            <span class="itemCripto">Capitalizado de mercado <span>{{ criptoCurrency[0].marketCap }}</span></span>
                        </div>
                    </section>
                </div>
                <div class="col-lg-6">
                    <section class="rounded">
                        <div class="headerCripto">
                            <span class="imgCripto"><i class="fa-brands fa-ethereum"></i></span>
                            <span class="tituloCripto">{{ criptoCurrency[1].name }} <span>{{ criptoCurrency[1].code }}</span></span>
                        </div>
                        <hr class="mt-2">
                        <div class="secaoCripto">
                            <span class="itemCripto">Valor <span>{{ criptoCurrency[1].price }}</span></span>
                            <span class="itemCripto">24H% <span>{{ criptoCurrency[1].day }}</span></span>
                            <p class="w-100 m-1"></p>
                            <span class="itemCripto">Volume <span>{{ criptoCurrency[1].volume }}</span></span>
                            <span class="itemCripto">7d% <span>{{ criptoCurrency[1].week }}</span></span>
                            <p class="w-100 m-0"></p>
                            <p class="m-1"> &nbsp;</p>
                            <span class="itemCripto">Capitalizado de mercado <span>{{ criptoCurrency[1].marketCap }}</span></span>
                        </div>
                    </section>
                </div>
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
        background-color: rgba($color2, .9);
    }

    .moedasPrincipais {
        div {
            section {
                background-color: rgba($color1, .9);
                padding: 10px 20px;

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
                        font-weight: 500;
                        font-size: 1.2em;
                        color: $color2;

                        > span {
                            font-weight: 400;
                            opacity: .8;
                            color: $color3;
                        }
                    }
                }

                .secaoCripto {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;

                    .itemCripto {
                        font-weight: 500;
                        color: $color2;

                        span {
                            color: $color3;
                            margin-left: 5px;
                        }
                    }
                }


            }

        }
    }
</style>