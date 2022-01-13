const searchBtn = document.getElementById('form__button')
searchBtn.addEventListener('click', () => {
    let formInputs = document.getElementById('input1').value
    fetch('https://api.duckduckgo.com/?q='+formInputs+'&format=json').then(res => {
        console.log(res.status)
        console.log(res.statusText)
        console.log(res)
        return data = res.json()
    }).then(data => {
        let Result = JSON.stringify(data)
        let resResult = JSON.parse(Result)
        let duckResult = document.getElementById('duck__result')
        duckResult.style.display = 'flex'
        duckResult.innerHTML = `
        <h2>${resResult.Heading}</h2>
        <img src="https://api.duckduckgo.com${resResult.Image}" style="width: 30vw; max-width: 200px;" alt="" />
        <p>${resResult.Abstract}</p>
        <h3>${resResult.AbstractSource}</h3>
        <p>${resResult.RelatedTopics[0].Text}</p>
        <img src="https://api.duckduckgo.com${resResult.RelatedTopics[0].Icon}" style="width: 20vw; max-width: 200px;" alt="" />
        `
    }).catch(err => console.error('err'))
})