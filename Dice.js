class dice {
    static rollD4() {
        return Math.floor((Math.random() * 4) + 1);
    }

    static rollXD4(X) {
        let numbers = [];
        for (let i = 0; i < 4; i++) {
            numbers.push(this.rollD4());
        }
        return numbers;
    }

    static rollD6() {
        return Math.floor((Math.random() * 6) + 1);
    }

    static rollXD6(X) {
        let numbers = [];
        for (let i = 0; i < 4; i++) {
            numbers.push(this.rollD6());
        }
        return numbers;
    }

    static rollD8() {
        return Math.floor((Math.random() * 8) + 1);
    }

    static rollXD8(X) {
        let numbers = [];
        for (let i = 0; i < 4; i++) {
            numbers.push(this.rollD8());
        }
        return numbers;
    }

    static rollD10() {
        return Math.floor((Math.random() * 10) + 1);
    }

    static rollXD10(X) {
        let numbers = [];
        for (let i = 0; i < 4; i++) {
            numbers.push(this.rollD10());
        }
        return numbers;
    }

    static rollD12() {
        return Math.floor((Math.random() * 12) + 1);
    }

    static rollXD12(X) {
        let numbers = [];
        for (let i = 0; i < 4; i++) {
            numbers.push(this.rollD12());
        }
        return numbers;
    }

    static rollD20() {
        return Math.floor((Math.random() * 20) + 1);
    }

    static rollXD20(X) {
        let numbers = [];
        for (let i = 0; i < 4; i++) {
            numbers.push(this.rollD20());
        }
        return numbers;
    }

    static rollD100() {
        return Math.floor((Math.random() * 100));
    }

    static rollXD100(X) {
        let numbers = [];
        for (let i = 0; i < 4; i++) {
            numbers.push(this.rollD100());
        }
        return numbers;
    }

}