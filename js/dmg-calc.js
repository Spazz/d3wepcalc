var weapon = function () {
    return {
        name: this.name,
        baseMin: this.baseMin,
        baseMax: this.baseMax,
        APS: this.APS,
        bonusMin: this.bonusMin,
        bonusMax: this.bonusMax,
        ancientMin: this.ancientMin,
        ancientMax: this.ancientMax,
        maxDPSCalc: function () {
            return ((this.baseMin + this.bonusMin + this.baseMax + this.bonusMax) / 2) * this.APS;
        },
        avgBase: function () {
            return (this.baseMin + this.baseMax) / 2;
        },
        maxRegBonus: function () {
            return (this.bonusMin + this.bonusMax) / 2;
        },
        maxAncientBonus: function () {
            return (this.ancientMin + this.ancientMax) / 2;
        }
    };
};

dagger = weapon(code="1", name = "Dagger", baseMin = 107, baseMax = 321, APS = 1.5, bonusMin = 1199, bonusMax = 1490, ancientMin = 1365, ancientMax = 1700);
ceremonialKnives = weapon(code="2", name = 'Ceremonial Knives', baseMin = 117, baseMax = 469, APS = 1.4, bonusMin = 1199, bonusMax = 1490, ancientMin = 1560, ancientMax = 1940);
handCrossbow = weapon(code="3", name = 'Hand Crossbow', baseMin = 126, baseMax = 714, APS = 1.6, bonusMin = 1049, bonusMax = 1304, ancientMin = 1365, ancientMax = 1700);
bow = weapon(code="3", name = 'Bow', baseMin = 143, baseMax = 815, APS = 1.4, bonusMin = 1199, bonusMax = 1490, ancientMin = 1560, ancientMax = 1940);
fistWeapon = weapon(code="4", name = 'Fist Weapon', baseMin = 168, baseMax = 392, APS = 1.4, bonusMin = 1199, bonusMax = 1490, ancientMin = 1560, ancientMax = 1940);
sword1 = weapon(code="5", name = 'Sword (1H)', baseMin = 168, baseMax = 392, APS = 1.4, bonusMin = 1199, bonusMax = 1490, ancientMin = 1560, ancientMax = 1940);
flail1 = weapon(code="6", name = 'Flail (1H)', baseMin = 192, baseMax = 355, APS = 1.4, bonusMin = 1199, bonusMax = 1490, ancientMin = 1560, ancientMax = 1940);
wand = weapon(code="7", name = 'Wand', baseMin = 193, baseMax = 357, APS = 1.4, bonusMin = 1199, bonusMax = 1490, ancientMin = 1560, ancientMax = 1940);
mightyWeapon1 = weapon(code="8", name = 'Mighty Weapon (1H)', baseMin = 249, baseMax = 461, APS = 1.3, bonusMin = 1199, bonusMax = 1460, ancientMin = 1560, ancientMax = 1940);
axe1 = weapon(code="9", name = 'Axe (1H)', baseMin = 249, baseMax = 461, APS = 1.3, bonusMin = 1199, bonusMax = 1490, ancientMin = 1560, ancientMax = 1940);
mace1 = weapon(code="10", name = 'Mace (1H)', baseMin = 316, baseMax = 585, APS = 1.2, bonusMin = 1199, bonusMax = 1490, ancientMin = 1560, ancientMax = 1940);
spear = weapon(code="11", name = 'Spear', baseMin = 353, baseMax = 526, APS = 1.2, bonusMin = 1199, bonusMax = 1490, ancientMin = 1560, ancientMax = 1940);
crossbow = weapon(code="12", name = 'Crossbow', baseMin = 779, baseMax = 945, APS = 1.1, bonusMin = 1199, bonusMax = 1490, ancientMin = 1560, ancientMax = 1940);
daibo = weapon(code="13", name = 'Daibo', baseMin = 994, baseMax = 1845, APS = 1.15, bonusMin = 1439, bonusMax = 1788, ancientMin = 1870, ancientMax = 2325);
sword2 = weapon(code="14", name = 'Sword (2H)', baseMin = 1137, baseMax = 1702, APS = 1.15, bonusMin = 1439, bonusMax = 1788, ancientMin = 1870, ancientMax = 2325);
staves = weapon(code="15", name = 'Staves', baseMin = 1229, baseMax = 1839, APS = 1.1, bonusMin = 1439, bonusMax = 1788, ancientMin = 1870, ancientMax = 2325);
flail2 = weapon(code="16", name = 'Flail (2H)', baseMin = 1351, baseMax = 1486, APS = 1.15, bonusMin = 1439, bonusMax = 1788, ancientMin = 1870, ancientMax = 2325);
axe2 = weapon(code="17", name = 'Axe (2H)', baseMin = 1384, baseMax = 1685, APS = 1.1, bonusMin = 1439, bonusMax = 1788, ancientMin = 1870, ancientMax = 2325);
mightyWeapon2 = weapon(code="18", name = 'Mighty Weapon (2H)', baseMin = 1462, baseMax = 1609, APS = 1.1, bonusMin = 1439, bonusMax = 1788, ancientMin = 1870, ancientMax = 2325);
polearm = weapon(code="19", name = 'Polearm', baseMin = 1497, baseMax = 1823, APS = 1.05, bonusMin = 1439, bonusMax = 1788, ancientMin = 1870, ancientMax = 2325);
mace2 = weapon(code="20", name = 'Mace (2H)', baseMin = 1737, baseMax = 1912, APS = 1, bonusMin = 1439, bonusMax = 1788, ancientMin = 1870, ancientMax = 2325);


