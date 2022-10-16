<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
  name: 'HomeView',
  data() {
    const boton = 'ver estadios';
    const descripcion = 'es un sitio web con información sobre los estadios de fútbol más importantes en los 19 departamentos del país.';
    const titulo = 'Estadios del Uruguay';
    return { boton, descripcion, titulo, }
  }
}
</script>

<template>
  <main>
    <div class="home-view">
      <img src="https://raw.githubusercontent.com/nicolas5746/estadios/master/public/images/football-01.png"
        alt="Estadios del Uruguay" title="Estadios del Uruguay" />
      <h1>{{ titulo }}</h1>
      <p>{{ descripcion }}</p>
      <button>
        <RouterLink to="/estadios" class="button">{{ boton }}</RouterLink>
      </button>
    </div>
    <RouterView />
  </main>
</template>

<style lang="sass">
@use '@styles/colours'
@use '@styles/fonts'

*
  box-sizing: border-box
  margin: 0
  padding: 0

.home-view
  align-items: center
  display: flex
  flex-direction: column
  justify-content: center
  line-height: 2rem
  margin: 5% auto
  & img
    filter: brightness(1.2) saturate(1.1) contrast(0.85)
    position: relative
    height: 20%
    width: 20%
  & h1
    color: colours.$navy
    font-size: 2rem
    font-weight: 600
    text-shadow: 0.07em 0.07em 0.07em colours.$night-blue
  & p
    color: colours.$blue
    font-size: 1.5rem
    font-weight: 400
  & h1,
  & p  
    font-family: fonts.$lato
    position: relative
    text-align: center
  & button
      background-color: transparent
      border: 0.1em solid colours.$roman-silver
      border-radius: 0.5em
      display: block
      font-family: fonts.$montserrat
      font-size: 1rem
      margin: 2% auto
      padding: 0.5%
      text-decoration: none
      &:hover
        background-color: colours.$transparent-dark-grey
  .button
      text-transform: uppercase
      &:link
        color: colours.$linen
      &:visited
        color: colours.$purple
      &:hover
        color: colours.$dark-orange
        margin: 0
      &:active
        color: colours.$neon-orange

@media screen and (max-width: 599px)
  .home-view
    margin: 1% auto
    & h1
      font-size: 1.3rem
    & p
      font-size: 0.8rem
    & button
      font-size: 0.6rem

@media screen and (min-width: 600px) and (max-width: 1199px)
  .home-view
    margin: 2% auto
    & h1
      font-size: 1.5rem
    & p
      font-size: 1rem
    & button
      font-size: 0.8rem
</style>