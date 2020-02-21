__all__ = ['brandnew']

# Don't look below, you will not understand self Python code :) I don't.

from js2py.pyjs import *
# setting scope
var = Scope( JS_BUILTINS )
set_global_object(var)

# Code follows:
var.registers(['Controller', 'Column', 'pause', 'Elevator', 'controller'])
@Js
def PyJsHoisted_pause_(miliseconds, self, arguments, var=var):
    var = Scope({'miliseconds':miliseconds, 'self':self, 'arguments':arguments}, var)
    var.registers(['start', 'miliseconds', 'i'])
    var.put('start', var.get('Date').create().callprop('getTime'))
    #for JS loop
    var.put('i', Js(0.0))
    while (var.get('i')<Js(10000000.0)):
        try:
            if ((var.get('Date').create().callprop('getTime')-var.get('start'))>var.get('miliseconds')):
                break
        finally:
                (var.put('i',Js(var.get('i').to_number())+Js(1))-Js(1))
PyJsHoisted_pause_.func_name = 'pause'
var.put('pause', PyJsHoisted_pause_)
Js('use strict')
@Js
def PyJs_anonymous_0_(self, arguments, var=var):
    var = Scope({'self':self, 'arguments':arguments}, var)
    var.registers(['Controller', '_proto'])
    @Js
    def PyJsHoisted_Controller_(Cages, Floors, self, arguments, var=var):
        var = Scope({'Cages':Cages, 'Floors':Floors, 'self':self, 'arguments':arguments}, var)
        var.registers(['Floors', 'Cages'])
        var.get(u"self").put('Floors', var.get('Floors'))
        var.get(u"self").put('Cages', var.get('Cages'))
        var.get(u"self").put('column', var.get('Column').create(var.get('Floors'), var.get('Cages')))
    PyJsHoisted_Controller_.func_name = 'Controller'
    var.put('Controller', PyJsHoisted_Controller_)
    pass
    var.put('_proto', var.get('Controller').get('prototype'))
    @Js
    def PyJs_RequestElevator_1_(FloorRequest, Direction, self, arguments, var=var):
        var = Scope({'FloorRequest':FloorRequest, 'Direction':Direction, 'self':self, 'arguments':arguments, 'RequestElevator':PyJs_RequestElevator_1_}, var)
        var.registers(['FloorRequest', 'Direction', 'nearestElevator'])
        if ((var.get('FloorRequest')>var.get(u"self").get('Floors')) or (var.get('FloorRequest')<Js(0.0))):
            return var.get('console').callprop('log', Js('This Floor number is not valid!'))
        else:
            var.get('console').callprop('log', Js('Elevator being called at floor number'), var.get('FloorRequest'))
            var.get('pause')(Js(2500.0))
            var.get('console').callprop('log', Js('Elevator'), var.get(u"self").get('column').get('RequestList').get('0').get('elevator_number'), Js('is currently at floor number'), var.get(u"self").get('column').get('RequestList').get('0').get('currentElevatorPosition'))
            var.get('pause')(Js(2500.0))
            var.get('console').callprop('log', Js('Elevator'), var.get(u"self").get('column').get('RequestList').get('1').get('elevator_number'), Js('is currently at floor number'), var.get(u"self").get('column').get('RequestList').get('1').get('currentElevatorPosition'))
            var.get('pause')(Js(2500.0))
            var.put('nearestElevator', var.get(u"self").callprop('ElevatorSelector', var.get('FloorRequest'), var.get('Direction')))
            var.get('console').callprop('log', Js('Sending Elevator'), var.get('nearestElevator').get('elevator_number'))
            var.get('pause')(Js(2500.0))
            var.get('nearestElevator').callprop('addToList', var.get('FloorRequest'))
            var.get('nearestElevator').callprop('operateElevator')
            return var.get('nearestElevator')
    PyJs_RequestElevator_1_._set_name('RequestElevator')
    var.get('_proto').put('RequestElevator', PyJs_RequestElevator_1_)
    @Js
    def PyJs_RequestFloor_2_(elevator, FloorRequest, self, arguments, var=var):
        var = Scope({'elevator':elevator, 'FloorRequest':FloorRequest, 'self':self, 'arguments':arguments, 'RequestFloor':PyJs_RequestFloor_2_}, var)
        var.registers(['FloorRequest', 'elevator'])
        if PyJsStrictEq(var.get('elevator'),var.get('undefined')):
            return var.get('undefined')
        else:
            var.get('elevator').callprop('InsideRequestButton', var.get('FloorRequest'))
            var.get('elevator').callprop('addToList', var.get('FloorRequest'))
            var.get('elevator').callprop('operateElevator')
    PyJs_RequestFloor_2_._set_name('RequestFloor')
    var.get('_proto').put('RequestFloor', PyJs_RequestFloor_2_)
    @Js
    def PyJs_ElevatorSelector_3_(FloorRequest, self, arguments, var=var):
        var = Scope({'FloorRequest':FloorRequest, 'self':self, 'arguments':arguments, 'ElevatorSelector':PyJs_ElevatorSelector_3_}, var)
        var.registers(['i', 'differenceFloor', 'nearestElevator', 'bestDifference', 'FloorRequest'])
        var.put('bestDifference', (var.get('Math').callprop('floor', (var.get('Math').callprop('random')*Js(10.0)))+Js(1.0)))
        var.put('nearestElevator', var.get(u"null"))
        #for JS loop
        var.put('i', Js(0.0))
        while (var.get('i')<var.get(u"self").get('column').get('RequestList').get('length')):
            try:
                var.put('differenceFloor', var.get('Math').callprop('abs', (var.get('FloorRequest')-var.get(u"self").get('column').get('RequestList').get(var.get('i')).get('currentElevatorPosition'))))
                if (var.get('differenceFloor')<var.get('bestDifference')):
                    var.put('bestDifference', var.get('differenceFloor'))
                    var.put('nearestElevator', var.get('i'))
            finally:
                    (var.put('i',Js(var.get('i').to_number())+Js(1))-Js(1))
        return var.get(u"self").get('column').get('RequestList').get(var.get('nearestElevator'))
    PyJs_ElevatorSelector_3_._set_name('ElevatorSelector')
    var.get('_proto').put('ElevatorSelector', PyJs_ElevatorSelector_3_)
    return var.get('Controller')
