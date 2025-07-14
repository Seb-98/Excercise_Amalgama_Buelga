class Army {
    constructor(civilization) {
        this.civilization = civilization;
        this.army = INITIAL_ARMY_CIVILIZATION[civilization].map(item => new Unit(item.type, item.amount, item.strength, item.life));
        this.coins = 1000;
        this.historyBattles = [];
    }

    trainArmy(type, amount, lifePoints) {
        let pointsAttack = VALUE_UNIT_ARMY[type].extraStrengthPoints

        let cost = (VALUE_UNIT_ARMY[type].cost * amount);

        if (this.validateCost(cost)) {
            this.army.push(new Unit(type, amount, pointsAttack, lifePoints));
            this.coins = this.coins - cost;
        } else {
            console.log(`The economy of ${this.civilization} army didn't allowed them to train ${amount} ${type} more`)
        }
    }

    transformArmy(type, amount) {
        if (type != 'Knights') {
            let findArmy = this.army.find(e => e.type === type && e.amount === amount);
            let costTransform = VALUE_UNIT_ARMY[type].costTransform * findArmy.amount;

            if (this.validateCost(costTransform)) {
                findArmy.transformUnit(type);
                this.coins = this.coins - costTransform;
            }
            else {
                console.log(`The economy of ${this.civilization} army didn't allowed them to transform ${amount} ${type} more`)
            }
        } else {
            console.log('In this era, Archers cannot transform into Knights')
        }
    }

    validateCost(cost) {
        if (cost > this.coins) {
            return false
        }
        return true;
    }

    battleVictory(armyConfront) {
        this.coins = this.coins + 100;
        this.historyBattles.push(`Victory againts ${armyConfront}`)
    }

    battleDefeat(armyConfront) {
        this.army.sort((a, b) => b.strengthPoints - a.strengthPoints)
        this.army.splice(0, 2)
        this.historyBattles.push(`Defeat againts ${armyConfront}`)
    }

    battleDraw(armyConfront) {
        this.army.sort((a, b) => b.strengthPoints - a.strengthPoints)
        this.army.splice(0, 1)    //in case of draw lost the most powerful unit
        this.historyBattles.push(`Draw againts ${armyConfront}`)
    }
}