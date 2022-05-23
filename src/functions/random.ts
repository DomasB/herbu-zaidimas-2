export function getRandomInt(max: number) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max);
}

export const shuffleArray = <T>(array: T[]) =>  {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}