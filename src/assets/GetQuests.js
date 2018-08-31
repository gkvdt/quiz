var quest = require('./quests')
export function getQuest(){
    var random = Math.floor(Math.random() * quest.length);;
    
    return quest[random];
}