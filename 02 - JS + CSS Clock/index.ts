window.onload = () => {
    const secondHand : HTMLElement = <HTMLElement> document.querySelector('.second-hand');
    const minHand : HTMLElement = <HTMLElement> document.querySelector('.min-hand');
    const hourHand : HTMLElement = <HTMLElement> document.querySelector('.hour-hand');

    arrangeNumbersOnClock();

    function setDate() : void {
        const now : Date = new Date();

        // get seconds returns the seconds of the current minute
        const seconds : number = now.getSeconds();

        // convert the seconds 0 to 60 to a degree for the clock hand
        const secondsDegrees : number = ((seconds / 60) * 360) + 90; // add 90 since we shift the hands of 90 degrees via css
        
        // Before rotating let's see if we have completed an entire rotation.
        resetTransition(secondHand, secondsDegrees);
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`

        const mins : number = now.getMinutes();
        const minsDegrees : number = ((mins / 60) * 360) + 90;
        resetTransition(minHand, minsDegrees);
        minHand.style.transform = `rotate(${minsDegrees}deg)`

        const hours : number = now.getHours();
        const hoursDegrees : number = ((hours / 12) * 360) + 90;
        resetTransition(hourHand, hoursDegrees);
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`
    }
    setInterval(setDate, 1000);
}

window.onresize = () => {
    arrangeNumbersOnClock();
}

// Checks if the hand has complete an entire rotation, if so removes the transition to avoid glitch
function resetTransition(element: HTMLElement, handDegrees: number) : void {
    if(handDegrees === 90) {
        element.classList.add('no-transition');
    } else if (element.classList.contains('no-transition')) {
        element.classList.remove('no-transition');
    }
}

function arrangeNumbersOnClock(){
    const numbers : NodeListOf<Element> = <NodeListOf<Element>> document.querySelectorAll('.number');
    const numbersContainer : Element = document.querySelector('.clock-face');
    const numbersContainerWidth = numbersContainer.clientWidth;
    const numbersContainerHeight = numbersContainer.clientHeight;
    var radius = numbersContainerHeight/2;    
    var angle : number = 0;
    var step : number = (2*Math.PI) / numbers.length;

    for(var numberIndex = 0; numberIndex < numbers.length; numberIndex++){
        var x = Math.round(numbersContainerWidth/2 + radius * Math.cos(angle) - numbers[numberIndex].clientWidth/2);
        var y = Math.round(numbersContainerHeight/2 + radius * Math.sin(angle) - numbers[numberIndex].clientHeight/2);        
        (<HTMLElement> numbers[numberIndex]).style.left = `${x}px`;
        (<HTMLElement> numbers[numberIndex]).style.top = `${y}px`;
        angle += step;
    }
}