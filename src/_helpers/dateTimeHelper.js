import moment from 'moment';

const compareWithCurrentTime = (strDate) => {
    const inputDate = moment.utc(strDate);
    const currentDate = moment.utc();
    if(inputDate >= currentDate) return 0;
    const dateDifference = Math.abs(currentDate - inputDate);
    return Math.round((dateDifference / 60000));
}

export const getPostedTimeAgo = (strDate) => {
    const minutes = compareWithCurrentTime(strDate);
    if(minutes === 0){
        return "now";
    }else if(minutes < 60){
        return `${minutes}mins ago`;
    }else if(minutes >= 60 && minutes < 1440){
        const hours = Math.round(minutes/60);
        return `${hours}hours ago`;
    }else if(minutes >= 1440 && minutes < 5256e2){
        const days = Math.round(minutes/1440);
        return `${days}days ago`;
    }else{
        const years = Math.round(minutes/5256e2);
        return `${years}years ago`
    }
}