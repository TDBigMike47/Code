class Fecha{
    constructor(dia,mes,año){
        if(dia === "number" || mes === "number" || año === "number"){
r
            this._dia = dia;
            this._mes = mes;
            this._año = año;
            
        }else{
            throw new Error("alguno de los datos introducidos no es un número");
        }
       
    }
    addday(){
        if(this._mes==12){
            this._mes=1;
        }if(this._año==1999){
            this._año++;
        }if(this._dia ==31)
            this._dia =1;
        
        return ("La fecha a sido modificada ahora es: "+this._dia+"/"+this._mes+"/"+this._año+"/");
    }
    

    getdia(){
        return this._dia;
    }
    setdia(dia){
        this._dia = dia;

    }
    getmes(){
        return this._mes;
    }
    setmes(mes){
        this._mes = _mes;

    }
    getaño(){
        return this._año;
    }
    setaño(año){
        this._año = año;

    }

}