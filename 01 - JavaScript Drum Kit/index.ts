window.onload = () => {
    const keys : NodeListOf<Element> = <NodeListOf<Element>> document.querySelectorAll('.key');

    for(var keyIndex = 0; keyIndex < keys.length; keyIndex++){
        // transionend is fired for all the elements that transitionend
        // we are interested in the transform element (which is the one in the .playing class)
        keys[keyIndex].addEventListener('transitionend', removeTransition);
    }

    function removeTransition(event: TransitionEvent) : void {
        if(event.propertyName !== 'transform') return;
        (<Element>this).classList.remove('playing');
    }
}

function playSound(event: KeyboardEvent) : void {
    const audio : HTMLAudioElement = <HTMLAudioElement> document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key : HTMLElement = <HTMLElement> document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

window.addEventListener('keydown', playSound);