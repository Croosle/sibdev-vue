<template lang="html">
  <b-row>
    <b-col lg="3" v-for="(card, index) in cards" :key="index" class="mb-4">
      <h4>{{ card.name }}</h4>
      <img :src="card.imageUrl" width="100%" v-if="card.imageUrl">
      <p v-else>The image is missing</p>
    </b-col>

    <base-loading :loading="loading"></base-loading>
    <base-error :error="error"></base-error>
  </b-row>
</template>

<script>
import BaseLoading from '../BaseLoading.vue'
import BaseError from '../BaseError.vue'

export default {
  components: {
    BaseLoading,
    BaseError
  },
  data () {
    return {
      cards: [],
      loading: true,
      error: ''
    }
  },
  mounted () {
    this.axios.get('https://api.magicthegathering.io/v1/cards?page=1')
      .then(res => {this.cards = res.data.cards, this.loading = false})
      .catch((e) => {this.error = e, this.loading = false})
  }
}
</script>
