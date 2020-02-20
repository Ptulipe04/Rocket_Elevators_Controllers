function Startup (Battery, Floors, Columns, Cages){
    this.Battery = Battery;
    this.Floors = Floors;
    this.Columns = Columns;
    this.Cages = Cages;
};

function Elevators (Status, State, Lights, Floor, Direction, Speed, CageList, Doors, DoorTimer, Sensor){
    this.Status = Status;
    this.State = State;
    this.Lights = Lights;
    this.Floor = Floor;
    this.Direction = Direction;
    this.Speed = Speed;
    this.CageList = CageList;
    this.Doors = Doors;
    this.DoorTimer = DoorTimer;
    this.Sensor = Sensor;
};