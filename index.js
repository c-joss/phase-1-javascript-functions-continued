function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun("bathe my dog");

function mondayWork(activity = "go to the office") {
    let mon = function () {
        return "This Monday, I will ";
}
return mon() + activity + ".";
}

function wrapAdjective(visual = "*") {
    let blah = function (verb = "special") {
        return `You are ${visual}${verb}${visual}!`;
    }
    return blah;
}

wrapAdjective()("a hard worker");