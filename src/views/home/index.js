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

var foo = 10 + '20';
console.log(foo);

var add = function(x) {
  return function(y) {
    return console.log(x + y);
  };
};

add(2)(5);

(function() {
  console.log('toto');
})();

var nombres = [0, 8, -6, 5];
var min = Math.min.apply(Math, nombres);
console.log(min);

var p = new Promise(function myPromiseLogic(success, error, progress) {
  success(1);
});
p
  .then(function(value) {
    return value + 1;
  })
  .then(function(value) {
    console.log(value);
  });

var testtt = [1, 2, 3, 4, 5];
var ttt = testtt
  .filter(function(n) {
    return n >= 2;
  })
  .map(function(m) {
    return m * 2;
  });
console.log(ttt);

/*Array.prototype.duplicator = function() {
  return this.concat(this);
};

console.log([1, 2, 3, 4, 5].duplicator());
*/

function makeAdd(x) {
  return function(y) {
    return x + y;
  };
}

var makeAdd1 = makeAdd(1);

console.log(makeAdd1(2));

function Player(name, number, position) {
  this.name = name;
  this.number = number;
  this.position = position;
}

function Goalie(name, number, position, goalie) {
  Player.call(this, name, number, position);
  this.goalie = true;
}

var goalie1 = new Goalie('Joseph', 34, 'Goalie', true);

Goalie.prototype.hello = function() {
  console.log('Hello ' + this.name + ' i am a goalie ? ' + this.goalie);
};

goalie1.hello();

function myClosure(x) {
  return function(y) {
    return console.log('toto = ' + (x + y));
  };
}

var tottoto2 = myClosure(2);

tottoto2(5);

var mypro = new Promise(function(success, error) {
  var titi = 2;
  if (titi === 2) {
    success(titi);
  } else {
    error('error');
  }
});

mypro
  .then(function(data) {
    console.log('promise ' + data);
  })
  .catch(function(e) {
    console.log('promise ' + e);
  });

outerFunction()();
