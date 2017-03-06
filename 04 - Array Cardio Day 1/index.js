class Person {
    constructor(first, last, year, passed) {
        this.first = first;
        this.last = last;
        this.year = year;
        this.passed = passed;
    }
    getYearsLived() {
        return this.passed - this.year;
    }
    toString() {
        return `${this.first} ${this.last} ${this.year} ${this.passed}`;
    }
}
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
window.onload = () => {
    resetInventors();
    resetPeople();
    resetTransportations();
};
// Some data we can work with
var inventors = [];
var people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
inventors.push(new Person('Albert', 'Einstein', 1879, 1955));
inventors.push(new Person('Isaac', 'Newton', 1643, 1727));
inventors.push(new Person('Galileo', 'Galilei', 1564, 1642));
inventors.push(new Person('Marie', 'Curie', 1867, 1934));
inventors.push(new Person('Johannes', 'Kepler', 1571, 1630));
inventors.push(new Person('Nicolaus', 'Copernicus', 1473, 1543));
inventors.push(new Person('Max', 'Planck', 1858, 1947));
inventors.push(new Person('Katherine', 'Blodgett', 1898, 1979));
inventors.push(new Person('Ada', 'Lovelace', 1815, 1852));
inventors.push(new Person('Sarah E.', 'Goode', 1855, 1905));
inventors.push(new Person('Lise', 'Meitner', 1878, 1968));
inventors.push(new Person('Hanna', 'Hammarström', 1829, 1909));
let clearContainer = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};
let appendLiToUl = (text, ul) => {
    let li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
};
let resetInventors = () => {
    var inventorsContainer = document.getElementById("inventors");
    clearContainer(inventorsContainer);
    var ul = inventorsContainer.appendChild(document.createElement("ul"));
    inventors.forEach((inventor) => {
        appendLiToUl(inventor.toString(), ul);
    });
};
let resetPeople = () => {
    var peopleContainer = document.getElementById("people");
    clearContainer(peopleContainer);
    var ul = peopleContainer.appendChild(document.createElement("ul"));
    people.forEach((person) => {
        appendLiToUl(person, ul);
    });
};
let resetTransportations = () => {
    var transportationsContainer = document.getElementById("transportations");
    clearContainer(transportationsContainer);
    var ul = transportationsContainer.appendChild(document.createElement("ul"));
    data.forEach((transportation) => {
        appendLiToUl(transportation, ul);
    });
};
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let answerChallenge1 = () => {
    var inventors1500 = inventors.filter((inventor) => {
        return inventor.year >= 1500 && inventor.year < 1600;
    });
    var inventorsContainer = document.getElementById("inventors");
    clearContainer(inventorsContainer);
    var ul = inventorsContainer.appendChild(document.createElement("ul"));
    inventors1500.map((inventor) => {
        return `${inventor.first} ${inventor.last} ${inventor.year}`;
    }).forEach((inventor) => {
        appendLiToUl(inventor, ul);
    });
    console.log("1. Filter the list of inventors for those who were born in the 1500's");
    console.log(inventors1500.map((inventor) => {
        return `${inventor.first} ${inventor.last} ${inventor.year}`;
    }));
};
// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
let answerChallenge2 = () => {
    var inventorsFirstLast = inventors.map((inventor) => {
        return {
            first: inventor.first,
            last: inventor.last
        };
    });
    var inventorsContainer = document.getElementById("inventors");
    clearContainer(inventorsContainer);
    var ul = inventorsContainer.appendChild(document.createElement("ul"));
    inventorsFirstLast.map((inventor) => {
        return `${inventor.first} ${inventor.last}`;
    }).forEach((inventor) => {
        appendLiToUl(inventor, ul);
    });
    console.log("2. Give us an array of the inventors' first and last names");
    console.log(inventorsFirstLast.map((inventor) => {
        return `${inventor.first} ${inventor.last}`;
    }));
};
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
let answerChallenge3 = () => {
    // creates a copy and sorts
    var inventorsOldToYoung = inventors.slice().sort((inventorA, inventorB) => {
        return inventorA.year > inventorB.year ? 1 : -1;
    });
    var inventorsContainer = document.getElementById("inventors");
    clearContainer(inventorsContainer);
    var ul = inventorsContainer.appendChild(document.createElement("ul"));
    inventorsOldToYoung.map((inventor) => {
        return `${inventor.first} ${inventor.last} ${inventor.year}`;
    }).forEach((inventor) => {
        appendLiToUl(inventor, ul);
    });
    console.log("3. Sort the inventors by birthdate, oldest to youngest");
    console.log(inventorsOldToYoung.map((inventor) => {
        return `${inventor.first} ${inventor.last} ${inventor.year}`;
    }));
};
// Array.prototype.reduce()
// 4. How many years did all the inventors live?
let answerChallenge4 = () => {
    var inventorsLife = inventors.map((inventor) => {
        return inventor.getYearsLived();
    }).reduce((previousPersonLifespan, currentPersonLifespan) => {
        return previousPersonLifespan + currentPersonLifespan;
    });
    var inventorsContainer = document.getElementById("inventors");
    clearContainer(inventorsContainer);
    inventorsContainer.textContent = inventorsLife.toString();
    console.log("4. How many years did all the inventors live?");
    console.log(inventorsLife);
};
// 5. Sort the inventors by years lived
let answerChallenge5 = () => {
    var inventorsByYearsLived = inventors.slice().sort((inventorA, inventorB) => {
        return inventorA.getYearsLived() < inventorB.getYearsLived() ? 1 : -1;
    });
    var inventorsContainer = document.getElementById("inventors");
    clearContainer(inventorsContainer);
    var ul = inventorsContainer.appendChild(document.createElement("ul"));
    inventorsByYearsLived.map((inventor) => {
        return `${inventor.first} ${inventor.last} ${inventor.getYearsLived()}`;
    }).forEach((inventor) => {
        appendLiToUl(inventor, ul);
    });
    console.log("5. Sort the inventors by years lived");
    console.log(inventorsByYearsLived.map((inventor) => {
        return `${inventor.first} ${inventor.last} ${inventor.getYearsLived()}`;
    }));
};
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
var links = Array.from(document.querySelectorAll(".mw-category li a"));
var deStreetNames = links
    .map(element => element.textContent)
    .filter(element => element.includes("de"));
