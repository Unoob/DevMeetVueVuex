<template>
  <v-btn
    color="primary"
    :loading="loading"
    v-on="$listeners"
    :disabled="loading"
    class="white"
  >
    <slot>Zapisz</slot>
    <v-icon v-if="icon" right dark>icon</v-icon>
    <!-- Remove if don't want to use icon. -->
  </v-btn>
</template>
<script>
export default {
  name: 'BaseButton',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    icon: String
  }
}
</script>
