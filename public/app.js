const viewer = new Cesium.Viewer("cesiumContainer",{
terrainProvider:Cesium.createWorldTerrain()
})

viewer.camera.flyTo({

destination:Cesium.Cartesian3.fromDegrees(
69.24,
41.31,
2000000
)

})

async function loadPlanes(){

const res = await fetch("/planes")
const data = await res.json()

if(!data.states) return

data.states.forEach(plane=>{

const lat = plane[6]
const lon = plane[5]

if(lat && lon){

viewer.entities.add({

position:Cesium.Cartesian3.fromDegrees(lon,lat,10000),

point:{
pixelSize:6
},

label:{
text:"✈",
scale:1
}

})

}

})

}

setInterval(loadPlanes,15000)
