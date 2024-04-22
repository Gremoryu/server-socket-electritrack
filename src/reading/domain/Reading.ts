export class Reading {
    constructor(
        readonly room_id: number,
        readonly voltage: number,
        readonly current: number,
        readonly power: number,
        readonly energy: number,
        readonly frequency: number
    ) {}
}

//Datos a guardar
//energy

//Datos a enviar
//{"voltage":113.70,"current":0.00,"power":0.00,"energy":0.03,"frequency":60.00,"pf":0.00}