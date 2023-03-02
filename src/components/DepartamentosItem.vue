<script>
export default {
    name: 'DepartamentosItem',
    methods: {
        seleccionPorDepartamento() {
            this.$emit('seleccion', this.departamentoSeleccionado);
        },
        reinciarPagina() {
            window.location.reload();
        }
    },
    props: {
        botonReiniciar: String,
        departamentos: Array,
        departamentoSeleccionado: String,
        etiquetaSelect: String,
        textoSelect: String,
    },
}
</script>

<template>
    <div class='select'>
        <label for='seleccionar-departamento'>{{ etiquetaSelect }}</label>
        <select id='seleccionar-departamento' v-model='departamentoSeleccionado' @change='seleccionPorDepartamento'>
            <option disabled value=''>{{ textoSelect }}</option>
            <option v-for='departamento in departamentos'>{{ departamento }}</option>
        </select>
        <button type='button' @click='reinciarPagina'>{{ botonReiniciar }}</button>
    </div>
</template>

<style lang='sass'>
@use '@styles/colours'
@use '@styles/fonts'

.select
    align-items: center
    color: colours.$navy
    display: flex
    flex-direction: column
    font-family: fonts.$roboto
    justify-content: center
    margin-top: 25%
    width: 100%
    label
        font-size: 1rem
        margin: 3% auto
        text-align: center
    button
        background-color: transparent
        border-color: transparent
        border-radius: 0.5em
        color: colours.$navy
        display: block
        font-family: fonts.$montserrat
        font-size: 0.8rem
        margin: 1%
        padding: 0.5%
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
#seleccionar-departamento
        font-size: 0.9rem
        margin: 2% auto

@media screen and (max-width: 599px)
    .select
        label
            font-size: 0.5rem
        button
            font-size: 0.3rem

    #seleccionar-departamento
        font-size: 0.4rem

@media screen and (min-width: 600px) and (max-width: 1199px)
    .select
        label
            font-size: 0.7rem
        button
            font-size: 0.5rem
            
    #seleccionar-departamento
        font-size: 0.6rem
</style>