import React, { Component } from 'react';
import Resumeinfos from '../../components/resumeinfos/resumeinfos';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Resumeinfos />
      </div>
    );
  }
}

export default Home;

function Person(prenom, nom, age) {
  this.prenom = prenom;
  this.nom = prenom;
  this.age = age;
}

function Alien(prenom, nom, age, type) {
  Person.call(this, prenom, nom, age);
  this.type = type;
}

Person.prototype.login = function() {
  console.log('salut ' + this.prenom);
};
Alien.prototype.login = function() {
  console.log('salut ' + this.prenom + ' you are an Alien');
};

const person1 = new Person('David', 'Wiezcorek', '37');
const alien1 = new Alien('Davidou', 'Wiezcorek', '37', 'Cyborg');

person1.login();
alien1.login();

console.log(person1);
console.log(alien1);

const maPromesse = new Promise((resolve, reject) => {
  const datas = [1, 2, 3, 4, 5];
  if (datas.length > 4) {
    resolve('succès');
  } else {
    reject('echec');
  }
});

maPromesse
  .then(data => {
    console.log(`ce test est un ${data}`);
  })
  .catch(e => {
    console.log(`ce test est un ${e}`);
  });

function outerFunction() {
  const outer = `Outer variable!`;
  return function innerFunction() {
    console.log(`I see ${outer}`);
  };
}

outerFunction()();
