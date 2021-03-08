const codes = document.querySelectorAll(`.code`);

codes[0].focus();
const len = codes.length;

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = ``;
            if (idx != (len - 1))
                setTimeout(() => codes[idx + 1].focus(), 10);
        } else if (e.key == 'Backspace') {
            if (idx != 0)
                setTimeout(() => codes[idx - 1].focus(), 10);
        }
    })
});