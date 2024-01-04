
  <template>
    <q-layout view="lHh Lpr lFf">
      <div class="row">
        <div class="banner" style="background-image: url('/svg/bannerRed.svg')">
          <div v-for="(initiative, index) in combat.initiatives" :key="index" class="initiative">
            {{ initiative }}
          </div>
        </div>
        <div class="banner" style="background-image: url('/svg/bannerPlayer.svg')">
          <div v-for="(initiative, index) in combat.initiatives" :key="index" class="initiative">
            {{ initiative }}
          </div>
        </div>
        <div class="banner" style="background-image: url('/svg/bannerBlack.svg')">
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

  .initiative {
    margin-bottom: 10px;
  }
  </style>
