let called = true;
        function setBgImg(wthr_type){
            document.body.style.backgroundImage = `url('${wthr_type}.jpg')`;
            document.body.style.backgroundSize = "100vw 100vh";
            document.body.style.opacity = "80%";
        }

        function find_wh(){
            cityName = document.getElementById("inp").value.trimEnd();
            
            apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8e2d4a97e941c0022fa82bc3e886d0dd`;
            fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log("entered api");
            // HAndle the data returned form the api
            temp = (parseInt(data.main.temp) - 273);
            tempString = `${(parseInt(data.main.temp) - 273)} °C`;
            city = data.name;
            humidity = (data.main.humidity);
            wind_speed = `${data.wind.speed} miles/hr`;
            wthr = data.weather[0].main;

            if(parseInt(temp) <= 2){
                setBgImg("cold");
            }
            else if(wthr.localeCompare("Clear") == 0 ){
                setBgImg("Clear");
            }
            else if(wthr.localeCompare("Haze") == 0){
                // setBgImg("Haze");
                document.body.style.backgroundImage = `url('Haze.jpg')`;
                document.body.style.backgroundSize = "100vw 100vh";
                document.body.style.opacity = "80%";
            }
            else if(wthr.localeCompare("Clouds") == 0){
                setBgImg("Clouds");
            }
            else if(wthr.localeCompare("Rain") == 0){
                setBgImg("Rain");
            }
            else if(wthr.localeCompare("Mist") == 0){
                setBgImg("mist");
            }
            else{
                alert("No image was found for respective weather but can be added later :)");
            }
            
            if(called){
                document.getElementById("info").remove();
            }
            called = false;
            // document.getElementById("temp").innerText = tempString;
            document.getElementById("cityname_temp").innerText = `${city}: ${tempString}`;
            document.getElementById("weather").innerText = `Weather: ${wthr}%`;
            document.getElementById("humidity").innerText = `Humidity: ${humidity}`;
            document.getElementById("wind_speed").innerText = `Wind Speed: ${wind_speed}`;
            
        })
        .catch(error => {
            //Handle errors if the request fails
            window.alert("Please enter a valid input");
        });
        }

