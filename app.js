const navclick = document.querySelector('.click')
navclick.addEventListener('click', (onclick) => {
    let dropDown = document.getElementById('drop')
    if (dropDown.className === 'navb') {
        dropDown.className += ' menu';
    } else {
        dropDown.className = 'navb';
    }
})


// const btn = document.querySelectorAll('button')
// for (buttons of btn) {
//     buttons.onclick = function () {
//         window.open('https://github.com/Chisconike/Microverse-Emma-Shaib.git')
//     }
// }