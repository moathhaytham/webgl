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
    grass.diffuseTexture= new BABYLON.Texture("Assets/grass.png",scene);
    grass.diffuseTexture.uScale=10;
    grass.diffuseTexture.vScale=10;
    grass.specularColor= new BABYLON.Color3(0,0,0);
    ground.material=grass;

    //var light = new BABYLON.HemisphericLight('h1', new BABYLON.Vector3(0,1,0),scene);

    var sphere = new BABYLON.Mesh.CreateSphere('s',16,2,scene);
    sphere.position=new BABYLON.Vector3(0,1,0);


    var sphereMaterial= new BABYLON.StandardMaterial('mat1',scene);
    sphereMaterial.diffuseColor= new BABYLON.Color3(0,1,0);
    sphereMaterial.specularColor = new BABYLON.Color3(1,0,0);
    sphereMaterial.specularPower= 1;
    sphere.material=sphereMaterial;

    var box = new BABYLON.Mesh.CreateBox('b1',10,scene);
    box.position= new BABYLON.Vector3(-7,5,0);

    var boxmaterial= new BABYLON.StandardMaterial('bm',scene);
    boxmaterial.emissiveColor=new BABYLON.Color3(1,0,0);
    box.material=boxmaterial;






    engine.runRenderLoop(function () {
        scene.render();
    })


};