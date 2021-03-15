fetch("./countries.json")

  .then(function(countries){
    return countries.json()
  })

  .then(function(countries){
    countries.forEach(country =>{
      new mapboxgl.Marker({

        color: "#FFFCBD",
        scale: 0.7

      })
      .setPopup(new mapboxgl.Popup().setText((country.country + " population : "+ country.population)))
      .setLngLat([country.longitude, country.latitude])
      .addTo(map);
    });
  });
