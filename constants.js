const VALUE_UNIT_ARMY = {
    Pikemen: {
        baseStrenghtPoints: 5,
        extraStrengthPoints: 8,
        cost: 10,
        unitTransform: 'Archers',
        costTransform: 30
    },
    Archers: {
        baseStrenghtPoints: 10,
        extraStrengthPoints: 17,
        cost: 20,
        unitTransform: 'Knights',
        costTransform: 40
    },
    Knights: {
        baseStrenghtPoints: 20,
        extraStrengthPoints: 30,
        cost: 30,
        unitTransform: '',
        costTransform: 0
    },
}

const INITIAL_ARMY_CIVILIZATION = {
    Chinese: [
        { type: 'Pikemen', amount: 2, strength: VALUE_UNIT_ARMY['Pikemen'].baseStrenghtPoints, life: 10 },
        { type: 'Archers', amount: 25, strength: VALUE_UNIT_ARMY['Archers'].baseStrenghtPoints, life: 20 },
        { type: 'Knights', amount: 2, strength: VALUE_UNIT_ARMY['Knights'].baseStrenghtPoints, life: 30 },
    ],
    English: [
        { type: 'Pikemen', amount: 10, strength: VALUE_UNIT_ARMY['Pikemen'].baseStrenghtPoints, life: 10 },
        { type: 'Archers', amount: 10, strength: VALUE_UNIT_ARMY['Archers'].baseStrenghtPoints, life: 20 },
        { type: 'Knights', amount: 10, strength: VALUE_UNIT_ARMY['Knights'].baseStrenghtPoints, life: 30 },
    ],
    Byzantines: [
        { type: 'Pikemen', amount: 5, strength: VALUE_UNIT_ARMY['Pikemen'].baseStrenghtPoints, life: 10 },
        { type: 'Archers', amount: 8, strength: VALUE_UNIT_ARMY['Archers'].baseStrenghtPoints, life: 20 },
        { type: 'Knights', amount: 15, strength: VALUE_UNIT_ARMY['Knights'].baseStrenghtPoints, life: 30 },
    ],
}
