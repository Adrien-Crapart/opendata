<template>
  <div class="container mx-auto flex flex-col md:flex-row">
    <div class="md:w-2/8 p-4">
      <DataSearch />
    </div>
    <div class="md:w-4/8 p-4">
      <DataVisualization />
    </div>
    <div class="md:w-2/8 p-4">
      <ContentNavigator />
    </div>
  </div>
</template>

<script setup lang="ts">
import DataSearch from '@/components/opendata/DataSearch.vue'
import DataVisualization from '@/components/opendata/DataVisualization.vue'
import ContentNavigator from '@/components/opendata/ContentNavigator.vue'
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
