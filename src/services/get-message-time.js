export const getMessageTime = (time) => {

    let now = new Date();
    let diff = now - time;
    let diffHours = diff/1000/60/60;
    let hour = time.getHours();
    let minute = time.getMinutes()
    
    if( diffHours < 24 && now.getDay() === time.getDay()){
        return `сегодня ${hour}:${minute}`;
    } else if (diffHours< 48){
        return `вчера ${hour}:${minute}`;
    } else {
        let days = Math.floor(diffHours/24);
        return `${days} дня(ей) ${hour}:${minute}`
    }
}