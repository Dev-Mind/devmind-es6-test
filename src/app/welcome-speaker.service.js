'use strict';

class WelcomeSpeaker {

    constructor(speakerService) {
        this.speakerService = speakerService;
    }

    sayHello(name) {
        if (!name) {
            return 'Who are you ?';
        }

        try {
            let badge = this.speakerService.getBadge(name);
            return `Hello ${name}, your badge number is ${badge}`;
        }
        catch (e) {
            return 'Error occurred';
        }
    }

    sayGoodbye(name) {
        if (!name) {
            return 'Goodbye !'
        }
        return 'Goodbye ' + name;
    }

}