document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-cadastro")
    if (form) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault()

            const usuario = document.getElementById("input-usuario").value
            const email = document.getElementById("input-email").value
            const senha = document.getElementById("input-senha").value

            if (!usuario || !senha || !email) {
                alert("preencha todos os campos")
                return;
            }

            try {
                const resp = await fetch("/cadastro", {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ usuario, email, senha })
                })

                const dados = await resp.json()

                if (!resp.ok) {
                    alert(dados.erro || "Erro ao fazer cadastro")
                    return;
                }
                alert("usuario cadastrado")
                window.location.href = "/login"

            } catch (err) {
                console.error(err)
                alert("Falha no servidor")
            }
        })
    }
})