function getusuarios(){
    fetch('https://api.escuelajs.co/api/v1/users?limit=3').then(function(response) {
        return response.json();
    }).then(function(data) {
        document.querySelector("#review1").src=data[0].avatar;
        document.querySelector("#name1").innerHTML=data[0].name;


        document.querySelector("#review2").src=data[1].avatar;
        document.querySelector("#name2").innerHTML=data[1].name;


        document.querySelector("#review3").src=data[2].avatar;
        document.querySelector("#name3").innerHTML=data[1].name;


    }).catch(function(error) {
        console.log('Requestfailed', error);
    });

    fetch('https://official-joke-api.appspot.com/jokes/ten').then(function(response) {
        return response.json();
    }).then(function(data) {
        document.querySelector("#joke1").innerHTML=data[0].setup;
        document.querySelector("#punchline1").innerHTML=data[0].punchline;

        document.querySelector("#joke2").innerHTML=data[1].setup;
        document.querySelector("#punchline2").innerHTML=data[1].punchline;


        document.querySelector("#joke3").innerHTML=data[2].setup;
        document.querySelector("#punchline3").innerHTML=data[2].punchline;

        document.querySelector("#reviews").style.display = 'block';


    }).catch(function(error) {
        console.log('Requestfailed', error);
    });
}


