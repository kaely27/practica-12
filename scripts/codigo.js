class animal{
    constructor(numPatas, tieneCola, tienePelo){
        let patas = numPatas;
        let cola = tieneCola;
        let pelo = tienePelo;

        this.getPatas = function(){
            return patas;
        }

        this.setPatas = function(nuevasPatas){
            patas = nuevasPatas;
        }
        this.getCola = function(){
            return cola;
        }

        this.setCola = function(nuevaCola){
            cola = nuevaCola;
        }
        this.getPelo = function(){
            return pelo;
        }

        this.setPelo = function(nuevoPelo){
            pelo = nuevoPelo;
        }

        this.comer = function(){
            console.log("Estoy comiendo");
        }
       
        this.dormir = function(){
            console.log("Zzz");
        }
        this.desechar = function(){
            console.log("Estoy ocupado");
        }
    }
}