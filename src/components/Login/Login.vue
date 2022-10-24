<template>
  <v-container fill-height style="max-width: 500px">
    <v-row>
      <v-col>
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
            @click="login()">로그인</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      allUsers: [
        { id: 1, name: "ljp", email: "wnsvy607@naver.com", password: "123" },
        { id: 1, name: "lys", email: "lys29050@naver.com", password: "123456" },
      ],
    };
  },
  methods: {
    login() {
        console.log(this.email, this.password);
    }
  }
};
</script>