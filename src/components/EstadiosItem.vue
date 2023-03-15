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
            const response = await axios.get('https://raw.githubusercontent.com/nicolas5746/estadios/master/public/data/data.json');
            this.departamentos = response.data.departamentos;
            this.estadios = response.data.estadios;
        },
        getDepartamentoSeleccionado(departamento) {
            this.departamentoSeleccionado = departamento;
        },
        handleCerrarOverlay(index) {
            return {
                'cerrar-imagen-expandida': this.indice === index,
            }
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
    },
    mounted() {
        this.getData();
    },
    data() {
        let departamentos = [];
        let departamentoSeleccionado = ``;
        let enlaces = [
            `https://raw.githubusercontent.com/nicolas5746/estadios/master/public/images/expandir.png`,
            `https://raw.githubusercontent.com/nicolas5746/estadios/master/public/images/mapa.png`,
            `https://raw.githubusercontent.com/nicolas5746/estadios/master/public/images/no-picture.jpg`,
        ];
        let estadios = [];
        let expandir = false;
        let indice = null;
        let titulos = [
            `Cerrar`,
            `Departamentos`,
            `Expandir`,
            `Más información`,
        ];
        return {
            departamentos,
            departamentoSeleccionado,
            enlaces,
            estadios,
            expandir,
            indice,
            titulos,
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
            <img :src='enlaces[1]' :alt='titulos[1]' :title='titulos[1]' />
        </div>
        <div class='estadios-grid'>
            <div class='estadios-overlay' v-for='(estadio, index) in estadios' :key='estadio'
                v-show='estadio.departamento === departamentoSeleccionado'>
                <div :class='handleImagenOverlay(index)'>
                    <img class='imagen-estadio' v-if='estadio.imagen != null' :class='handleImagenExpandida(index)'
                        :src='estadio.imagen' :alt='estadio.nombre' :title='estadio.nombre' />
                    <img class='imagen-estadio' v-else='estadio.imagen === null' :src='enlaces[2]' :alt='estadio.nombre'
                        :title='estadio.nombre' />
                    <div :class='handleCerrarOverlay(index)' v-show='expandir' :title='titulos[1]'
                        @click='() => handleContraerImagen(index)'>
                    </div>
                </div>
                <div class='estadios-seleccionados'>
                    <div class='info-estadios'>
                        <h1>{{ estadio.nombre }}</h1>
                        <p>Capacidad: {{ estadio.capacidad }}</p>
                        <p>Propietario: {{ estadio.propietario }}</p>
                        <p>Ciudad/Localidad: {{ estadio.localidad }}</p>
                        <p>Inauguración: {{ estadio.inauguracion }}</p>
                        <a :href='estadio.wikipedia' target='_blank'>
                            <button class='detalles' type='button'>{{ titulos[3] }}</button>
                        </a>
                        <img v-if='expandir === false && estadio.imagen != null' :src='enlaces[0]' :alt='titulos[2]'
                            :title='titulos[2]' @click='() => handleExpandirImagen(index)' />
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
    z-index: 1

.mapa
    & img
        display: block
        filter: grayscale(100%)
        height: 100%
        margin: 25% 35%
        width: 100%

.seleccionar-departamentos
    width: 20%

.estadios-grid
    display: grid
    grid-gap: 2%
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
    bottom: 0
    height: 100%
    left: 0
    opacity: 0.985
    position: fixed
    right: 0
    top: 0
    width: 100%
    z-index: 1

.imagen-estadio
    border-radius: 2em
    filter: brightness(1.2) saturate(1.1) contrast(1)
    height: 30vh
    position: relative
    transition: 0.3s
    width: 21vw
    z-index: -1

.cerrar-imagen-expandida
    background-color: transparent
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
        filter: invert(100%) sepia(0.1) saturate(100%) brightness(100%) contrast(100%)

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
    line-height: 0.9
    padding: 5% 4%
    position: absolute
    width: 100%
    & img
        bottom: 20%
        filter: invert(100%) sepia(100%) saturate(100%) brightness(100%) contrast(75%)
        height: 6%
        position: absolute
        right: 15%
        transition: 0.6s
        width: 6%
        &:hover
          cursor: pointer
          transform: scale(1.2)
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
        padding: 0.2%
        text-align: left
        white-space: normal

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
    .estadios-overlay
        height: 13vh
        width: 25vw

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
    .mapa
        & img
            margin: 25% 60%

    .imagen-estadio-expandida
        height: 60vh
        margin: 15% 1% 2% 2%
        width: 95vw

    .estadios-grid
        grid-gap: 8% 0
        grid-template-columns: 45% 45%
        padding: 5% 5% 2% 10%

@media screen and (min-width: 851px) and (max-width: 1199px)
    .imagen-estadio
        border-radius: 1.5em
</style>