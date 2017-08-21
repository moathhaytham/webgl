/// <reference path="babylon.2.1.d.ts"/>

var Bjsapp= Bjsapp|| {};

Bjsapp.init=function(){
    var canvas= document.getElementById('renderCanvas');

    var engine = new BABYLON.Engine(canvas,true);

    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.FreeCamera('c1', new BABYLON.Vector3(0,2,-5),scene);
    camera.attachControl(canvas);

    var ground = new BABYLON.Mesh.CreateGround('g1',100,100,2,scene);

    var grass = new BABYLON.StandardMaterial('grass',scene);
    grass.diffuseTexture= new BABYLON.Texture('assets/grass.jpg',scene);
    ground.material=grass;

    var light = new BABYLON.HemisphericLight('h1', new BABYLON.Vector3(0,1,0),scene);

    var sphere = new BABYLON.Mesh.CreateSphere('s',16,2,scene);

    var sphereMaterial= new BABYLON.StandardMaterial('mat1',scene);
    sphereMaterial.diffuseColor= new BABYLON.Color3(0,1,0);
    sphere.material=sphereMaterial;



    engine.runRenderLoop(function () {
        scene.render();
    })


};