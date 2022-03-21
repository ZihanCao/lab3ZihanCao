window.onload = () => {
  render();
};

const models = [ //add more model here
  {
    url: './assets/myModel/scene.gltf',
    scale: '0.5 0.5 0.5',
    rotation: '0 225 0'
  },
  
];

let modelIndex = 0; // indicate the number of models
const setModel = (model, entity) => {  //set the attributs aboiut position of model
  if (model.position) {
    entity.setAttribute('position', model.position);
  }

  entity.setAttribute('gltf-model', model.url); //set material of the model
};

function render() {
  const scene = document.querySelector('a-scene');// get the scene information from document

  navigator.geolocation.getCurrentPosition(function (position) { //loacte the model to the location we set
    const latitude = position.coords.latitude; //initialize the latitude
    const longitude = position.coords.longitude;//initialize the longtitude

    const model = document.createElement('a-entity'); 
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`); // give the information to model

    setModel(models[modelIndex], model);

    model.setAttribute('animation-mixer', '');// make the animation smoother

    scene.appendChild(model); //set the model inside the scene
  });
}
// a-scene； help us create a scene in a certain coordinate, and have a-entity inside
// a-entity: have latitude and longtitude 
// navigator.geolocation.getCurrentPosition: help us locate the model
// we rotate and scale the model by  scale: '0.5 0.5 0.5',rotation: '0 225 0'
// the way to add more models is to adding more url at top, and change the model index, then to setting the model(model,entity)
