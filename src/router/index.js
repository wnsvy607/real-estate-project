import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const Login = () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
const MapView = () => import(/* webpackChunkName: "map-view" */ '../views/MapView.vue')
const MyPage = () => import(/* webpackChunkName: "my-page" */ '../views/MyPage.vue')

const rejectAuthUser = (to, from, next) => {
  if(store.getters.isLogin === true) {
    alert("이미 로그인을 하였습니다.")
    next("/")
  } else {
    store.dispatch('newLogin')
    next()
  }
}

const onlyAuthUser = (to, from, next) => {
  if(store.getters.isLogin === false) {
    alert("아직 로그인을 하지 않았습니다.")
    next("/")
  } else {
    next()
  }
}

const routes = [
  // 홈 화면
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // 로그인
  {
    path: '/login',
    name: 'login',
    beforeEnter: rejectAuthUser,
    component: Login
  },
  // 매물 등록/수정
  // {
  //   path: '/map',
  //   name: 'map',
  //   component: MapView
  // },
  // 매물 보기
  {
    path: '/map',
    name: 'map',
    component: MapView
  },
  // 
  {
    path: '/mypage',
    name: 'mypage',
    beforeEnter: onlyAuthUser,
    component: MyPage
  },
  // 고객 데이터 열람 /입력
  // IP/기기 차단
  // 사용자 데이터 관리
  // 고객 데이터 관리
  // 매물 정보 관리
  {
    path: '/*',
    redirect: { name: 'home' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
