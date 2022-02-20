const quote_id = document.getElementById('quote_id');
const quote_text = document.getElementById('quote_text')
const btn = document.getElementById('next')
async function fetchAdvice() {
    let url = 'https://api.adviceslip.com/advice';
    btn.classList.add("loading")
    const data = await fetch(url);
    const json = await data.json();
    quote_id.textContent = json.slip.id
    quote_text.textContent = json.slip.advice
    btn.classList.remove("loading")
}




document.addEventListener('DOMContentLoaded', async() => {
    try {
        fetchAdvice()
        btn.addEventListener("click", fetchAdvice)
    } catch (e) {
        console.log(e);
    }
})