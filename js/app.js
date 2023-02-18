const areas = document.getElementsByClassName('calculate-btn');
for (const area of areas) {
    area.addEventListener('click', function (event) {
        console.log(event.target.parentNode.parentNode.children[1].nextSibling)
    })
}