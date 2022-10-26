<template>
  <div>
    <Login />
    <v-container style="max-width: 500px">
      <v-row align="center">
        <v-col>
          <v-card>
            <v-btn align="center" class="ma-5">사용자 등록</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Login from "../components/Login/Login.vue";
export default {
  components: {
    Login,
  },
};
</script>