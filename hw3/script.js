function age (AgeFather, AgeSon){

    const AgeBeetwen = AgeFather - (AgeSon * 2);

    return AgeBeetwen;
}

const AgeFather = 66;
const AgeSon = 22;

const result = age(AgeFather,AgeSon)
console.log(result);