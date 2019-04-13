<template>
  <v-list two-line subheader>
    <v-list-tile v-for="(item, i) in items" :key="i">
      <v-list-tile-content>
        <slot name="item" :tmp="item">
          <v-list-tile-title>{{ item.text }}</v-list-tile-title>
        </slot>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>
<script>
export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
