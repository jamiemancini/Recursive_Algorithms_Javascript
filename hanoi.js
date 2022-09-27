//Hanoi Recursive Function written in Javascript

function hanoiTower (n, startingRod, endingRod, helpingRod) {
    if (n===1) { console.log("Move " + n + " from tower " + startingRod + " to tower " + endingRod);

    }
    else {hanoiTower(n-1, startingRod, helpingRod, endingRod);
        console.log("Move " + n + " from tower " + startingRod + " to tower " + helpingRod);
        hanoiTower(n-1, helpingRod, endingRod, startingRod);
    }
}

hanoiTower(3, "A", "B", "C");