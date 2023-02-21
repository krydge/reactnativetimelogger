import { ContactInfo } from "./ContactInfo";
import { TimeLog } from "./TimeLog";

class Client {
    constructor(clientName, name, phone, email, language, startTime, endTime, billingTimeFrame = "BiWeekly") {
        this.clientName = clientName;
        this.contactInfo = new ContactInfo(name, phone, email, language, startTime, endTime);
        this.rate = 80;
        this.totaltime = 0;
        this.timeLogs = [];
        this.billingTimeFrame = billingTimeFrame;
        this.signedContract="not Signed yet"
    }
    addContract(){

    }
}

module.exports={Client}