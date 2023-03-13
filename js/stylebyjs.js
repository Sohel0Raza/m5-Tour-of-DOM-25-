const sections = document.querySelectorAll('section');
for(const section of sections){
section.style.border = '2px solid steelblue';
section.style.marginBottom = '10px';
section.style.borderRadius = '10px';
section.style.backgroundColor = 'lightgray';
}
const places = document.getElementById('place-container')
places.style.backgroundColor = 'yellow';

const doms = document.getElementById('DOM')
doms.classList.add('dom')