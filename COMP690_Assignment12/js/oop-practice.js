//STEP 1
/*function Cat() {

}
const Dog = function () {

};*/

//STEP 2
/*function Cat() {

}
const Dog = function () {

};
const myCat = new Cat();
const myDog = new Dog();*/

//STEP 3
/*const Animal = function () {
    alert('The Animal has been created');
};
const dog = new Animal();*/

//STEP 4
/*const Animal = function (noise) {
    alert(noise);
};
const dog = new Animal('The Animal has been created');*/

//STEP 5
/*const Animal = function (init_type, init_breed, init_color, init_height, init_length) {
    this.type = init_type;
    this.breed = init_breed;
    this.color = init_color;
    this.height = init_height;
    this.length = init_length;
};
const dog = new Animal('Dog', 'Aussie', 'Grey', 32, 48);*/

//STEP 6
/*
const Animal = function (init_type, init_breed, init_color, init_height, init_length) {
    this.type = init_type;
    this.breed = init_breed;
    this.color = init_color;
    this.height = init_height;
    this.length = init_length;
};
const dog = new Animal('Dog', 'Aussie', 'Grey', 32, 48);

for (let i = 0; i < dog.length; i += 1) {
    console.log(i + ' : ' + dog[i]);
}*/

//STEP 7
/*const Animal = function (init_type, init_breed, init_color, init_height, init_length) {
    this.type = init_type;
    this.breed = init_breed;
    this.color = init_color;
    this.height = init_height;
    this.length = init_length;
};
Animal.prototype.speak = function () {
    if (this.type.toLowerCase() === 'dog') {
        return 'The ' + this.color.toLowerCase() + ' dog is barking!';
    } else {
        return 'The ' + this.color.toLowerCase() + ' cat is meowing!';
    }
};
const dog = new Animal('Dog', 'Aussie', 'Grey', 32, 48);
const cat = new Animal('Cat', 'Aussie', 'Grey', 32, 48);
console.log(dog.speak());
console.log(cat.speak());*/

//STEP 8
/*const Animal = function (init_type, init_breed, init_color, init_height, init_length) {
    let type = init_type;
    let breed = init_breed;
    let color = init_color;
    let height = init_height;
    let length = init_length;
    let checkType = function () {
        if (type.toLowerCase() === 'dog') {
            return 'dog';
        } else {
            return 'cat';
        }
    };
    this.speak = function () {
        return checkType();
    };
};
const pet = new Animal('Dog', 'Aussie', 'Grey', 36, 58);
console.log('The ' + pet.speak() + ' has made a noise!');*/

//STEP 9
String.prototype.numWords = function (word) {
    let haystack = [], total = 0, needle;
    haystack = this.split(' ');
    for (needle = 0; needle < haystack.length; needle++) {
        if (haystack[needle].toLowerCase() === word.toLowerCase()) {
            total += 1;
        }
    }
    return total;
};
let message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
console.log(message.numWords('lorem'));