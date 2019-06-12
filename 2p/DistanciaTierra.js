
var planetas={

    mercury:{
        diameter: 3100,
        distance: 36 ,
        timeOrbit: 88,
        timeRotate: 59 + " dias"
    },

    venus:{
        diameter: 7700,
        distance: 67 ,
        timeOrbit: 255 ,
        timeRotate: 244 + " dias"
    },

    tierra:{
        diameter: 7920 ,
        distance: 93 ,
        timeOrbit: 365 ,
        timeRotate: 24 + " horas"
    },

    marte:{
        diameter: 4200 ,
        distance: 141 ,
        timeOrbit: 687,
        timeRotate: 24 + " horas" + 24 + " mins"
    },

    jupiter:{
        diameter: 88640,
        distance: 483 ,
        timeOrbit: 11.9 ,
        timeRotate: 9 + " horas," + 50 + " mins"
    },

    saturno:{
        diameter: 74500 ,
        distance: 886,
        timeOrbit: 29.5 ,
        timeRotate: 10 + " horas," + 39 + " mins"
    },
    urano:{
        diameter: 32000 ,
        distance: 1782 ,
        timeOrbit: 84 ,
        timeRotate: 23 + " horas" 
    },
    neptuno:{
        diameter: 31000 ,
        distance: 2793 ,
        timeOrbit: 165 ,
        timeRotate: 15 + " horas," + 48 + " mins"
    },
    pluton:{
        diameter: 1500 ,
        distance: 3670 ,
        timeOrbit: 248 ,
        timeRotate: 6 + " dias," + 7 + " horas"
    },
}

function distanciaPlanetas(x,y){
    d= Math.abs(x-y);
    return d;
}

console.log(distanciaPlanetas(planetas.earth.distance,
    planetas.pluton.distance)  + " millones de millas");