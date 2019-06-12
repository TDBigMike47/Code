class Vector{
    constructor(a){
        if(!(Array.isArray(a)))
            throw new Error("Se debe introducir un array");
        else if(a.some((x) => typeof x != "number"));
            throw new Error()
        
        this._a=a;

    }
    //El menor de los datos del array
    min(){

    }
    //el mayor de los datos del array
    max(){

    }
    //La suma de los datos del array
    sum(){

    }
    //promedio de los datos del array
    avg(){

    }
    //vectorizar de (0 a 1, 10 puntos)
    vectorize(originpoint, endpoint, numberofpoints){
        res=(endpoint-originpoint)/numberofpoints;
        array=[];
        array.push[0];
        for(i=originpoint; i<endpoint; i++){
            array[i]=res;
        }
    }

    //me regresa los elementos del vector
    getData(){
        return this._a;
    }
}