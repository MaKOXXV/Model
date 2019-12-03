$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("validacaoIdade.feature");
formatter.feature({
  "line": 2,
  "name": "Validação de idade do usuario",
  "description": "",
  "id": "validação-de-idade-do-usuario",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@history11"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "validar idade \"\u003cstatus\u003e\"",
  "description": "",
  "id": "validação-de-idade-do-usuario;validar-idade-\"\u003cstatus\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "clicar em pessoa",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clicar em pessoa/validarIdade",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "inserir dados com a data \"\u003cdata\u003e\" e \"\u003ccpf\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "clicar em Try it out",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "\"\u003cresult\u003e\" para quem nasceu em \"\u003cdatav\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "validação-de-idade-do-usuario;validar-idade-\"\u003cstatus\u003e\";",
  "rows": [
    {
      "cells": [
        "status",
        "cpf",
        "data",
        "result",
        "datav"
      ],
      "line": 17,
      "id": "validação-de-idade-do-usuario;validar-idade-\"\u003cstatus\u003e\";;1"
    },
    {
      "cells": [
        "Data menor",
        "",
        "2003-10-29T18:40:11.619Z",
        "A venda de Títulos de Capitalização é proibida para menores de 16 anos",
        "2003"
      ],
      "line": 18,
      "id": "validação-de-idade-do-usuario;validar-idade-\"\u003cstatus\u003e\";;2"
    },
    {
      "cells": [
        "Data maior",
        "",
        "2001-10-29T18:40:11.619Z",
        "Titular / Subscritor maior que 16 anos.",
        "2001"
      ],
      "line": 19,
      "id": "validação-de-idade-do-usuario;validar-idade-\"\u003cstatus\u003e\";;3"
    },
    {
      "cells": [
        "CPF maior",
        "46125050009",
        "",
        "A venda de Títulos de Capitalização é proibida para menores de 16 anos",
        "2003"
      ],
      "line": 20,
      "id": "validação-de-idade-do-usuario;validar-idade-\"\u003cstatus\u003e\";;4"
    },
    {
      "cells": [
        "CPF menor",
        "16755397075",
        "",
        "Titular / Subscritor maior que 16 anos.",
        "2001"
      ],
      "line": 21,
      "id": "validação-de-idade-do-usuario;validar-idade-\"\u003cstatus\u003e\";;5"
    },
    {
      "cells": [
        "CPF maior com data de menor",
        "46125050009",
        "2003-10-29T18:40:11.619Z",
        "A venda de Títulos de Capitalização é proibida para menores de 16 anos",
        "2003"
      ],
      "line": 22,
      "id": "validação-de-idade-do-usuario;validar-idade-\"\u003cstatus\u003e\";;6"
    },
    {
      "cells": [
        "CPF menor com data de maior",
        "16755397075",
        "2001-10-29T18:40:11.619Z",
        "Titular / Subscritor maior que 16 anos.",
        "2001"
      ],
      "line": 23,
      "id": "validação-de-idade-do-usuario;validar-idade-\"\u003cstatus\u003e\";;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1916200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "esteja na tela tela Swagger",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "MapfreCap API \"https://hmlsite.mapfrecap.com.br/WebMapfreCap/WebAPI/swagger/ui/index\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "validar que estou na pagina MapfreCap API",
  "keyword": "When "
});
formatter.match({
  "location": "ValidadacaoIdade.esteja_na_tela_tela_Swagger()"
});
formatter.result({
  "duration": 10655927300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://hmlsite.mapfrecap.com.br/WebMapfreCap/WebAPI/swagger/ui/index",
      "offset": 15
    }
  ],
  "location": "ValidadacaoIdade.mapfrecap_API(String)"
});
formatter.result({
  "duration": 406183000,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.validar_que_estou_na_pagina_MapfreCap_API()"
});
formatter.result({
  "duration": 10072783100,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 10 seconds waiting for presence of element located by: By.xpath: //*[@id\u003d\"logo\"]/span\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027mlemos10\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53661}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d78.0.3904.105 (60e2d8774a8151efa6a00b1f358371b1e0e07ee2-refs/branch-heads/3904@{#877}), userDataDir\u003dC:\\Users\\mlemos\\AppData\\Local\\Temp\\scoped_dir14476_960147535}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d78.0.3904.108, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e7cf928d96ed7137af49c675f4f4846d\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:261)\r\n\tat pacot.Modulo.waitingElemnt(Modulo.java:37)\r\n\tat metodo.HooksValidacao.valide(HooksValidacao.java:22)\r\n\tat steps.ValidadacaoIdade.validar_que_estou_na_pagina_MapfreCap_API(ValidadacaoIdade.java:44)\r\n\tat ✽.When validar que estou na pagina MapfreCap API(validacaoIdade.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"logo\"]/span\"}\n  (Session info: chrome\u003d78.0.3904.108)\n  (Driver info: chromedriver\u003d78.0.3904.105 (60e2d8774a8151efa6a00b1f358371b1e0e07ee2-refs/branch-heads/3904@{#877}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.05 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027mlemos10\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53661}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d78.0.3904.105 (60e2d8774a8151efa6a00b1f358371b1e0e07ee2-refs/branch-heads/3904@{#877}), userDataDir\u003dC:\\Users\\mlemos\\AppData\\Local\\Temp\\scoped_dir14476_960147535}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d78.0.3904.108, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e7cf928d96ed7137af49c675f4f4846d\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"logo\"]/span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:899)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:181)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:178)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\r\n\tat pacot.Modulo.waitingElemnt(Modulo.java:37)\r\n\tat metodo.HooksValidacao.valide(HooksValidacao.java:22)\r\n\tat steps.ValidadacaoIdade.validar_que_estou_na_pagina_MapfreCap_API(ValidadacaoIdade.java:44)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 18,
  "name": "validar idade \"Data menor\"",
  "description": "",
  "id": "validação-de-idade-do-usuario;validar-idade-\"\u003cstatus\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@history11"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "clicar em pessoa",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clicar em pessoa/validarIdade",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "inserir dados com a data \"2003-10-29T18:40:11.619Z\" e \"\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "clicar em Try it out",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "\"A venda de Títulos de Capitalização é proibida para menores de 16 anos\" para quem nasceu em \"2003\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa_validarIdade()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2003-10-29T18:40:11.619Z",
      "offset": 26
    },
    {
      "val": "",
      "offset": 55
    }
  ],
  "location": "ValidadacaoIdade.inserir_dados_com_a_data(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_Try_it_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "A venda de Títulos de Capitalização é proibida para menores de 16 anos",
      "offset": 1
    },
    {
      "val": "2003",
      "offset": 94
    }
  ],
  "location": "ValidadacaoIdade.para_quem_nasceu_em(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 30100,
  "status": "passed"
});
formatter.before({
  "duration": 117800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "esteja na tela tela Swagger",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "MapfreCap API \"https://hmlsite.mapfrecap.com.br/WebMapfreCap/WebAPI/swagger/ui/index\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "validar que estou na pagina MapfreCap API",
  "keyword": "When "
});
formatter.match({
  "location": "ValidadacaoIdade.esteja_na_tela_tela_Swagger()"
});
formatter.result({
  "duration": 16547652200,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d78.0.3904.108)\n  (Driver info: chromedriver\u003d78.0.3904.105 (60e2d8774a8151efa6a00b1f358371b1e0e07ee2-refs/branch-heads/3904@{#877}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 15.56 seconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027mlemos10\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:159)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat pacot.Modulo.iniciacao(Modulo.java:21)\r\n\tat steps.ValidadacaoIdade.esteja_na_tela_tela_Swagger(ValidadacaoIdade.java:32)\r\n\tat ✽.Given esteja na tela tela Swagger(validacaoIdade.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://hmlsite.mapfrecap.com.br/WebMapfreCap/WebAPI/swagger/ui/index",
      "offset": 15
    }
  ],
  "location": "ValidadacaoIdade.mapfrecap_API(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ValidadacaoIdade.validar_que_estou_na_pagina_MapfreCap_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "validar idade \"Data maior\"",
  "description": "",
  "id": "validação-de-idade-do-usuario;validar-idade-\"\u003cstatus\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@history11"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "clicar em pessoa",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clicar em pessoa/validarIdade",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "inserir dados com a data \"2001-10-29T18:40:11.619Z\" e \"\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "clicar em Try it out",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "\"Titular / Subscritor maior que 16 anos.\" para quem nasceu em \"2001\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa_validarIdade()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2001-10-29T18:40:11.619Z",
      "offset": 26
    },
    {
      "val": "",
      "offset": 55
    }
  ],
  "location": "ValidadacaoIdade.inserir_dados_com_a_data(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_Try_it_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Titular / Subscritor maior que 16 anos.",
      "offset": 1
    },
    {
      "val": "2001",
      "offset": 63
    }
  ],
  "location": "ValidadacaoIdade.para_quem_nasceu_em(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 28300,
  "status": "passed"
});
formatter.before({
  "duration": 49000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "esteja na tela tela Swagger",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "MapfreCap API \"https://hmlsite.mapfrecap.com.br/WebMapfreCap/WebAPI/swagger/ui/index\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "validar que estou na pagina MapfreCap API",
  "keyword": "When "
});
formatter.match({
  "location": "ValidadacaoIdade.esteja_na_tela_tela_Swagger()"
});
formatter.result({
  "duration": 9651583900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://hmlsite.mapfrecap.com.br/WebMapfreCap/WebAPI/swagger/ui/index",
      "offset": 15
    }
  ],
  "location": "ValidadacaoIdade.mapfrecap_API(String)"
});
formatter.result({
  "duration": 880101700,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.validar_que_estou_na_pagina_MapfreCap_API()"
});
formatter.result({
  "duration": 619234800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "validar idade \"CPF maior\"",
  "description": "",
  "id": "validação-de-idade-do-usuario;validar-idade-\"\u003cstatus\u003e\";;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@history11"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "clicar em pessoa",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clicar em pessoa/validarIdade",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "inserir dados com a data \"\" e \"46125050009\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "clicar em Try it out",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "\"A venda de Títulos de Capitalização é proibida para menores de 16 anos\" para quem nasceu em \"2003\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa()"
});
formatter.result({
  "duration": 158719400,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa_validarIdade()"
});
formatter.result({
  "duration": 293741100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    },
    {
      "val": "46125050009",
      "offset": 31
    }
  ],
  "location": "ValidadacaoIdade.inserir_dados_com_a_data(String,String)"
});
formatter.result({
  "duration": 984337500,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_Try_it_out()"
});
formatter.result({
  "duration": 139637200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A venda de Títulos de Capitalização é proibida para menores de 16 anos",
      "offset": 1
    },
    {
      "val": "2003",
      "offset": 94
    }
  ],
  "location": "ValidadacaoIdade.para_quem_nasceu_em(String,String)"
});
formatter.result({
  "duration": 1038674300,
  "status": "passed"
});
formatter.after({
  "duration": 128000,
  "status": "passed"
});
formatter.before({
  "duration": 136000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "esteja na tela tela Swagger",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "MapfreCap API \"https://hmlsite.mapfrecap.com.br/WebMapfreCap/WebAPI/swagger/ui/index\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "validar que estou na pagina MapfreCap API",
  "keyword": "When "
});
formatter.match({
  "location": "ValidadacaoIdade.esteja_na_tela_tela_Swagger()"
});
formatter.result({
  "duration": 9404775900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://hmlsite.mapfrecap.com.br/WebMapfreCap/WebAPI/swagger/ui/index",
      "offset": 15
    }
  ],
  "location": "ValidadacaoIdade.mapfrecap_API(String)"
});
formatter.result({
  "duration": 1555589800,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.validar_que_estou_na_pagina_MapfreCap_API()"
});
formatter.result({
  "duration": 61649100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "validar idade \"CPF menor\"",
  "description": "",
  "id": "validação-de-idade-do-usuario;validar-idade-\"\u003cstatus\u003e\";;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@history11"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "clicar em pessoa",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clicar em pessoa/validarIdade",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "inserir dados com a data \"\" e \"16755397075\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "clicar em Try it out",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "\"Titular / Subscritor maior que 16 anos.\" para quem nasceu em \"2001\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa()"
});
formatter.result({
  "duration": 108227400,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa_validarIdade()"
});
formatter.result({
  "duration": 306390000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    },
    {
      "val": "16755397075",
      "offset": 31
    }
  ],
  "location": "ValidadacaoIdade.inserir_dados_com_a_data(String,String)"
});
formatter.result({
  "duration": 592000200,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_Try_it_out()"
});
formatter.result({
  "duration": 113757400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Titular / Subscritor maior que 16 anos.",
      "offset": 1
    },
    {
      "val": "2001",
      "offset": 63
    }
  ],
  "location": "ValidadacaoIdade.para_quem_nasceu_em(String,String)"
});
formatter.result({
  "duration": 1031464300,
  "status": "passed"
});
formatter.after({
  "duration": 19900,
  "status": "passed"
});
formatter.before({
  "duration": 87300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "esteja na tela tela Swagger",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "MapfreCap API \"https://hmlsite.mapfrecap.com.br/WebMapfreCap/WebAPI/swagger/ui/index\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "validar que estou na pagina MapfreCap API",
  "keyword": "When "
});
formatter.match({
  "location": "ValidadacaoIdade.esteja_na_tela_tela_Swagger()"
});
formatter.result({
  "duration": 9437620500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://hmlsite.mapfrecap.com.br/WebMapfreCap/WebAPI/swagger/ui/index",
      "offset": 15
    }
  ],
  "location": "ValidadacaoIdade.mapfrecap_API(String)"
});
formatter.result({
  "duration": 813460400,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.validar_que_estou_na_pagina_MapfreCap_API()"
});
formatter.result({
  "duration": 765620700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "validar idade \"CPF maior com data de menor\"",
  "description": "",
  "id": "validação-de-idade-do-usuario;validar-idade-\"\u003cstatus\u003e\";;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@history11"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "clicar em pessoa",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clicar em pessoa/validarIdade",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "inserir dados com a data \"2003-10-29T18:40:11.619Z\" e \"46125050009\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "clicar em Try it out",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "\"A venda de Títulos de Capitalização é proibida para menores de 16 anos\" para quem nasceu em \"2003\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa()"
});
formatter.result({
  "duration": 282163900,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa_validarIdade()"
});
formatter.result({
  "duration": 424497100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2003-10-29T18:40:11.619Z",
      "offset": 26
    },
    {
      "val": "46125050009",
      "offset": 55
    }
  ],
  "location": "ValidadacaoIdade.inserir_dados_com_a_data(String,String)"
});
formatter.result({
  "duration": 950465400,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_Try_it_out()"
});
formatter.result({
  "duration": 139859300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A venda de Títulos de Capitalização é proibida para menores de 16 anos",
      "offset": 1
    },
    {
      "val": "2003",
      "offset": 94
    }
  ],
  "location": "ValidadacaoIdade.para_quem_nasceu_em(String,String)"
});
formatter.result({
  "duration": 1138433900,
  "status": "passed"
});
formatter.after({
  "duration": 20100,
  "status": "passed"
});
formatter.before({
  "duration": 56000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "esteja na tela tela Swagger",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "MapfreCap API \"https://hmlsite.mapfrecap.com.br/WebMapfreCap/WebAPI/swagger/ui/index\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "validar que estou na pagina MapfreCap API",
  "keyword": "When "
});
formatter.match({
  "location": "ValidadacaoIdade.esteja_na_tela_tela_Swagger()"
});
formatter.result({
  "duration": 9469974500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://hmlsite.mapfrecap.com.br/WebMapfreCap/WebAPI/swagger/ui/index",
      "offset": 15
    }
  ],
  "location": "ValidadacaoIdade.mapfrecap_API(String)"
});
formatter.result({
  "duration": 666685000,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.validar_que_estou_na_pagina_MapfreCap_API()"
});
formatter.result({
  "duration": 685574400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "validar idade \"CPF menor com data de maior\"",
  "description": "",
  "id": "validação-de-idade-do-usuario;validar-idade-\"\u003cstatus\u003e\";;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@history11"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "clicar em pessoa",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clicar em pessoa/validarIdade",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "inserir dados com a data \"2001-10-29T18:40:11.619Z\" e \"16755397075\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "clicar em Try it out",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "\"Titular / Subscritor maior que 16 anos.\" para quem nasceu em \"2001\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa()"
});
formatter.result({
  "duration": 163332800,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa_validarIdade()"
});
formatter.result({
  "duration": 346954800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2001-10-29T18:40:11.619Z",
      "offset": 26
    },
    {
      "val": "16755397075",
      "offset": 55
    }
  ],
  "location": "ValidadacaoIdade.inserir_dados_com_a_data(String,String)"
});
formatter.result({
  "duration": 799370000,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_Try_it_out()"
});
formatter.result({
  "duration": 84944500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Titular / Subscritor maior que 16 anos.",
      "offset": 1
    },
    {
      "val": "2001",
      "offset": 63
    }
  ],
  "location": "ValidadacaoIdade.para_quem_nasceu_em(String,String)"
});
formatter.result({
  "duration": 1107739300,
  "status": "passed"
});
formatter.after({
  "duration": 27700,
  "status": "passed"
});
});