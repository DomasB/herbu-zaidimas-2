<script setup lang="ts">
    import { RoundData } from '@/entities/RoundData';
    import { computed } from '@vue/reactivity';

    const props = defineProps({
        gameData: {
            type: RoundData,
            required: true
        },
        correctGuess: String,
        incorrectGuess: String
    })

    const roundEnded = computed(() => !!(props.correctGuess || props.incorrectGuess))
</script>

<template>
  <div class="flex flex-col items-center p-5">
    <img :src="gameData.imageUrl" height="100" />
    <div class="flex flex-col w-full items-center py-3 gap-2">
        <button
            v-for="option in gameData.options"
            :key="option"
            :class="{
                'bg-green-600 hover:bg-green-800': option === correctGuess,
                'bg-red-500 hover:bg-red-700': option === incorrectGuess,
                'dark:bg-gray-800 dark:hover:bg-gray-700 bg-gray-800 hover:bg-gray-900': option !== correctGuess && option !== incorrectGuess
            }"
            class="text-white w-full focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-4  dark:focus:ring-gray-700 dark:border-gray-700"
            @click="$emit('guess', option)"
            :disabled="roundEnded"
        >
            {{ option }}
        </button>
        <button
            v-if="roundEnded"
            class="text-white w-1/2 dark:bg-gray-700 dark:hover:bg-gray-600 bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-4  dark:focus:ring-gray-700 dark:border-gray-700"
            @click="$emit('next')"
        >
            Next
        </button>
        <div v-else class="h-12" />
    </div>

  </div>
</template>