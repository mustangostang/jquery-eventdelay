$(function() {
	$.fn.eventdelay = function(event_start, event_trigger, timeout, event_cancel) {
        var _counter = 0;
        var _object = '';
        
        function start_delay () {
            _object = this;
//          console.log ('Starting timeout');
            _counter = setTimeout(trigger, timeout);
        }
        
        function cancel_delay() {
//          console.log ('Clearing timeout');
            clearTimeout(_counter);
        }
        
        function trigger () {
//          console.log ('Triggering event');
            $(_object).trigger (event_trigger);
        }
        return this.live(event_start, start_delay).live(event_cancel, cancel_delay);
	}
	
});