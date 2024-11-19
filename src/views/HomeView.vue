<script>
export default {
  name: 'HomeView'
}
</script>

<template>
  <main>
    <div class='home-view'>
      <img src='https://res.cloudinary.com/dmnyy2q99/image/upload/v1732028252/football-01_vhgchy.png' alt='Estadios del Uruguay' title='Estadios del Uruguay' />
      <h1>Estadios del Uruguay</h1>
      <p>es un sitio web con información sobre los estadios de fútbol más importantes en los 19 departamentos del país.</p>
    </div>
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
    height: 28vh
    width: 20vw
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
    white-space: normal
  & h1,
  & p  
    font-family: fonts.$lato
    position: relative
    text-align: center
     
@media screen and (max-width: 599px)
  .home-view
    margin: 1% auto
    & h1
      font-size: 1.3rem
    & p
      font-size: 0.8rem

@media screen and (min-width: 600px) and (max-width: 1199px)
  .home-view
    margin: 2% auto
    & h1
      font-size: 1.5rem
    & p
      font-size: 1rem

@media screen and (max-width: 850px)
  .home-view
    padding: 10% 5% 17%
    & img
      height: 30%
      width: 30%
</style>