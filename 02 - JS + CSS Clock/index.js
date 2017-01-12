window.onload = () => {
    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    function setDate() {
        const now = new Date();
        // get seconds returns the seconds of the current minute
        const seconds = now.getSeconds();
        // convert the seconds 0 to 60 to a degree for the clock hand
        const secondsDegrees = ((seconds / 60) * 360) + 90; // add 90 since we shift the hands of 90 degrees via css
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + 90;
        minHand.style.transform = `rotate(${minsDegrees}deg)`;
        const hours = now.getHours();
        const hoursDegrees = ((hours / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }
    setInterval(setDate, 1000);
};
