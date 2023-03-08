<script>
export default {
  name: 'NotFoundView',
  data() {
    let notFound = `Página no encontrada`
    return{
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
        display: block
        font-family: fonts.$lato 
        font-size: 1.8rem
        font-weight: 600
        margin: 10% auto
        text-align: center
        text-shadow: 0.05em 0.05em 0.05em colours.$night-blue
</style>