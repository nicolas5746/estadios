<script>
export default (await import('vue')).defineComponent({
    name: 'FooterItem',
    data() {
        let enlaces = [
            `https://i.postimg.cc/fLcwC7R2/football-02.png`,
            `https://nicolasbatista.netlify.app/`
        ];
        let titulos = [2022, `Nicolás Batista Piñeyro`, `Estadios del Uruguay`];
        return { enlaces, titulos }
    }
});
</script>

<template>
    <footer>
        <div>
            <h1>{{ titulos[2] }}
                <img :src='enlaces[0]' :alt='titulos[2]' :title='titulos[2]' />
            </h1>
            <a :href='enlaces[1]' target='_blank'>
                <p>{{ titulos[1] }} &copy; {{ titulos[0] }}</p>
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
    height: 12%
    justify-content: center
    left: 0
    position: fixed
    right: 0
    width: 100%
    & div
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
            margin: 0
            padding: 0
            position: relative
            text-align: center

@media screen and (max-width: 599px)
    footer
        & div
            & h1
                font-size: 1.1rem
            & p
                font-size: 0.6rem

@media screen and (min-width: 600px) and (max-width: 1199px)
    footer
        & div
            & h1
                font-size: 1.3rem
            & p
                font-size: 0.8rem
</style>