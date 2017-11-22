<template>
  <div>
    <el-row>
      <el-col :span="24">
        <video-player class="vjs-custom-skin"
                        ref="videoPlayer"
                        :options="playerOptions"
                        customEventName="changed"
                        @ready="playerIsReady"
                        @changed="playerStateChanged($event)">
          </video-player>
      </el-col>
    </el-row>
  </div>
</template>

<script>
require('videojs-flash')
require('videojs-hotkeys')
export default {
  data() {
    return {
      playerOptions: {
        autoplay: false,
        sources: [
          {
            type: 'video/mp4',
            src: 'http://www.wdhac.com.cn/CR-V/video/video1.mp4'
          }
        ],
        language: 'zh-CN',
        poster: 'http://www.cr-v.com.cn/images/kv02.jpg'
      }
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    playerStateChanged(playerCurrentState) {
      // console.log('example 2: state changed', playerCurrentState)
    },
    playerIsReady(player) {
      console.log('example 2 ready!', player)
      player.hotkeys({
        volumeStep: 0.1,
        seekStep: 5,
        enableModifiersForNumbers: false,
        fullscreenKey: function(event, player) {
          // override fullscreen to trigger when pressing the F key or Ctrl+Enter
          return event.which === 70 || (event.ctrlKey && event.which === 13)
        }
      })
    }
  }
}
</script>

