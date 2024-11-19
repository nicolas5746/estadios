<script>
import axios from 'axios';
import DepartamentosItem from '@components/DepartamentosItem.vue';
export default {
    name: 'EstadiosItem',
    components: {
        DepartamentosItem
    },
    methods: {
        async getData() {

            const departamentosURL = 'https://api.npoint.io/848b93c0195bce25cb90';
            const estadiosURL = 'https://api.npoint.io/d8c6c452bee7e251fda5';

            try {
                const getDepartamentos = await axios.get(departamentosURL);
                const getEstadios = await axios.get(estadiosURL);

                this.departamentos = getDepartamentos.data;
                this.estadios = getEstadios.data;
            } catch (error) {
                error.response
                    ?
                    console.log(error.response.data) +
                    console.log(error.response.status) +
                    console.log(error.response.headers)
                    :
                    error.request
                        ?
                        console.log(error.request)
                        :
                        console.log(`Error`, error.message);
            }
        },
        getDepartamentoSeleccionado(departamento) {
            this.departamentoSeleccionado = departamento;
            this.seleccionado = true;
        },
        handleCerrarOverlay(index) {
            return {
                'cerrar-imagen-expandida': this.indice === index
            }
        },
        handleImagenExpandida(index) {
            return {
                'imagen-estadio-expandida': this.indice === index
            }
        },
        handleImagenOverlay(index) {
            return {
                'imagen-estadio-overlay': this.indice === index
            }
        },
        handleIndice(index) {
            (this.indice === index)
                ?
                this.indice = null
                :
                this.indice = index;
        },
        handleContraerImagen(index) {
            this.handleIndice(index);
            this.expandir = false;
        },
        handleExpandirImagen(index) {
            this.handleIndice(index);
            this.expandir = true;
        },
        handleReiniciado() {
            this.seleccionado = false;
        }
    },
    mounted() {
        this.getData();
    },
    data() {
        let departamentos = [];
        let departamentoSeleccionado = '';
        let estadios = [];
        let expandir = false;
        let indice = null;
        let seleccionado = false;
        return {
            departamentos,
            departamentoSeleccionado,
            estadios,
            expandir,
            indice,
            seleccionado
        }
    }
}
</script>

<template>
    <div class='estadios'>
        <div class='seleccionar-departamentos'>
            <DepartamentosItem :departamentos='departamentos' :departamentoSeleccionado='departamentoSeleccionado'
                @reiniciar='handleReiniciado' @seleccion='getDepartamentoSeleccionado' />
        </div>
        <div class='estadios-grid' v-if='seleccionado'>
            <div class='estadios-overlay' v-show='estadio.departamento === departamentoSeleccionado' tabindex='0'
                :key='estadio.id' v-for='(estadio, index) in estadios' @keyup.esc='() => handleContraerImagen(index)'>
                <div :class='handleImagenOverlay(index)'>
                    <img class='imagen-estadio' :class='handleImagenExpandida(index)' :src='estadio.imagen'
                        :alt='estadio.nombre' :title='`Nombre:  ` + estadio.nombre + `\n` +
                            `Capacidad:  ` + estadio.capacidad + `\n` +
                            `Propietario:  ` + estadio.propietario + `\n` +
                            `Ciudad/Localidad:  ` + estadio.localidad + `\n` +
                            `Inauguración:  ` + estadio.inauguracion + `\n`
                            ' v-if='estadio.imagen != null' />
                    <img class='imagen-estadio'
                        src='https://res.cloudinary.com/dmnyy2q99/image/upload/v1732028187/no-picture_zwckrc.png'
                        :alt='estadio.nombre' :title='estadio.nombre' v-else />
                    <div v-show='expandir' :class='handleCerrarOverlay(index)' title='Cerrar'
                        @click='() => handleContraerImagen(index)' />
                </div>
                <div class='estadios-seleccionados'>
                    <div class='info-estadios'>
                        <h1>{{ estadio.nombre }}</h1>
                        <p>Capacidad: {{ estadio.capacidad }}</p>
                        <p>Propietario: {{ estadio.propietario }}</p>
                        <p>Ciudad/Localidad: {{ estadio.localidad }}</p>
                        <p>Inauguración: {{ estadio.inauguracion }}</p>
                        <a target='_blank' :href='estadio.informacion'>
                            <button class='detalles' type='button' title='Más información'>Más información</button>
                        </a>
                        <img class='expandir-imagen'
                            src='https://res.cloudinary.com/dmnyy2q99/image/upload/v1732027287/expandir_wlp5rd.png'
                            alt='Expandir' title='Expandir' @click='() => handleExpandirImagen(index)'
                            v-if='expandir === false && estadio.imagen != null' />
                    </div>
                </div>
            </div>
            <span></span>
        </div>
        <div class='mapa' v-else>
            <img src='https://res.cloudinary.com/dmnyy2q99/image/upload/v1732027287/mapa_vfy0uy.png' alt='Departamentos'
                title='Departamentos' />
        </div>
    </div>
</template>

<style lang='sass'>
@use '@styles/colours'
@use '@styles/fonts'

.estadios
    align-items: flex-start
    display: flex
    justify-content: space-between
    margin: 1% auto
    padding: 0 5%
    width: 100%
    z-index: 1

.seleccionar-departamentos
    width: 20%

