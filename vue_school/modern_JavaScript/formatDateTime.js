function getDate( datum ) {

    const date = datum || new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();


    function getDatePartPrefix(datePart) { return (datePart < 10) ? '0' : '' };

    const hh = `${getDatePartPrefix(hour)}${hour}`;
    const mi = `${getDatePartPrefix(minute)}${minute}`;
    const ss = `${getDatePartPrefix(seconds)}${seconds}`;

    const mm = `${getDatePartPrefix(month)}${month}`;
    const dd = `${getDatePartPrefix(day)}${day}`;
    const yyyy = `${year}`;

    const formatedDate = `${yyyy}-${mm}-${dd}`;
    const formatedTime = `${hh}:${mi}:${ss}`;
    return `${formatedDate} ${formatedTime}`;
}

function logMessage(message, prefix = getDate()) {
    console.log(`${prefix} - ${message}`);
}

logMessage('added');
logMessage('removed',  `${getDate()} ***` );

logMessage('added', '🫚' );

