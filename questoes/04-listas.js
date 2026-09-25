// Módulo 04 do Curso_Py (github.com/Carlos-Kaynan/Curso_Py)

export default {
  id: 'listas',
  titulo: 'Listas',
  descricao: 'Guardando vários valores: append, sort, split, len e companhia.',
  questoes: [
    {
      id: 'lista-de-compras',
      titulo: 'Listinha de compras',
      dificuldade: 'facil',
      enunciado:
        'Escreva um programa que simule uma lista de compras. O usuário digita itens livremente, um por linha, e o programa os guarda em uma lista. A entrada termina quando o usuário digitar a palavra "fim" (em maiúsculas ou minúsculas).\n\nAo final, exiba todos os itens da lista em ordem alfabética crescente.',
      entrada: {
        itens: ['item -> string (ou "fim" para encerrar)'],
      },
      saida: {
        texto: 'Os itens da lista em ordem alfabética, um por linha.',
      },
      observacoes: ['Um mesmo item pode ser digitado mais de uma vez, e cada repetição deve aparecer na saída.'],
      exemplos: [['banana', 'abacaxi', 'uva', 'FIM']],
      testes: [['pão', 'leite', 'pão', 'arroz', 'fim'], ['fim'], ['sabão', 'fIm']],
      solucao: String.raw`
itens = []
while True:
    item = input()
    if item.lower() == "fim":
        break
    itens.append(item)
itens.sort()
for item in itens:
    print(item)
`,
    },
    {
      id: 'multiplique-por-k',
      titulo: 'Multiplique por k',
      dificuldade: 'facil',
      enunciado:
        'Dada uma lista de números inteiros e um valor inteiro k, crie uma nova lista com os elementos multiplicados por k e imprima o resultado.',
      entrada: {
        itens: ['elementos -> string (números inteiros separados por espaço, em uma única linha)', 'k -> inteiro'],
      },
      saida: {
        texto: 'Os elementos da nova lista, na mesma linha, separados por um espaço.',
      },
      exemplos: [['1 2 3', '2']],
      testes: [['5 -3 0 10', '-1'], ['7', '0'], ['10 20 30 40 50', '3']],
      solucao: String.raw`
elementos = [int(x) for x in input().split()]
k = int(input())
print(" ".join(str(e * k) for e in elementos))
`,
    },
    {
      id: 'maiores-que-a-media',
      titulo: 'Quantos maiores que a média?',
      dificuldade: 'facil',
      enunciado: 'Dada uma lista de números inteiros, calcule a média aritmética e conte quantos elementos são maiores do que ela.',
      entrada: {
        itens: ['elementos -> string (números inteiros separados por espaço, em uma única linha)'],
      },
      saida: {
        texto: 'A quantidade de números que são maiores que a média aritmética.',
      },
      exemplos: [['1 2 3 4 5']],
      testes: [['10 10 10'], ['1 100 2 3'], ['-5 0 5 20']],
      solucao: String.raw`
numeros = [int(x) for x in input().split()]
media = sum(numeros) / len(numeros)
print(len([n for n in numeros if n > media]))
`,
    },
    {
      id: 'palavras-com-vogal',
      titulo: 'Palavras que começam com vogal',
      dificuldade: 'medio',
      enunciado:
        'Faça um programa que leia palavras, uma por linha, até ser digitado "fim". Depois, exiba apenas as palavras que começam com vogal, na ordem em que foram digitadas.',
      entrada: {
        itens: ['palavra -> string (ou "fim" para encerrar)'],
      },
      saida: {
        texto: 'As palavras que começam com vogal (maiúscula ou minúscula), uma por linha. Se nenhuma palavra começar com vogal, exiba:',
        itens: ['Nenhuma palavra digitada começa com vogal.'],
      },
      exemplos: [['abacaxi', 'banana', 'Ovo', 'uva', 'casa', 'fim']],
      testes: [['pedra', 'carro', 'fim'], ['Ilha', 'fim'], ['fim']],
      solucao: String.raw`
palavras = []
while True:
    p = input()
    if p.lower() == "fim":
        break
    palavras.append(p)
com_vogal = [p for p in palavras if p[0].lower() in "aeiou"]
if com_vogal:
    for p in com_vogal:
        print(p)
else:
    print("Nenhuma palavra digitada começa com vogal.")
`,
    },
    {
      id: 'numeros-elevados',
      titulo: 'Números elevados a um expoente',
      dificuldade: 'medio',
      enunciado:
        'Faça um programa que leia 10 números e, em seguida, um expoente. O programa deve criar uma nova lista com cada número elevado ao expoente informado e imprimi-la.',
      entrada: {
        itens: ['numero1 -> float', '...', 'numero10 -> float', 'expoente -> inteiro'],
      },
      saida: {
        texto: 'Cada um dos 10 números elevado ao expoente, um por linha.',
      },
      observacoes: ['Os resultados devem ter 2 casas decimais.'],
      exemplos: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '2']],
      testes: [
        ['0.5', '1.5', '2.5', '-1', '-2', '0', '10', '3', '1.1', '4', '3'],
        ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '0'],
      ],
      solucao: String.raw`
numeros = [float(input()) for _ in range(10)]
expoente = int(input())
for n in numeros:
    print(f"{n ** expoente:.2f}")
`,
    },
    {
      id: 'pares-e-impares',
      titulo: 'Somando pares e ímpares',
      dificuldade: 'medio',
      enunciado:
        'Escreva um programa que permita ao usuário digitar uma quantidade indeterminada de números inteiros, um por vez. Depois, exiba a quantidade de números digitados, a soma dos números pares e a soma dos números ímpares.',
      entrada: {
        texto: 'Primeiro vem um número. Depois, as linhas se alternam assim:',
        itens: ['numero -> inteiro', 'confirmacao -> string ("s" ou "S" para digitar mais um número)', 'numero -> inteiro', '...'],
      },
      saida: {
        itens: [
          'Quantidade de números digitados: {qtd_total}',
          'Soma dos números pares: {soma_pares}',
          'Soma dos números ímpares: {soma_impares}',
        ],
      },
      exemplos: [['4', 's', '7', 'S', '10', 'n']],
      testes: [['5', 'n'], ['-2', 's', '-3', 's', '0', 'x'], ['1', 's', '1', 's', '1', 'nao']],
      solucao: String.raw`
numeros = [int(input())]
while input() in ("s", "S"):
    numeros.append(int(input()))
pares = sum(n for n in numeros if n % 2 == 0)
impares = sum(n for n in numeros if n % 2 != 0)
print(f"Quantidade de números digitados: {len(numeros)}")
print(f"Soma dos números pares: {pares}")
print(f"Soma dos números ímpares: {impares}")
`,
    },
    {
      id: 'quantidade-de-elementos',
      titulo: 'Quantas vezes aparece?',
      dificuldade: 'medio',
      enunciado:
        'Escreva um programa que recebe valores para serem adicionados em uma lista e, ao final, exibe quantas vezes cada valor aparece nela.',
      entrada: {
        texto: 'Primeiro vem um número. Depois, as linhas se alternam assim:',
        itens: ['n -> float', 'confirmacao -> string ("s" ou "S" para digitar mais um valor)', 'n -> float', '...'],
      },
      saida: {
        texto: 'Para cada valor diferente, na ordem em que apareceu pela primeira vez:',
        itens: ['O elemento {elemento} aparece {quantidade} vezes na lista'],
      },
      observacoes: [
        'Cada valor só deve aparecer UMA vez na saída. Ex.: para as entradas 2, 2, 4 e 5, a saída tem 3 linhas (2.0, 4.0 e 5.0).',
        'Os valores são float, então aparecem como 2.0.',
      ],
      exemplos: [['2', 's', '2', 's', '4', 's', '5', 'n']],
      testes: [['3.5', 'n'], ['1', 'S', '2', 'S', '1', 'S', '2', 'S', '1', 'fim']],
      solucao: String.raw`
numeros = [float(input())]
while input() in ("s", "S"):
    numeros.append(float(input()))
vistos = []
for n in numeros:
    if n not in vistos:
        vistos.append(n)
        print(f"O elemento {n} aparece {numeros.count(n)} vezes na lista")
`,
    },
    {
      id: 'contabilidade',
      titulo: 'Contabilidade',
      dificuldade: 'medio',
      enunciado:
        'Faça um programa que leia o nome, o preço de compra e o percentual de lucro de 5 produtos. Depois da leitura, exiba para cada produto seu nome, o preço de compra e o preço de venda calculado.',
      entrada: {
        texto: 'Para cada um dos 5 produtos:',
        itens: ['nome_produto -> string', 'preco_compra -> float', 'percentual_lucro -> float'],
      },
      saida: {
        texto: 'Uma linha por produto, na ordem de entrada:',
        itens: ['{nome_produto}: Compra = R${preco_compra}, Venda = R${preco_venda}'],
      },
      observacoes: ['preco_venda = preco_compra + percentual_lucro% do preco_compra.', 'Os preços devem ter 2 casas decimais.'],
      exemplos: [['Caneta', '2', '50', 'Caderno', '15.5', '20', 'Lápis', '1', '100', 'Borracha', '0.8', '25', 'Mochila', '120', '10']],
      testes: [['A', '10', '0', 'B', '10', '10', 'C', '10', '15.5', 'D', '99.99', '1', 'E', '0', '50']],
      solucao: String.raw`
produtos = []
for _ in range(5):
    nome = input()
    compra = float(input())
    lucro = float(input())
    produtos.append((nome, compra, compra * (1 + lucro / 100)))
for nome, compra, venda in produtos:
    print(f"{nome}: Compra = R$" + f"{compra:.2f}, Venda = R$" + f"{venda:.2f}")
`,
    },
    {
      id: 'k-esimo-valor',
      titulo: 'k-ésimo valor',
      dificuldade: 'medio',
      enunciado:
        'Dada uma lista de números inteiros distintos, encontre o valor que fica na posição k quando a lista está em ordem crescente.\n\nO programa lê primeiro o tamanho t da lista, depois os t números (um por linha) e por último a posição k.',
      entrada: {
        itens: ['t -> inteiro', 'n1 -> inteiro', '...', 'nt -> inteiro', 'k -> inteiro'],
      },
      saida: {
        texto: 'O valor que está na posição k da lista ordenada em ordem crescente.',
      },
      observacoes: ['As posições começam em 0, como os índices do Python: k = 0 é o menor valor.', 'k sempre será uma posição válida da lista.'],
      exemplos: [['5', '30', '10', '50', '20', '40', '0']],
      testes: [['5', '30', '10', '50', '20', '40', '4'], ['3', '-1', '7', '3', '1'], ['1', '42', '0']],
      solucao: String.raw`
t = int(input())
numeros = [int(input()) for _ in range(t)]
k = int(input())
print(sorted(numeros)[k])
`,
    },
    {
      id: 'ranking-de-notas',
      titulo: 'Ranking de notas',
      dificuldade: 'dificil',
      enunciado:
        'Faça um programa que leia o nome e a nota de vários alunos. A entrada termina quando for digitado um nome vazio OU o nome "fim". Guarde os nomes em uma lista e as notas em outra.\n\nEm seguida, exiba os alunos ordenados da maior para a menor nota.',
      entrada: {
        itens: ['nome_aluno -> string (vazio ou "fim" encerra)', 'nota_aluno -> float (só é lida se o nome não encerrou)'],
      },
      saida: {
        texto: 'Uma linha por aluno, da maior para a menor nota:',
        itens: ['{nome}: {nota}'],
      },
      observacoes: [
        'Se duas notas forem iguais, mostre primeiro quem foi digitado primeiro.',
        'A nota deve ter 2 casas decimais.',
      ],
      exemplos: [['Ana', '7.5', 'Bruno', '9', 'Carla', '7.5', 'Davi', '10', 'fim']],
      testes: [['João', '5', 'Maria', '8', ''], ['Zeca', '0', 'FIM'], ['fim']],
      solucao: String.raw`
alunos = []
while True:
    nome = input()
    if nome == "" or nome.lower() == "fim":
        break
    alunos.append((nome, float(input())))
for nome, nota in sorted(alunos, key=lambda a: a[1], reverse=True):
    print(f"{nome}: {nota:.2f}")
`,
    },
  ],
}
