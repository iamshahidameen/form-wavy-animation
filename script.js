const fieldLabel = document.querySelectorAll(".fieldLabel");

fieldLabel.forEach((label) => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, i) => `<span style="transition-delay: ${i * 100}ms">${letter}</span>`).join('');
    
    console.log(label)
    
})