onEvent("continuehouseselector", "click", function( ) {
  setScreen("westlogin");
});
onEvent("button1", "click", function( ) {
  if (getText("text_input1") == "A91861") {
    
  } else if ((getText("text_input1") == "J1718")) {
    setScreen("mrsanchez");
  } else if ((getText("text_input1") == "RM10201")) {
    setScreen("rayanstudentdashboard");
  } else if ((getText("text_input1") == "H11112")) {
    setScreen("harisstudendashboard");
  } else {
    setScreen("pinnotrecognised");
  }
});
onEvent("button2", "click", function( ) {
  setScreen("doublemainscreen");
});
onEvent("teamsstudent", "click", function( ) {
  open("https://teams.microsoft.com");
});
onEvent("oliversudent", "click", function( ) {
  open("https://reading-school.oliverasp.co.uk/library/home/browse/list");
});
onEvent("bromcomstudent", "click", function( ) {
  open("https://www.bromcomvle.com/?schoolid=12027");
});
onEvent("button17", "click", function( ) {
  open("https://outlook.office.com/mail/inbox");
});
onEvent("button9", "click", function( ) {
  open("https://google.com/search?q=" + getText("text_input3"));
});
onEvent("signout", "click", function( ) {
  setScreen("logoutconformationmrsanchez");
});
onEvent("button4", "click", function( ) {
  setScreen("doublemainscreen");
});
onEvent("button5", "click", function( ) {
  setScreen("mrsanchez");
});
onEvent("signstudentoutyes", "click", function( ) {
  setScreen("doublemainscreen");
});
onEvent("button3", "click", function( ) {
  setScreen("signoutwestie");
});
onEvent("harisbromcom", "click", function( ) {
  open("https://www.bromcomvle.com/?schoolid=12027");
});
onEvent("harisoliver", "click", function( ) {
  open("https://reading-school.oliverasp.co.uk/library/home/browse/list");
});
onEvent("haristeams", "click", function( ) {
  open("https://teams.microsoft.com");
});
onEvent("harissignout", "click", function( ) {
  setScreen("signoutwestie");
});
onEvent("harisoutlook", "click", function( ) {
  open("https://outlook.live.com");
});
