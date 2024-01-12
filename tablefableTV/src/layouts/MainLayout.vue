
  <template>
    <q-layout view="lHh Lpr lFf">
      <div class="row" v-if="combat.started">
        <div class="banner" style="background-image: url('/svg/bannerRed.svg')">
          <div class="banner-title" style="background-color: transparent; color : #E7AE41">Combat</div>
          <img src="/public/shieldandswords.png" alt="Combat Icon" class="banner-icon">
          <div v-for="(initiative, index) in combat.initiatives" :key="index" class="initiative">
            {{ initiative }}
          </div>
        </div>
        {{ combat.players }}
        <div class="banner" style="background-image: url('/svg/bannerPlayer.svg')">
          <div class="banner-title" style="background-color: transparent; color :#E7AE41">Party</div>
          <img src="/public/people.png" alt="Party Icon" class="banner-icon">
          <div v-for="(initiative, index) in combat.initiatives" :key="index" class="initiative">
            {{ initiative }}
          </div>
        </div>
        <div class="banner" style="background-image: url('/svg/bannerBlack.svg')">
          <div class="banner-title" style="background-color:transparent ; color : #E7AE41">Enemies</div>
          <img src="/public/people.png" alt="Enemies Icon" class="banner-icon">
          <div v-for="(initiative, index) in combat.initiatives" :key="index" class="initiative">
            {{ initiative }}
          </div>
        </div>
      </div>
    </q-layout>
  </template>

  <script>
  import { defineComponent, ref } from "vue";
  import { useCombatStore } from "../stores/combat.js";

  const combat = useCombatStore();
  export default defineComponent({
    name: "MainLayout",
    data() {
      return {
        combat: combat,
      };
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
  }
  </style>
