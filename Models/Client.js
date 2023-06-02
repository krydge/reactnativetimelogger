import { ContactInfo } from "./ContactInfo";
import { TimeLog } from "./TimeLog";

class Client {
    constructor(clientName, name, phone, email, language, startTime, endTime, projectInfo, billingTimeFrame = "BiWeekly", id=0, rate = 100,signedContract=false) {
        this.clientName = clientName;
        this.contactInfo = new ContactInfo(name, phone, email, language, startTime, endTime);
        this.rate = rate;
        this.totaltime = 0;
        this.timeLogs = [];
        this.billingTimeFrame = billingTimeFrame;
        this.signedContract = signedContract;
        this.project = projectInfo;
        this.id = id;
    }
    addContract() {

    }
}

module.exports = { Client }