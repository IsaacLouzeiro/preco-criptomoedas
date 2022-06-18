<template>
    <section id="secaoPrincipal" class="mt-2 rounded p-0 px-1">
        <!-- titulo -->
        <h2 class="text-center fw-bold mt-3">Principais moedas do mercado!</h2>
        <!-- principais moedas do mercado -->
        <div class="row container mx-auto">
            <div class="col-6 border"></div>
            <div class="col-6 border"></div>
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
        color: $color1;
    }
</style>