PyJs_anonymous_0_._set_name('anonymous')
var.put('Controller', PyJs_anonymous_0_())
@Js
def PyJs_anonymous_4_(self, arguments, var=var):
    var = Scope({'self':self, 'arguments':arguments}, var)
    var.registers(['_proto2', 'Column'])
    @Js
    def PyJsHoisted_Column_(Floors, Cages, self, arguments, var=var):
        var = Scope({'Floors':Floors, 'Cages':Cages, 'self':self, 'arguments':arguments}, var)
        var.registers(['Floors', 'Cages'])
        var.get(u"self").put('Floors', var.get('Floors'))
        var.get(u"self").put('Cages', var.get('Cages'))
        var.get(u"self").put('RequestList', Js([]))
        var.get(u"self").callprop('addElevators')
    PyJsHoisted_Column_.func_name = 'Column'
    var.put('Column', PyJsHoisted_Column_)
    pass
    var.put('_proto2', var.get('Column').get('prototype'))
    @Js
    def PyJs_addElevators_5_(self, arguments, var=var):
        var = Scope({'self':self, 'arguments':arguments, 'addElevators':PyJs_addElevators_5_}, var)
        var.registers(['elevator', 'i'])
        #for JS loop
        var.put('i', Js(0.0))
        while (var.get('i')<var.get(u"self").get('Cages')):
            try:
                var.put('elevator', var.get('Elevator').create((var.get('i')+Js(1.0)), var.get(u"self").get('Floors')))
                var.get(u"self").get('RequestList').callprop('push', var.get('elevator'))
            finally:
                    (var.put('i',Js(var.get('i').to_number())+Js(1))-Js(1))
    PyJs_addElevators_5_._set_name('addElevators')
    var.get('_proto2').put('addElevators', PyJs_addElevators_5_)
    return var.get('Column')
