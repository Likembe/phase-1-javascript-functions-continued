
function saturdayFun(name, activity = "roller-skate!"){
    console.log(`${name} This saturday, I want to ${activity}`);
}
saturdayFun("");
saturdayFun("", "bathe my dog!");

function mondayWork(name, activity = "go to the office."){
    console.log(`${name} "This Monday, I will ${activity}`);

}
mondayWork("");
mondayWork("", 'work from home.')

function wrapAdjective(symbol){
    return function(adjective){
        return `You are ${symbol} ${adjective} ${symbol}!`;
    };
}
    let result = wrapAdjective("*");
    let emphatic = result("a hard worker");
    console.log(emphatic);

    let result2 = wrapAdjective("||");
    let emphatic2 = result2("a dedicated programmer");
    console.log(emphatic2);

