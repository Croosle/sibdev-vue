<template lang="html">
  <b-form inline>
    <b-input
      v-model="user.name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Имя"
    ></b-input>
    <b-input
      v-model="user.surname"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Фамилия"
    ></b-input>
    <b-input
      v-model="user.middlename"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Отчество"
    ></b-input>
  </b-form>
</template>

<script>
export default {
  props: ['user'],
}
</script>
