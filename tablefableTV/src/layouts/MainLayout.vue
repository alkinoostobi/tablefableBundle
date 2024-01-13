
  <template>
    <q-layout view="lHh Lpr lFf">
      <div v-for="(initiative, index) in combat.initiatives" :key="index" :class="{ 'highlighted-box': index === combat.playerturn }">
        {{ initiative }}
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
        GesturesStr: [
              "SWIPE_LEFT",
        "SWIPE_UP",
        "SWIPE_DOWN",
        "SWIPE_RIGHT",
        "CIRCLE_CLOCKWISE",
        "CIRCLE_COUNTERCLOCKWISE",
        "PINCH",
          ],
      };
    },
    mounted() {
      console.log(this.GesturesStr);
    },
  });
  </script>
  <style>
  .highlighted-box {
    background-color: yellow;
  }
  </style>
