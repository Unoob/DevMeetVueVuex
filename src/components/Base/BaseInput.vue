<template>
  <v-text-field
    :label="label"
    :value="value"
    @input="onInput"
    v-bind="$attrs"
  ></v-text-field>
</template>
<script>
export default {
  name: 'BaseInput',
  props: {
    value: String,
    label: { type: String, required: false }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e)
    }
  }
}
</script>
