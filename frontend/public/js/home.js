var butao = document.getElementById('button_butao')

butao.addEventListener("click",async function(e){
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






