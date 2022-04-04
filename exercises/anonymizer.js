"use strict";
let Account = {
  init(userEmail, userPassword, userFirstName, userLastName) {
    this.displayName = this.random16();
    this.reanonymize = function (pw) {
      if (pw === userPassword) {
        this.displayName = this.random16()
        return true;
      } else {
        return 'Invalid Password';
      }
    };
    this.firstName = function (pw) {
      if (pw === userPassword) {
        return userFirstName;
      } else {
        return 'Invalid Password'
      }
    };
    this.lastName = function (pw) {
      if (pw === userPassword) {
        return userLastName;
      } else {
        return 'Invalid Password'
      }
    },
      this.resetPassword = function (pass, newPass) {
        if (pass === userPassword) {
          userPassword = newPass;
          return true;
        } else {
          return 'Invalid Password'
        }
      },
      this.email = function (pass) {
        if (pass === userPassword) {
          return userEmail;
        } else {
          return 'Invalid Password';
        }
      }
    return this;
  },
  random16() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let index = 0; index < 16; index += 1) {
      result += characters[Math.floor((Math.random() * characters.length))]
    }
    return result;
  },
}


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('123456'));                  // logs 'Invalid Password'

console.log(bazQux.email('123456'));

