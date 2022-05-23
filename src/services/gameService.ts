import { ref } from "vue"
import herbai from '@/assets/files.json'
import { getRandomInt, shuffleArray } from "@/functions/random"
import type { ICoatOfArms } from "@/entities/CoatOfArms"
import { RoundData } from "@/entities/RoundData"



export const useGame = () => {
    const score = ref(0)
    const guesses = ref(0)
    const streak = ref(0)
    const correctGuess = ref('')
    const incorrectGuess = ref('')

    const roundData = ref<RoundData | null>(null)
    
    const getRandomCoA = () => {
        const index = getRandomInt(herbai.length)
        return herbai[index] as ICoatOfArms
    }

    function* uniqueCoAGenerator(count=4) {
        let iterationCount = 0;
        const selectedCoAs: ICoatOfArms[] = []
        for (let i = 0; i < count; i++) {
            iterationCount++;
            let coa = getRandomCoA()
            while(selectedCoAs.includes(coa)) {
                console.log(selectedCoAs.includes(coa), coa.name)
                coa = getRandomCoA()
            }
            selectedCoAs.push(coa)
            yield coa;
        }
        return iterationCount;
    }
    

    const getNextRound = () => {
        const coasForTheRound = [...uniqueCoAGenerator()]
        const mainCoA = coasForTheRound[0]
        roundData.value = new RoundData(mainCoA, shuffleArray(coasForTheRound.map(o => o.name)))
        correctGuess.value = ''
        incorrectGuess.value = ''
    }

    const makeGuess = (option: string) => {
        if (option === roundData.value?.correctAnswer) {
            correctGuess.value = option
            score.value += 1
            streak.value += 1
        } else {
            correctGuess.value = roundData.value?.correctAnswer || ''
            incorrectGuess.value = option
            streak.value = 0
        }
        guesses.value += 1
    }

    return { score, guesses, streak, getNextRound, makeGuess, correctGuess, incorrectGuess, roundData }
}