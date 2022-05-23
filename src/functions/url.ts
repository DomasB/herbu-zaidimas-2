export const getImageUrl = (imageName: string) => 
    new URL(`../assets/herbai/${imageName}`, import.meta.url).toString()