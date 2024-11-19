<script setup>
import FooterItem from '@components/FooterItem.vue';
import NavbarItem from '@components/NavbarItem.vue';
</script>

<template>
  <div class='principal'>
    <NavbarItem />
    <FooterItem />
  </div>
</template>

<style scoped lang='sass'>
@use '@styles/colours'

.principal
  background-image: linear-gradient(15deg, colours.$steelblue 0%, colours.$skyblue 80%, colours.$white 100%)
  inset: 0
  position: fixed
  width: 100%
</style>