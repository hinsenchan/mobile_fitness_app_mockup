(function(window, undefined) {
  var dictionary = {
    "ececcb85-da50-4dba-8eaf-628779a62dcc": "ResultFilter",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Welcome",
    "f6ba56a0-98f3-401c-94b3-2c150fe5556a": "Menu",
    "74a67c92-948d-4452-96ab-8489113a4692": "Activity",
    "0a49759e-99dd-476b-9bb8-a92bdcd6333d": "Profile",
    "7d2f1386-4e13-4272-9fe4-f9ea14365a4a": "BuddyList",
    "de173d30-80d5-4d0e-841f-c319c16877bd": "Find",
    "d18e853f-3059-4c71-8477-6f8b2528ced7": "SignUp",
    "ae6a7a9d-87d9-46c4-ba32-17dc910b8723": "SignUpAdttOptons",
    "bc5b4e09-656f-49fa-bd4b-3297c333681a": "Leaderboard",
    "2f243484-2c99-4889-a951-372d2ad51f10": "EventList",
    "ad96cdba-7be8-4e66-9f28-62291427c9f4": "MissionList",
    "3d10bcf8-1498-4d06-a9ac-30396e0a32b1": "Login",
    "1c49be84-2c6d-4d9c-a197-ebdd23d4c3a6": "Achievements",
    "c833d58d-8d03-49c5-9b7f-e2d28e4fd398": "Notifications",
    "0a30b599-2317-4b8b-9b98-593970e67d87": "Template",
    "3d3a7e46-38ef-450e-ad9d-6924ffe2ef7b": "ResultList",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);