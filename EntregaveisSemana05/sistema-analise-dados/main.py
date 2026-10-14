import csv
import re


class FormatoInvalidoError(Exception):
    """Exceção personalizada para dados com formato inválido."""
    pass


def validar_email(email):
    """Valida o formato de um endereço de e-mail."""
    padrao = r"^[\w\.-]+@[\w\.-]+\.\w+$"
    return re.match(padrao, email) is not None


def validar_cpf(cpf):
    """Valida o formato de um CPF."""
    padrao = r"^\d{3}\.\d{3}\.\d{3}-\d{2}$"
    return re.match(padrao, cpf) is not None


def validar_telefone(telefone):
    """Valida o formato de um telefone."""
    padrao = r"^\(\d{2}\)\s\d{4,5}-\d{4}$"
    return re.match(padrao, telefone) is not None


def validar_data(data):
    """Valida o formato de uma data no padrão DD/MM/AAAA."""
    padrao = r"^\d{2}/\d{2}/\d{4}$"
    return re.match(padrao, data) is not None


def validar_registro(registro):
    """Valida todos os campos de um registro."""

    if not validar_email(registro["email"]):
        raise FormatoInvalidoError("E-mail inválido.")

    if not validar_cpf(registro["cpf"]):
        raise FormatoInvalidoError("CPF inválido.")

    if not validar_telefone(registro["telefone"]):
        raise FormatoInvalidoError("Telefone inválido.")

    if not validar_data(registro["data"]):
        raise FormatoInvalidoError("Data inválida.")

    return True


def gerar_relatorio(validos, invalidos, total):
    """Gera o relatório final da análise."""

    quantidade_validos = len(validos)
    quantidade_invalidos = len(invalidos)

    if total > 0:
        percentual = (quantidade_validos / total) * 100
    else:
        percentual = 0

    with open("relatorio.txt", "w", encoding="utf-8") as arquivo:
        arquivo.write("====================================\n")
        arquivo.write("   RELATÓRIO DE ANÁLISE DE DADOS\n")
        arquivo.write("====================================\n\n")

        arquivo.write(f"Total de registros: {total}\n")
        arquivo.write(f"Registros válidos: {quantidade_validos}\n")
        arquivo.write(f"Registros inválidos: {quantidade_invalidos}\n")
        arquivo.write(f"Percentual de registros válidos: {percentual:.2f}%\n\n")

        arquivo.write("---------- DADOS VÁLIDOS ----------\n")

        for registro in validos:
            arquivo.write(
                f"Nome: {registro['nome']} | "
                f"E-mail: {registro['email']} | "
                f"CPF: {registro['cpf']} | "
                f"Telefone: {registro['telefone']} | "
                f"Data: {registro['data']}\n"
            )

        arquivo.write("\n---------- DADOS INVÁLIDOS ----------\n")

        for registro, erro in invalidos:
            arquivo.write(
                f"Nome: {registro.get('nome', 'Não informado')} | "
                f"Erro: {erro}\n"
            )


def analisar_dados():
    """Lê o CSV, valida os dados e gera o relatório."""

    validos = []
    invalidos = []
    total = 0

    try:
        with open("dados.csv", "r", encoding="utf-8") as arquivo:
            leitor = csv.DictReader(arquivo)

            colunas_obrigatorias = {
                "nome",
                "email",
                "cpf",
                "telefone",
                "data"
            }

            if not colunas_obrigatorias.issubset(leitor.fieldnames):
                raise KeyError("Uma ou mais colunas obrigatórias estão ausentes.")

            for registro in leitor:
                total += 1

                try:
                    validar_registro(registro)
                    validos.append(registro)

                except FormatoInvalidoError as erro:
                    invalidos.append((registro, str(erro)))

                except ValueError as erro:
                    invalidos.append((registro, f"Erro de valor: {erro}"))

            gerar_relatorio(validos, invalidos, total)

    except FileNotFoundError:
        print("Erro: o arquivo dados.csv não foi encontrado.")

    except KeyError as erro:
        print(f"Erro: coluna obrigatória ausente no CSV. {erro}")

    except ValueError as erro:
        print(f"Erro de conversão de valor: {erro}")

    except Exception as erro:
        print(f"Erro inesperado: {erro}")

    else:
        print("Análise concluída com sucesso.")
        print("O relatório foi salvo em relatorio.txt.")

    finally:
        print("Processo de análise finalizado.")


if __name__ == "__main__":
    analisar_dados()