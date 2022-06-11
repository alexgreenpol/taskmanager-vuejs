<template>
  <div class="main-layout">
    <MainHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '@/components/headers/MainHeader.vue';

export default {
  name: 'Main',
  components: {
    MainHeader
  }
};
</script>
