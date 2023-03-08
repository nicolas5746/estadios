<script>
export default {
  name: 'NotFoundView',
  data() {
    let notFound = `página no encontrada`
    return {
      notFound,
    }
  }
}
</script>

<template>
  <div class='not-found'>
    <h1>{{ notFound }}</h1>
  </div>
</template>

<style lang='sass'>
@use '@styles/colours'
@use '@styles/fonts'

.not-found
    & h1
        color: colours.$navy
        font-family: fonts.$lato 
        font-size: 2.5rem
        font-weight: 800
        left: 42.5%
        margin-left: -50%
        margin-top: -17.5%
        padding: 10%
        position: absolute
        text-align: center
        text-shadow: 0.05em 0.05em 0.05em colours.$night-blue
        text-transform: uppercase
        top: 50%
        width: 100%

@media screen and (max-width: 850px)
  .not-found
    & h1
      font-size: 2rem
      margin-top: -25%
</style>