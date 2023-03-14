<script>
export default {
  name: 'NotFoundView',
  data() {
    let football = `https://raw.githubusercontent.com/nicolas5746/estadios/master/public/images/football-01.png`;
    let notFound = `página no encontrada`;
    let titulo = `Estadios del Uruguay`;
    return {
      football,
      notFound,
      titulo,
    }
  }
}
</script>

<template>
  <div class='not-found'>
    <img :src='football' :alt='titulo' :title='titulo' />
    <h1>{{ notFound }}</h1>
  </div>
</template>

<style lang='sass'>
@use '@styles/colours'
@use '@styles/fonts'

.not-found
  display: flex
  flex-direction: column
  left: 42.5%
  margin-left: -50%
  margin-top: -17.5%
  padding: 7.5%
  position: absolute
  top: 50%
  width: 100%
  & img
    filter: brightness(1.2) saturate(1.1) contrast(0.85)
    left: 40%
    position: relative
    height: 28vh
    width: 20vw
  & h1
    color: colours.$navy
    font-family: fonts.$lato 
    font-size: 2.5rem
    font-weight: 800
    position: relative
    text-align: center
    text-shadow: 0.05em 0.05em 0.05em colours.$night-blue
    text-transform: uppercase

@media screen and (max-width: 850px)
  .not-found
    margin-top: -30%
    & img
      left: 35%
      height: 30%
      width: 30%
    & h1
      font-size: 2rem
</style>