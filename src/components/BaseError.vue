<template lang="html">
  <b-col v-if="error">
    <p>{{ error }}</p>
  </b-col>
</template>

<script>
export default {
  props: ['error']
}
</script>
