//******************************INITAL_ELEVATORS*****************************//
    
var BATTERY = On 
var FLOORS = [10]
var COLUMNS = 1
var ELEVATORS = [2] 

var Elevator = {
    Status: IDLE,
    State: null, // 0 = STOPPED, 1= CALLED//
    Lights: On, 
    FLOOR: FLOORS[1], 
    Direction: null, // 0 = default, 1 = UP, 2 = DOWN//       
    Speed: 0, // 0 = none, 1 = SLOW, 2 = MAX//
    RequestLISTS: 0,
    Doors: 0, //0 = Closed, 1 = Open//
    DoorTimer: 0 , //seconds//
    Sensor: 0, // 0 = UNBLOCKED, 1= BLOCKED//    
};
var CallButton = {
    State: null,
    UP: X,
    DOWN: Y,
    Floor: FLOORS,
    ButtonLight: On,
    ButtonLightTimer: 0 //seconds//
}
var RequestButton = {
    State: null,
    FloorSelect: FLOORS,
    ButtonLight: On, 
    ButtonLightTimer: 0, 
    FloorLIST: 0
};
var RequestButton_OpenDoor = {
    Doors: "Closed",
    ButtonLight: "On"            
};
var RequestButton_CloseDoor = {
    Doors: "Open", 
    ButtonLight: "On",
    Timer: 3
};
    

//******************************/INITAL ELEVATORS****************************//
var OpenDoors = function(){
    if (INIT.RequestButton.OpenDoor.State = 0 ){
        Elevator.Doors = "Open"
    }    
};

// var CloseDoors = function(){
//     if ((INIT.RequestButton_CloseDoor = 1) && ($(Elevator.Sensor) = 1)){
//         $(Elevator.Doors) = 0 //CLOSED//
//     }
//     else if (Elevator.Sensor = "BLOCKED"){    
//         $(Elevator.DoorTimer) = "5 secs"
//         $(Elevator.Doors) = "OPEN"
//     }
// };
// //---------------------------CallButton Request-------------------------//
// var CallButton = function(){
//     var current_floor = $(CallButton.Floor)

//     while (Status = "IDLE") {
//         if (($(CallButton.UP) = "Pressed" ) || ($(CallButton.DOWN) = "Pressed")){
//             $(Elevator.RequestLISTS) = 1
//             $(CallButton.ButtonLight) = "On"
//             $(CallButton.ButtonLightTimer) = "3secs"
//             if ($(Callbutton.ButtonLightTimer = 0)){
//                 $(CallButton.ButtonLight) = "Off"
//             };
//         }
//         if ((current_floor < 10) && ($(CallButton) = X )){
//             X = current_floor
//             $(Elevator.Direction) = UP 
//             // RETURN Elevator 
//         }                      
//         else if ((current_floor > 1) && ($(CallButton) = Y )){
//             Y = current_Floor
//             $(Elevator.Direction) = DOWN 
//             // RETURN ELEVATOR  
//         };
//     };
//     $(Elevator.State) = "Called"
// };
// //--------------------------/CallButton Request-------------------------//

// //---------------------------CALL BUTTON Move ELEVATOR------------------------------//
// var Move_ELEVATOR = function(){
//     var current_floor = $(CallButton.Floor) 
//     while ($(Elevator.State) = "Called"){
//         if (($(Elevator.FLOOR)) = current_floor){
//             $(Elevator.State) = "STOPPED"
//             $(Elevator.Doors) = "Open"
//         }        
//         else if ($(Elevator.FLOOR) < current_floor){
//             $(Elevator.State) = "Called"
//             $(Elevator.Doors) = "Closed"
//             // get Elevator.Sensor
//             if ($(Elevator.Sensor) = "Blocked" ){
//                 $(Elevator.DoorTimer) = "5 secs"
//                 $(Elevator.Doors) = "Open"
//             }                
//             else{
//                 $(Elevator.Doors) = "Closed"
//             }          
//             for ($(Elevator.FLOOR) = (current_floor - 1));{
//                 $(Elevator.Speed) = "MAX"
//             }
//             for ($(Elevator.FLOOR) = current_floor);{
//                 $(Elevator.Speed) = "SLOW"
//             }
//             for ($(Elevator.State) = STOPPED);{
//                 $(Elevator.Doors) = Open
//                     $(Elevator.RequestLISTS) = "Empty"
//             }
//         }         
//         else if ($(Elevator.FLOOR) > current_floor) {
//             $(Elevator.State) = "Called"
//             $(Elevator.Doors) = "Closed"
//             // READ Elevator.Sensor
//             if ($(Elevator.Sensor) = "Blocked" ){
//                 $(Elevator.DoorTimer) = "5 secs"
//                 $(Elevator.Doors) = "Open"
//             }                
//             else{
//                 $(Elevator.Doors) = "Closed"
//             }          
//             for ($(Elevator.FLOOR) = (current_floor + 1));{
//                 $(Elevator.Speed) = "MAX"
//             }
//             for ($(Elevator.FLOOR) = current_floor);{
//                 $(Elevator.Speed) = "SLOW"
//             }
//             for ($(Elevator.State) = STOPPED);{
//                 $(Elevator.Doors) = Open
//                     $(Elevator.RequestLISTS) = "Empty"
//             }
//         };
//     };
// };

