<template>
  <div>
    <h1>카카오 맵 테스트</h1>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
    };
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 8,
      };
      this.map = new kakao.maps.Map(container, options);
    },
  },
  mounted() {
    if (!window.kakao || !window.kakao.maps) {
    // script 태그 객체 생성
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_KEY}`;
    console.log(`${process.env.VUE_APP_KAKAOMAP_KEY}`);
    /* global kakao */
    script.addEventListener("load", () => {
      kakao.maps.load(this.initMap);
    });

    document.head.appendChild(script);
    } else {
      console.log("이미 로딩됨: ", window.kakao);
      this.initMap();
    }
  },
};
</script>

<style scoped>
#map {
  width: 600px;
  height: 800px;
}
</style>