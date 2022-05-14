
export interface IPomodoro
{
    _id: number;
    _dateStart: Date;
    _dateEnd: Date;
    _timeRemaining: Date;

    getTimeRemaining(startDate: Date, currentDate: Date): Date;

}