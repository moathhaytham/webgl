/// <reference path="babylon.2.1.d.ts"/>

var Bjsapp= Bjsapp ||{};

Bjsapp.init=function () {
    var canvas= document.getElementById('renderCanvas');

    var engine =new BABYLON.Engine(canvas,true);

    var scene =new BABYLON.Scene(engine);
}


