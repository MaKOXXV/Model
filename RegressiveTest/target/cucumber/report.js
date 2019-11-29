$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("validacaoIdade.feature");
formatter.feature({
  "line": 2,
  "name": "Valida��o de idade do usuario",
  "description": "",
  "id": "valida��o-de-idade-do-usuario",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "validar idade",
  "description": "",
  "id": "valida��o-de-idade-do-usuario;validar-idade",
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
  "name": "inserir dados com a data \"\u003cdata\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "clicar em Try it out",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "\"\u003cresult\u003e\" para quem nasceu em \"\u003cdata\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "valida��o-de-idade-do-usuario;validar-idade;",
  "rows": [
    {
      "cells": [
        "data",
        "result"
      ],
      "line": 17,
      "id": "valida��o-de-idade-do-usuario;validar-idade;;1"
    },
    {
      "cells": [
        "2010",
        "A venda de T�tulos de Capitaliza��o � proibida para menores de 16 anos"
      ],
      "line": 18,
      "id": "valida��o-de-idade-do-usuario;validar-idade;;2"
    },
    {
      "cells": [
        "2000",
        "Titular / Subscritor maior que 16 anos."
      ],
      "line": 19,
      "id": "valida��o-de-idade-do-usuario;validar-idade;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14608513182,
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
  "duration": 124924767,
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
  "duration": 3604833272,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.validar_que_estou_na_pagina_MapfreCap_API()"
});
formatter.result({
  "duration": 57260630,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "validar idade",
  "description": "",
  "id": "valida��o-de-idade-do-usuario;validar-idade;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
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
  "name": "inserir dados com a data \"2010\"",
  "matchedColumns": [
    0
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
  "name": "\"A venda de T�tulos de Capitaliza��o � proibida para menores de 16 anos\" para quem nasceu em \"2010\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa()"
});
formatter.result({
  "duration": 80833051,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa_validarIdade()"
});
formatter.result({
  "duration": 1105685096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2010",
      "offset": 26
    }
  ],
  "location": "ValidadacaoIdade.inserir_dados_com_a_data(String)"
});
formatter.result({
  "duration": 2525891904,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_Try_it_out()"
});
formatter.result({
  "duration": 1104005990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A venda de T�tulos de Capitaliza��o � proibida para menores de 16 anos",
      "offset": 1
    },
    {
      "val": "2010",
      "offset": 94
    }
  ],
  "location": "ValidadacaoIdade.para_quem_nasceu_em(String,String)"
});
formatter.result({
  "duration": 43347503,
  "status": "passed"
});
formatter.after({
  "duration": 1301511762,
  "status": "passed"
});
formatter.before({
  "duration": 8560069837,
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
  "duration": 23410,
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
  "duration": 3616516402,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.validar_que_estou_na_pagina_MapfreCap_API()"
});
formatter.result({
  "duration": 52517073,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "validar idade",
  "description": "",
  "id": "valida��o-de-idade-do-usuario;validar-idade;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
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
  "name": "inserir dados com a data \"2000\"",
  "matchedColumns": [
    0
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
  "name": "\"Titular / Subscritor maior que 16 anos.\" para quem nasceu em \"2000\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa()"
});
formatter.result({
  "duration": 83564854,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa_validarIdade()"
});
formatter.result({
  "duration": 1117523789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 26
    }
  ],
  "location": "ValidadacaoIdade.inserir_dados_com_a_data(String)"
});
formatter.result({
  "duration": 2513862154,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_Try_it_out()"
});
formatter.result({
  "duration": 1073881773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Titular / Subscritor maior que 16 anos.",
      "offset": 1
    },
    {
      "val": "2000",
      "offset": 63
    }
  ],
  "location": "ValidadacaoIdade.para_quem_nasceu_em(String,String)"
});
formatter.result({
  "duration": 43295019,
  "status": "passed"
});
formatter.after({
  "duration": 1112721329,
  "status": "passed"
});
});