class dice {

    static rollDX(X, explosive = false) {
        return Math.floor((Math.random() * X) + 1);
    }

    static rollYDX(Y, X) {
        let numbers = [];
        for (let i = 0; i < Y; i++) {
            numbers.push(this.rollDX(X));
        }
        numbers.sort();
        return numbers;
    }

    //TODO: change to sumOfNumbers and splice somewhere else
    static sumOfXNumbers(numbers, X) {
        let result = 0;
        for (let i = 0; i < X; i++) {
            result += numbers[i];
        }
        return result;
    }

    static combineZLargestNumbers(numbers, Z) {
        numbers.reverse();
        return this.combineZSmallestNumbers(numbers, Z)
    }

    static combineZSmallestNumbers(numbers, Z) {
        return this.sumOfXNumbers(numbers, Z)
    }

    static rollYDXKeepZHighest(X = 6, Y = 4, Z = 3) {
        let numbers = dice.rollYDX(Y, X);
        return this.combineZLargestNumbers(numbers, Z);
    }

    static rollYDXKeepZLowest(X = 6, Y = 4, Z = 3) {
        let numbers = dice.rollYDX(Y, X);
        return this.combineZSmallestNumbers(numbers, Z);
    }

}