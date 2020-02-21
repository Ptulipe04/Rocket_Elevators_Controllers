class Controller {
	constructor(Cages, Floors) {
		this.Floors = Floors;
		this.Cages = Cages;
		this.column = new Column(Floors, Cages);
	}

	RequestElevator(FloorRequest, Direction) {

		if (FloorRequest > this.Floors || FloorRequest < 0) {
			return console.log("This Floor number is not valid!");
        } 
        else {
			console.log("Elevator being called at floor number", FloorRequest);
			pause(2500);
			console.log(
				"Elevator", this.column.RequestList[0].elevator_number,
				"is currently at floor number", this.column.RequestList[0].currentElevatorPosition);
			pause(2500);
			
			console.log("Elevator", this.column.RequestList[1].elevator_number,
				"is currently at floor number", this.column.RequestList[1].currentElevatorPosition);
			pause(2500);

			var nearestElevator = this.ElevatorSelector(FloorRequest, Direction);
			console.log("Sending Elevator", nearestElevator.elevator_number);
			pause(2500);

			nearestElevator.addToList(FloorRequest);
			nearestElevator.operateElevator();
			return nearestElevator;
		}
    }
    
	RequestFloor(elevator, FloorRequest) {
        
        if (elevator === undefined) {
			return;
        } 
        else {
			elevator.InsideRequestButton(FloorRequest);
			elevator.addToList(FloorRequest);
			elevator.operateElevator();
		}
    }
    
	ElevatorSelector(FloorRequest) {
		let bestDifference = Math.floor(Math.random() * 10) + 1;
		let nearestElevator = null;
		
		for (var i = 0; i < this.column.RequestList.length; i++) {
			var differenceFloor = Math.abs(
				FloorRequest - this.column.RequestList[i].currentElevatorPosition
			);
			if (differenceFloor < bestDifference) {
				bestDifference = differenceFloor;
				nearestElevator = i;
            }
		}
		return this.column.RequestList[nearestElevator];
	}
}

class Column {
	constructor(Floors, Cages) {
		this.Floors = Floors;
		this.Cages = Cages;
		this.RequestList = [];
		this.addElevators();
    }
    
	addElevators() {
		for (let i = 0; i < this.Cages; i++) {
			let elevator = new Elevator(i + 1, this.Floors);
			this.RequestList.push(elevator);
		}
	}
}

class Elevator {
	constructor(elevator_number, Floors, Direction, Status) {
		this.elevator_number = elevator_number;
		this.Floors = Floors;
		this.Direction = Direction;
        this.Status = Status;
        this.Sensor = "Clear";
		this.requestFloorList = [];
        this.currentElevatorPosition = Math.floor(Math.random() * 10) + 1;
        
	}

	operateElevator() {
		let FloorRequest = this.requestFloorList.shift();
		if (this.currentElevatorPosition === FloorRequest) {
			console.log(
				"Elevator",
				this.elevator_number,
				"has arrived at floor number",
				this.currentElevatorPosition
			);
        } 
        else {
			while (this.currentElevatorPosition != FloorRequest) {
				if (this.currentElevatorPosition > FloorRequest) {
					this.moveDown();
					console.log("Currently at", this.currentElevatorPosition, "Going Down");
					pause(2000);
                } 
                else if (this.currentElevatorPosition < FloorRequest) {
					this.moveUp();
					console.log("Currently at", this.currentElevatorPosition, "Going up");
					pause(2000);
				}
			}
			console.log("Elevator", this.elevator_number,"has arrived at floor number",
				        this.currentElevatorPosition);
			pause(2500);
			this.openDoors();
            this.closeDoors();           
		}
	}

	moveDown() {
        this.Status = "Called";
		this.Direction = "Down";
		this.currentElevatorPosition --;
		pause(1500);
	}

	moveUp() {
        this.Status = "Called";
		this.Direction = "Up";
		this.currentElevatorPosition ++;
		pause(1500);
	}

	addToList(FloorRequest) {
		this.requestFloorList.push(FloorRequest);
		if (this.Direction == "Up") {
			this.requestFloorList.sort();
        }
        else if (this.Direction == "Down") {
			this.requestFloorList.sort().reverse();
		}
	}

	InsideRequestButton(FloorRequest) {
		console.log(
            "Someone on floor number", FloorRequest, "requesting service."," Now sending elevator", this.elevator_number,", which is at floor",this.currentElevatorPosition,".");
		pause(2500);
    }

	openDoors() {
		console.log("Opening doors at floor number", this.currentElevatorPosition,".");
        pause(2500);        
    }
     
	closeDoors() {
		console.log("Closing doors");
        pause(2500);        
	}
}

function pause(miliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if (new Date().getTime() - start > miliseconds) {
			break;
		}
	}
}

const controller = new Controller(2, 10);

controller.column.RequestList[0].currentElevatorPosition = Math.floor(Math.random() * 4) + 1;
controller.column.RequestList[1].currentElevatorPosition = Math.floor(Math.random() * 10) + 1;
RequestElevatorNumber1 = controller.RequestElevator(6, "Up");
controller.RequestFloor(RequestElevatorNumber1, Math.floor(Math.random() * 10) + 1);