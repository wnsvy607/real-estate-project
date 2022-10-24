import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const Login = () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
const MapView = () => import(/* webpackChunkName: "map-view" */ '../views/MapView.vue')


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
  // 고객 데이터 열람 /입력
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // IP/기기 차단
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // 사용자 데이터 관리
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // 고객 데이터 관리
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // 매물 정보 관리
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  ,
  {
    path: '/*',
    redirect: { name: 'home' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
