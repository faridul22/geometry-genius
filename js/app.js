let serial = 0;
// Triangle Event handler 
document.getElementById('triangle-calc-btn').addEventListener('click', function () {
    serial += 1;
    const nameOfGeometry = document.getElementById('first-geometry-title').innerText;
    const triangleBase = getInputValueById('triangle-base');
    const triangleHeight = getInputValueById('triangle-height');

    inputValidationAndSetResult(triangleBase, triangleHeight, nameOfGeometry, true);
});

// Rectangle event handler
document.getElementById('rectangle-calc-btn').addEventListener('click', function () {
    serial += 1;
    const nameOfGeometry = document.getElementById('second-geometry-title').innerText;
    const rectangleWidth = getInputValueById('rectangle-width');
    const rectangleLength = getInputValueById('rectangle-length');

    inputValidationAndSetResult(rectangleWidth, rectangleLength, nameOfGeometry, false);
});
// parallelogram event handler
document.getElementById('parallelogram-calc-btn').addEventListener('click', function () {
    serial += 1;
    const nameOfGeometry = document.getElementById('third-geometry-title').innerText;
    const parallelogramBase = getInputValueById('parallelogram-base');
    const parallelogramHeight = getInputValueById('parallelogram-height');

    inputValidationAndSetResult(parallelogramBase, parallelogramHeight, nameOfGeometry, false);
});

// Rhombus event handler
document.getElementById('rhombus-calc-btn').addEventListener('click', function () {
    serial += 1;
    const nameOfGeometry = document.getElementById('fourth-geometry-title').innerText;
    const parallelogramBase = getInputValueById('rhombus-diagonal1');
    const parallelogramHeight = getInputValueById('rhombus-diagonal2');

    inputValidationAndSetResult(parallelogramBase, parallelogramHeight, nameOfGeometry, true);
});