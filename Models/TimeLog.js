class TimeLog{

    constructor(){
        this.startTime= Date.now();
        this.endTime= null;
        this.time = 0;
        this.complete = false;
    }
    stopTime(){
        this.endTime= Date.now();
        this.time = this.endTime-this.startTime;
        this.complete= true;
    }
}
module.exports={TimeLog}