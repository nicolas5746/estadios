<script>
export default {
    name: 'DepartamentosItem',
    methods: {
        handleSeleccionPorDepartamento(event) {
            this.$emit('seleccion', event.target.value);
        },
        handleReinciar(event) {
            this.$emit('reiniciar', event.target.value);
        }
    },
    props: {
        departamentos: {
            type: Array,
            default: () => Array
        },
        departamentoSeleccionado: {
            type: String,
            default: () => String
        }
    }
}
</script>

<template>
    <form class='select'>
        <label for='seleccionar-departamento' title='Seleccionar departamento'>Seleccionar departamento</label>
        <select id='seleccionar-departamento' :value='departamentoSeleccionado' @input='handleSeleccionPorDepartamento'>
            <option disabled value=''>Seleccionar...</option>
            <option hidden value=''>Seleccionar...</option>
            <option v-for='departamento in departamentos'>{{ departamento }}</option>
        </select>
        <button type='reset' title='Reiniciar' @click='handleReinciar'>Reiniciar</button>
    </form>
</template>

<style lang='sass'>
@use '@styles/colours'
@use '@styles/fonts'

#seleccionar-departamento
    background-color: colours.$papaya-whip
    border-radius: 0.5em
    color: colours.$squid-ink
    font-family: fonts.$roboto
    font-size: 0.9rem
    font-weight: 500
    margin: 1% auto
    padding: 0.5%
    & option
        color: colours.$dark-grey
        font-family: fonts.$montserrat
        font-size: 0.8rem
        font-weight: 500
        &:checked
            background-color: colours.$dodger-blue
            color: colours.$azure
        &:not(:checked)
            background-color: colours.$dark-white
    &:hover
        background-color: colours.$powderblue
        cursor: pointer
    &:focus
        background-color: colours.$dodger-blue
        color: colours.$azure

.select
    align-items: center
    color: colours.$navy
    display: flex
    flex-direction: column
    font-family: fonts.$roboto
    justify-content: center
    left: 20%
    margin-left: -55%
    margin-top: 10%
    position: fixed
    top: 15%
    width: 100% 
    & label
        font-size: 1rem
        text-align: center
    & button
        background-color: transparent
        border-color: transparent
        border-radius: 0.5em
        color: colours.$navy
        display: block
        font-family: fonts.$montserrat
        font-size: 0.8rem
        font-weight: 400
        text-decoration: none
        width: 60%
        &:link
            color: colours.$navy
        &:visited
            color: colours.$purple
        &:hover
            color: colours.$dark-orange
        &:active
            color: colours.$neon-orange
    & label,
    & button
        margin: 0
        padding: 0

@media screen and (max-width: 599px)
    #seleccionar-departamento
        font-size: 0.4rem
        & option
            font-size: 0.35rem

    .select
        & label
            font-size: 0.5rem
        & button
            font-size: 0.3rem

@media screen and (min-width: 600px) and (max-width: 1199px)
    #seleccionar-departamento
        font-size: 0.6rem
        & option
            font-size: 0.55rem

    .select
        & label
            font-size: 0.7rem
        & button
            font-size: 0.5rem
</style>