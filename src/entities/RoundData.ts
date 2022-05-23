import { getImageUrl } from "@/functions/url"
import type { ICoatOfArms } from "./CoatOfArms"

export interface IRoundData {
    imageUrl: string
    options: string[]
    correctAnswer: string
}


export class RoundData implements IRoundData {
    imageUrl: string
    options: string[]
    correctAnswer: string

    constructor(mainCoatOfArms: ICoatOfArms, options: string[]) {
        this.imageUrl = getImageUrl(mainCoatOfArms.image)
        this.correctAnswer = mainCoatOfArms.name
        this.options = options
    }
    
}