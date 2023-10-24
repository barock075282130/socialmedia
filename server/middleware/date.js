class DateTime {
    createTime(){
        const date = new Date();
        const min = date.getMinutes();
        const hour = date.getHours();
        const year = date.getFullYear();
        const mm = min < 10 ? "0" + min : min;
        const hh = hour < 10 ? "0" + hour : hour;
        const fullTime = [hh, mm, year].join(":");
        return fullTime;
    }
    createDay(){
        const date = new Date();
        const local = date.toLocaleDateString();
        return local
    }
}

module.exports = DateTime