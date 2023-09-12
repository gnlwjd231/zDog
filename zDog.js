document.addEventListener("DOMContentLoaded", function(){
    const TAU = Zdog.TAU;
    const offWhite = '#FED';
    const gold = '#EA0';
    const garnet = '#C25';
    const eggplant = '#636';

    const illo = new Zdog.Illustration({
        element: '.zdog-canvas',
        zoom: 10,
        dragRotate: true,
        rotate: {  y: -TAU/8,  }
    });

    let hipX = 3;

    let hips = new Zdog.Shape({
        addTo: illo,
        path: [ { x: -hipX }, { x: hipX } ],
        stroke: 4,
        translate: { y: 2 },
        color: '#636',
    });

    let spine = new Zdog.Anchor({
        addTo: hips,
        rotate: { x: TAU/8 },
    });

    let leg = new Zdog.Shape({
        addTo: hips,
        path: [ { y: 0 }, { y: 6 } ],
        translate: { x: -hipX },
        rotate: { x: TAU/4 },
        color: '#636',
        stroke: 4,
    });

    // foot
    let foot = new Zdog.RoundedRect({
        addTo: leg,
        width: 2,
        height: 3,
        cornerRadius: 1,
        // y: past leg end, z: scootch toward front
        translate: { y: 8, z: 2 },
        color: '#C25',
        fill: true,
        stroke: 4,
        rotate: { x: TAU/4 }
    });

    let standLeg = leg.copy({
        translate: { x: hipX },
        rotate: { x: -TAU/8 },
    });

    foot.copy({
        addTo: standLeg,
        rotate: { x: -TAU/8 },
    });

    let chest = new Zdog.Shape({
        addTo: spine,
        path: [ { x: -1.5 }, { x: 1.5 } ],
        // position right above hips
        // ( hips.stroke + chest.stroke ) / 2
        translate: { y: -6.5 },
        stroke: 9,
        color: '#C25',
    });

    var armSize = 4;

    // left arm
    let upperArm = new Zdog.Shape({
        addTo: chest,
        path: [ { y: 0 }, { y: armSize } ],
        translate: { x: -5, y: -2 },
        rotate: { x: -TAU/4 },
        color: '#636',
        stroke: 4,
    });

    let forearm = new Zdog.Shape({
        addTo: upperArm,
        path: [ { y: 0 }, { y: armSize } ],
        translate: { y: armSize },
        rotate: { x: TAU/8 },
        color: '#FC9',
        stroke: 4,
    });

    // hand
    new Zdog.Shape({
        addTo: forearm,
        // connect to end of forearm
        // scootch toward front a bit
        translate: { y: armSize, z: 1 },
        stroke: 4.5,
        color: '#FC9',
    });



    // copy to right arm
    upperArm.copyGraph({
        translate: { x: 5, y: -2 },
        rotate: { x: TAU/4 },
    });

    let head = new Zdog.Hemisphere({
        addTo: chest,
        diameter: 12,
        stroke: false,
        // position above chest
        translate: { y: -9.5 },
        rotate: { y: TAU/-1.1 },
        color: '#FC9',
        backface: '#412'
    });

    let bang = new Zdog.Ellipse({
        addTo: head,
        diameter: 10,
        quarters: 2,
        stroke: 1,
        color: '#412',
        fill: true,
        backface: true,
        translate: { z: 5, y: -3 },
        rotate: { z: TAU/-4, x: TAU/9 },
    });

    let hair = new Zdog.Hemisphere({
        addTo: head,
        diameter: 14,
        // fill enabled by default
        // disable stroke for crisp edge
        stroke: false,
        backface: true,
        color: '#412',
        rotate: { z: TAU/-4, x: TAU/2,},
      });

      let roundedRect = new Zdog.RoundedRect({
        addTo: head,
        width: 15,
        height: 6,
        stroke: 8,
        cornerRadius: 30,
        rotate: { z: TAU/-4, x: TAU/3},
        translate: { z: -7, y: 1 },
        color: '#412',
        fill: true
      });

    // -- eyes --- //
    let eye = new Zdog.Shape({
        addTo: head,
        path: [
            { x: -3.5, z: 4.5, y: -1.5 }, // start at top left
            { x: -1.5, z: 4.5, y: -.5 }, // line to top right
            { x: -3.5, z:  4.5, y: .5 }, // line to bottom left
        ],
        closed: false,
        stroke: .5,
        color: "#333",
    });

    eye.copy({
        translate: { x: 0, y: -1, z: 0 },
        rotate: { z: TAU/2 },
    });
    // -- eyes --- //

    let semicircle = new Zdog.Ellipse({
        addTo: head,
        diameter: 1,
        quarters: 2,
        stroke: .3,
        translate: { y: 0, z: 4.5 },
        rotate: { z: TAU/1 },
    });

    // -- smile --- //
    new Zdog.Ellipse({
        addTo: head,
        diameter: 4,
        quarters: 2,
        translate: { y: 1.5, z: 4.5 },
        rotate: { z: TAU/4 },
        closed: true,
        color: '#fff',
        stroke: 0.5,
        fill: true,
        backface: false,
    });
    // -- smile --- //

    let mydog = new Zdog.Anchor({
        addTo: illo,
        translate: {
            x: -4,
            y: -5,
            z: 0
        },
    });

    let dogbody = new Zdog.Shape({
        addTo: mydog,
        color: '#fff',
        stroke: 8,
        translate: {
            x: -9,
            y: 8,
            z: -7
        },
        rotate: {
            y: TAU/4
        },
    });


    let doglegs = new Zdog.Group({
        addTo: dogbody,
        // rotate: { x: TAU/8 },
    });


    let dogleg = new Zdog.Shape({
        addTo: doglegs,
        path: [
          { z:1.5, x: 3, y:1 }, // start at 1st point
          { z:1.5, x: 3 , y:7}, // line to 2nd point
        ],
        stroke: 2,
        color: '#fff',
        rotate: {
            z: TAU/-20
        },
      });

    let dogfoot = new Zdog.RoundedRect({
        addTo: doglegs,
        width: 2,
        height: 1,
        cornerRadius: 3,
        stroke: 2,
        color: '#fff',
        translate: {
            x: 6,
            y: 7,
            z: 1.5
        },
        rotate: {
            x: TAU/4
        },
        
    });

    dogleg.copy({
        translate: {
            z: -3,
            y: -2
        },
        rotate: {
            z: TAU/20
        },
        color:"#fff"
    })

    dogleg.copy({
        translate: {
            x: -9,
            y: -1
        },
        rotate: {
            z: TAU/20
        },
        color:"#fff"
    })

    dogleg.copy({
        translate: {
            x: -10,
            z: -3,
            y: 0
        },
        rotate: {
            z: TAU/-20
        },
        
    })


    dogfoot.copy({
        translate: {
            x: 1.5,
            y: 7,
            z: -1.5
        },
        color:"#fff"
    });

    dogfoot.copy({
        translate: {
            x: -4,
            y: 7,
            z: -1.5
        },
        color:"#fff"
    });

    dogfoot.copy({
        translate: {
            x: -7.5,
            y: 7,
            z: 1.5
        },
        rotate: {
            z: TAU/20
        },
        color:"#fff"
    });


    let dogbody2 = new Zdog.Shape({
        addTo: mydog,
        color: '#fff',
        stroke: 8,
        translate: {
            x: -9,
            y: 8,
            z: -12
        },
        rotate: {
            y: TAU/4
        },
    });

    let dogHead = new Zdog.Shape({
        addTo: mydog,
        color: '#fff',
        stroke: 7,
        translate: {
            x: -9,
            y: 2,
            z: -4
        },
        rotate: {
            y: TAU/1
        },
    });

    let dogEye = new Zdog.Hemisphere({
        addTo: dogHead,
        diameter: 1,
        // fill enabled by default
        // disable stroke for crisp edge
        stroke: false,
        color: '#333',
        backface: '#333',
        translate: { x:1.5 ,y:-1 ,z: 3 }, 
    });

    dogEye.copy({
        translate: { x:-1.5 ,y:-1 ,z: 3 }, 
    });

    //tail
    new Zdog.Shape({
        addTo: mydog,
        path: [
          { x: -9, y: 6, z: -15 },   // start
           { bezier: [
            { x: -9, y: 4, z: -16 }, // start control point
            { x: -9, y: 1, z: -13 }, // end control point
            { x: -9, y: 1, z: -12 }, // end point
           ]},
        ],
        closed: false,
        stroke: 2,
        color: '#fff'
    });

    //ear
    let dogear = new Zdog.Shape({
        addTo: mydog,
        path: [
          { x:   -12, y: 0 , z:-3},
          { x:  -11.5,y:  -2.5 , z:-3},
          { x: -10, y:  0 , z:-3},
        ],
        closed: false, // unclosed
        stroke: 1,
        color: '#fff',
        fill: true
    });

    dogear.copy({
        translate: { x: 4, y: 0, z: 0 },  
        path: [
            { x:   -12, y: 0 , z:-3},
            { x:  -10.5,y:  -2.5 , z:-3},
            { x: -10, y:  0 , z:-3},
          ],   
    });

    let mouse = new Zdog.Cylinder({
        addTo: dogHead,
        diameter: 4,
        length: 5,
        stroke: false,
        color: '#fff',
        backface: '#fff',
        translate: { x: 0, y: 1.3, z: 1 }, 
      });


    let mouseEnd = new Zdog.Hemisphere({
        addTo: mouse,
        diameter: 4,
        // fill enabled by default
        // disable stroke for crisp edge
        stroke: false,
        color: '#fff',
        backface: '#fff',
        translate: { z: 2 }, 
    });

    // let tongue = new Zdog.Ellipse({
    //     addTo: mouseEnd,
    //     diameter: 1,
    //     quarters: 2,
    //     width: 3,
    //     stroke: .5,
    //     color: '#C25',
    //     fill:true,
    //     translate: { z: 1.8, y: .3 } ,
    //     rotate: {
    //         z: TAU/4
    //     },
    //   });

    let nose = new Zdog.Hemisphere({
        addTo: mouseEnd,
        diameter: 1,
        // fill enabled by default
        // disable stroke for crisp edge
        stroke: false,
        color: '#333',
        backface: '#333',
        translate: { y:-1 ,z: 1.5 }, 
        
    });
    
    

    // -- animate --- //

    function animate() {
        illo.updateRenderGraph();
        requestAnimationFrame( animate );
    }
    animate();
      
});
