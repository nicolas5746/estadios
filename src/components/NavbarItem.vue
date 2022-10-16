<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
    name: "NavbarItem",
    data() {
        const homeNavTitle = "inicio";
        const estadiosNavTitle = "estadios";
        return {
            homeNavTitle, estadiosNavTitle,
        }
    },
}
</script>

<template>
    <div>
        <nav>
            <RouterLink to="/">{{ homeNavTitle }}</RouterLink>
            <RouterLink to="/estadios">{{ estadiosNavTitle }}</RouterLink>
        </nav>
        <RouterView />
    </div>
</template>

<style lang="sass">
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
        background-color: transparent
        border: 0.1em solid colours.$silver
        border-radius: 1em
        font-family: fonts.$lato
        font-size: 1rem
        margin: 2%
        padding: 0.5%
        text-transform: uppercase
        &:link
            color: colours.$linen
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