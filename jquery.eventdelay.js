$(function() {
	$.fn.eventdelay = function(event_start, event_trigger, timeout, event_cancel) {
        var _counter = 0;
        var _object = '';
        
        function start_delay () {
            _object = this;
            _counter = setTimeout(trigger, timeout);
        }
        
        function cancel_delay() {
            clearTimeout(_counter);
        }
        
        function trigger () {
            $(_object).trigger (event_trigger);
        }
        return this.live(event_start, start_delay).live(event_cancel, cancel_delay);
	}
	
	$.fn.hoverdelay = function (delay, func) {
	    this.live ('hoverdelay', func);
	    return this.eventdelay ('mouseenter', 'hoverdelay', delay, 'mouseleave');
	}
	
});