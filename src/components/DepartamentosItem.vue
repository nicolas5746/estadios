<script>
export default {
    name: 'DepartamentosItem',
    methods: {
        seleccionPorDepartamento() {
            this.$emit('seleccion', this.departamentoSeleccionado);
        },
        reinciarPagina() {
            window.location.reload();
        },
    },
    props: {
        departamentos: {
            type: Array,
            default: () => Array,
        },
        departamentoSeleccionado: {
            type: String,
            default: () => String,
        },
        reiniciarSeleccion: {
            type: String,
            default: () => `Reiniciar`,
        },
        seleccionar: {
            type: String,
            default: () => `Seleccionar...`,
        },
        seleccionarDepartamento: {
            type: String,
            default: () => `Seleccionar departamento`,
        },
    },
}
</script>

<template>
    <div class='select'>
        <label for='seleccionar-departamento'>{{ seleccionarDepartamento }}</label>
        <select id='seleccionar-departamento' :value='departamentoSeleccionado'
            @input='event => departamentoSeleccionado = event.target.value' @change='seleccionPorDepartamento'>
            <option disabled value=''>{{ seleccionar }}</option>
            <option v-for='departamento in departamentos'>
                {{ departamento }}
            </option>
        </select>
        <button type='button' @click='reinciarPagina'>{{ reiniciarSeleccion }}</button>
    </div>
</template>

<style lang='sass'>
@use '@styles/colours'
@use '@styles/fonts'

#seleccionar-departamento
        font-size: 0.9rem
        margin: 1% auto

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
    
    label
        font-size: 1rem
        text-align: center
    button
        background-color: transparent
        border-color: transparent
        border-radius: 0.5em
        color: colours.$navy
        display: block
        font-family: fonts.$montserrat
        font-size: 0.8rem
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
    label,
    button
        margin: 0
        padding: 0

@media screen and (max-width: 599px)
    #seleccionar-departamento
        font-size: 0.4rem

    .select
        label
            font-size: 0.5rem
        button
            font-size: 0.3rem

@media screen and (min-width: 600px) and (max-width: 1199px)
    #seleccionar-departamento
        font-size: 0.6rem

    .select
        label
            font-size: 0.7rem
        button
            font-size: 0.5rem
</style>