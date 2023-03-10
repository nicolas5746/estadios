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
            this.departamentos = response.data.departamentos;
            this.estadios = response.data.estadios;
        },
        getDepartamentoSeleccionado(departamento) {
            this.departamentoSeleccionado = departamento;
        },
        handleImagenExpandida(index) {
            return {
                'imagen-estadio-expandida': this.indice === index,
            }
        },
        handleImagenOverlay(index) {
            return {
                'imagen-estadio-overlay': this.indice === index,
            }
        },
        handleIndice(index) {
            if (this.indice === index) {
                this.indice = null;
            } else {
                this.indice = index;
            }
        },
    },
    mounted() {
        this.getData();
    },
    data() {
        let departamentos = [];
        let departamentoSeleccionado = ``;
        let estadios = [];
        let indice = null;
        let info = `Más información`;
        let mapa = `https://raw.githubusercontent.com/nicolas5746/estadios/master/public/images/mapa.png`;
        return {
            departamentos,
            departamentoSeleccionado,
            estadios,
            indice,
            info,
            mapa,
        }
    },
}
</script>

<template>
    <div class='estadios'>
        <div class='seleccionar-departamentos'>
            <DepartamentosItem :departamentos='departamentos' :departamentoSeleccionado='departamentoSeleccionado'
                @seleccion='getDepartamentoSeleccionado' />
        </div>
        <div class='mapa' v-if='!departamentoSeleccionado'>
            <img :src='mapa' alt='Departamentos' title='Departamentos' />
        </div>
        <div class='estadios-grid'>
            <div class='estadios-overlay' v-for='(estadio, index) in estadios' :key='estadio'
                v-show='estadio.departamento === departamentoSeleccionado' @click='() => handleIndice(index)'>
                <div :class='handleImagenOverlay(index)'>
                    <img class='imagen-estadio' :class='handleImagenExpandida(index)' :src='estadio.imagen'
                        :alt='estadio.nombre' :title='estadio.nombre' />
                </div>
                <div class='estadios-seleccionados'>
                    <div class='info-estadios'>
                        <h1>{{ estadio.nombre }}</h1>
                        <p>Capacidad: {{ estadio.capacidad }}</p>
                        <p>Propietario: {{ estadio.propietario }}</p>
                        <p>Ciudad/Localidad: {{ estadio.localidad }}</p>
                        <p>Inauguración: {{ estadio.inauguracion }}</p>
                        <a :href='estadio.wikipedia' target='_blank'>
                            <button class='detalles' type='button'>{{ info }}</button>
                        </a>
                    </div>
                </div>
            </div>
            <span></span>
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
    padding: 2%
    position: relative
    width: 100%
    & span
        margin-bottom: 35vh

.estadios-overlay
    align-items: center
    cursor: pointer
    display: flex
    justify-content: center
    position: relative
    width: 100%
    &:hover
        & .estadios-seleccionados
            transform: rotateX(0deg)
        & .imagen-estadio
            box-shadow: 0.2em 0.2em 0.2em 0.2em colours.$roman-silver
            opacity: 0.5
            &:not(:hover)
                filter: brightness(0.9) saturate(0) contrast(1.2) blur(0.3rem)
        & .imagen-estadio-expandida
            box-shadow: none
            filter: brightness(1.2) saturate(1.1) contrast(1)
            opacity: 1
            &:not(:hover)
                filter: brightness(1.2) saturate(1.1) contrast(1)
                opacity: 1

.imagen-estadio
    border-radius: 2em
    filter: brightness(1.2) saturate(1.1) contrast(1)
    height: 30vh
    position: relative
    transition: 0.3s
    width: 21vw
    z-index: -1

.imagen-estadio-overlay
    background-color: colours.$squid-ink
    bottom: 0
    height: 100%
    left: 0
    opacity: 0.985
    position: fixed
    right: 0
    top: 0
    width: 100%
    z-index: 1

.imagen-estadio-expandida
    cursor: grab
    height: 105vh
    left: 50%
    margin-left: -52%
    margin-top: -52vh
    padding: 3em 5em 
    position: fixed
    top: 48%
    transition: 0.3s
    width: 105vw
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
    line-height: 0.9
    padding: 5% 4%
    position: absolute
    width: 100%
    & h1
        font-family: fonts.$lato
        text-transform: uppercase
        &:hover
            color: colours.$dark-orange
    & p
        font-family: fonts.$roboto
    & h1,
    & p
        color: colours.$dark-white
        font-size: 0.75rem
        margin: 0.5%
        padding: 0.5%
        text-align: left

.detalles
    background-color: colours.$transparent-dark-grey
    border: 0.1em solid colours.$dark-white
    border-radius: 0.5em
    color: colours.$dark-white
    cursor: pointer
    font-size: 0.75rem
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

@media screen and (max-width: 320px)
    .imagen-estadio
        border-radius: 0.5em
        height: 16vh
        width: 28vw

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
    .imagen-estadio
        border-radius: 1em
        height: 18vh
        width: 30vw

    .estadios-seleccionados
        border-radius: 1em

    .info-estadios
        & h1,
        & p
            font-size: 0.45rem

    .detalles
        font-size: 0.45rem

@media screen and (min-width: 481px) and (max-width: 850px)
    .imagen-estadio
        border-radius: 1.5em
        height: 23vh
        width: 33vw

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
        margin-top: -35vh
        padding: 1em 3em
        width: 95vw

    .estadios-grid
        grid-gap: 5%
        grid-template-columns: 45% 45%

@media screen and (min-width: 851px) and (max-width: 1199px)
    .imagen-estadio
        border-radius: 1.5em
</style>