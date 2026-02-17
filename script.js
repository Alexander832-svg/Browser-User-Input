console.log("Script Started");

function startExample() {
    let numBoxes = prompt("How many boxes?");
    let numBadges = prompt("How many badges?");
    let numHours = prompt("How many hours?");

    let isGold = numBoxes >= 100 || numBoxes >= 50 && numBadges >= 25;

    alert("Is gold status: " + isGold)
}