.estadios-grid
    display: grid
    gap: 3%
    grid-template-columns: 30% 30% 30%
    overflow: auto
    padding: 5% 1% 2% 5%
    position: relative
    width: 100%
    & span
        margin-bottom: 35vh

.estadios-overlay
    align-items: center
    display: flex
    height: 100%
    justify-content: center
    position: relative
    width: 100%
    &:hover,
    &:active
        & .estadios-seleccionados
            transform: rotateX(0deg)
        & .imagen-estadio
            box-shadow: 0.2em 0.2em 0.2em 0.2em colours.$roman-silver
            opacity: 0.5
            &:not(:hover)
                filter: brightness(0.9) saturate(0) contrast(1.2) blur(0.3rem)
        & .imagen-estadio-expandida
            box-shadow: none
            opacity: 1
            &:not(:hover)
                filter: brightness(1.2) saturate(1.1) contrast(1)

.imagen-estadio-overlay
    background-color: colours.$squid-ink
    height: 100%
    inset: 0
    opacity: 0.985
    position: fixed
    width: 100%
    z-index: 1

.imagen-estadio
    aspect-ratio: 16/9
    border-radius: 2em
    filter: brightness(1.2) saturate(1.1) contrast(1)
    height: 30vh
    position: relative
    transition: 0.3s
    width: 21vw
    z-index: -1

.cerrar-imagen-expandida
    height: 5%
    position: absolute
    width: 5%
    z-index: 2
    &:after
        bottom: 0
        content: '\274c'
        font-size: 0.8rem
        left: 10%
        position: absolute
        text-align: center
        top: 20%
        z-index: 2
    &:hover,
    &:active
        cursor: pointer
        filter: brightness(100%) contrast(100%) invert(100%) saturate(100%) sepia(0.1)

.imagen-estadio-expandida
    height: 90vh
    margin: 2% 1% 2% 2%
    position: fixed
    transition: 0.3s
    width: 95vw
    z-index: 2

.estadios-seleccionados
    background-color: colours.$transparent-dark-grey
    border-radius: 2em
    height: 100%
    position: absolute
    top: 0
    transform-origin: left
    transform: rotateX(90deg)
    transition: 0.3s
    width: 100%

.info-estadios
    height: 100%
    padding: 5% 4%
    position: absolute
    width: 100%
    & h1
        color: colours.$linen
        font-family: fonts.$lato
        text-transform: uppercase
    & p
        color: colours.$gainsboro
        font-family: fonts.$roboto
    & h1,
    & p
        font-size: 0.75rem
        line-height: 0.9
        margin: 0.5%
        padding: 1.2%
        position: relative
        text-align: left
        white-space: normal

.expandir-imagen
    bottom: 22%
    filter: invert(100%) sepia(100%) saturate(100%) brightness(100%) contrast(75%)
    height: 6%
    position: absolute
    right: 15%
    transition: 0.6s
    width: 6%
    &:hover
        cursor: pointer
        transform: scale(1.2)

.detalles
    background-color: colours.$transparent-dark-grey
    border: 0.1em solid colours.$dark-white
    border-radius: 0.5em
    color: colours.$gainsboro
    cursor: pointer
    font-size: 0.75rem
    margin-top: 5%
    padding: 0.5%
    transform: translateY(20%)
    &:link
        color: colours.$dark-white
    &:visited
        color: colours.$linen
    &:hover
        color: colours.$dark-orange
    &:active
        color: colours.$neon-orange

.mapa
    display: block
    margin: 0 auto
    & img
        filter: grayscale(100%)
        height: 60%
        margin-left: -12%
        margin-top: 10%
        position: relative
        width: 60%

@media screen and (max-width: 320px)
    .estadios-overlay
        height: 13vh
        width: 24vw

    .imagen-estadio
        border-radius: 0.5em
        height: 11vh
        width: 21vw

    .estadios-seleccionados
        border-radius: 0.5em

    .seleccionar-departamentos
        width: 35%
    
    .info-estadios 
        & h1,
        & p
            font-size: 0.15rem

    .detalles
        font-size: 0.15rem

@media screen and (min-width: 321px) and (max-width: 480px)
    .estadios-overlay
        height: 14vh
        width: 26vw

    .imagen-estadio
        border-radius: 1em
        height: 12vh
        width: 23vw

    .estadios-seleccionados
        border-radius: 1em

    .info-estadios
        & h1,
        & p
            font-size: 0.45rem

    .detalles
        font-size: 0.45rem

@media screen and (min-width: 481px) and (max-width: 850px)
    .estadios-overlay
        height: 25vh
        width: 28vw

    .imagen-estadio
        border-radius: 1.5em
        height: 23vh
        width: 25vw

    .estadios-seleccionados
        border-radius: 1.5em

    .info-estadios
        & h1,
        & p
            font-size: 0.5rem

    .detalles
        font-size: 0.5rem

@media screen and (max-width: 850px)
    .imagen-estadio-expandida
        height: 60vh
        margin: 15% 1% 2% 2%
        width: 95vw

    .estadios-grid
        grid-template-columns: 45% 45%
        padding: 5% 5% 2% 10%

    .expandir-imagen
        bottom: 18%

    .detalles
        margin-top: 1%

    .mapa
        & img
            margin-left: 12.5%

@media screen and (min-width: 851px) and (max-width: 1199px)
    .imagen-estadio
        border-radius: 1.5em
</style>