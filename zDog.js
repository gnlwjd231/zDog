document.addEventListener("DOMContentLoaded", function(){
    const TAU = Zdog.TAU;
    const offWhite = '#FED';
    const gold = '#EA0';
    const garnet = '#C25';
    const eggplant = '#636';

    const illo = new Zdog.Illustration({
        element: '.zdog-canvas',
        zoom: 40,
        dragRotate: true,
        
    });

    const head = new Zdog.Shape({
        addTo: illo,
        stroke: 12,
        color: gold,
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
        color: '#FED',
        stroke: 0.5,
        fill: true,
        backface: false,
    });
    // -- smile --- //

    // -- animate --- //

    function animate() {
        illo.updateRenderGraph();
        requestAnimationFrame( animate );
    }
    animate();
      
});
