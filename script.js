const quote_id = document.querySelector('#quote_id');
const quote_text = document.querySelector('#quote_text')
const btn = document.getElementById('next')
async function fetchAdvice() {
    let url = 'https://api.adviceslip.com/advice';
    btn.classList.add("loading")
    const data = await fetch(url);
    const json = await data.json();
    quote_id.innerHTML = json.slip.id
    quote_text.innerHTML = `"${json.slip.advice}"`
    btn.classList.remove("loading")
}


document.addEventListener('DOMContentLoaded', async() => {
    try {
        btn.addEventListener("click", fetchAdvice)
    } catch (e) {
        console.log(e);
    }
})