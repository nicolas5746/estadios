<script>
export default {
    name: 'FooterItem',
    data() {
        const copyright = 2022;
        const nombreCompleto = 'Nicolás Batista Piñeyro';
        const titulo = 'Estadios del Uruguay';
        return { copyright, nombreCompleto, titulo, }
    }
}
</script>

<template>
    <footer>
        <div>
            <h1>{{ titulo }}<img
                    src="https://raw.githubusercontent.com/nicolas5746/estadios/master/public/images/football-02.png"
                    alt="Estadios del Uruguay" title="Estadios del Uruguay" />
            </h1>
            <p>{{ nombreCompleto }} &copy; {{ copyright }}</p>
        </div>
    </footer>
</template>

<style lang="sass">
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