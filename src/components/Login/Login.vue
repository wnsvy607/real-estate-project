<template>
  <v-container fill-height style="max-width: 500px">
    <v-row>
      <v-col>
        <v-alert class="mb-3" :value="isError" type="error">{{
          this.errorMessage
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
            <v-btn color="indigo" dark depressed block large @click="login()"
              >로그인</v-btn
            >
            <v-btn color="indigo" dark depressed block large @click="logOut()"
              >로그아웃</v-btn
            >
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
// import axios from '../../axios/index.js'

export default {
  data() {
    return {
      email: null,
      password: null,
      allUsers: [
        { id: 1, name: "ljp", email: "wnsvy607@naver.com", password: "123" },
        { id: 1, name: "lys", email: "lys29050@naver.com", password: "123456" },
      ],
      isError: false,
      errorMessage: null,
    };
  },
  methods: {
    login() {
      axios
        .post(process.env.VUE_APP_BACKEND_URL + "/api/basic/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res.data);
          // 로그인 성공 시 홈화면으로 이동
          // 헤더에 jwt 설정
          let token = {
            token: res.data.grantType + " " + res.data.accessToken,
            expireTime: res.data.accessTokenExpireTime,
          };
          let refresh = {
            refresh: res.data.grantType + " " + res.data.refreshToken,
            refreshExpireTime: res.data.refreshTokenExpireTime,
          };

          this.setToken(token);
          this.setRefresh(refresh);
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          this.isError = true;
          this.errorMessage = err.response.data.errorMessage;
        });
    },
    ...mapActions(["setToken", "setRole", "setRefresh", "logOut"]),
  },
  computed: {
    ...mapState(["isLogin"]),
  },
};
</script>