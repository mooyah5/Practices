const person = {
    firstName: 'Lee',
    lastName: 'Donggook',
    wiseSaying: 'what the hell?',
    say: function () {
        return this.firstName + this.lastName + '? ' + this.wiseSaying
    }
}

console.log(person.say())  // LeeDonggook? what the hell?