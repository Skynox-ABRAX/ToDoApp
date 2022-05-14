import { dateInputsHaveChanged } from "@angular/material/datepicker/datepicker-input-base";
import { IPomodoro } from "../interface/IPomodoro";

export class pomodoro implements IPomodoro
{
    _id: number;
    _dateStart: Date;
    _dateEnd: Date;
    _timeRemaining: Date;

    constructor(id: number, dateStart: Date, dateEnd: Date, timeRemaining: Date)
    {
        this._id = id;
        this._dateStart = dateStart;
        this._dateEnd = dateEnd;
        this._timeRemaining = timeRemaining;


    }

    getTimeRemaining(startDate: Date, currentDate: Date): Date
    {
          
    /*var time = currentDate.getTime() - startDate.getTime();*/
    return null;
    
    }

    setTimeRemaining(){
        var date = new Date();
        date.setHours(0, 25, 0);   // Set hours, minutes and seconds
        return date;
    }

    
}