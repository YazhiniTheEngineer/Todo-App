export class Todo{
    public id : number;
    public name : string;
    public description : string;
    public date : Date;
    public levelsOfTodo : string;
    public isCompleted : boolean; 

    constructor(name: string, taskDesc: string, targetDate: Date, levelOfTodo : string) {
       this.id = 0
       this.name = name;
       this.description = taskDesc;
       this.date = targetDate;
       this.levelsOfTodo = levelOfTodo;
       this.isCompleted = false;
    }

}