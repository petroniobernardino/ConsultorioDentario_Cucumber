$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ClinicaOdontologica.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Portal Clinica Odontologica",
  "description": "Como Tester\nEu quero validar as funcionalidades\nPara o seu funcionamento sem bugs",
  "id": "portal-clinica-odontologica",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Cadastro de clientes",
  "description": "",
  "id": "portal-clinica-odontologica;cadastro-de-clientes",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 8,
  "name": "Que acesso a pagina da Clinica Odontologica",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "Informo o Usuario, senha e inicia a Sessao",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "entro no link Cadastro Cliente",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "preencho os dados: \"\u003cnome\u003e\" , \"\u003capelido\u003e\", \"\u003ccaixa_postal\u003e\", \"\u003clocalidade\u003e\", \"\u003cmorada\u003e\", \"\u003cporta_andar\u003e\", \"\u003cdocumento\u003e\", \"\u003cnif\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "os \"\u003ctelemovel\u003e\", \"\u003cemail\u003e\", \"\u003cmanha\u003e\", \"\u003ctarde\u003e\", \"\u003cnoite\u003e\", \"\u003cfaixa_etaria\u003e\", \"\u003ccompanhia\u003e\", \"\u003cplano\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clico no link Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "Valido se o cliente foi cadastrado com sucesso",
  "keyword": "Entao "
});
formatter.step({
  "line": 15,
  "name": "Fecho o navegador",
  "keyword": "E "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "portal-clinica-odontologica;cadastro-de-clientes;",
  "rows": [
    {
      "cells": [
        "nome",
        "apelido",
        "caixa_postal",
        "localidade",
        "morada",
        "porta_andar",
        "documento",
        "nif",
        "telemovel",
        "email",
        "manha",
        "tarde",
        "noite",
        "faixa_etaria",
        "companhia",
        "plano"
      ],
      "line": 18,
      "id": "portal-clinica-odontologica;cadastro-de-clientes;;1"
    },
    {
      "cells": [
        "Petronio",
        "Bernardino",
        "2770-140",
        "PACO DE ARCOS",
        "Rua 1 de Maio, 78",
        "1Drt",
        "101536879",
        "301784455",
        "910333444",
        "teste01@teste.com",
        "on",
        "on",
        "",
        "41-50 Anos",
        "nao",
        "Plano Dental"
      ],
      "line": 19,
      "id": "portal-clinica-odontologica;cadastro-de-clientes;;2"
    },
    {
      "cells": [
        "Thiago",
        "Bernardino",
        "2856-585",
        "AMORA",
        "Rua fronteira, 34",
        "2ESQ",
        "101536777",
        "301786677",
        "910333555",
        "teste02@teste.com",
        "",
        "on",
        "on",
        "10-21 Anos",
        "nao",
        "Dentes Perfeitos"
      ],
      "line": 20,
      "id": "portal-clinica-odontologica;cadastro-de-clientes;;3"
    },
    {
      "cells": [
        "Arthur",
        "Leite",
        "2770-222",
        "LISBOA",
        "Rua VARGAS, 11",
        "2FRT",
        "101536888",
        "301786677",
        "910333666",
        "teste03@teste.com",
        "",
        "on",
        "",
        "01-10 Anos",
        "nao",
        "Sorriso Sempre"
      ],
      "line": 21,
      "id": "portal-clinica-odontologica;cadastro-de-clientes;;4"
    },
    {
      "cells": [
        "Venus",
        "Aires",
        "2770-555",
        "LEIRIA",
        "Rua DO MEIO, 56",
        "1ESQ",
        "101536999",
        "301788899",
        "910333777",
        "teste04@teste.com",
        "on",
        "on",
        "on",
        "Mais de 51 Anos",
        "sim",
        "OdontoMais"
      ],
      "line": 22,
      "id": "portal-clinica-odontologica;cadastro-de-clientes;;5"
    },
    {
      "cells": [
        "Madalena",
        "Rodrigues",
        "2556-556",
        "LURDES",
        "Rua MOREIRA, 24",
        "4DIR",
        "101572962",
        "301788456",
        "910333777",
        "teste05@teste.com",
        "on",
        "on",
        "",
        "31-40 Anos",
        "sim",
        "Sem plano"
      ],
      "line": 23,
      "id": "portal-clinica-odontologica;cadastro-de-clientes;;6"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 19,
  "name": "Cadastro de clientes",
  "description": "",
  "id": "portal-clinica-odontologica;cadastro-de-clientes;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 8,
  "name": "Que acesso a pagina da Clinica Odontologica",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "Informo o Usuario, senha e inicia a Sessao",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "entro no link Cadastro Cliente",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "preencho os dados: \"Petronio\" , \"Bernardino\", \"2770-140\", \"PACO DE ARCOS\", \"Rua 1 de Maio, 78\", \"1Drt\", \"101536879\", \"301784455\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "os \"910333444\", \"teste01@teste.com\", \"on\", \"on\", \"\", \"41-50 Anos\", \"nao\", \"Plano Dental\"",
  "matchedColumns": [
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clico no link Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "Valido se o cliente foi cadastrado com sucesso",
  "keyword": "Entao "
});
formatter.step({
  "line": 15,
  "name": "Fecho o navegador",
  "keyword": "E "
});
formatter.match({
  "location": "cadastroCliente.queAcessoAPaginaDaClinicaOdontologica()"
});
formatter.result({
  "duration": 15689248601,
  "status": "passed"
});
formatter.match({
  "location": "cadastroCliente.informoOUsuarioSenhaEIniciaASessao()"
});
formatter.result({
  "duration": 21168661601,
  "status": "passed"
});
formatter.match({
  "location": "cadastroCliente.entroNoLinkCadastroCliente()"
});
formatter.result({
  "duration": 10836978600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#cadastro\"}\n  (Session info: chrome\u003d84.0.4147.89)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027NELT959\u0027, ip: \u002710.144.32.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\PETRON~1.BER\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:65003}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: cfabca6a09c495d1c425fab140bbe61d\n*** Element info: {Using\u003did, value\u003dcadastro}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat cadastroCliente.entroNoLinkCadastroCliente(cadastroCliente.java:45)\r\n\tat ✽.Quando entro no link Cadastro Cliente(ClinicaOdontologica.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Petronio",
      "offset": 20
    },
    {
      "val": "Bernardino",
      "offset": 33
    },
    {
      "val": "2770-140",
      "offset": 47
    },
    {
      "val": "PACO DE ARCOS",
      "offset": 59
    },
    {
      "val": "Rua 1 de Maio, 78",
      "offset": 76
    },
    {
      "val": "1Drt",
      "offset": 97
    },
    {
      "val": "101536879",
      "offset": 105
    },
    {
      "val": "301784455",
      "offset": 118
    }
  ],
  "location": "cadastroCliente.preenchoOsDados(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "910333444",
      "offset": 4
    },
    {
      "val": "teste01@teste.com",
      "offset": 17
    },
    {
      "val": "on",
      "offset": 38
    },
    {
      "val": "on",
      "offset": 44
    },
    {
      "val": "",
      "offset": 50
    },
    {
      "val": "41-50 Anos",
      "offset": 54
    },
    {
      "val": "nao",
      "offset": 68
    },
    {
      "val": "Plano Dental",
      "offset": 75
    }
  ],
  "location": "cadastroCliente.os(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "cadastroCliente.clico_no_link_Salvar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "cadastroCliente.validoSeOClienteFoiCadastradoComSucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "cadastroCliente.fecho_o_navegador()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Cadastro de clientes",
  "description": "",
  "id": "portal-clinica-odontologica;cadastro-de-clientes;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 8,
  "name": "Que acesso a pagina da Clinica Odontologica",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "Informo o Usuario, senha e inicia a Sessao",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "entro no link Cadastro Cliente",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "preencho os dados: \"Thiago\" , \"Bernardino\", \"2856-585\", \"AMORA\", \"Rua fronteira, 34\", \"2ESQ\", \"101536777\", \"301786677\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "os \"910333555\", \"teste02@teste.com\", \"\", \"on\", \"on\", \"10-21 Anos\", \"nao\", \"Dentes Perfeitos\"",
  "matchedColumns": [
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clico no link Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "Valido se o cliente foi cadastrado com sucesso",
  "keyword": "Entao "
});
formatter.step({
  "line": 15,
  "name": "Fecho o navegador",
  "keyword": "E "
});
formatter.match({
  "location": "cadastroCliente.queAcessoAPaginaDaClinicaOdontologica()"
});
formatter.result({
  "duration": 5251824299,
  "status": "passed"
});
formatter.match({
  "location": "cadastroCliente.informoOUsuarioSenhaEIniciaASessao()"
});
formatter.result({
  "duration": 20984157400,
  "status": "passed"
});
formatter.match({
  "location": "cadastroCliente.entroNoLinkCadastroCliente()"
});
formatter.result({
  "duration": 10013287700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#cadastro\"}\n  (Session info: chrome\u003d84.0.4147.89)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027NELT959\u0027, ip: \u002710.144.32.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\PETRON~1.BER\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:65055}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c620038afe9141793903a1cb0f18e969\n*** Element info: {Using\u003did, value\u003dcadastro}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat cadastroCliente.entroNoLinkCadastroCliente(cadastroCliente.java:45)\r\n\tat ✽.Quando entro no link Cadastro Cliente(ClinicaOdontologica.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thiago",
      "offset": 20
    },
    {
      "val": "Bernardino",
      "offset": 31
    },
    {
      "val": "2856-585",
      "offset": 45
    },
    {
      "val": "AMORA",
      "offset": 57
    },
    {
      "val": "Rua fronteira, 34",
      "offset": 66
    },
    {
      "val": "2ESQ",
      "offset": 87
    },
    {
      "val": "101536777",
      "offset": 95
    },
    {
      "val": "301786677",
      "offset": 108
    }
  ],
  "location": "cadastroCliente.preenchoOsDados(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "910333555",
      "offset": 4
    },
    {
      "val": "teste02@teste.com",
      "offset": 17
    },
    {
      "val": "",
      "offset": 38
    },
    {
      "val": "on",
      "offset": 42
    },
    {
      "val": "on",
      "offset": 48
    },
    {
      "val": "10-21 Anos",
      "offset": 54
    },
    {
      "val": "nao",
      "offset": 68
    },
    {
      "val": "Dentes Perfeitos",
      "offset": 75
    }
  ],
  "location": "cadastroCliente.os(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "cadastroCliente.clico_no_link_Salvar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "cadastroCliente.validoSeOClienteFoiCadastradoComSucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "cadastroCliente.fecho_o_navegador()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Cadastro de clientes",
  "description": "",
  "id": "portal-clinica-odontologica;cadastro-de-clientes;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 8,
  "name": "Que acesso a pagina da Clinica Odontologica",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "Informo o Usuario, senha e inicia a Sessao",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "entro no link Cadastro Cliente",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "preencho os dados: \"Arthur\" , \"Leite\", \"2770-222\", \"LISBOA\", \"Rua VARGAS, 11\", \"2FRT\", \"101536888\", \"301786677\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "os \"910333666\", \"teste03@teste.com\", \"\", \"on\", \"\", \"01-10 Anos\", \"nao\", \"Sorriso Sempre\"",
  "matchedColumns": [
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clico no link Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "Valido se o cliente foi cadastrado com sucesso",
  "keyword": "Entao "
});
formatter.step({
  "line": 15,
  "name": "Fecho o navegador",
  "keyword": "E "
});
formatter.match({
  "location": "cadastroCliente.queAcessoAPaginaDaClinicaOdontologica()"
});
