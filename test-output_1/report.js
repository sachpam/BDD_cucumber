$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/smsps/Desktop/BDD_Project/BDD/BDD/src/test/resources/features/LoginProfile.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Smoke#Regression"
    }
  ],
  "line": 2,
  "name": "User Login",
  "description": "",
  "id": "user-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Sucessful Login",
  "description": "",
  "id": "user-login;sucessful-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on the \"Login\" page on URL \"https://demo.actitime.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User fill in \"Username\" with \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User fill in \"Password\" with \"manager\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should see \"Enter Time-Track\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should see the \"Logout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    },
    {
      "val": "https://demo.actitime.com/",
      "offset": 36
    }
  ],
  "location": "Login.user_is_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 13881421600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 14
    },
    {
      "val": "admin",
      "offset": 30
    }
  ],
  "location": "Login.user_fill_in_with(String,String)"
});
formatter.result({
  "duration": 102002600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 14
    },
    {
      "val": "manager",
      "offset": 30
    }
  ],
  "location": "Login.user_fill_in_with(String,String)"
});
formatter.result({
  "duration": 115151800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 19
    }
  ],
  "location": "Login.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 158230200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Time-Track",
      "offset": 17
    }
  ],
  "location": "Login.user_should_see_message(String)"
});
formatter.result({
  "duration": 5085668500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 21
    }
  ],
  "location": "Login.user_should_see_the_button(String)"
});
formatter.result({
  "duration": 118603100,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 147916800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Multiple User Login",
  "description": "",
  "id": "user-login;multiple-user-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is on the \"Login\" page on URL \"https://demo.actitime.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User fill in login credentials with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should see \"Enter Time-Track\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User should see the \"Logout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "user-login;multiple-user-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "user-login;multiple-user-login;;1"
    },
    {
      "cells": [
        "admin",
        "manager"
      ],
      "line": 23,
      "id": "user-login;multiple-user-login;;2"
    },
    {
      "cells": [
        "admin",
        "manager"
      ],
      "line": 24,
      "id": "user-login;multiple-user-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Multiple User Login",
  "description": "",
  "id": "user-login;multiple-user-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is on the \"Login\" page on URL \"https://demo.actitime.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User fill in login credentials with \"admin\" and \"manager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should see \"Enter Time-Track\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User should see the \"Logout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    },
    {
      "val": "https://demo.actitime.com/",
      "offset": 36
    }
  ],
  "location": "Login.user_is_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 11421318400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 37
    },
    {
      "val": "manager",
      "offset": 49
    }
  ],
  "location": "Login.user_fill_in_login_credentials_with_and(String,String)"
});
formatter.result({
  "duration": 182891400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 19
    }
  ],
  "location": "Login.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 135299200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Time-Track",
      "offset": 17
    }
  ],
  "location": "Login.user_should_see_message(String)"
});
formatter.result({
  "duration": 4702775400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 21
    }
  ],
  "location": "Login.user_should_see_the_button(String)"
});
formatter.result({
  "duration": 91599600,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 90992800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Multiple User Login",
  "description": "",
  "id": "user-login;multiple-user-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is on the \"Login\" page on URL \"https://demo.actitime.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User fill in login credentials with \"admin\" and \"manager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should see \"Enter Time-Track\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User should see the \"Logout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    },
    {
      "val": "https://demo.actitime.com/",
      "offset": 36
    }
  ],
  "location": "Login.user_is_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 10824289700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 37
    },
    {
      "val": "manager",
      "offset": 49
    }
  ],
  "location": "Login.user_fill_in_login_credentials_with_and(String,String)"
});
formatter.result({
  "duration": 165238600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 19
    }
  ],
  "location": "Login.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 118197000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Time-Track",
      "offset": 17
    }
  ],
  "location": "Login.user_should_see_message(String)"
});
formatter.result({
  "duration": 4912073800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 21
    }
  ],
  "location": "Login.user_should_see_the_button(String)"
});
formatter.result({
  "duration": 103978600,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 101987400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login with Invalid Credentials",
  "description": "",
  "id": "user-login;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "User is on the \"Login\" page on URL \"https://demo.actitime.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User fill in \"Username\" with \"aaaaaa\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User fill in \"Password\" with \"bbbbbb\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should see error \"Username or Password is invalid.\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    },
    {
      "val": "https://demo.actitime.com/",
      "offset": 36
    }
  ],
  "location": "Login.user_is_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 9880869700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 14
    },
    {
      "val": "aaaaaa",
      "offset": 30
    }
  ],
  "location": "Login.user_fill_in_with(String,String)"
});
formatter.result({
  "duration": 79537000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 14
    },
    {
      "val": "bbbbbb",
      "offset": 30
    }
  ],
  "location": "Login.user_fill_in_with(String,String)"
});
formatter.result({
  "duration": 114076300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 19
    }
  ],
  "location": "Login.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 171480900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username or Password is invalid.",
      "offset": 23
    }
  ],
  "location": "Login.user_should_see_error_message(String)"
});
formatter.result({
  "duration": 1464621100,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 121630200,
  "status": "passed"
});
});