var constants = {
    AM: "AM",
    COLON: ":",
    EMPTY: "",
    TWELVE_HOURS: "12",
    TWELVE_HOURS_AS_INT: 12,
    ZERO_HOURS: "00",
    HOURS_INDEX: 0,
    SECONDS_INDEX: 2,
}

function convertToMilitaryTime(time) {
        var splittedTime = time.split(constants.COLON);
        
        convertToMilitaryTimeWhenAMOrPM(splittedTime);
        splittedTime[constants.SECONDS_INDEX] = splittedTime[constants.SECONDS_INDEX].replace(/\D/g, constants.EMPTY);

        return splittedTime.join(constants.COLON);
}

function convertToMilitaryTimeWhenAMOrPM(splittedTime) {
    if (splittedTime[constants.SECONDS_INDEX].indexOf(constants.AM) > -1) {
        convertToMilitaryTimeWhenAM(splittedTime);
    } else {
        convertToMilitaryTimeWhenPM(splittedTime);
    }
}

function convertToMilitaryTimeWhenAM(splittedTime) {
    if (splittedTime[constants.HOURS_INDEX] === constants.TWELVE_HOURS) {
        splittedTime[constants.HOURS_INDEX] = constants.ZERO_HOURS;
    }
}

function convertToMilitaryTimeWhenPM(splittedTime) {
    var hours = splittedTime[constants.HOURS_INDEX];
    
    if (hours !== constants.TWELVE_HOURS) {
        splittedTime[constants.HOURS_INDEX] = parseInt(hours) + constants.TWELVE_HOURS_AS_INT; 
    }
}

