function attachEventsListeners() {
    const buttonElements = document.querySelectorAll('input[type=button]');
    const inputElements = document.querySelectorAll('input[type=text]');
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let days = 0;

    for (const button of buttonElements) {
        button.addEventListener('click', function (event) {
            for (const input of inputElements) {
                if (Number(input.value) > 0) {
                    let currentFormat = input.parentElement.querySelector('label').textContent;
                    switch (currentFormat) {
                        case 'Days: ':
                            days = Number(input.value);
                            hours = days * 24;
                            minutes = days * 1440;
                            seconds = days * 86400;
                            break;
                        case 'Hours: ':
                            hours = Number(input.value);
                            seconds = hours * 3600;
                            minutes = hours * 60;
                            days = hours / 24;
                            break;
                        case 'Minutes: ':
                            minutes = Number(input.value);
                            seconds = minutes * 60;
                            hours = minutes / 60;
                            days = minutes / 1440;
                            break;
                        case 'Seconds: ':
                            seconds = Number(input.value);
                            minutes = seconds / 60;
                            hours = seconds / 3600;
                            days = seconds / 86400;
                            break;
                    }
                    break;
                }
            }
            const inputSeconds = document.querySelector('#seconds');
            const inputMinutes = document.querySelector('#minutes');
            const inputHours = document.querySelector('#hours');
            const inputDays = document.querySelector('#days');

            inputSeconds.value = seconds;
            inputMinutes.value = minutes;
            inputHours.value = hours;
            inputDays.value = days;
        })
    }
}