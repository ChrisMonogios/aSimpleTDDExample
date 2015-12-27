function convertToMilitaryTime(time) {
        var splittedTime = time.split(":");
        
        if (splittedTime[2].indexOf("AM") === -1) {
            if (splittedTime[0] !== "12") {
                splittedTime[0] = parseInt(splittedTime[0]) + 12; 
            }
        }
        
        splittedTime[2] = splittedTime[2].replace(/\D/g, "");
        
        return splittedTime.join(":");

}