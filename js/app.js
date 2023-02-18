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
    const rhombusDiagonal1 = getInputValueById('rhombus-diagonal1');
    const rhombusDiagonal2 = getInputValueById('rhombus-diagonal2');

    inputValidationAndSetResult(rhombusDiagonal1, rhombusDiagonal2, nameOfGeometry, true);
});
// Pentagon event handler
document.getElementById('pentagon-calc-btn').addEventListener('click', function () {
    serial += 1;
    const nameOfGeometry = document.getElementById('fifth-geometry-title').innerText;
    const pentagonP = getInputValueById('pentagon-p');
    const pentagonB = getInputValueById('pentagon-b');

    inputValidationAndSetResult(pentagonP, pentagonB, nameOfGeometry, true);
});

// Ellipse event handler
document.getElementById('ellipse-calc-btn').addEventListener('click', function () {
    serial += 1;
    const nameOfGeometry = document.getElementById('sixth-geometry-title').innerText;
    const ellipseA = getInputValueById('ellipse-a');
    const ellipseB = getInputValueById('ellipse-b');
    if (isNaN(ellipseA) || isNaN(ellipseB) || ellipseA < 0 || ellipseB < 0) {
        return alert('Please enter a valid input number');
    }
    else {
        const ellipseArea = 3.14 * ellipseA * ellipseB;
        const fixedEllipseArea = ellipseArea.toFixed(2);
        setResultSiteNavBar(nameOfGeometry, fixedEllipseArea)
    }

    // inputValidationAndSetResult(pentagonP, pentagonB, nameOfGeometry, true);
});