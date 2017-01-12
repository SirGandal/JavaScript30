window.onload = () => {
    const secondHand : HTMLElement = <HTMLElement> document.querySelector('.second-hand');
    const minHand : HTMLElement = <HTMLElement> document.querySelector('.min-hand');
    const hourHand : HTMLElement = <HTMLElement> document.querySelector('.hour-hand');

    function setDate() : void {
        const now : Date = new Date();

        // get seconds returns the seconds of the current minute
        const seconds : number = now.getSeconds();

        // convert the seconds 0 to 60 to a degree for the clock hand
        const secondsDegrees : number = ((seconds / 60) * 360) + 90; // add 90 since we shift the hands of 90 degrees via css
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`

        const mins : number = now.getMinutes();
        const minsDegrees : number = ((mins / 60) * 360) + 90;
        minHand.style.transform = `rotate(${minsDegrees}deg)`

        const hours : number = now.getHours();
        const hoursDegrees : number = ((hours / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`
    }
    setInterval(setDate, 1000);
}