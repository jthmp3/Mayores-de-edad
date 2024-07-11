export default class Cl_personas {
    constructor(){
        this.contTotal = 0;
        this.contMayores = 0;

    }

    procesarDatos(data){

        this.contTotal++;

        if(data.edad >= 18){
            this.contMayores++;
        }    
    }

    porcentajeMayores(){
        return (this.contMayores / this.contTotal * 100).toFixed(2);
    }
    
}