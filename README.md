# EventDelay

EventDelay is a small library for supporting events with delays.

- jQuery support: 1.4+

It is very simple to add an action for hovering with delay:

    $("a").hoverdelay (2000, function() { $(this).click(); });      # If you hover over a link for long enough, count it as a click.