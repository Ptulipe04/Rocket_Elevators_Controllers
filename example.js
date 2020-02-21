"use strict";

var Controller =
  /*#__PURE__*/
  (function() {
    function Controller(Cages, Floors) {
      this.Floors = Floors;
      this.Cages = Cages;
      this.column = new Column(Floors, Cages);
    }

    var _proto = Controller.prototype;

    _proto.RequestElevator = function RequestElevator(FloorRequest, Direction) {
      if (FloorRequest > this.Floors || FloorRequest < 0) {
        return console.log("This Floor number is not valid!");
      } else {
        console.log("Elevator being called at floor number", FloorRequest);
        pause(2500);
        console.log(
          "Elevator",
          this.column.RequestList[0].elevator_number,
          "is currently at floor number",
          this.column.RequestList[0].currentElevatorPosition
        );
        pause(2500);
        console.log(
          "Elevator",
          this.column.RequestList[1].elevator_number,
          "is currently at floor number",
          this.column.RequestList[1].currentElevatorPosition
        );
        pause(2500);
        var nearestElevator = this.ElevatorSelector(FloorRequest, Direction);
        console.log("Sending Elevator", nearestElevator.elevator_number);
        pause(2500);
        nearestElevator.addToList(FloorRequest);
        nearestElevator.operateElevator();
        return nearestElevator;
      }
    };

    _proto.RequestFloor = function RequestFloor(elevator, FloorRequest) {
      if (elevator === undefined) {
        return;
      } else {
        elevator.InsideRequestButton(FloorRequest);
        elevator.addToList(FloorRequest);
        elevator.operateElevator();
      }
    };

    _proto.ElevatorSelector = function ElevatorSelector(FloorRequest) {
      var bestDifference = Math.floor(Math.random() * 10) + 1;
      var nearestElevator = null;

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
    };

    return Controller;
  })();

var Column =
  /*#__PURE__*/
  (function() {
    function Column(Floors, Cages) {
      this.Floors = Floors;
      this.Cages = Cages;
      this.RequestList = [];
      this.addElevators();
    }

    var _proto2 = Column.prototype;

    _proto2.addElevators = function addElevators() {
      for (var i = 0; i < this.Cages; i++) {
        var elevator = new Elevator(i + 1, this.Floors);
        this.RequestList.push(elevator);
      }
    };

    return Column;
  })();

var Elevator =
  /*#__PURE__*/
  (function() {
    function Elevator(elevator_number, Floors, Direction, Status) {
      this.elevator_number = elevator_number;
      this.Floors = Floors;
      this.Direction = Direction;
      this.Status = Status;
      this.Sensor = "Clear";
      this.requestFloorList = [];
      this.currentElevatorPosition = Math.floor(Math.random() * 10) + 1;
    }

    var _proto3 = Elevator.prototype;

    _proto3.operateElevator = function operateElevator() {
      var FloorRequest = this.requestFloorList.shift();

      if (this.currentElevatorPosition === FloorRequest) {
        console.log(
          "Elevator",
          this.elevator_number,
          "has arrived at floor number",
          this.currentElevatorPosition
        );
      } else {
        while (this.currentElevatorPosition != FloorRequest) {
          if (this.currentElevatorPosition > FloorRequest) {
            this.moveDown();
            console.log(
              "Currently at",
              this.currentElevatorPosition,
              "Going Down"
            );
            pause(2000);
          } else if (this.currentElevatorPosition < FloorRequest) {
            this.moveUp();
            console.log(
              "Currently at",
              this.currentElevatorPosition,
              "Going up"
            );
            pause(2000);
          }
        }

        console.log(
          "Elevator",
          this.elevator_number,
          "has arrived at floor number",
          this.currentElevatorPosition
        );
        pause(2500);
        this.openDoors();
        this.closeDoors();
      }
    };

    _proto3.moveDown = function moveDown() {
      this.Status = "Called";
      this.Direction = "Down";
      this.currentElevatorPosition--;
      pause(1500);
    };

    _proto3.moveUp = function moveUp() {
      this.Status = "Called";
      this.Direction = "Up";
      this.currentElevatorPosition++;
      pause(1500);
    };

    _proto3.addToList = function addToList(FloorRequest) {
      this.requestFloorList.push(FloorRequest);

      if (this.Direction == "Up") {
        this.requestFloorList.sort();
      } else if (this.Direction == "Down") {
        this.requestFloorList.sort().reverse();
      }
    };

    _proto3.InsideRequestButton = function InsideRequestButton(FloorRequest) {
      console.log(
        "Someone on floor number",
        FloorRequest,
        "requesting service.",
        " Now sending elevator",
        this.elevator_number,
        ", which is at floor",
        this.currentElevatorPosition,
        "."
      );
      pause(2500);
    };

    _proto3.openDoors = function openDoors() {
      console.log(
        "Opening doors at floor number",
        this.currentElevatorPosition,
        "."
      );
      pause(2500);
    };

    _proto3.closeDoors = function closeDoors() {
      console.log("Closing doors");
      pause(2500);
    };

    return Elevator;
  })();

function pause(miliseconds) {
  var start = new Date().getTime();

  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > miliseconds) {
      break;
    }
  }
}

var controller = new Controller(2, 10);
controller.column.RequestList[0].currentElevatorPosition =
  Math.floor(Math.random() * 4) + 1;
controller.column.RequestList[1].currentElevatorPosition =
  Math.floor(Math.random() * 10) + 1;
RequestElevatorNumber1 = controller.RequestElevator(6, "Up");
controller.RequestFloor(
  RequestElevatorNumber1,
  Math.floor(Math.random() * 10) + 1
);
