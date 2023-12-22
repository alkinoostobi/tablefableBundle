<template>
  <q-layout view="lHh Lpr lFf">{{ combat.initiatives }} </q-layout>
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
