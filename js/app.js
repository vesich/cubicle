const div = document.querySelector('.cube-list');



div.addEventListener('click', eventHandler);

function eventHandler(event) {
    if (event.target.tagName == "BUTTON") {
        let hiddenDiv = event.target.parentNode.querySelector('div');
        if (hiddenDiv.style.display == 'block') {
            hiddenDiv.style.display = 'none';
            event.target.textContent = 'SHOW'
        } else {
            hiddenDiv.style.display = 'block';
            event.target.textContent = 'HIDE'
        }

    }
}
