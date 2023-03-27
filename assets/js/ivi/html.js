export function displayLoader(e, msg) {

    if (e.querySelector('.loader-text') === null) {
        e.innerHTML += '<div id="loader" class="loader-wrapper">' +
            '<div class="loader"></div>' +
            '<div class="loader-text">' + msg + '</div></div>';
    } else {
        e.querySelector('.loader-text').innerHTML = msg;
    }
}

export function removeLoader() {
    $("#loader" ).remove();
}

