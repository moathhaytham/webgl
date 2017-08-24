/// <reference path="babylon.2.1.d.ts"/>

var Bjsapp= Bjsapp ||{};

Bjsapp.init=function () {
    var canvas = document.getElementById('renderCanvas');

    var engine = new BABYLON.Engine(canvas,true);

    var scene = new BABYLON.Scene(engine);
    scene.clearColor= new BABYLON.Color3(0,0,0);

    var light = new BABYLON.HemisphericLight('light',new BABYLON.Vector3(0,1,0),scene);
    light.intensity=0.5;
    light.groundColor= new BABYLON.Color3(0,0,0);

    var camera = new BABYLON.ArcRotateCamera('cam1',0,0,15,new BABYLON.Vector3.Zero(),scene);
    camera.attachControl(canvas);
    camera.upperRadiusLimit=50;

    var sun = new BABYLON.Mesh.CreateSphere('s1',16,4,scene);

    var sunmaterial = new BABYLON.StandardMaterial('sunmat',scene);
    sunmaterial.emissiveTexture= new BABYLON.Texture('Assets/sun.jpg',scene);
    sunmaterial.diffuseColor = new BABYLON.Color3(0,0,0);
    sunmaterial.specularColor= new BABYLON.Color3(0,0,0);
    sun.material=sunmaterial;

    var light= new BABYLON.PointLight('sunlight', new BABYLON.Vector3.Zero(),scene);


    /*var planet1= BABYLON.Mesh.CreateSphere('planet1',16,1,scene);
    planet1.position.x=4;
    planet1.orbit={
        radius: 4,
        speed: 0.01,
        angle:0

    };*/


    var planet1material = new BABYLON.StandardMaterial('material',scene);
    planet1material.diffuseTexture= new BABYLON.Texture('Assets/sand.jpg',scene);
    planet1material.specularColor=new BABYLON.Color3(0,0,0);


    var planetarr=[];
    var i=0;
    for(;i<5;i++) {
        planetarr[i] = new BABYLON.Mesh.CreateSphere('planet', 16, 1, scene);
        planetarr[i].position.x = Math.floor((Math.random(4) *20 ) + 1);
        planetarr[i].material=planet1material;
        planetarr[i].orbit = {
            radius: 4,
            speed: Math.random(),
            angle: 0
        };

    }







    var skybox= new BABYLON.Mesh.CreateBox('skybox',1000,scene);
    var skyboxMaterial= new BABYLON.StandardMaterial('skm',scene);

    skyboxMaterial.backFaceCulling= false;

    skybox.infiniteDistance=true;

    skybox.material=skyboxMaterial;

    skyboxMaterial.diffuseColor= new BABYLON.Color3(0,0,0);
    skyboxMaterial.specularColor= new BABYLON.Color3(0,0,0);


    skyboxMaterial.reflectionTexture= new BABYLON.CubeTexture('Assets/skybox',scene);
    skyboxMaterial.reflectionTexture.coordinatesMode=  BABYLON.Texture.SKYBOX_MODE;

    scene.beforeRender=function(){

        /*planet1.position.x= planet1.orbit.radius* Math.sin(planet1.orbit.angle);
        planet1.position.z= planet1.orbit.radius *Math.cos(planet1.orbit.angle);
        planet1.orbit.angle+= planet1.orbit.speed;*/

        for(var i=0;i<planetarr.length;i++){
        planetarr[i].position.x=planetarr[i].orbit.radius * Math.sin(planetarr[i].orbit.angle);
        planetarr[i].position.z=planetarr[i].orbit.radius * Math.cos(planetarr[i].orbit.angle);
        planetarr[i].orbit.angle+=planetarr[i].orbit.speed;}
    };







    engine.runRenderLoop(function () {
        scene.render();
    });

    window.addEventListener('resize', function () {
        engine.resize();
    })


};
