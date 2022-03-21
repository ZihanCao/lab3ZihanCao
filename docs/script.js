window.onload = () => {
     let places = staticLoadPlaces(); 
     // load the location of staticLoadPlaces when the window is open
     renderPlaces(places); 
     //load renderPlaces
};

function staticLoadPlaces() {
    return [
        {
            name: 'MyModel', //name the model
            location: {  
                lat: <your-latitude>,   //latitude 
                lng: <your-longitude>,  //your-longitude
                    
            }
        },
        
        
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene'); //open a-scene 

    places.forEach((place) => {
        let latitude = place.location.lat;  //give a value from document to self.latitude
        let longitude = place.location.lng;  //give a value from document to self.longitude

        let model = document.createElement('a-entity');// create a  label for model
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`); //set attribute of gps
        model.setAttribute('gltf-model', './assets/MyModel/scene.gltf'); //set attribute of material
        model.setAttribute('rotation', '0 180 0'); //set attribute of rotation
        model.setAttribute('animation-mixer', ''); //set attribute of continuous animation
        model.setAttribute('scale', '0.5 0.5 0.5'); //set attribute of scale

        model.addEventListener('loaded', () => { // add the information into listener
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')) 
        });

        scene.appendChild(model);
    });
}