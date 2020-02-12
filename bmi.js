let person1 = {

  name: "mark",
  weight: 50,
  height: 1.65
};

let person2 = {

  name: "john",
  weight: 60,
  height: 1.72
};

let bmi = () => {

  let markBmi = person1.weight / (person1.height * person1.height);
  let johnBmi = person2.weight / (person2.height * person2.height);

  let result = markBmi > johnBmi ? true : false;
  console.log(
    `Is ${person1.name}'s bmi is greater than ${person2.name}'s ? ${result}`
  );
};

bmi();
