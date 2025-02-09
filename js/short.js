function encurtarLink() {

    const url = document.getElementById('url').value.trim();

    if (!url) {

        alert('Insira uma URL válida!');

        return;

    }

    fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`)

    .then(response => response.json())

    .then(data => {

        const resultado = document.getElementById('resultado');

        if (data.shorturl) {

            resultado.innerHTML = `Link encurtado: ${data.shorturl}`;

        } else {

            resultado.innerHTML = 'Erro ao encurtar o link. Tente novamente.';

        }

    })

    .catch(error => {

        console.error('Erro:', error);

        document.getElementById('resultado').innerHTML = 'Erro ao encurtar o link.';

    });

}

        