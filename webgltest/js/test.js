/// <reference path="babylon.2.1.d.ts"/>

var Bjsapp= Bjsapp|| {};

Bjsapp.init=function(){
    var canvas= document.getElementById('renderCanvas');

    var engine = new BABYLON.Engine(canvas,true);

    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.FreeCamera('c1', new BABYLON.Vector3(0,2,-5),scene);
    camera.attachControl(canvas);


    var light = new BABYLON.HemisphericLight('h1', new BABYLON.Vector3(0,1,0),scene);

    var sphere = new BABYLON.Mesh.CreateSphere('s',16,2,scene);


    engine.runRenderLoop(function () {
        scene.render();
    })


};