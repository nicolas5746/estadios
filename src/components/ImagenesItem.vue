<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
    name: 'ImagenesItem',
    props: {
        imagen: String
    }
}
</script>

<template>
    <div class='img-contenedor'>
        <RouterLink :to='imagen'>
            <img class='img-estadio' :src='imagen' :alt='nombre' :title='nombre' />
        </RouterLink>
        <RouterView />
    </div>
</template>

<style lang='sass'>
@use '@styles/colours'

.img-contenedor
    background-color: colours.$transparent-dark-grey
    bottom: 0
    height: 100%
    left: 0
    position: fixed
    right: 0
    top: 0
    width: 100%
    z-index: 2

.orderContainer
    background-color: colours.$gainsboro
    border-radius: 0.3rem
    display: flex
    flex-direction: row
    height: 100%
    margin: 8% auto
    position: relative
    width: 80%
    z-index: 3

</style>