currentDPS = function (weapon, minDmg, maxDmg, dmgPer, IAS) {
    
    var weapon = eval(weapon);
    avgBase = weapon.avgBase();

    return ((weapon.APS * (avgBase + ((minDmg + maxDmg) / 2))) * (1 + dmgPer / 100) * (1 + IAS / 100));
};

dpsMaxDamage = function (weapon, minDmg, maxDmg, IAS){
    
    var weapon = eval(weapon);

    return ((weapon.APS * (avgBase + ((minDmg + maxDmg) / 2))) * (1 + 10 / 100) * (1 + IAS / 100));
};

dpsMaxIAS = function (weapon, minDmg, maxDmg, dmgPer) {

    var weapon = eval(weapon);

    return ((weapon.APS * (avgBase + ((minDmg + maxDmg) / 2))) * (1 + dmgPer / 100) * (1 + 7 / 100));

};

maxDamage = function (weapon, ancient, dmgPer, IAS) {

    var weapon = eval(weapon);

    var avgBase = weapon.avgBase();
    var maxAnc = weapon.maxAncientBonus();
    var maxReg = weapon.maxRegBonus();

    if (ancient) {
        result = (maxAnc + avgBase)*weapon.APS*(1+dmgPer/100)*(1+IAS/100);
    } else {
        result = (maxReg + avgBase)*weapon.APS*(1+dmgPer/100)*(1+IAS/100);
    };
    return result;
};

round = function(value) {
	return Math.ceil(value * 10) / 10;
};

resetCSS = function() {
	$('#dps10per').css("background-color", "#eee");
	$('#dps7ias').css("background-color", "#eee");
	$('#maxdam').css("background-color", "#eee");
	$('#currentdps').css("background-color", "#eee");
};

runCalcs = function() {
	currDPS = currentDPS(wepType, minDmg, maxDmg, dmgPer, ias);
	dps10dmg = dpsMaxDamage(wepType, minDmg, maxDmg, ias);
	dps7ias = dpsMaxIAS(wepType, minDmg, maxDmg, dmgPer);
	maxdamage = maxDamage(wepType, ancient, dmgPer, ias);
};