var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var townData = request.response;

        for (var i = 0; i < townData.towns.length; i++) {

            document.getElementById("prestonMotto").innerHTML = townData.towns[4].motto;
            document.getElementById("prestonYearFounded").innerHTML = townData.towns[4].yearFounded;
            document.getElementById("prestoncurrentPopulation").innerHTML = townData.towns[4].currentPopulation;
            document.getElementById("prestonaverageRainfall").innerHTML = townData.towns[4].averageRainfall;
            
            document.getElementById("fishHavenMotto").innerHTML = townData.towns[1].motto;
            document.getElementById("fishHavenYearFounded").innerHTML = townData.towns[1].yearFounded;
            document.getElementById("fishHavencurrentPopulation").innerHTML = townData.towns[1].currentPopulation;
            document.getElementById("fishHavenaverageRainfall").innerHTML = townData.towns[1].averageRainfall;
            
            document.getElementById("sodaspringsMotto").innerHTML = townData.towns[5].motto;
            document.getElementById("sodaspringsYearFounded").innerHTML = townData.towns[5].yearFounded;
            document.getElementById("sodaspringscurrentPopulation").innerHTML = townData.towns[5].currentPopulation;
            document.getElementById("sodaspringsaverageRainfall").innerHTML = townData.towns[5].averageRainfall;

        }
    
    }