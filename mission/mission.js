let selectElem = document.querySelector('select');

let logo = document.querySelector('img');

selectElem.addEventListener('change',changeTheme)

function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark') {
        document.body.className = 'dark'
        //give body the dark class
        document.body.className = 'dark';

        //Add different image by changing src
        logo.src = 'images/byui-logo_dark.png'

        //Code to make the logo look like theyre the same size
        logo.style.width = '171px';
    } else {
        // take off class
        document.body.className = '';

        //change the image back to the orginal one
        logo.src = 'images/byui-logo_white.png'

        //Code to make the logo look like theyre the same size
        logo.style.width = '200px';
    }
}