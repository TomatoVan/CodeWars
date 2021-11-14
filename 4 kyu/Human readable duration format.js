function formatDuration(seconds) {
    if (seconds === 0) {
        return 'now';
    }
    let numYears = Math.floor(seconds / (86400 * 365));
    let numDays = Math.floor(seconds % (86400 * 365) / 86400);
    let numHours = Math.floor(((seconds % (86400 * 365)) % 86400) / 3600);
    let numMinutes = Math.floor((((seconds % (86400 * 365)) % 86400) % 3600) / 60);
    let numSeconds = seconds % 60;

    let secondsFun = function () {
        return (numSeconds ? (((seconds > 60) ? ' and ' + numSeconds + " second" : +numSeconds + " second") + (numSeconds === 1 ? '' : 's')) : '');
    };

    let minutesFun = function () {
        if (numSeconds === 0 && numDays !== 0) {
            return 'and ' + (numMinutes ? numMinutes + " minute" + (numMinutes === 1 ? '' : 's') : '');
        }
        return (numMinutes ? numMinutes + " minute" + (numMinutes === 1 ? '' : 's') : '');
    };

    let hoursFun = function () {
        if (minutesFun().charAt(0) === 'a') {
            return (numHours ? numHours + " hour" + (numHours === 1 ? ' ' : 's ') : '');
        }
        if (numSeconds === 0 && numMinutes === 0) {
            return (numHours ? numHours + " hour" + (numHours === 1 ? '' : 's') : '');
        }

        return (numHours ? numHours + " hour" + (numHours === 1 ? ', ' : 's, ') : '');
    };

    let daysFun = function () {
        return (numDays ? numDays + " day" + (numDays === 1 ? ', ' : 's, ') : '');
    };

    let yearsFun = function () {
        return (numYears ? numYears + " year" + (numYears === 1 ? ', ' : 's, ') : '');
    };

    return yearsFun() + daysFun() + hoursFun() + minutesFun() + secondsFun();
}
