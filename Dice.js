class dice {

    static rollDX(X) {
        return Math.floor((Math.random() * X) + 1);
    }

    static rollYDX(Y, X) {
        let numbers = [];
        for (let i = 0; i < Y; i++) {
            numbers.push(this.rollDX(X));
        }
        return numbers;
    }

}