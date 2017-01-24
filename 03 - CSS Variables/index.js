window.onload = function () {
    var inputs = document.querySelectorAll('.controls input');
    for (var inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
        inputs[inputIndex].addEventListener('change', handleUpdate);
        inputs[inputIndex].addEventListener('mousemove', handleUpdate);
    }
};
function handleUpdate() {
    // this.dataset contains all the data-* attribute for the specific element 
    // that has raised the event this function is waiting for
    var suffix = this.dataset.sizing || '';
    // name is a property on the input element which we set to be exactly the same
    // as the CSS variable name with the only difference of the -- as prefix
    document.documentElement.style.setProperty("--" + this.name, "" + this.value + suffix);
}
