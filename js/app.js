
// Triangle Event handler 
document.getElementById('triangle-calc-btn').addEventListener('click', function () {

    const nameOfGeometry = document.getElementById('first-geometry-title').innerText;
    const triangleBase = getInputValueById('triangle-base');
    const triangleHeight = getInputValueById('triangle-height');

    inputValidationAndSetResult(triangleBase, triangleHeight, nameOfGeometry, true);
});

// Rectangle Event handler
document.getElementById('rectangle-calc-btn').addEventListener('click', function () {

    const nameOfGeometry = document.getElementById('second-geometry-title').innerText;
    const rectangleWidth = getInputValueById('rectangle-width');
    const rectangleLength = getInputValueById('rectangle-length');

    inputValidationAndSetResult(rectangleWidth, rectangleLength, nameOfGeometry, false);
});