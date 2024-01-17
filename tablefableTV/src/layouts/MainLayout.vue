
  <template>
    <q-layout view="lHh Lpr lFf" class="parchmentbackground">
      <div class="logs-container">
          <div class="logs" ref="logs">
            <div v-for="(log, index) in combat.combatLogs" :key="index" class="log" :class="log.type">
              <span v-if="log.type === 'title'" class="log-title">{{ log.body }}</span>
              <span v-if="log.type === 'intendedText'" class="log-intended">{{ log.body }}</span>
              <span v-if="log.type === 'damage'" class="log-damage">{{ log.body }}</span>
              <span v-if="log.type === 'importantMessage'" class="log-important">{{ log.body }}</span>
            </div>
          </div>
      </div>
      <div class="row" v-if="combat.started">
        <div class="banner" style="background-image: url('/svg/bannerRed.svg')">
          <div class="banner-title" style="background-color: transparent; color : #E7AE41">Combat</div>
          <img src="/public/shieldandswords.png" alt="Combat Icon" class="banner-icon">
          <div v-for="(initiative, index) in combat.initiatives" :key="index" class="initiative" :class="combat.playerturn == index ? 'strokeme' : ''">
            {{ initiative[1] == 'pcs' ?  combat.players[initiative[0]].name : combat.enemies[initiative[0]].name }}
            {{ initiative[1] == 'pcs' ?  combat.players[initiative[0]].id : combat.enemies[initiative[0]].id }}
          </div>
        </div>
        <div class="banner" style="background-image: url('/svg/bannerPlayer.svg')">
          <div class="banner-title" style="background-color: transparent; color :#E7AE41">Party</div>
          <img src="/public/people.png" alt="Party Icon" class="banner-icon">
          <div v-for="(players, indexp) in combat.players" :key="indexp+'pl'" class="initiative">
           {{ players.name }} ({{ players.id }})
          </div>
        </div>
        <div class="banner" style="background-image: url('/svg/bannerBlack.svg')">
          <div class="banner-title" style="background-color:transparent ; color : #E7AE41">Enemies</div>
          <img src="/public/people.png" alt="Enemies Icon" class="banner-icon">
          <div v-for="(enemies, indexe) in combat.enemies" :key="indexe+'en'" class="initiative">
           {{ enemies.name }} ({{ enemies.id }})
          </div>
        </div>
      </div>
    </q-layout>
  </template>

  <script>
  import { defineComponent, ref } from "vue";
  import { useCombatStore } from "../stores/combat.js";
  import socket from "../boot/socket"; // Adjust the path as needed
  const combat = useCombatStore();
  export default defineComponent({
    name: "MainLayout",
    data() {
      return {
        combat: combat,
      };
    },
    methods:{
      handleKeyDown(e) {
      const logsContainer = this.$el.querySelector('.logs-container');
      if (!logsContainer) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const vh = window.innerHeight * 0.05; // 5vh
        logsContainer.scrollTop += (e.key === 'ArrowDown' ? vh : -vh);
      }
    },

    },
    mounted() {
    window.addEventListener('keydown', this.handleKeyDown);
    socket.on("scrollUp" , () => {
      const logsContainer = this.$el.querySelector('.logs-container');
      if (!logsContainer) return;
      const vh = window.innerHeight * 0.05; // 5vh
      logsContainer.scrollTop += -vh;
    });
    socket.on("scrollDown" , () => {
      const logsContainer = this.$el.querySelector('.logs-container');
      if (!logsContainer) return;
      const vh = window.innerHeight * 0.05; // 5vh
      logsContainer.scrollTop += vh;
    });
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  });
  </script>

  <style>
  .row {
    display: flex;
    justify-content: flex-end;
  }

  .banner {
    width: 293.44px;
    height: 719.66px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 10px;
  }

  .banner-title {
    background-color: #E7AE41;
    color: white;
    font-size: 20px;
    padding: 10px;
    text-align: center;
  }

  .banner-icon {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    display: block;
  }

  .initiative {
    margin-bottom: 10px;
    color : white;
    text-align: center;
  }
  .strokeme {
  color: white;
  text-shadow: -1px -1px 0 #C01DFC, 1px -1px 0 #C01DFC, -1px 1px 0 #C01DFC, 1px 1px 0 #C01DFC;
}
.parchmentbackground {
  background-image: url('/parchment.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.logs-container {
  position: absolute;
  top: 0;
  left: 2vw;
  width: 38%;
  height: 100%;
  overflow: auto;
  padding: 10px;
  box-sizing: border-box;
  color: black;
  font-size: 1.2rem;
  line-height: 1.5;
}
.log-intended{
  color: black;
  font-size: 1rem;
  left: 4vw;
  position: relative;
  text-shadow: -1px -1px 0 #E7AE41, 1px -1px 0 #E7AE41, -1px 1px 0 #E7AE41, 1px 1px 0 #E7AE41;
}
.log-important{
  color: black;
  line-height: 5vw;
  position: relative;
  text-shadow: -1px -1px 0 #ff3030, 1px -1px 0 #ff3030, -1px 1px 0 #ff3030, 1px 1px 0 #ff3030;
}
.log-damage{
  color: black;
  text-align: center;
  width:100%;
  position:relative;
}

  </style>
