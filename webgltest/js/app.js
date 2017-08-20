/// <reference path="babylon.2.1.d.ts"/>

var Bjsapp= Bjsapp ||{};

Bjsapp.init=function () {
    var canvas= document.getElementById('renderCanvas');

    var engine =new BABYLON.Engine(canvas,true);

    var scene =new BABYLON.Scene(engine);

    //var sphere = new BABYLON.Mesh.CreateSphere('sphere1',16,2,scene);
    var box = new BABYLON.Mesh.CreateBox('box',50,scene);
	
	var light = new BABYLON.HemisphericLight('light1',new BABYLON.Vector3(0,1,0),scene);

    //var camera = new BABYLON.FreeCamera('FreeCamera',new BABYLON.Vector3(0,2,-15),scene);
    var camera = new BABYLON.ArcRotateCamera('rotatecamera',0,1.2,5,box,scene);
	camera.attachControl(canvas);
    



    engine.runRenderLoop(function () {
        scene.render();
    })


};
