<template>
  <div class="map">
    <div class="description">
      map
    </div>
    <div></div>
    <div class="gallery-container" ref="gal">
      <vue-daum-map
          :appKey="appKey"
          :center.sync="center"
          :level.sync="level"
          :mapTypeId="mapTypeId"
          :libraries="libraries"
          @load="onLoad"
          style="width:500px;height:400px;"/>
    </div>
    <div>
      <a href="tmap://search?name=힐링페이퍼"><span class="ico_comm ico_taxi"></span>T맵</a>
    </div>
    <div>
      <a href="https://t.kakao.com/launch?type=taxi&amp;dest_lat=37.49878007763176&amp;dest_lng=127.03170076652506&amp;ref=localweb" class="link_boxtype" data-logtarget="" data-logevent="waytogo,kakaotaxi"><span class="ico_comm ico_taxi"></span>택시호출</a>
    </div>
    <div>
      <a href="nmap://search?query=힐링페이퍼&appname=kimyoon21.github.io/wedding"><span class="ico_comm ico_taxi"></span>네이버맵</a>
    </div>
    <div>
      <a href="kakaomap://search?q=힐링페이퍼"><span class="ico_comm ico_taxi"></span>카카오맵</a>
    </div>
  </div>
</template>

<script>

import VueDaumMap from 'vue-daum-map'

export default {
  name: "Map",
  components: {VueDaumMap},
  data() {
    return {
      scrollX: 0,
      width: 320,
      appKey: '13820f5d51d54f2bfb5203278b7bf8b9', // 테스트용 appkey
      center: {lat:37.4987, lng:127.0316}, // 지도의 중심 좌표
      level: 3, // 지도의 레벨(확대, 축소 정도),
      mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
      libraries: ["drawing"], // 추가로 불러올 라이브러리
      map: null, // 지도 객체. 지도가 로드되면 할당됨.
      daum: null, // 다음 API 객체. 지도가 로드되면 할당됨.
    };
  },
  mounted() {

  },
  methods: {
    // 지도가 로드 완료되면 load 이벤트 발생
    onLoad (map, daum) {
      this.map = map;
      this.daum = daum;

      // 지도를 클릭한 위치에 표출할 마커입니다
      var marker = new kakao.maps.Marker({
        // 지도 중심좌표에 마커를 생성합니다
        position: map.getCenter()
      });
      // 지도에 마커를 표시합니다
      marker.setMap(map);
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  padding-top: 32px;
  padding-bottom: 50px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  color: #295138;
  overflow: hidden;
  .bunny {
    width: 65px;
    margin-bottom: 20px;
  }
  .description {
    font-size: 12px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }
}
</style>
