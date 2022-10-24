<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> 사용자 기능 </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in commonItems" :key="item.title" 
        router :to="{name: `${item.name}`}" exact>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> 관리자 기능 </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in adminItems" :key="item.title" 
        router :to="{name: `${item.name}`}" exact>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="indigo" dark fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-appbar-title>부동산 매물 관리</v-appbar-title>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2022</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    commonItems: [
      { title: "로그인", icon: "mdi-login", name: 'login' },
      { title: "매물 등록/수정", icon: "mdi-image", name:'map' },
      { title: "매물 보기", icon: "mdi-map", name:'map' },
      { title: "고객 데이터 열람 / 입력", icon: "mdi-account", name:'home' },
    ],
    adminItems: [
      { title: "IP/기기 차단", icon: "mdi-cancel", name:'home' },
      { title: "사용자 데이터 관리", icon: "mdi-card-account-details", name:'home' },
      { title: "고객 데이터 관리", icon: "mdi-database", name:'home' },
      { title: "매물 정보 관리", icon: "mdi-home-group", name:'home' },
    ],
    right: null,
  }),
};
</script>
