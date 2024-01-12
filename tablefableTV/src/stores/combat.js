import { defineStore } from "pinia";

export const useCombatStore = defineStore("combat", {
  state: () => ({
    initiatives: [],
    playerturn: 0,
    combatLogs: [],
    players: [],
    enemies : [],
    started: false,
  }),
});
