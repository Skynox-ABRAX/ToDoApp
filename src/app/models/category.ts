export class category
{
    started: number;
    inProgres: number;
    closed: number;
    canceled: number;

    constructor(values: category)
    {
        Object.assign(this, values);
    }

}