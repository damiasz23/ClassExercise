class Town{
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }

}
class Park extends Town{
    constructor(name, buildYear, treesAmount, parkLength, parkWidth){
        super(name, buildYear);
        this.treesAmount = treesAmount;
        this.parkLength = parkLength;
        this.parkWidth = parkWidth;

    }

    calcArea(){
       return this.parkLength * this.parkWidth;
    }
     calcDensity(area){
        const denisty =  this.treesAmount / area;
         console.log(`${this.name} has a tree denisty of ${denisty} trees per square km.`);
    }
}

class Street extends Town{
    constructor(name, buildYear, streetLength, size = 3){
        super(name, buildYear);
        this.streetLength = streetLength;
        this.size = size;
    }

    streetClassification() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street`);

    }

}


const allParks = [new Park('Lake', 1555, 3856, 1.230, 2.120),
                 new Park('Country', 2000, 20, 0.130, 0.140),
                 new Park('Gapa', 2016, 23, 0.30, 0.30)];

const allStreets = [new Street('1st', 1999, 4.500, 4),
                   new Street('Main', 2015, 9.000, 5),
                   new Street('Long', 1989, 0.890),
                   new Street('Hospital', 2018, 0.300, 1)];

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];
}

function reportParks(p){
    console.log('-----------PARKS REPORT-------------');

    p.forEach(el => el.calcDensity(el.calcArea()));

    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avrAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average age of ${avrAge} years.`);

    const trees = p.map(el => el.treesAmount).findIndex(el => el >= 1000);
    console.log(`Park ${p[trees].name} has more then 1000 trees. Exactly ${p[trees].treesAmount} trees.`);



}

function reportStreets(s){
    console.log('-----------STREETS REPORT-------------');

    const [totalLength, avrLength] = calc(s.map(el => el.streetLength));
    console.log(`Our ${s.length} streets have total length of ${totalLength} km, with an averae of ${avrLength} km.`);

    s.forEach(el => el.streetClassification());



}

reportParks(allParks);
reportStreets(allStreets);




