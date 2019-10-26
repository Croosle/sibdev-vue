<template>
  <b-col v-show="loading">
    <div class="text-center">
      <b-spinner label="Spinning" small></b-spinner>
    </div>
  </b-col>
</template>

<script>
export default {
  props: ['loading']
}
</script>
