<template>
    <div>
        {{ memberName }}님 환영합니다.
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['memberId','memberName']),
    },
}
</script>

<style>

</style>