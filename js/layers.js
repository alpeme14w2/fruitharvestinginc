addLayer("F", {
    name: "fruits", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF6F6F",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Fruits", // Name of prestige currency
    baseResource: "Resettime", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "f: fruits", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Your first upgrade",
            description: "Double tickspeed",
            cost: new Decimal(3),
        },
        12: {
            title: "TIMEWRAP!",
            description: "Tickspeed boosts based on your amount of fruits",
            cost: new Decimal(7),
            effect() {
                return player[this.layer].points.add(1).pow(0.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "Particle Accelerator",
            description: "Immensively boost tickspeed",
            cost: new Decimal(25),
        },
        14: {
            title: "Particle Accelerator II",
            description: "Immensively boost tickspeed... again",
            cost: new Decimal(100),
        },
        15: {
            title: "Particle Accelerator III",
            description: "THIS IS REPETITIVE",
            cost: new Decimal(1000),
            effect() {
                return player[this.layer].points.add(1).times(888).pow(0.85)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x, also you get ^3 upon buying" }, // Add formatting to the effect
        },
    },
})
