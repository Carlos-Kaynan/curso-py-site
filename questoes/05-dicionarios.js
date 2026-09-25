// Módulo 05 do Curso_Py (github.com/Carlos-Kaynan/Curso_Py)

export default {
  id: 'dicionarios',
  titulo: 'Dicionários',
  descricao: 'Pares de chave e valor: contando, agrupando e consultando.',
  questoes: [
    {
      id: 'dicionario-de-quadrados',
      titulo: 'Dicionário de quadrados',
      dificuldade: 'facil',
      enunciado:
        'Dado um número inteiro positivo n, crie um dicionário em que as chaves vão de 1 até n e os valores são os quadrados das chaves. Depois, exiba o dicionário.',
      entrada: {
        itens: ['n -> inteiro'],
      },
      saida: {
        texto: 'Uma linha para cada item do dicionário, em ordem crescente de chave:',
        itens: ['{chave}: {valor}'],
      },
      exemplos: [['5']],
      testes: [['1'], ['10']],
      solucao: String.raw`
n = int(input())
quadrados = {i: i * i for i in range(1, n + 1)}
for chave, valor in quadrados.items():
    print(f"{chave}: {valor}")
`,
    },
    {
      id: 'soma-por-categoria',
      titulo: 'Soma por categoria',
      dificuldade: 'medio',
      enunciado:
        'Faça um programa que receba n pares de dados: uma categoria e um valor inteiro. Some os valores de cada categoria e imprima o total de cada uma.',
      entrada: {
        itens: ['n -> inteiro', 'n linhas no formato: categoria valor (separados por espaço)'],
      },
      saida: {
        texto: 'Uma linha por categoria, na ordem em que cada categoria apareceu pela primeira vez:',
        itens: ['{categoria}: {valor_total}'],
      },
      observacoes: ['Pesquise sobre o método split() do Python: ele será necessário nesta questão.'],
      exemplos: [['5', 'comida 10', 'transporte 5', 'comida 20', 'lazer 7', 'transporte 3']],
      testes: [['1', 'casa 100'], ['3', 'a 1', 'b 2', 'a -1']],
      solucao: String.raw`
n = int(input())
totais = {}
for _ in range(n):
    categoria, valor = input().split()
    totais[categoria] = totais.get(categoria, 0) + int(valor)
for categoria, total in totais.items():
    print(f"{categoria}: {total}")
`,
    },
    {
      id: 'lista-telefonica',
      titulo: 'Lista telefônica',
      dificuldade: 'medio',
      enunciado:
        'Faça um programa que guarde números de telefone em um dicionário. O programa recebe linhas no formato "nome telefone" até o usuário digitar "fim". Depois disso, lê um nome e imprime o telefone correspondente, caso ele exista.',
      entrada: {
        itens: ['linha -> string ("nome telefone" ou "fim")', 'nome -> string (nome a ser consultado, lido depois do "fim")'],
      },
      saida: {
        texto: 'O telefone, se o nome existir na lista. Caso contrário:',
        itens: ['Essa pessoa não está na lista telefônica'],
      },
      observacoes: ['A busca não deve diferenciar maiúsculas de minúsculas: "ANA", "ana" e "Ana" encontram o mesmo telefone.'],
      exemplos: [['Ana 99999-1111', 'Bruno 98888-2222', 'fim', 'bruno']],
      testes: [['Ana 99999-1111', 'Bruno 98888-2222', 'fim', 'Carla'], ['fim', 'ana'], ['CARLA 3333-4444', 'FIM', 'carla']],
      solucao: String.raw`
agenda = {}
while True:
    linha = input().strip()
    if linha.lower() == "fim":
        break
    nome, telefone = linha.split()
    agenda[nome.lower()] = telefone
consulta = input().strip().lower()
print(agenda.get(consulta, "Essa pessoa não está na lista telefônica"))
`,
    },
    {
      id: 'agrupando-por-letra',
      titulo: 'Agrupando por letra',
      dificuldade: 'medio',
      enunciado:
        'Faça um programa que receba nomes de pessoas, um por linha, até o usuário digitar "fim". Ao final, agrupe os nomes pela primeira letra (sem diferenciar maiúsculas de minúsculas) e imprima os grupos.',
      entrada: {
        itens: ['nome -> string (ou "fim" para encerrar)'],
      },
      saida: {
        texto: 'Uma linha por letra, em ordem alfabética. Os nomes ficam na ordem em que foram digitados, separados por espaço:',
        itens: ['{LETRA}: {nomes}'],
      },
      observacoes: ['A letra do grupo aparece sempre em maiúscula.'],
      exemplos: [['Ana', 'bruno', 'Alice', 'Carlos', 'beatriz', 'fim']],
      testes: [['Zeca', 'fim'], ['fim'], ['maria', 'Marcos', 'lucas', 'Mel', 'FIM']],
      solucao: String.raw`
grupos = {}
while True:
    nome = input().strip()
    if nome.lower() == "fim":
        break
    grupos.setdefault(nome[0].upper(), []).append(nome)
for letra in sorted(grupos):
    print(f"{letra}: {' '.join(grupos[letra])}")
`,
    },
    {
      id: 'contagem-de-letras',
      titulo: 'Contagem de letras na frase',
      dificuldade: 'medio',
      enunciado:
        'Escreva um programa que recebe uma frase e conta quantas vezes cada letra aparece, sem diferenciar maiúsculas de minúsculas. Espaços, números e pontuação devem ser ignorados.',
      entrada: {
        itens: ['frase -> string'],
      },
      saida: {
        texto: 'Uma linha para cada letra que apareceu, em ordem alfabética:',
        itens: ['{LETRA}: {contagem}'],
      },
      observacoes: ['A letra aparece sempre em maiúscula.', 'Considere que a frase não terá letras acentuadas.'],
      exemplos: [['Ola Mundo']],
      testes: [['banana'], ['Python e Legal!'], ['AAA aaa 123']],
      solucao: String.raw`
contagem = {}
for c in input().upper():
    if "A" <= c <= "Z":
        contagem[c] = contagem.get(c, 0) + 1
for letra in sorted(contagem):
    print(f"{letra}: {contagem[letra]}")
`,
    },
    {
      id: 'salarios-e-media',
      titulo: 'Salários e média',
      dificuldade: 'dificil',
      enunciado:
        'Faça um programa que leia o CPF, o nome e o salário de 10 funcionários, guardando-os em um dicionário. Ao final, exiba quem tem salário abaixo da média e quem tem salário acima da média, nessa ordem.',
      entrada: {
        texto: 'Para cada um dos 10 funcionários:',
        itens: ['cpf -> string', 'nome -> string', 'salario -> float'],
      },
      saida: {
        texto: 'Os funcionários aparecem na ordem de entrada, e há uma linha em branco entre os dois grupos:',
        itens: ['Abaixo da média:', '{cpf} {nome}', '...', '', 'Acima da média:', '{cpf} {nome}', '...'],
      },
      observacoes: ['Quem tem salário exatamente igual à média não aparece em nenhum grupo.'],
      exemplos: [
        [
          '111', 'Ana', '1000', '222', 'Bruno', '2000', '333', 'Carla', '3000', '444', 'Davi', '4000', '555', 'Eva', '5000',
          '666', 'Fábio', '6000', '777', 'Gabi', '7000', '888', 'Hugo', '8000', '999', 'Íris', '9000', '000', 'João', '10000',
        ],
      ],
      testes: [
        [
          '1', 'A', '3000', '2', 'B', '3000', '3', 'C', '3000', '4', 'D', '3000', '5', 'E', '3000',
          '6', 'F', '3000', '7', 'G', '12000', '8', 'H', '3000', '9', 'I', '3000', '10', 'J', '3000',
        ],
        [
          '1', 'A', '2500', '2', 'B', '2500', '3', 'C', '2500', '4', 'D', '2500', '5', 'E', '2500',
          '6', 'F', '2500', '7', 'G', '2500', '8', 'H', '2500', '9', 'I', '2500', '10', 'J', '2500',
        ],
      ],
      solucao: String.raw`
funcionarios = {}
for _ in range(10):
    cpf = input()
    nome = input()
    salario = float(input())
    funcionarios[cpf] = {"nome": nome, "salario": salario}
media = sum(f["salario"] for f in funcionarios.values()) / len(funcionarios)
print("Abaixo da média:")
for cpf, f in funcionarios.items():
    if f["salario"] < media:
        print(cpf, f["nome"])
print("")
print("Acima da média:")
for cpf, f in funcionarios.items():
    if f["salario"] > media:
        print(cpf, f["nome"])
`,
    },
  ],
}
