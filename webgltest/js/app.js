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

    var sun = new BABYLON.Mesh.CreateSphere('s1',16,4,scene);

    var sunmaterial = new BABYLON.StandardMaterial('sunmat',scene);
    sunmaterial.emissiveTexture= new BABYLON.Texture('Assets/sun.jpg',scene);
    sunmaterial.diffuseColor = new BABYLON.Color3(0,0,0);
    sunmaterial.specularColor= new BABYLON.Color3(0,0,0);
    sun.material=sunmaterial;

    var light= new BABYLON.PointLight('sunlight', new BABYLON.Vector3.Zero(),scene);


    var planet1= BABYLON.Mesh.CreateSphere('planet1',16,1,scene);
    planet1.position.x=4;

    var planet1material = new BABYLON.StandardMaterial('material',scene);
    planet1material.diffuseTexture= new BABYLON.Texture('Assets/sand.jpg',scene);
    planet1material.specularColor=new BABYLON.Color3(0,0,0);
    planet1.material=planet1material;

    engine.runRenderLoop(function () {
        scene.render();
    });

    window.addEventListener('resize', function () {
        engine.resize();
    })


};
