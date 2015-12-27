function convertToMilitaryTime(time) {
        var splittedTime = time.split(":");
        
        splittedTime[2] = splittedTime[2].replace(/\D/g, "")
        splittedTime[0] = parseInt(splittedTime[0]) + 12;
        
        return splittedTime.join(":");

}