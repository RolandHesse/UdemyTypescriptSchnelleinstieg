interface AppointmentInterface {
    startTime: Date;
    endTime: Date;
    description: string;

    printEntry(): void;
}

class Appointment implements AppointmentInterface {
    startTime: Date;
    endTime: Date;
    description: string;

    constructor(
        startTimeInput: Date,
        endTimeInput: Date,
        descriptionInput: string,
    ) {
        this.startTime = startTimeInput;
        this.endTime = endTimeInput;
        this.description = descriptionInput;
    }

    printEntry() {
        console.log(this.startTime, this.endTime, this.description);
    }
}
const date = new Date();
const a1 = new Appointment(date, date, 'Awesome Meeting!');
a1.printEntry();

console.log(date);
console.log(date.getFullYear());
