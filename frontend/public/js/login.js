document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-login")
    if (form) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault()

            const usuario = document.getElementById("input-usuario").value
            const senha = document.getElementById("input-senha").value

            if (!usuario || !senha) {
                alert("preencha login e senha")
                return;
            }

            try {
                const resp = await fetch("/login", {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ usuario, senha })
                })

                const dados = await resp.json()

                if (!resp.ok) {
                    alert(dados.erro || "Erro ao fazer login")
                    return;
                }

                localStorage.setItem("usuario", JSON.stringify(dados.usuario))
                window.location.href = "/home"

            } catch (err) {
                console.error(err)
                alert("Falha no servidor")
            }
        })
    }
})