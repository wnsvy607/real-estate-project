<template>
  <div>
    <h1>{{ memberName }}님 환영합니다.</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["memberId", "memberName"]),
  },
};
</script>