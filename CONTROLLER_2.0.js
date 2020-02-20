function Startup (Battery, Floors, Columns, Cages){
    this.Battery = Battery;
    this.Floors = Floors;
    this.Columns = Columns;
    this.Cages = Cages;
};

function Elevator (Status, State, Lights, currentFloor, Direction, Speed, CageList, Doors, DoorTimer, Sensor){
    this.Status = Status;
    this.State = State;
    this.Lights = Lights;
    this.currentFloor = currentFloor;
    this.Direction = Direction;
    this.Speed = Speed;
    this.CageList = CageList;
    this.Doors = Doors;
    this.DoorTimer = DoorTimer;
    this.Sensor = Sensor;
};

let elevator01 = new Elevator("Idle", "Stopped", "On", null, null, null, 0, "Closed", 0, "UNBLOCKED");
let elevator02 = new Elevator("Idle", "Stopped", "On", null, null, null, 0, "Closed", 0, "UNBLOCKED");

console.log(elevator02.Status)
console.log(elevator01.State)