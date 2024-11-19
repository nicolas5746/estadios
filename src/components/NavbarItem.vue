<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
    name: 'NavbarItem'
}
</script>

<template>
    <div>
        <nav>
            <RouterLink to='/' title='Inicio'>Inicio</RouterLink>
            <RouterLink to='/estadios' title='Estadios'>Estadios</RouterLink>
        </nav>
        <RouterView />
    </div>
</template>

<style lang='sass'>
@use '@styles/colours'
@use '@styles/fonts'

*
    text-decoration: none

div
    max-height: 100vh

nav
    align-items: center
    display: inline-block
    margin-top: 2%
    text-align: center
    width: 100%  
    & a
        background-color: colours.$linen
        border: 0.1em solid colours.$silver
        border-radius: 1em
        color: colours.$dark-orange
        font-family: fonts.$lato
        font-size: 1rem
        font-weight: 800
        margin: 1%
        padding: 0.8%
        text-decoration: none
        white-space: nowrap
        &:link
            color: colours.$dark-orange
        &:visited
            color: colours.$purple
        &:hover
            background-color: colours.$transparent-dark-grey
            color: colours.$dark-orange
        &:active
            color: colours.$neon-orange

@media screen and (max-width: 599px)
    nav
        & a
            font-size: 0.6rem

@media screen and (min-width: 600px) and (max-width: 1199px)
    nav
        & a
            font-size: 0.8rem
</style>