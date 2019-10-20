export function renderSigns(sign) {
    
    const li = document.createElement('li');
    li.className = sign.element;
    li.title = sign.name;

    const img = document.createElement('img');
    img.src = '../assets/' + sign.symbolImg;
    img.alt = sign.id;
    li.appendChild(img);

    return li;

}

