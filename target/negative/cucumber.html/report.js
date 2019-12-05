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
  "duration": 5460200,
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
  "duration": 19608098900,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d78.0.3904.108)\n  (Driver info: chromedriver\u003d78.0.3904.105 (60e2d8774a8151efa6a00b1f358371b1e0e07ee2-refs/branch-heads/3904@{#877}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 17.28 seconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027mlemos10\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:159)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat pacot.Modulo.iniciacao(Modulo.java:21)\r\n\tat steps.ValidadacaoIdade.esteja_na_tela_tela_Swagger(ValidadacaoIdade.java:32)\r\n\tat ✽.Given esteja na tela tela Swagger(validacaoIdade.feature:5)\r\n",
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
  "duration": 41000,
  "status": "passed"
});
formatter.before({
  "duration": 681100,
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
