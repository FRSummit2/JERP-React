let monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default class GlobalDateFormat {
    
    dateFormatT1() {
        var t = new Date();
        return t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDate() 
    }

    dateFormatT2(d) {
        var t = new Date(d);
        return monthShortNames[t.getMonth()] + ' ' + t.getFullYear().toString().slice(-2);
    }

    dateFormatT3(d) {
        var t = new Date(d);
        return monthShortNames[t.getMonth()] + ' ' + t.getFullYear().toString();
    }

    dateFormatT4(d) {
        var t = new Date(d);
        return t.getDate() + ' ' + monthShortNames[t.getMonth()] + ' ' + t.getFullYear().toString();
    }
    dateFormatWithTime(d) {
        var t = new Date(d);
        var hours = t.getHours();
        var minutes = t.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return t.getDate() + ' ' + monthShortNames[t.getMonth()] + ' ' + t.getFullYear().toString()+' ' + strTime;
    }


    dateFormatT5(d) {
        var t = new Date(d);
        return t.getDate() + '-' + monthShortNames[t.getMonth()] + '-' + t.getFullYear().toString();
    }

    dateFormatT6(d) {
        var t = new Date(d);
        return ('0' + t.getDate()).slice(-2) + '/' + ('0' + t.getMonth()).slice(-2) + '/' + t.getFullYear().toString();
    }

    dateFormatT7() {
        var t = new Date();
        return t.getFullYear().toString()  + '-' + ('0' + t.getMonth()).slice(-2) + '-' + ('0' + t.getDate()).slice(-2) 
    }  
    
}