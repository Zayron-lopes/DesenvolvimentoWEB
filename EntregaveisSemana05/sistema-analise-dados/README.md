# Sistema de Análise de Dados em Python

## Descrição

Este projeto consiste em um sistema de análise e validação de dados desenvolvido em Python.

O programa realiza a leitura de um arquivo CSV contendo informações de pessoas e verifica se os dados estão de acordo com os formatos esperados.

São utilizadas técnicas de manipulação de arquivos, expressões regulares (Regex), tratamento de exceções e geração de relatórios.

## Objetivo

O objetivo do projeto é aplicar os conceitos estudados em aula:

- Manipulação de arquivos;
- Leitura de arquivos CSV;
- Expressões regulares;
- Validação de dados;
- Tratamento de exceções;
- Criação de exceções personalizadas;
- Geração de relatórios;
- Utilização de f-strings.

## Estrutura do projeto

```text
sistema-analise-dados/
│
├── main.py
├── dados.csv
├── relatorio.txt
├── README.md
└── .gitignore
```

## Dados analisados

O arquivo `dados.csv` contém as seguintes informações:

- Nome;
- E-mail;
- CPF;
- Telefone;
- Data.

## Validações com Regex

O projeto utiliza o módulo `re` do Python para validar os dados.

### E-mail

É utilizado um padrão para verificar se o e-mail possui uma estrutura válida.

```python
r"^[\w\.-]+@[\w\.-]+\.\w+$"
```

### CPF

O CPF deve seguir o formato:

```text
000.000.000-00
```

Regex utilizada:

```python
r"^\d{3}\.\d{3}\.\d{3}-\d{2}$"
```

### Telefone

O telefone deve seguir o formato:

```text
(98) 99999-9999
```

Regex utilizada:

```python
r"^\(\d{2}\)\s\d{4,5}-\d{4}$"
```

### Data

A data deve seguir o formato:

```text
DD/MM/AAAA
```

Regex utilizada:

```python
r"^\d{2}/\d{2}/\d{4}$"
```

## Metacaracteres utilizados

Alguns dos principais metacaracteres utilizados nas expressões regulares são:

- `^` — indica o início da string;
- `$` — indica o final da string;
- `\d` — representa um dígito;
- `\w` — representa caracteres alfanuméricos e underscore;
- `\s` — representa espaços em branco;
- `{n}` — determina a quantidade de ocorrências;
- `+` — indica uma ou mais ocorrências;
- `\.` — representa literalmente um ponto.

## Tratamento de exceções

O projeto utiliza os blocos:

```python
try
except
else
finally
```

### FileNotFoundError

É utilizado caso o arquivo `dados.csv` não seja encontrado.

### ValueError

É tratado para situações em que ocorre um valor inválido ou uma conversão de tipo inválida.

### KeyError

É utilizado quando uma das colunas obrigatórias não está presente no arquivo CSV.

## Exceção personalizada

Foi criada a exceção:

```python
class FormatoInvalidoError(Exception):
```

Ela é utilizada quando algum dos dados analisados não corresponde ao formato esperado.

## Exemplo de entrada

Exemplo de registro válido:

```text
João Silva,joao.silva@email.com,123.456.789-00,(98) 99999-9999,15/10/2026
```

Exemplo de registro inválido:

```text
Pedro Oliveira,pedro@email,111.222.333-44,(98) 97777-7777,25/10/2026
```

## Relatório

Após a análise, o programa gera automaticamente o arquivo:

```text
relatorio.txt
```

O relatório apresenta:

- Total de registros;
- Quantidade de registros válidos;
- Quantidade de registros inválidos;
- Percentual de registros válidos;
- Dados válidos;
- Erros encontrados nos dados inválidos.

## Como executar

Primeiro, certifique-se de que o Python está instalado.

No terminal, dentro da pasta do projeto, execute:

```bash
python main.py
```

Após a execução, o programa realizará a análise do arquivo `dados.csv` e criará/atualizará o arquivo `relatorio.txt`.

## Tecnologias utilizadas

- Python 3
- Módulo `csv`
- Módulo `re`
- Git
- GitHub

## Conclusão

O projeto demonstra a aplicação prática de manipulação de arquivos, validação de informações com expressões regulares e tratamento de exceções.

A utilização desses recursos permite criar um sistema mais seguro e preparado para lidar com dados inválidos e possíveis erros durante a execução.