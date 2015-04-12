jQuery("#simulation")
  .on("click", ".s-de173d30-80d5-4d0e-841f-c319c16877bd .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_85")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_92")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f6ba56a0-98f3-401c-94b3-2c150fe5556a"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ececcb85-da50-4dba-8eaf-628779a62dcc"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3d3a7e46-38ef-450e-ad9d-6924ffe2ef7b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-de173d30-80d5-4d0e-841f-c319c16877bd .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_5",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","5" ]
                      }," PM" ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-de173d30-80d5-4d0e-841f-c319c16877bd .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Image_97",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 7,
                    "left": 8
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de173d30-80d5-4d0e-841f-c319c16877bd #s-Input_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-de173d30-80d5-4d0e-841f-c319c16877bd #s-Input_6 input": {
                      "attributes": {
                        "color": "#C0C0C0",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_6",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-de173d30-80d5-4d0e-841f-c319c16877bd .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de173d30-80d5-4d0e-841f-c319c16877bd #s-Input_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-de173d30-80d5-4d0e-841f-c319c16877bd #s-Input_6 input": {
                      "attributes": {
                        "color": "#C0C0C0",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_6",
                    "value": "Search"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Image_97",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 7,
                    "left": 122
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });