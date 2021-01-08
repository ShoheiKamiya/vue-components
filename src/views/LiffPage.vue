<template>
  <div>
    <h1>{{ displayName }}様 専用ページ</h1>
    <div class="card">写真</div>
    <div class="card">写真</div>
  </div>
</template>

<script>
import liff from '@line/liff';

export default {
  data() {
    return {
      displayName: '',
    };
  },
  async mounted() {
    await liff.init({ liffId: process.env.VUE_APP_LIFF_ID });
    if (!liff.isLoggedIn()) {
      await liff.login();
    }
    const profile = await liff.getProfile();
    this.displayName = profile.displayName;
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 150px;
  border: 1px solid #333;
  border-radius: 10px;
  margin-top: 30px;
  padding: 30px;
}
</style>
