<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
  name: 'HomeView',
  data() {
    const descripcion = `es un sitio web con información sobre los estadios de fútbol más importantes en los 19 departamentos del país.`;
    const estadios = `ver estadios`;
    const football = `https://raw.githubusercontent.com/nicolas5746/estadios/master/public/images/football-01.png`
    const titulo = `Estadios del Uruguay`;
    return {
      descripcion,
      estadios,
      football,
      titulo,
    }
  }
}
</script>

<template>
  <main>
    <div class='home-view'>
      <img :src='football' :alt='titulo' :title='titulo' />
      <h1>{{ titulo }}</h1>
      <p>{{ descripcion }}</p>
      <RouterLink to='/estadios'>
        <button class='toEstadios'>
          {{ estadios }}
        </button>
      </RouterLink>
    </div>
    <RouterView />
  </main>
</template>

<style lang='sass'>
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
  line-height: 1.2
  margin: 3% auto
  overflow-y: auto
  padding: 5% 5% 17%
  position: relative
  & img
    filter: brightness(1.2) saturate(1.1) contrast(0.85)
    position: relative
    height: 20%
    width: 20%
  & h1
    color: colours.$navy
    font-size: 2rem
    font-weight: 600
    text-shadow: 0.06em 0.06em 0.06em colours.$night-blue
  & p
    color: colours.$blue
    font-size: 1.5rem
    font-weight: 400
    padding: 2% 10%
  & h1,
  & p  
    font-family: fonts.$lato
    position: relative
    text-align: center

.toEstadios
  background-color: colours.$linen
  border: 0.1em solid colours.$roman-silver
  border-radius: 0.5em
  color: colours.$dark-orange
  cursor: pointer
  display: block
  font-family: fonts.$montserrat
  font-size: 1rem
  margin: 5% auto
  padding: 5%
  text-decoration: none
  text-transform: uppercase
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
  .home-view
    margin: 1% auto
    & h1
      font-size: 1.3rem
    & p
      font-size: 0.8rem

  .toEstadios
    font-size: 0.6rem

@media screen and (max-width: 850px)
  .home-view
    padding: 10% 5% 17%

@media screen and (min-width: 600px) and (max-width: 1199px)
  .home-view
    margin: 2% auto
    & h1
      font-size: 1.5rem
    & p
      font-size: 1rem

  .toEstadios
    font-size: 0.8rem
</style>