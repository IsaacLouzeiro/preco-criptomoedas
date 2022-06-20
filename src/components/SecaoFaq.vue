<template>
    <section id="secaoFaq" class="py-5 px-2">
        <hr>
        <h2 class="text-center fw-bold pt-4 pb-4">FAQ</h2>
        
        <!-- acordeao de perguntas -->
        <div class="accordion accordion-flush mx-auto" id="accordionFlush">
            <!-- pergunta um -->
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Quem somos?
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush">
                    <div class="accordion-body">
                        {{ quemSomos }}
                    </div>
                </div>
            </div>
            <!-- pergunta dois -->
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Qual é o nosso propósito?
                </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlush">
                    <div class="accordion-body">
                        {{ proposito }}
                    </div>
                </div>
            </div>
            <!-- pergunta tres -->
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    O que pretendemos fazer daqui para frente?
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlush">
                    <div class="accordion-body">
                        {{ visao }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SecaoFaq',
        data() {
            // textos das respostas
            return {
                quemSomos: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, eaque hic possimus voluptatem saepe non? Hic dolorem adipisci odio sint dolore possimus, aspernatur laudantium error sapiente, officia consequuntur id voluptatum!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores similique qui modi ipsum facilis, reprehenderit exercitationem quibusdam perspiciatis deleniti minima odit explicabo quae commodi perferendis nemo praesentium! Corporis, voluptatibus itaque.`,
            
                proposito: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident maxime ea! Quidem aliquam est porro beatae non reiciendis harum corrupti neque quae accusantium. Ipsam aut officiis optio possimus suscipit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque excepturi omnis at rem officiis expedita assumenda eligendi, autem sed id maxime corporis nihil voluptas voluptate iste! Sequi recusandae amet ad!`,

                visao: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio corrupti soluta sit assumenda eveniet, eos laboriosam impedit eligendi tenetur, adipisci distinctio eius amet tempora expedita sunt id vero earum. Recusandae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit ipsa quasi veritatis sequi unde laudantium eum est quo inventore facilis itaque expedita dicta, reprehenderit delectus, nisi, veniam cumque tempora.`
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/sass/cores.scss';

    #secaoFaq {
        width: 100%;
        background-color: $color2;

        .accordion {
            width: 65%;

            @media only screen and (min-width: 1400px) {
                width: 720px;
            }

            @media only screen and (max-width: 1140px) {
                width: 75%;
            }

            @media only screen and (max-width: 767px) {
                width: 97%;
            }

            .accordion-item {
                border-radius: 5px;
                border: none; 
                background-color: rgba($color3, .04);
                               
            }
            .accordion-button {
                background-color: rgba($color1, .9);
                color: $color2;
                border-radius: 5px;
                box-shadow: none;
                margin: 5px 0;

                &:not(.collapsed)::after {
                color: $color2;
                box-shadow: none;
                }

                &::after {
                    background-image: $accordion-button-icon;
                }

                &:not(.collapsed) {
                    color: $color2;
                    background-color: $color1;
                    box-shadow: none;
                }
            }
        }
    }
</style>