// //---------------------------/ Call Button Move ELEVATOR------------------------------//

// //----------------------------Floor List----------------------------//
// var GETFloorList = function(){
//     while ($(Elevator.State) = "STOPPED"){
//         if ($(RequestButton) = "Pressed"){
//             $(RequestButton.FloorLIST) = 1
//             $(RequestButton.ButtonLight) = "On"
//             $(RequestButton.ButtonLightTimer) = "4 secs"
//                 if ($(ButtonLightTimer) = 0){
//                     $(ButtonLight) =  Off
//                 }                
//         }
//     }
// };        
// //---------------------------/Floor List----------------------------//
// //--------------------------Floor Selection-------------------------//
// var FloorSelection = function(){
//     var FloorLIST = $(RequestButton.Floorlist)
//     var Floor_Selection = $(RequestButton.Floor_Select)
//     while (FloorLIST = 1);  {
//         if (Floor_Selection = [1-5]){
//             var Floor_Select = A
//             while (Floor_Select = A){
//                 $(Elevator.Direction) = A
//                     for ($(numberofELEVATORS) in COLUMNS;;){
//                         getSelection( $(Elevator.FLOOR))
//                     };
//                 if (($(Elevator.Floor) = A)  && ($(Elevator.State) = "STOPPED")){
//                     $(Elevator.Direction) = A
//                 }
//                 else if (($(Elevator.Floor) = A) && ($(Elevator.State) = "CALLED")){
//                      $(Elevator) = RETURN
//                 }                    
//                 else if (Elevator.Floor > A){
//                     $(Elevator) = Return
//                 }
//             }            
//         }                 
//         else if (Floor_Selection = [6-10] ){
//             var Floor_Select = B
//             while (Floor_Select = B){
//                 $(Elevator.Direction) = B
//                     for ($(numberofELEVATORS) in COLUMNS);{
//                         getSelection( $(Elevator.FLOOR))
//                     };
//                 if (($(Elevator.Floor) = B)  && ($(Elevator.State) = "STOPPED")){
//                     $(Elevator.Direction) = B
//                 }
//                 else if (($(Elevator.Floor) = B) && ($(Elevator.State) = "CALLED")){
//                     $(Elevator) = RETURN
//                 }                    
//                 else if (Elevator.Floor < B){
//                     $(Elevator) = Return
//                 }
//             }
//         } 
//     };  
// };
// //--------------------------Floor Selection-------------------------//

// /*******************************CONTROLLER**********************************/

// var ShortestRequestsLISTS = function(){
//     getSelection($(Elevator.RequestLISTS)) 
//     for ($(Elevator.RequestLIST) = RequestLISTS;;){
//         if (RequestLIST.Length1 > RequestLIST.Length2){
//             $(Elevator) = RETURN
//         }
//         else ($(Elevator) = RETURN)
//     }
// };

// var ShortestFloorRequestLISTS = function(){
//     getSelection($(RequestButton.FloorLIST).value())
//     var F = 1
//     while ($(RequestButton.FloorLIST).value() = F++){
//         if (FloorLIST.Length1 > FloorLIST.Length2) {
//             $(Elevator) = RETURN
//         }
//         else ($(Elevator) = RETURN)
//     };
// };
// //******************************/CONTROLLER**********************************//
