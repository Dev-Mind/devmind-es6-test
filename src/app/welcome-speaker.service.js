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
            return 'Hello ' + name + ', your badge number is ' + this.speakerService.getBadge(name);
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