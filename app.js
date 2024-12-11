onEvent("toHome1", "click", function() {
    setScreen("screen1");
  });
  //Code for Login
  onEvent("signUp", "click", function() {
    setScreen("signUpScreen");
    createRecord("Logininfomation", {Username:(getText("txtboxUsername")),Password:(getText("txtboxPassword")), function(record){
      }
    });
  });
  onEvent("login", "click", function() {
    setScreen("loginScreen");
  });
  onEvent("buttonlogin2", "click", function() {
    readRecords("Logininfomation", {}, function(records) {
    for(var i=0; i < records.length; i++) {
      if (getText("txtboxUsername") == (records[i]).Username && getText("txtboxPassword") == (records[i]).Passwords) {
        setScreen("homePage");
      }
      }
    });
    
    
  });