console.log(deStreetNames);
// 7. sort Exercise
// Sort the people alphabetically by last name
let answerChallenge7 = () => {
    var peopleByName = people.slice().sort((lastFirstA, lastFirstB) => {
        var lastNameA = lastFirstA.split(",")[0];
        var lastNameB = lastFirstB.split(",")[0];
        var firstNameA = lastFirstA.split(",")[1];
        var firstNameB = lastFirstB.split(",")[1];
        if (lastNameA !== lastNameB) {
            return lastNameA.localeCompare(lastNameB);
        }
        else {
            return firstNameA.localeCompare(firstNameB);
        }
    });
    var peopleContainer = document.getElementById("people");
    clearContainer(peopleContainer);
    var ul = peopleContainer.appendChild(document.createElement("ul"));
    peopleByName.forEach((person) => {
        appendLiToUl(person, ul);
    });
    console.log("7. Sort the people alphabetically by last name");
    console.log(peopleByName);
};
// 8. Reduce Exercise
// Sum up the instances of each of these
let answerChallenge8 = () => {
    var dataInstances = data.reduce((previous, current) => {
        if (previous[current]) {
            previous[current]++;
        }
        else {
            previous[current] = 1;
        }
        return previous;
    }, {});
    var transportationsContainer = document.getElementById("transportations");
    clearContainer(transportationsContainer);
    var ul = transportationsContainer.appendChild(document.createElement("ul"));
    for (var property in dataInstances) {
        if (dataInstances.hasOwnProperty(property)) {
            appendLiToUl(`${property}: ${dataInstances[property]}`, ul);
        }
    }
    console.log("7. Sum up the instances of each of these");
    console.log(dataInstances);
};
