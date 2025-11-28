import {
    sounds
} from './sounds.js';
let allowOverlap = false;
let showFavorites = false;
let currentAudios = [];
const toggleButton = document.getElementById('toggleButton');
const stopButton = document.getElementById('stopButton');
const searchInput = document.getElementById('searchInput');
const favoriteButton = document.getElementById('toggleFavorites')
const soundBoard = document.getElementById('soundboard');
toggleButton.onclick = () => {
    allowOverlap = !allowOverlap;
    toggleButton.textContent = allowOverlap ? '🔊 Overlap: ON' : '🔇 Overlap: OFF';
};
stopButton.onclick = () => {
    currentAudios.forEach(a => a.pause());
    currentAudios = [];
};
favoriteButton.onclick = () => {
    showFavorites = !showFavorites;
    favoriteButton.textContent = showFavorites ? '🌟 Favorites: ON' : '⭐ Favorites: OFF';
    renderSounds(showFavorites ? "filter:favorite "+searchInput.value : searchInput.value);
}

function renderSounds(filter = '') {
    soundBoard.innerHTML = '';
    let finalSound;
    if (filter.startsWith("filter:favorite ")) {
        finalSound = (localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [])
            .filter(s => s.name.toLowerCase().includes(filter.toLowerCase().replace('filter:favorite ', '')));
    } else {
        finalSound = sounds.filter(s => s.name.toLowerCase().includes(filter.toLowerCase()));
    }
    finalSound.forEach(sound => {
        const wrapper = document.createElement('div');
        wrapper.className = 'sound-wrapper';
        const button = document.createElement('button');
        wrapper.addEventListener("contextmenu", (e) => {
            rightClickPanel(e, wrapper, sound);
        });        
        button.className = 'sound-button-img';
        button.style.setProperty('--btn-color', sound.color);
        const image = document.createElement('div');
        image.className = 'sound-image';
        button.appendChild(image);
        button.onclick = () => {
            if (!allowOverlap) {
                currentAudios.forEach(a => a.pause());
                currentAudios = [];
            }
            const audio = new Audio("https://cdn.jsdelivr.net/gh/genizy/soundboard@main/"+sound.mp3);
            audio.play();
            currentAudios.push(audio);
            image.classList.add('pressed');
            setTimeout(() => image.classList.remove('pressed'), 150);
        };
        const label = document.createElement('div');
        label.className = 'sound-label';
        label.textContent = sound.name;
        wrapper.appendChild(button);
        wrapper.appendChild(label);
        soundBoard.appendChild(wrapper);
    });
}
renderSounds();
searchInput.addEventListener('input', () => {
    renderSounds((showFavorites? "filter:favorite ": "")+searchInput.value);
});

function rightClickPanel(event, button, sound) {
    document.querySelectorAll('.right-click-panel').forEach(p => p.remove());

    const panel = document.createElement('div');
    panel.className = 'right-click-panel';
    panel.style.setProperty('--btn-color', button.style.getPropertyValue('--btn-color'));
    panel.style.position = 'absolute';
    panel.style.left = `${event.pageX}px`;
    panel.style.top = `${event.pageY}px`;

    // favorite button
    let favoriteJson = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];
    const favorite = document.createElement('button');
    favorite.className = 'right-click-panel-button';
    const isFavorite = favoriteJson.some(item => item.name === sound.name);
    favorite.textContent = isFavorite ? '⭐ Unfavorite' : "🌟 Favorite";

    favorite.onclick = () => {
        const isFavorite = favoriteJson.some(item => item.name === sound.name);
        if (isFavorite) {
            favoriteJson = favoriteJson.filter(item => item.name !== sound.name);
            if (showFavorites) {
                renderSounds("filter:favorite "+searchInput.value);
            }
        } else {
            favoriteJson.push(sound);
        }
        localStorage.setItem("favorites", JSON.stringify(favoriteJson));
        panel.remove();
    };
    
    // download button
    const download = document.createElement('button');
    download.className = 'right-click-panel-button';
    download.textContent = '💾 Download';
    
    download.onclick = () => {
        const link = document.createElement('a');
        link.href = 'https://cdn.jsdelivr.net/gh/genizy/soundboard@main/'+sound.mp3;
        link.download = sound.mp3.split("/").pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    panel.appendChild(favorite);
    panel.appendChild(download);
    document.body.appendChild(panel);

    event.preventDefault();

    setTimeout(() => {
        const handleOutsideClick = (e) => {
            if (!panel.contains(e.target)) {
                panel.remove();
                document.removeEventListener('click', handleOutsideClick);
            }
        };
        document.addEventListener('click', handleOutsideClick);
    }, 0);
}
