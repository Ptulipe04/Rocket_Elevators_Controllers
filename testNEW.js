class Battery {
	constructor(nbElevators, nbFloors) {
		this.nbFloors = nbFloors;
		this.nbElevators = nbElevators;
		this.column = new Column(nbFloors, nbElevators);
	}

	RequestElevator(requestedFloorNumber, direction) {

		if (requestedFloorNumber > this.nbFloors || requestedFloorNumber < 0) {
			return console.log("This Floor number is not valid!");
		} else {
			console.log("Elevator requested at floor number", requestedFloorNumber);
			sleep(2000);
			console.log(
				"Elevator", this.column.elevatorsList[0].elevator_number,
				"is currently at floor number", this.column.elevatorsList[0].currentElevatorPosition);
			sleep(2000);
			
			console.log("Elevator", this.column.elevatorsList[1].elevator_number,
				"is currently at floor number", this.column.elevatorsList[1].currentElevatorPosition);
			sleep(2000);

			var nearestElevator = this.selectElevator(requestedFloorNumber, direction);
			console.log("Returning Elevator", nearestElevator.elevator_number);
			sleep(2000);

			nearestElevator.addToList(requestedFloorNumber);
			nearestElevator.operateElevator();
			return nearestElevator;
		}
	}
	RequestFloor(elevator, requestedFloorNumber) {
		if (elevator === undefined) {
			return;
		} else {
			elevator.activateInsideButton(requestedFloorNumber);
			elevator.addToList(requestedFloorNumber);
			elevator.operateElevator();
		}
	}
	selectElevator(requestedFloorNumber, direction) {
		let bestDifference = 10;
		let nearestElevator = null;
		
		for (var i = 0; i < this.column.elevatorsList.length; i++) {
			var differenceFloor = Math.abs(
				requestedFloorNumber - this.column.elevatorsList[i].currentElevatorPosition
			);
			if (differenceFloor < bestDifference) {
				bestDifference = differenceFloor;
				nearestElevator = i;
			}
		}
		return this.column.elevatorsList[nearestElevator];
	}
}

class Column {
	constructor(nbFloors, nbElevators) {
		this.nbFloors = nbFloors;
		this.nbElevators = nbElevators;
		this.elevatorsList = [];
		this.addElevators();
	}
	addElevators() {
		for (let i = 0; i < this.nbElevators; i++) {
			let elevator = new Elevator(i + 1, this.nbFloors);
			this.elevatorsList.push(elevator);
		}
	}
}

class Elevator {
	constructor(elevator_number, nbFloors, direction, status) {
		this.elevator_number = elevator_number;
		this.nbFloors = nbFloors;
		this.direction = "Stop";
		this.status = "idle";
		this.requestFloorList = [];
		this.currentElevatorPosition = 0;
	}

	operateElevator() {
		let requestedFloorNumber = this.requestFloorList.shift();
		if (this.currentElevatorPosition === requestedFloorNumber) {
			console.log(
				"Elevator",
				this.elevator_number,
				"arrived at floor number",
				this.currentElevatorPosition
			);
		} else {
			while (this.currentElevatorPosition != requestedFloorNumber) {
				if (this.currentElevatorPosition > requestedFloorNumber) {
					this.moveDown();
					console.log("AT", this.currentElevatorPosition, "Going Down");
					sleep(2000);
				} else if (this.currentElevatorPosition < requestedFloorNumber) {
					this.moveUp();
					console.log("AT", this.currentElevatorPosition, "Going up");
					sleep(2000);
				}
			}
			console.log("Elevator", this.elevator_number,"arrived at floor number",
				        this.currentElevatorPosition);
			sleep(2000);
			this.openDoors();
			this.closeDoors();
		}
	}

	moveDown() {
        this.status = "Moving";
		this.direction = "Down";
		this.currentElevatorPosition --;
		sleep(2000);
	}

	moveUp() {
        this.status = "Moving";
		this.direction = "Up";
		this.currentElevatorPosition ++;
		sleep(2000);
	}

	addToList(requestedFloorNumber) {
		this.requestFloorList.push(requestedFloorNumber);
		if (this.direction == "Up") {
			this.requestFloorList.sort();
		} else if (this.direction == "Down") {
			this.requestFloorList.sort().reverse();
		}
	}

	activateInsideButton(requestedFloorNumber) {
		console.log(
			"In Elevator", this.elevator_number,", which is at floor",this.currentElevatorPosition,
			",","floor number", requestedFloorNumber, "is requested");
		sleep(2000);
	}
	openDoors() {
		console.log("Opening doors at floor number", this.currentElevatorPosition);
		sleep(2000);
	}

	closeDoors() {
		console.log("Closing doors");
		sleep(2000);
	}
}

function sleep(miliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if (new Date().getTime() - start > miliseconds) {
			break;
		}
	}
}

const battery = new Battery(2, 10);

battery.column.elevatorsList[0].currentElevatorPosition = 2;
battery.column.elevatorsList[1].currentElevatorPosition = 6;
RequestElevatorNumber1 = battery.RequestElevator(3, "Up");
battery.RequestFloor(RequestElevatorNumber1, 7);
