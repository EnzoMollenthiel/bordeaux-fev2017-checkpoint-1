document.getElementById('voirplus').addEventListener('click', function getArticles() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:3000/articles")

    xhr.addEventListener("load", function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            console.log(xhr.responseText)

            function machin(){
                table = xhr.response;
                reponse = [];
                for (i of table ) {
                    reponse = table[i];
                }
            };

            document.getElementById('change').textContent = JSON.parse(machin);
        }
        else {
            console.error(xhr.status + " " + xhr.statusText);
        }

    });
    xhr.send(null);

});


  /*  const xhr = new XMLHttpRequest();

var qui = document.getElementById('qui').value;
var quoi = document.getElementById('quoi').value;
var episode = document.getElementById('episode').value;
var saison = document.getElementById('saison').value;
var date = document.getElementById('quand').value;

document.getElementById('envoyer').addEventListener('click', function envoie() {

    if (xhr) {
        xhr.open("POST", "http://localhost:3000/articles")

        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        var jsonStr = JSON.stringify({
            "author": qui,
            "chapter": saison,
            "episode": episode,
            "content": quoi,
            "date": date
        });
        xhr.send(jsonStr);



    }


});*/




