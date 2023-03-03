<script>
import axios from 'axios';
import DepartamentosItem from '@/components/DepartamentosItem.vue';
export default {
    name: 'EstadiosItem',
    components: {
        DepartamentosItem,
    },
    methods: {
        async getData() {
            const response = await axios.get('https://raw.githubusercontent.com/nicolas5746/estadios/master/public/data/estadios.json');
            this.departamentos = await response.data.departamentos;
            this.estadios = await response.data.estadios;
        },
        async getDepartamentoSeleccionado(departamento) {
            this.departamentoSeleccionado = await departamento;
        },
        getImagenExpandida(index) {
            return {
                'imagen-estadio-expandida': this.indice === index,
            }
        },
        getIndice(index) {
            if (this.indice === index) {
                this.indice = null;
            } else {
                this.indice = index;
            }
        },
    },
    async mounted() {
        await this.getData();
    },
    data() {
        const botonReiniciar = 'Reiniciar';
        const departamentos = [];
        const estadios = [];
        const etiquetaSelect = 'Seleccionar departamento';
        const textoBoton = 'Más información';
        const textoSelect = 'Seleccionar...';
        let departamentoSeleccionado = '';
        let indice = null;
        return {
            botonReiniciar,
            departamentos,
            departamentoSeleccionado,
            estadios,
            etiquetaSelect,
            indice,
            textoBoton,
            textoSelect,
        }
    },
}
</script>

<template>
    <div class='estadios'>
        <div class='seleccionar-departamentos'>
            <DepartamentosItem :etiquetaSelect='etiquetaSelect' :textoSelect='textoSelect' :departamentos='departamentos'
                :departamentoSeleccionado='departamentoSeleccionado' @seleccion='getDepartamentoSeleccionado'
                :botonReiniciar='botonReiniciar' />
        </div>
        <div class='mapa' v-if='!departamentoSeleccionado'>
            <img src='https://raw.githubusercontent.com/nicolas5746/estadios/master/public/images/mapa.png'
                alt='Departamentos' title='Departamentos' />
        </div>
        <div class='estadios-grid'>
            <div class='estadios-overlay' v-for='(estadio, index) in estadios' :key='estadio'
                v-show='estadio.departamento === departamentoSeleccionado' @click='() => getIndice(index)'>
                <img class='imagen-estadio' :class='getImagenExpandida(index)' :src='estadio.imagen' :alt='estadio.nombre'
                    :title='estadio.nombre' />
                <div class='estadios-seleccionados'>
                    <div class='info-estadios'>
                        <h1><span>{{ estadio.nombre }}</span></h1>
                        <p>Capacidad: {{ estadio.capacidad }}</p>
                        <p>Propietario: {{ estadio.propietario }}</p>
                        <p>Ciudad/Localidad: {{ estadio.localidad }}</p>
                        <p>Inauguración: {{ estadio.inauguracion }}</p>
                        <button class='detalles' type='button'>
                            <a :href='estadio.wikipedia' target='_blank'>{{ textoBoton }}</a>
                        </button>
                    </div>
                </div>
            </div>
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
    margin: 0 auto
    padding: 0 5% 0 5%
    width: 100%

.mapa
    & img
        filter: grayscale(100%)
        height: 100%
        margin: 10%
        width: 100%

.seleccionar-departamentos
    width: 20%

.estadios-grid
    display: grid
    grid-gap: 2%
    grid-template-columns: 30% 30% 30%
    overflow: auto
    padding: 2% 0 15% 2%
    position: relative
    width: 100%

.estadios-overlay
    align-items: center
    cursor: pointer
    display: flex
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
            opacity: 1
            &:not(:hover)
                filter: brightness(1.2) saturate(1.1) contrast(1.2)

.imagen-estadio
    border-radius: 2em
    filter: brightness(1.2) saturate(1.1) contrast(0.85)
    height: 30vh
    position: relative
    transition: 0.3s
    width: 100%
    z-index: 0

.imagen-estadio-expandida
    border-radius: 2em
    cursor: grab
    height: 100%
    left: 50%
    margin-left: -50%
    margin-top: -46.5vh
    padding: 0.5%
    position: fixed
    top: 50%
    transition: 0.3s
    width: 100%
    z-index: 1

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
    line-height: 0.95rem
    padding: 6% 2%
    position: absolute
    width: 100%
    & h1
        & span
            font-family: fonts.$lato
            font-size: 0.8rem
            text-transform: uppercase
    & p
        font-family: fonts.$roboto
        font-size: 0.9rem
    & h1,
    & p
        color: colours.$dark-white
        text-align: left

.detalles
        background-color: colours.$transparent-dark-grey
        border: 0.1em solid colours.$dark-white
        border-radius: 0.5em
        font-size: 0.9rem
        padding: 0.5%
        transform: translateY(20%)
        & a
            &:link
                color: colours.$dark-white
            &:visited
                color: colours.$linen
            &:hover
                color: colours.$dark-orange
            &:active
                color: colours.$neon-orange

@media screen and (max-width: 320px)
    .imagen-estadio
        border-radius: 0.5em
        height: 9vh

    .estadios-seleccionados
        border-radius: 0.5em

    .estadios-grid
        padding: 7.5% 0 30% 5%

    .seleccionar-departamentos
        width: 35%
    
    .info-estadios 
        line-height: 0.2rem
        padding: 0.1% 3%
        & h1
            & span
                font-size: 0.15rem
        & p
            font-size: 0.15rem

    .detalles
        font-size: 0.15rem

@media screen and (min-width: 321px) and (max-width: 480px)
    .imagen-estadio
        border-radius: 1em
        height: 10vh

    .estadios-seleccionados
        border-radius: 1em

    .estadios-grid
        padding: 5% 0 50% 5%

    .info-estadios
        line-height: 0.35rem
        padding: 2% 1%
        & h1
            & span
                font-size: 0.2rem
        & p
            font-size: 0.3rem

    .detalles
        font-size: 0.3rem

@media screen and (min-width: 481px) and (max-width: 991px)
    .imagen-estadio
        border-radius: 1.5em
        height: 13vh

    .estadios-seleccionados
        border-radius: 1.5em

    .estadios-grid
        padding: 2% 0 35% 1%

    .info-estadios 
        line-height: 0.55rem
        padding: 5% 2%
        & h1
            & span
                font-size: 0.4rem
        & p
            font-size: 0.5rem

    .detalles
        font-size: 0.5rem

@media screen and (max-width: 991px)
    .imagen-estadio-expandida
        height: 45vh

@media screen and (min-width: 992px) and (max-width: 1199px)
    .imagen-estadio
        border-radius: 1.5em
        height: 21vh

    .imagen-estadio-expandida
        height: 60vh

    .estadios-grid
        padding: 2% 0 30% 1%

    .info-estadios
        line-height: 0.65rem
        & h1
            & span
                font-size: 0.5rem
        & p
            font-size: 0.6rem

    .detalles
        font-size: 0.6rem
</style>