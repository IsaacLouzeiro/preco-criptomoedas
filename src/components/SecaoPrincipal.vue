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
                            <span class="imgCripto"><img :src="linkImageBtc" :alt="bitcoinList.name"></span>
                            <span class="tituloCripto">{{ bitcoinList.name }} <span class="text-uppercase">{{ bitcoinList.symbol }}</span></span>
                        </div>
                        <hr class="mt-2">
                        <div class="secaoCripto">
                            <span class="itemCripto">Valor R$<span>{{ precoBtc }}</span></span>
                            <span class="itemCripto">Volume R$<span>{{ volumeBtc }}</span></span>
                            <p class="w-100 m-1"></p>
                            <span class="itemCripto">7d<span>{{ porcentagemMudancaSemanalBtc }}%</span></span>
                            <span class="itemCripto">Cap. Mercado R$<span>{{ capitalizadoBtc }}</span></span>
                        </div>
                    </section>
                </div>
                <div class="col-lg-6">
                    <section class="rounded">
                        <div class="headerCripto">
                            <span class="imgCripto"><img :src="linkImageEth" :alt="ethereumList.name"></span>
                            <span class="tituloCripto">{{ ethereumList.name }} <span class="text-uppercase">{{ ethereumList.symbol }}</span></span>
                        </div>
                        <hr class="mt-2">
                        <div class="secaoCripto">
                            <span class="itemCripto">Valor <span>{{ precoEth }}</span></span>
                            <span class="itemCripto">Volume <span>{{ volumeEth }}</span></span>
                            <p class="w-100 m-1"></p>
                            <span class="itemCripto">7d<span>{{ porcentagemMudancaSemanalEth }}%</span></span>
                            <span class="itemCripto">Cap. Mercado R$<span>{{ capitalizadoEth }}</span></span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// buscando localizacao da api
import api from '@/services/api.js';

export default {
    name: 'SecaoPrincipal',
    data() {
        return {
            // lista da criptomoeda btc
            bitcoinList: [],

            // retornando dados da api do btc
            precoBtc: '',
            porcentagemMudancaDiaBtc: '',
            volumeBtc: '',
            porcentagemMudancaSemanalBtc: '',
            capitalizadoBtc: '',
            linkImageBtc: '',

            // lista da criptomoeda eth
            ethereumList: [],

            // retornando dados da api do eth
            precoEth: '',
            porcentagemMudancaDiaEth: '',
            volumeEth: '',
            porcentagemMudancaSemanalEth: '',
            capitalizadoEth: '',
            linkImageEth: ''
        }
    },

    mounted() {
        // retornando dados da api do btc
        api.get('https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false').then(response => {
            this.bitcoinList = response.data
            this.precoBtc = this.bitcoinList.market_data.current_price.brl
            this.porcentagemMudancaDiaBtc = parseFloat(this.bitcoinList.market_data.market_cap_change_percentage_24h.toFixed(2))
            this.volumeBtc = this.bitcoinList.market_data.total_volume.brl
            this.porcentagemMudancaSemanalBtc = parseFloat(this.bitcoinList.market_data.price_change_percentage_7d.toFixed(2))
            this.capitalizadoBtc = this.bitcoinList.market_data.market_cap.brl
            this.linkImageBtc = this.bitcoinList.image.thumb
        })

        // retornando dados da api do eth
        api.get('https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false').then(response => {
            this.ethereumList = response.data
            this.precoEth = this.ethereumList.market_data.current_price.brl
            this.porcentagemMudancaDiaEth = parseFloat(this.ethereumList.market_data.market_cap_change_percentage_24h.toFixed(2))
            this.volumeEth = this.ethereumList.market_data.total_volume.brl
            this.porcentagemMudancaSemanalEth = parseFloat(this.ethereumList.market_data.price_change_percentage_7d.toFixed(2))
            this.capitalizadoEth = this.ethereumList.market_data.market_cap.brl
            this.linkImageEth = this.ethereumList.image.thumb
        })
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