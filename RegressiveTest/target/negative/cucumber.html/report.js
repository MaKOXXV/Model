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
  "duration": 138500,
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
  "duration": 10612669600,
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
  "duration": 3877135300,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.validar_que_estou_na_pagina_MapfreCap_API()"
});
formatter.result({
  "duration": 58232400,
  "status": "passed"
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
  "duration": 97911100,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa_validarIdade()"
});
formatter.result({
  "duration": 1149068100,
  "status": "passed"
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
  "duration": 2552654200,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_Try_it_out()"
});
formatter.result({
  "duration": 3108337300,
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
  "duration": 1346124600,
  "status": "passed"
});
formatter.after({
  "duration": 23500,
  "status": "passed"
});
formatter.before({
  "duration": 50200,
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
  "duration": 9485774700,
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
  "duration": 3766013600,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.validar_que_estou_na_pagina_MapfreCap_API()"
});
formatter.result({
  "duration": 44613700,
  "status": "passed"
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
  "duration": 91691100,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa_validarIdade()"
});
formatter.result({
  "duration": 1160364500,
  "status": "passed"
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
  "duration": 2514842100,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_Try_it_out()"
});
formatter.result({
  "duration": 3075419900,
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
  "duration": 1204297600,
  "status": "passed"
});
formatter.after({
  "duration": 27800,
  "status": "passed"
});
formatter.before({
  "duration": 56900,
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
  "duration": 9505986600,
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
  "duration": 3691345600,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.validar_que_estou_na_pagina_MapfreCap_API()"
});
formatter.result({
  "duration": 49154900,
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
  "duration": 98966100,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_pessoa_validarIdade()"
});
formatter.result({
  "duration": 1165451300,
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
  "duration": 2469911800,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.clicar_em_Try_it_out()"
});
formatter.result({
  "duration": 3075059400,
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
  "duration": 1187519700,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 86800,
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
  "duration": 9504465500,
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
  "duration": 3801089300,
  "status": "passed"
});
formatter.match({
  "location": "ValidadacaoIdade.validar_que_estou_na_pagina_MapfreCap_API()"
});
