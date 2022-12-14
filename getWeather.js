function getUserPosition() {
    let url;
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude;
      url = `https:/api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=5d8f7ad2228b5f5f61b13abb7972377d`
      fetchApi(url);
    });
  }

  function fetchApi(url) {

    let city = document.querySelector('.city');
    let temp = document.querySelector('.span');
    fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);
      city.innerText = `Hoje a temperatura em ${data.name} é:`;
      temp.innerText = tempInCelsius;
    })
    .catch((err) => {
      city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
      temp.innerText = `-`;
    })
  }
  
  getUserPosition();