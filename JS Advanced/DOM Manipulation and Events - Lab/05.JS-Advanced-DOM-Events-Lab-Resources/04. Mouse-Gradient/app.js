function attachGradientEvents() {
    const element = document.querySelector('#gradient');
    const resultEl = document.querySelector('#result');
    function mouseover(event) {
        let result = Math.floor((+event.offsetX / 300) * 100);
        resultEl.textContent = `${result}%`;
    }
    element.addEventListener('mousemove', mouseover);
}