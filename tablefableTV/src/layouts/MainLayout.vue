
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
      };
    },
  });
  </script>
  <style>
  .highlighted-box {
    background-color: yellow;
  }
  </style>
