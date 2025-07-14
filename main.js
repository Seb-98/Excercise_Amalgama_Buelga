let chineseArmy = new Army('Chinese');
let englishArmy = new Army('English');
let byzantinesArmy = new Army('Byzantines');

//CHINESE ARMY SECTION
chineseArmy.trainArmy('Pikemen', 20, 10);
chineseArmy.trainArmy('Archers', 10, 20);
chineseArmy.trainArmy('Knights', 10, 20);
chineseArmy.trainArmy('Knights', 15, 20);    //fail train test

chineseArmy.transformArmy('Pikemen', 2);
chineseArmy.transformArmy('Knights', 10);    //fail transform test
//END CHINSESE ARMY SECTION

//ENGLISH ARMY SECTION
englishArmy.trainArmy('Knights', 15, 20);
englishArmy.trainArmy('Archers', 7, 20);
englishArmy.trainArmy('Pikemen', 15, 20);

englishArmy.transformArmy('Archers', 7, 20);
//END ENGLISH ARMY SECTION

//BIZANTYNES ARMY SECTION
byzantinesArmy.trainArmy('Archers', 15, 20);
byzantinesArmy.trainArmy('Archers', 10, 20);
byzantinesArmy.trainArmy('Knights', 10, 20);
//END BIZANTYNES ARMY SECTION


function getAttackPointsArmy(armyValidate) {
    let armyStrenghPoints = armyValidate.map(e => e.strengthPoints * e.amount);
    let sumArmyStrenghPoints = armyStrenghPoints.reduce(
        (acc, value) => acc + value
    );

    return sumArmyStrenghPoints;
}

function battleArmys(localArmy, visitantArmy) {
    let localArmyTotalPoints = getAttackPointsArmy(localArmy.army);
    let visitantArmyPoints = getAttackPointsArmy(visitantArmy.army);

    if (localArmyTotalPoints > visitantArmyPoints) {
        console.log(`${localArmy.civilization} army defeat ${visitantArmy.civilization} army`)
        localArmy.battleVictory(visitantArmy.civilization);
        visitantArmy.battleDefeat(localArmy.civilization);
    }
    else if (visitantArmyPoints > localArmyTotalPoints) {
        console.log(`${visitantArmy.civilization} army defeat ${localArmy.civilization} army`)
        visitantArmy.battleVictory(localArmy.civilization);
        localArmy.battleDefeat(visitantArmy.civilization);
    }
    else {
        visitantArmy.battleDraw(localArmy.civilization);
        localArmy.battleDraw(visitantArmy.civilization);
    }
}

battleArmys(chineseArmy, englishArmy);
battleArmys(byzantinesArmy, englishArmy);