<template lang="html">
  <div>
    <Header></Header>

    <b-container>
      <div class="card__content">
        <component :is="name"></component>
      </div>
    </b-container>
  </div>
</template>

<script>
import Header from '../src/components/Header.vue'
import LoremPicsum from '../src/components/api/LoremPicsum.vue'
import Ghibli from '../src/components/api/Ghibli.vue'
import MagicTheGathering from '../src/components/api/MagicTheGathering.vue'
import TheReportOfTheWeek from '../src/components/api/TheReportOfTheWeek.vue'
import Kanye from '../src/components/api/Kanye.vue'

export default {
  components: {
    'lorem-picsum': LoremPicsum,
    'ghibli': Ghibli,
    'magic-the-gathering': MagicTheGathering,
    'the-report-of-the-week': TheReportOfTheWeek,
    'kanye': Kanye,
    Header
  },
  data () {
    return {
      name: this.$route.params.name
    }
  }
}
</script>

<style media="screen">
  .card__content {
    background: white;
    padding: 20px;
  }
</style>
