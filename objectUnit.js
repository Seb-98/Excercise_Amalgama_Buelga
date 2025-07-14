class Unit {
    constructor(type, amount, strengthPoints, lifePoints) {
        this.type = type;
        this.amount = amount;
        this.strengthPoints = strengthPoints;
        this.lifePoints = lifePoints;
    }

    transformUnit(type) {
        this.type = VALUE_UNIT_ARMY[type].unitTransform;
        this.strengthPoints = VALUE_UNIT_ARMY[this.type].baseStrenghtPoints;
    }
}