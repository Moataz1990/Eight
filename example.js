const root = document.documentElement;
const marqueeElementsDisplayedOne = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContentOne = document.querySelector("ol.marquee-content-two");

root.style.setProperty("--marquee-elements", marqueeContentOne.children.length);

for(let y=0; y<marqueeElementsDisplayedOne; y++) {
  marqueeContentOne.appendChild(marqueeContentOne.children[y].cloneNode(true));
}

