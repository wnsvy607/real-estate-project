<template>
  <v-container fill-height style="max-width: 500px">
    <v-row>
      <v-col>
        <v-alert class="mb-3" :value="isLoginError" type="error">{{
          errorMessage
        }}</v-alert>

        <v-card>
          <v-toolbar dark color="indigo" flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-5">
            <v-text-field v-model="email" label="이메일" filled> </v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="비밀번호"
              filled
            >
            </v-text-field>
            <v-btn
              color="indigo"
              dark
              depressed
              block
              large
              @click="login({ email, password })"
              >로그인</v-btn
            >
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    ...mapActions(["login"]),
  },
  computed: {
    ...mapGetters(["isLogin", "isLoginError", "errorMessage"]),
  },
};
</script>