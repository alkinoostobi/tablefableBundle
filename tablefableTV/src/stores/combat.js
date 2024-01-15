import { defineStore } from "pinia";

export const useCombatStore = defineStore("combat", {
  state: () => ({
    initiatives: [],
    playerturn: 0,
    combatLogs: [
      {type:'title' , body: 'Party Long-Rested in the Aperstroke Forest'},
      {type:'importantMessage' , body: 'Party Suprised! Combat Initiated'},
      {type:'title' , body: 'Player 1 (Wilt Mbondo) Turn'},
      {type:'intendedText', body: 'Action 1: Move 30ft'},
      {type:'intendedText', body: 'Action 2: Attack Goblin 1 (Fail)'},
      {type:'intendedText', body: 'Action 3: Attack Goblin 1 (Success)'},
      {type:'damage' , body: 'Goblin 1 takes 5 damage'},
      {type:'title' , body: 'Party Long-Rested in the Aperstroke Forest'},
      {type:'importantMessage' , body: 'Party Suprised! Combat Initiated'},
      {type:'title' , body: 'Player 1 (Wilt Mbondo) Turn'},
      {type:'intendedText', body: 'Action 1: Move 30ft'},
      {type:'intendedText', body: 'Action 2: Attack Goblin 1 (Fail)'},
      {type:'intendedText', body: 'Action 3: Attack Goblin 1 (Success)'},
      {type:'damage' , body: 'Goblin 1 takes 5 damage'},
      {type:'title' , body: 'Party Long-Rested in the Aperstroke Forest'},
      {type:'importantMessage' , body: 'Party Suprised! Combat Initiated'},
      {type:'title' , body: 'Player 1 (Wilt Mbondo) Turn'},
      {type:'intendedText', body: 'Action 1: Move 30ft'},
      {type:'intendedText', body: 'Action 2: Attack Goblin 1 (Fail)'},
      {type:'intendedText', body: 'Action 3: Attack Goblin 1 (Success)'},
      {type:'damage' , body: 'Goblin 1 takes 5 damage'},
    ],
    players: [],
    enemies : [],
    started: false,
  }),
});
