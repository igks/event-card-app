# Event Card and Line Graphical Monitoring Application
This application was build with:
  1. React + Redux
  2. Bootstrap
  3. SweetAlert2
  4. Canvas js
  
The application contain following functionality:
### A. Scrollable event card list
The view that show all the list of ongoing event that with detail date-time, location, event name, participant and the note of the event.
The event list was pulled from database server (mongoDB Atlas) in JSON format then rendering in client side.
### B. Form submition
The form is available to submit new event, there are a notification when the form value is invalid however the form role are:
  1. The field is can't empty otherwise the sumbit button will not work with any notification related.
  2. The notes character must be longer than 50 characters.
  3. Date event is easily chose from pop up calendar.
  4. If the participant is invited before, they will show autocomplete hint for the next invitation.
  5. When the sumbit success the notification will raised then new event will appear in card event list and the form value will reset.
### C. Time Series Graph
The graph is simply showing the temperature trend avery 10 second and the trend will automatically shifted when new data pushed to the graph, the data is generate randomly by a function.
In this graph also available zooming and panning feature, so user can zoom on any specific period and panning on that periode.




