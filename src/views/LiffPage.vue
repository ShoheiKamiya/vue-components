<template>
  <div>
    <h1>This is a LIFF page</h1>
  </div>
</template>

<script>
import liff from '@line/liff';

export default {
  async mounted() {
    await liff.init({ liffId: process.env.VUE_APP_LIFF_ID });
    alert(`ログイン状態: ${liff.isLoggedIn()}`);
    console.log(liff.isLoggedIn());
  },
};
</script>
