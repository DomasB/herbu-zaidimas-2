<script setup lang="ts">
  import { ref } from 'vue';
  import { useGame } from '@/services/gameService'
  import GameRound from '@/components/GameRound.vue'
  
  const { 
    score,
    roundData,
    correctGuess,
    incorrectGuess,
    guesses,
    streak,
    getNextRound,
    makeGuess
  } = useGame()

  const gameStarted = ref(false)

  const startGame = () => {
    gameStarted.value = true
    getNextRound()
  }
</script>

<template>
  <main class="flex flex-col h-full">
    <div v-if="gameStarted" class="px-3 text-center lg:text-left">
      <span class="text-lg">{{ score }}/{{guesses}} </span>
      <span class="text-lg"> Serija: {{ streak }} </span>
    </div>
    <button
      v-if="!gameStarted"
      class="self-center my-auto text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-8 py-5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700"
      @click="startGame" 
    >
      Pradėti
      <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    <GameRound
      v-else
      :game-data="roundData!"
      :correct-guess="correctGuess"
      :incorrect-guess="incorrectGuess"
      @guess="makeGuess"
      @next="getNextRound"
    />
  </main>
</template>