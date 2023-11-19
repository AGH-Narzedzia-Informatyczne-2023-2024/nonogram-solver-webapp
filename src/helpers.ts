function fillArray(arr: any[] = [], defaultElement: any, ...args: number[]) {
    for (let i = 0; i < args[0]; i++) {
        if (args.length > 1) {
            arr.push(fillArray([], defaultElement, ...args.slice(1)))
        } else {
            arr.push(defaultElement)
        }
    }
    return arr
}

export function createArray(defaultElement: any, dimensionSizes: number[]) {
    return JSON.parse(JSON.stringify(fillArray([], defaultElement, ...dimensionSizes)))
}