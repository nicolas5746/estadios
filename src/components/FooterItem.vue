<script>
import axios from 'axios';
export default {
    name: 'FooterItem',
    methods: {
        async getPortfolio() {
            const url = 'https://api.npoint.io/0274475edb0f9685ef3d';

            try {
                const response = await axios.get(url);
                this.portfolio = response.data.url;
            } catch (error) {
                console.log(`Error`, error.message);
            }
        }
    },
    mounted() {
        this.getPortfolio();
    },
    data() {
        let portfolio = '';
        return { portfolio }
    }
}
</script>

<template>
    <footer>
        <div>
            <h1>Estadios del Uruguay
                <img src='https://res.cloudinary.com/dmnyy2q99/image/upload/v1732027152/football-02_nwsjnp.png' alt='Estadios del Uruguay' title='Estadios del Uruguay' />
            </h1>
            <a :href='portfolio' rel='noopener noreferrer' target='_blank'>
                <p>Nicolás Batista Piñeyro &copy; 2022</p>
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