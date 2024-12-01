export function randomizer(elements: any[], distributionWeights?: number[]) : Error | any {
    if (!distributionWeights) {
        return elements[drawIndexFromFlatDistribution(elements.length)];
    } else {
        return elements[drawIndexFromWeightedDistribution(distributionWeights)];
    }
}

function drawIndexFromFlatDistribution(numberOfElements: number) : number {
    const randomNumber = Math.random() * 100;
    const stepTresholdPercentage = 100.0 / numberOfElements;
    let currentCeiling = stepTresholdPercentage;
    let pickedIndex = 0;

    while (randomNumber > currentCeiling) {
        currentCeiling += stepTresholdPercentage;
        pickedIndex++;
    }

    return pickedIndex;
}

function drawIndexFromWeightedDistribution(weights: number[]) : number {
    const randomNumber = Math.random() * 100;
    let pickedIndex = 0;

    for (let i = 0; i < weights.length; i++) {
        if (randomNumber <= weights[i]) {
            pickedIndex = i;
            break;
        } else {
            pickedIndex++;
        }
    }

    return pickedIndex;
    
}


