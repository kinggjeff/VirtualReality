class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let roof = document.createElement("a-cone");
    roof.setAttribute("color","black");
    roof.setAttribute("position","0 5 0");
    roof.setAttribute("radius-bottom","4.7");
    roof.setAttribute("radius-top","0");
    roof.setAttribute("height","5.5");
    this.obj.append( roof );
  
    let base = document.createElement("a-cylinder");
    base.setAttribute("position","0 0 0");
    base.setAttribute("color","white");
    base.setAttribute("radius","4.5");
    base.setAttribute("height","4.5");
    this.obj.append( base );

    let door = document.createElement("a-box");
    door.setAttribute("position", "3, 0.25, 0");
    door.setAttribute("color","brown");
    door.setAttribute("height", "3.1");
    door.setAttribute("width","2");
    door.setAttribute("depth","2.5")
    door.setAttribute("rotation", "90 0 90")
    this.obj.append( door );

     let window = document.createElement("a-box");
    window.setAttribute("position", "0, 1, 4");
    window.setAttribute("color","blue");
    window.setAttribute("opacity","0.5")
    window.setAttribute("height", "3");
    window.setAttribute("width", "0.75")
    window.setAttribute("rotation", "0 0 90")
    this.obj.append( window );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}