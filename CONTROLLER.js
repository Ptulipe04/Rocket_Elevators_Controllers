//******************************INITAL_ELEVATORS*****************************//
var INIT  = function(){
    
    var BATTERY = On 
    var numberofFLOORS = 10
    var COLUMNS = 1
    var numberofELEVATORS = 2
    

    FOR (numberofELEVATORS);{
        var Elevator = {
            Status:"IDLE",
            State:"STOPPED",
            Lights:"On",
            FLOOR:"1",
            Direction:"Empty",            
            Speed:"SLOW",
            RequestLISTS:"Empty",
            Doors:"Closed",
            DoorTimer:"0 secs ",
            Sensor:"UNBLOCKED ",     
        };
        var CallButton = {
            UP:"X",
            DOWN:"Y",
            Floor:"[1 - 10]",
            ButtonLight:"Off",
            ButtonLightTimer:"0 secs"
        };
        var RequestButton = {
            FloorSelect:"[1 - 10]",
            ButtonLight:"Off",
            ButtonLightTimer:"0 secs",
            FloorLIST:"Empty"
        };
        var RequestButton_OpenDoor = {
            Doors:"Closed",
            ButtonLight:"On"            
        };
        var RequestButton_CloseDoor = {
            Doors:"Open",
            ButtonLight:"On",
            Timer:"3 secs"
        };
    };
};
//******************************/INITAL ELEVATORS****************************//
var OpenDoors = function(){
    if ($(RequestButton_OpenDoor) = "Pressed"){
        $(Elevator.Doors) = "Open"
    }    
};
var CloseDoors = function(){
    if (($(RequestButton_CloseDoor) = "Pressed") && ($(Elevator.Sensor) = "UNBLOCKED")){
        $(Elevator.Doors) = "Close"
    }
    else if (Elevator.Sensor = "BLOCKED"){    
        $(Elevator.DoorTimer) = "5 secs"
        $(Elevator.Doors) = "OPEN"
    }
};
//---------------------------CallButton Request-------------------------//
function CallButton(){
    var current_floor = $(CallButton.Floor)

    while (Status = "IDLE") {
        if (($(CallButton.UP) = "Pressed" ) || ($(CallButton.DOWN) = "Pressed")){
            $(Elevator.RequestLISTS) = 1
            $(CallButton.ButtonLight) = "On"
            $(CallButton.ButtonLightTimer) = "3secs"
            if ($(Callbutton.ButtonLightTimer = 0)){
                $(CallButton.ButtonLight) = "Off"
            };
        }
        if ((current_floor < 10) && ($(CallButton) = X )){
            X = current_floor
            $(Elevator.Direction) = UP 
            // RETURN Elevator 
        }                      
        else if ((current_floor > 1) && ($(CallButton) = Y )){
            Y = current_Floor
            $(Elevator.Direction) = DOWN 
            // RETURN ELEVATOR  
        };
    };
    $(Elevator.State) = "Called"
};
//--------------------------/CallButton Request-------------------------//

//---------------------------CALL BUTTON Move ELEVATOR------------------------------//
SEQUENCE Move_ELEVATOR
    WHILE State = CALLED DO
        IF Elevator.FLOOR = CallButton.Floor THEN
            SET State = STOPPED
            INIT Doors = Open
        
        ELSE IF Elevator.FLOOR < CallButton.Floor THEN
            SET State = CALLED
            SET Elevator.Doors = CLOSED
            READ Elevator.Sensor
            IF Elevator.Sensor = Blocked THEN
                SET Elevator.Door Timer = 5 secs
                INIT Doors:OPEN
            ELSE
                INIT Doors:CLOSED
            ENDIF          
            FOR FLOOR = CallButton.Floor - 1 
                    INIT Speed = MAX
            ENDFOR
            FOR Elevator.FLOOR = CallButton.Floor 
                    INIT Speed = SLOW
            ENDFOR
            FOR when State is STOPPED                    
                    INIT Doors = Open
                    SET RequestLISTS = Empty
            ENDFOR
                    
        
        ELSE IF Elevator.FLOOR > CallButton.Floor THEN
            SET State = CALLED
                        SET Elevator.Doors = CLOSED
            READ Elevator.Sensor
            IF Elevator.Sensor = Blocked THEN
                SET Elevator.Door Timer = 5 secs
                INIT Doors:OPEN
            ELSE
                INIT Doors:CLOSED
            ENDIF 
            FOR Elevator.FLOOR = CallButton.Floor + 1 
                    INIT Speed = MAX
            ENDFOR
            FOR Elevator.FLOOR = CallButton.Floor 
                    INIT Speed = SLOW
            ENDFOR
            FOR State is STOPPED 
                    INIT Doors = Open
                    SET RequestLISTS = Empty                   
            ENDFOR
        ENDIF
    ENDWHILE
END SEQUENCE
//---------------------------/ Call Button Move ELEVATOR------------------------------//

//----------------------------Floor List----------------------------//
SEQUENCE GETFloorList
    WHILE State is STOPPED DO
        IF RequestButton is Pressed THEN 
            SET FloorLIST = 1
            INIT Button Light = On
            SET RequestButton. Button Light Timer = 4 secs
                IF Button Light Timer = 0 s THEN
                SET Button Light =  Off
                ENDIF
        ENDIF
END SEQUENCE        
//---------------------------/Floor List----------------------------//
//--------------------------Floor Selection-------------------------//
SEQUENCE FloorSelection
    OBTAIN GETFloorList
    FOR FloorLIST = 1
        IF Floor_Select = [1-5] THEN
            SET Floor_Select = A
            WHILE Floor_Select = A
                SET Elevator.Direction = A
                    FOR EACH Elevator in COLUMNS
                        OBTAIN Elevator.FLOOR
                    ENDFOR
                IF Elevator.Floor = A AND State = STOPPED THEN
                    Call Elevator to A
                ELSE Elevator.Floor = A AND State = CALLED AND Direction = [UP or DOWN]
                    RETURN Elevator
                ELSE Elevator.Floor > A
                    RETURN Elevator
                ENDIF
            ENDWHILE                    
        ENDIF
                    
        ELSE Floor_Select = [6-10] THEN
            SET Floor_Select = B
            WHILE Floor_Select = B
                SET Elevator.Direction = B
                    FOR EACH Elevator in COLUMNS
                        OBTAIN Elevator.FLOOR
                    ENDFOR
                IF Elevator.Floor = B AND State = STOPPED THEN
                    Call Elevator to B
                ELSE Elevator.Floor = B AND State = CALLED AND Direction = [UP or DOWN]
                    RETURN Elevator
                ELSE Elevator.Floor < B
                    RETURN Elevator
                ENDIF
            ENDWHILE 
        ENDIF            
    ENDFOR       
END SEQUENCE
//--------------------------Floor Selection-------------------------//

/*******************************CONTROLLER**********************************/

SEQUENCE ShortestRequestsLISTS
GET RequestLISTS
FOR EACH RequestLIST IN RequestLISTS
    IF RequestLIST.Length1 > RequestLIST.Length2 THEN
        RETURN Elevator
    ELSE RETURN Elevator
    END IF
END FOR
END SEQUENCE

SEQUENCE ShortestFloorRequestLISTS
GET FloorLIST
FOR EACH INCREMENT IN FloorLIST
    IF FloorLIST.Length1 > FloorLIST.Length2 THEN
        RETURN Elevator
    ELSE RETURN Elevator
    END IF
END FOR
END SEQUENCE  
    
//******************************/CONTROLLER**********************************//
