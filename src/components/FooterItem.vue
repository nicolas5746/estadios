<script>
export default {
    name: 'FooterItem',
    data() {
        let copyright = 2022;
        let football = `https://raw.githubusercontent.com/nicolas5746/estadios/master/public/images/football-02.png`
        let nombreCompleto = `Nicolás Batista Piñeyro`;
        let portfolio = `https://nicolasbatista.netlify.app/`;
        let titulo = `Estadios del Uruguay`;
        return {
            copyright,
            football,
            nombreCompleto,
            portfolio,
            titulo,
        }
    }
}
</script>

<template>
    <footer>
        <div>
            <h1>{{ titulo }}
                <img :src='football' :alt='titulo' :title='titulo' />
            </h1>
            <a :href='portfolio' target='_blank'>
                <p>{{ nombreCompleto }} &copy; {{ copyright }}</p>
            </a>
        </div>
    </footer>
</template>

<style lang='sass'>
@use '@styles/colours'
@use '@styles/fonts'

footer
    align-items: center
    background-color: colours.$transparent-grey
    bottom: 0
    display: flex
    height: 10%
    justify-content: center
    left: 0
    line-height: 1.5rem
    position: fixed
    right: 0
    width: 100%
    & div
        line-height: 1.5rem
        & h1
            font-family: fonts.$caveat
            font-size: 1.5rem
            & img
                height: 5%
                transform: translateX(5%) translateY(25%) rotate(32deg)
                width: 5%
        & p
            font-family: fonts.$lato
            font-size: 1rem
        & h1,
        & p
            color: colours.$linen
            position: relative
            text-align: center

@media screen and (max-width: 599px)
    footer
        & div
            line-height: 1.1rem
            & h1
                font-size: 1.1rem
            & p
                font-size: 0.6rem

@media screen and (min-width: 600px) and (max-width: 1199px)
    footer
        & div
            line-height: 1.3rem
            & h1
                font-size: 1.3rem
            & p
                font-size: 0.8rem
</style>