var butao = document.getElementById('button_butao')

butao.addEventListener("adicionar",async function(e){
    e.preventDefault()

    var input1 = document.getElementById('01').value
    var input2 = document.getElementById('02').value

    try{
        const resposta = await fetch('/cad_tarefa',{

            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({input1,input2}),

        })
        const dados = await resposta.json()

        localStorage.setItem('titulo', JSON.stringify(dados.input1))

    }catch(err){
        console.error(err)

    }

})

const h1 = document.querySelector('h1')
h1.setAttribute('data-text', h1.textContent)

function triggerGlitch() {
    h1.classList.remove('glitching')
    void h1.offsetWidth
    h1.classList.add('glitching')
    setTimeout(() => h1.classList.remove('glitching'), 400)

}

window.addEventListener('load', () => {
    setTimeout(triggerGlitch, 500)

})

h1.addEventListener('click', triggerGlitch)