PyJs_anonymous_4_._set_name('anonymous')
var.put('Column', PyJs_anonymous_4_())
@Js
def PyJs_anonymous_6_(self, arguments, var=var):
    var = Scope({'self':self, 'arguments':arguments}, var)
    var.registers(['Elevator', '_proto3'])
    @Js
    def PyJsHoisted_Elevator_(elevator_number, Floors, Direction, Status, self, arguments, var=var):
        var = Scope({'elevator_number':elevator_number, 'Floors':Floors, 'Direction':Direction, 'Status':Status, 'self':self, 'arguments':arguments}, var)
        var.registers(['Direction', 'Status', 'elevator_number', 'Floors'])
        var.get(u"self").put('elevator_number', var.get('elevator_number'))
        var.get(u"self").put('Floors', var.get('Floors'))
        var.get(u"self").put('Direction', var.get('Direction'))
        var.get(u"self").put('Status', var.get('Status'))
        var.get(u"self").put('Sensor', Js('Clear'))
        var.get(u"self").put('requestFloorList', Js([]))
        var.get(u"self").put('currentElevatorPosition', (var.get('Math').callprop('floor', (var.get('Math').callprop('random')*Js(10.0)))+Js(1.0)))
    PyJsHoisted_Elevator_.func_name = 'Elevator'
    var.put('Elevator', PyJsHoisted_Elevator_)
    pass
    var.put('_proto3', var.get('Elevator').get('prototype'))
    @Js
    def PyJs_operateElevator_7_(self, arguments, var=var):
        var = Scope({'self':self, 'arguments':arguments, 'operateElevator':PyJs_operateElevator_7_}, var)
        var.registers(['FloorRequest'])
        var.put('FloorRequest', var.get(u"self").get('requestFloorList').callprop('shift'))
        if PyJsStrictEq(var.get(u"self").get('currentElevatorPosition'),var.get('FloorRequest')):
            var.get('console').callprop('log', Js('Elevator'), var.get(u"self").get('elevator_number'), Js('has arrived at floor number'), var.get(u"self").get('currentElevatorPosition'))
        else:
            while (var.get(u"self").get('currentElevatorPosition')!=var.get('FloorRequest')):
                if (var.get(u"self").get('currentElevatorPosition')>var.get('FloorRequest')):
                    var.get(u"self").callprop('moveDown')
                    var.get('console').callprop('log', Js('Currently at'), var.get(u"self").get('currentElevatorPosition'), Js('Going Down'))
                    var.get('pause')(Js(2000.0))
                else:
                    if (var.get(u"self").get('currentElevatorPosition')<var.get('FloorRequest')):
                        var.get(u"self").callprop('moveUp')
                        var.get('console').callprop('log', Js('Currently at'), var.get(u"self").get('currentElevatorPosition'), Js('Going up'))
                        var.get('pause')(Js(2000.0))
            var.get('console').callprop('log', Js('Elevator'), var.get(u"self").get('elevator_number'), Js('has arrived at floor number'), var.get(u"self").get('currentElevatorPosition'))
            var.get('pause')(Js(2500.0))
            var.get(u"self").callprop('openDoors')
            var.get(u"self").callprop('closeDoors')
    PyJs_operateElevator_7_._set_name('operateElevator')
    var.get('_proto3').put('operateElevator', PyJs_operateElevator_7_)
    @Js
    def PyJs_moveDown_8_(self, arguments, var=var):
        var = Scope({'self':self, 'arguments':arguments, 'moveDown':PyJs_moveDown_8_}, var)
        var.registers([])
        var.get(u"self").put('Status', Js('Called'))
        var.get(u"self").put('Direction', Js('Down'))
        (var.get(u"self").put('currentElevatorPosition',Js(var.get(u"self").get('currentElevatorPosition').to_number())-Js(1))+Js(1))
        var.get('pause')(Js(1500.0))
    PyJs_moveDown_8_._set_name('moveDown')
    var.get('_proto3').put('moveDown', PyJs_moveDown_8_)
    @Js
    def PyJs_moveUp_9_(self, arguments, var=var):
        var = Scope({'self':self, 'arguments':arguments, 'moveUp':PyJs_moveUp_9_}, var)
        var.registers([])
        var.get(u"self").put('Status', Js('Called'))
        var.get(u"self").put('Direction', Js('Up'))
        (var.get(u"self").put('currentElevatorPosition',Js(var.get(u"self").get('currentElevatorPosition').to_number())+Js(1))-Js(1))
        var.get('pause')(Js(1500.0))
    PyJs_moveUp_9_._set_name('moveUp')
    var.get('_proto3').put('moveUp', PyJs_moveUp_9_)
    @Js
    def PyJs_addToList_10_(FloorRequest, self, arguments, var=var):
        var = Scope({'FloorRequest':FloorRequest, 'self':self, 'arguments':arguments, 'addToList':PyJs_addToList_10_}, var)
        var.registers(['FloorRequest'])
        var.get(u"self").get('requestFloorList').callprop('push', var.get('FloorRequest'))
        if (var.get(u"self").get('Direction')==Js('Up')):
            var.get(u"self").get('requestFloorList').callprop('sort')
        else:
            if (var.get(u"self").get('Direction')==Js('Down')):
                var.get(u"self").get('requestFloorList').callprop('sort').callprop('reverse')
    PyJs_addToList_10_._set_name('addToList')
    var.get('_proto3').put('addToList', PyJs_addToList_10_)
    @Js
    def PyJs_InsideRequestButton_11_(FloorRequest, self, arguments, var=var):
        var = Scope({'FloorRequest':FloorRequest, 'self':self, 'arguments':arguments, 'InsideRequestButton':PyJs_InsideRequestButton_11_}, var)
        var.registers(['FloorRequest'])
        var.get('console').callprop('log', Js('Someone on floor number'), var.get('FloorRequest'), Js('requesting service.'), Js(' Now sending elevator'), var.get(u"self").get('elevator_number'), Js(', which is at floor'), var.get(u"self").get('currentElevatorPosition'), Js('.'))
        var.get('pause')(Js(2500.0))
    PyJs_InsideRequestButton_11_._set_name('InsideRequestButton')
    var.get('_proto3').put('InsideRequestButton', PyJs_InsideRequestButton_11_)
    @Js
    def PyJs_openDoors_12_(self, arguments, var=var):
        var = Scope({'self':self, 'arguments':arguments, 'openDoors':PyJs_openDoors_12_}, var)
        var.registers([])
        var.get('console').callprop('log', Js('Opening doors at floor number'), var.get(u"self").get('currentElevatorPosition'), Js('.'))
        var.get('pause')(Js(2500.0))
    PyJs_openDoors_12_._set_name('openDoors')
    var.get('_proto3').put('openDoors', PyJs_openDoors_12_)
    @Js
    def PyJs_closeDoors_13_(self, arguments, var=var):
        var = Scope({'self':self, 'arguments':arguments, 'closeDoors':PyJs_closeDoors_13_}, var)
        var.registers([])
        var.get('console').callprop('log', Js('Closing doors'))
        var.get('pause')(Js(2500.0))
    PyJs_closeDoors_13_._set_name('closeDoors')
    var.get('_proto3').put('closeDoors', PyJs_closeDoors_13_)
    return var.get('Elevator')
PyJs_anonymous_6_._set_name('anonymous')
var.put('Elevator', PyJs_anonymous_6_())
pass
var.put('controller', var.get('Controller').create(Js(2.0), Js(10.0)))
var.get('controller').get('column').get('RequestList').get('0').put('currentElevatorPosition', (var.get('Math').callprop('floor', (var.get('Math').callprop('random')*Js(4.0)))+Js(1.0)))
var.get('controller').get('column').get('RequestList').get('1').put('currentElevatorPosition', (var.get('Math').callprop('floor', (var.get('Math').callprop('random')*Js(10.0)))+Js(1.0)))
var.put('RequestElevatorNumber1', var.get('controller').callprop('RequestElevator', Js(6.0), Js('Up')))
var.get('controller').callprop('RequestFloor', var.get('RequestElevatorNumber1'), (var.get('Math').callprop('floor', (var.get('Math').callprop('random')*Js(10.0)))+Js(1.0)))
pass


# Add lib to the module scope
brandnew = var.to_python()