#language: pt
Funcionalidade: Portal Clinica Odontologica
	Como Tester
	Eu quero validar as funcionalidades
	Para o seu funcionamento sem bugs

Esquema do Cenario: Cadastro de clientes
	Dado Que acesso a pagina da Clinica Odontologica
	Quando Informo o Usuario, senha e inicia a Sessao
	Quando entro no link Cadastro Cliente
	Quando preencho os dados: "<nome>" , "<apelido>", "<caixa_postal>", "<localidade>", "<morada>", "<porta_andar>", "<documento>", "<nif>"
	E os "<telemovel>", "<email>", "<manha>", "<tarde>", "<noite>", "<faixa_etaria>", "<companhia>", "<plano>"
	E clico no link Salvar
	Entao Valido se o cliente foi cadastrado com sucesso
	E Fecho o navegador

Exemplos:
| nome     | apelido    | caixa_postal | localidade    | morada                  | porta_andar | documento | nif       | telemovel | email             | manha | tarde | noite | faixa_etaria    | companhia | plano            |
| Petronio | Bernardino | 2770-140     | PACO DE ARCOS | Rua 1 de Maio, 78       | 1Drt        | 101536879 | 301784455 | 910333444 | teste01@teste.com | on    | on    |       | 41-50 Anos      | nao       | Plano Dental     |
| Thiago   | Bernardino | 2856-585     | AMORA         | Rua fronteira, 34       | 2ESQ        | 101536777 | 301786677 | 910333555 | teste02@teste.com |       | on    | on    | 10-21 Anos      | nao       | Dentes Perfeitos |
| Arthur   | Leite      | 2770-222     | LISBOA        | Rua VARGAS, 11          | 2FRT        | 101536888 | 301786677 | 910333666 | teste03@teste.com |       | on    |       | 01-10 Anos      | nao       | Sorriso Sempre   |
| Venus    | Aires      | 2770-555     | LEIRIA        | Rua DO MEIO, 56         | 1ESQ        | 101536999 | 301788899 | 910333777 | teste04@teste.com | on    | on    | on    | Mais de 51 Anos | sim       | OdontoMais       |
| Madalena | Rodrigues  | 2556-556     | LURDES        | Rua MOREIRA, 24         | 4DIR        | 101572962 | 301788456 | 910333777 | teste05@teste.com | on    | on    |       | 31-40 Anos      | sim       | Sem plano        |
