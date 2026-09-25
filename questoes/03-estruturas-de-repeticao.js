// Módulo 03 do Curso_Py (github.com/Carlos-Kaynan/Curso_Py)

export default {
  id: 'estruturas-de-repeticao',
  titulo: 'Estruturas de repetição',
  descricao: 'for, while e break: repetindo tarefas.',
  questoes: [
    {
      id: 'tabuada',
      titulo: 'Tabuada',
      dificuldade: 'facil',
      enunciado: 'Escreva um programa que, dado um número, escreva a tabuada de multiplicação desse número (de numero x 1 até numero x 10).',
      entrada: {
        itens: ['numero -> inteiro'],
      },
      saida: {
        texto: 'Dez linhas, com i indo de 1 até 10:',
        itens: ['{numero} x {i} = {resultado}'],
      },
      exemplos: [['7']],
      testes: [['1'], ['12'], ['0']],
      solucao: String.raw`
n = int(input())
for i in range(1, 11):
    print(f"{n} x {i} = {n * i}")
`,
    },
    {
      id: 'contagem-regressiva',
      titulo: 'Contagem regressiva do foguete',
      dificuldade: 'facil',
      enunciado: 'Faça um programa que, dado um número n, faça a contagem regressiva de n até 0 e depois anuncie o lançamento do foguete.',
      entrada: {
        itens: ['n -> inteiro'],
      },
      saida: {
        texto: 'Um número por linha, de n até 0, e depois:',
        itens: ['O foguete decolou!'],
      },
      exemplos: [['5']],
      testes: [['0'], ['10'], ['1']],
      solucao: String.raw`
n = int(input())
for i in range(n, -1, -1):
    print(i)
print("O foguete decolou!")
`,
    },
    {
      id: 'divisao-com-subtracao',
      titulo: 'Divisão com subtração',
      dificuldade: 'facil',
      enunciado: 'Faça um programa que receba dois valores inteiros (a e b) e faça a divisão inteira de a por b SEM UTILIZAR os operadores / ou //.',
      entrada: {
        itens: ['a -> inteiro', 'b -> inteiro'],
      },
      saida: {
        texto: 'A saída deverá ser o quociente da divisão de a por b.',
      },
      observacoes: ['Considere sempre que a >= b e que os dois são positivos.', 'Dica: quantas vezes dá para subtrair b de a?'],
      exemplos: [['10', '3']],
      testes: [['20', '5'], ['7', '7'], ['100', '9']],
      solucao: String.raw`
a = int(input())
b = int(input())
q = 0
while a >= b:
    a -= b
    q += 1
print(q)
`,
    },
    {
      id: 'numeros-primos',
      titulo: 'É primo?',
      dificuldade: 'facil',
      enunciado: 'Escreva um programa que recebe um número inteiro n e informa se ele é um número primo ou não.',
      entrada: {
        itens: ['n -> inteiro'],
      },
      saida: {
        texto: 'Se o número for primo / caso contrário:',
        itens: ['Sim, esse número é primo', 'O número não é primo'],
      },
      observacoes: ['Um número primo é maior que 1 e só é divisível por 1 e por ele mesmo.'],
      exemplos: [['7'], ['9']],
      testes: [['1'], ['2'], ['97'], ['100'], ['0']],
      solucao: String.raw`
n = int(input())
primo = n > 1
i = 2
while i * i <= n:
    if n % i == 0:
        primo = False
        break
    i += 1
print("Sim, esse número é primo" if primo else "O número não é primo")
`,
    },
    {
      id: 'multiplos-de-3-e-5',
      titulo: 'Múltiplos de 3 e 5',
      dificuldade: 'medio',
      enunciado: 'Faça um programa que, dado um valor n, exiba os números de 0 a n que são múltiplos de 3, de 5 ou de ambos.',
      entrada: {
        itens: ['n -> inteiro'],
      },
      saida: {
        texto: 'Para cada número do intervalo (em ordem crescente) que for múltiplo de 3 e de 5 / só de 3 / só de 5:',
        itens: ['{numero} é múltiplo de 3 e de 5', '{numero} é múltiplo de 3', '{numero} é múltiplo de 5'],
      },
      observacoes: ['Lembre que 0 é múltiplo de todos os números.'],
      exemplos: [['15']],
      testes: [['5'], ['0'], ['31']],
      solucao: String.raw`
n = int(input())
for i in range(n + 1):
    if i % 3 == 0 and i % 5 == 0:
        print(f"{i} é múltiplo de 3 e de 5")
    elif i % 3 == 0:
        print(f"{i} é múltiplo de 3")
    elif i % 5 == 0:
        print(f"{i} é múltiplo de 5")
`,
    },
    {
      id: 'intervalo',
      titulo: 'Intervalinho',
      dificuldade: 'medio',
      enunciado:
        'Faça um programa que leia o primeiro e o último número de uma sequência e depois exiba: a soma desses dois números, os números pares e os números ímpares dentro desse intervalo (incluindo as pontas).',
      entrada: {
        itens: ['primeiro -> inteiro', 'ultimo -> inteiro'],
      },
      saida: {
        texto: 'Há uma linha em branco antes de cada título de lista:',
        itens: [
          'A soma dos números é: {soma}',
          '',
          'Os números pares dentro da sequência são:',
          '(números pares, um por linha)',
          '',
          'Os números ímpares dentro da sequência são:',
          '(números ímpares, um por linha)',
        ],
      },
      observacoes: ['Considere que SEMPRE primeiro <= ultimo.'],
      exemplos: [['1', '10']],
      testes: [['4', '4'], ['-3', '3'], ['5', '12']],
      solucao: String.raw`
a = int(input())
b = int(input())
print(f"A soma dos números é: {a + b}")
print("")
print("Os números pares dentro da sequência são:")
for i in range(a, b + 1):
    if i % 2 == 0:
        print(i)
print("")
print("Os números ímpares dentro da sequência são:")
for i in range(a, b + 1):
    if i % 2 != 0:
        print(i)
`,
    },
    {
      id: 'soma-continua',
      titulo: 'Soma contínua',
      dificuldade: 'medio',
      enunciado:
        'Faça um programa que leia números até o usuário não querer mais continuar. Antes de cada número, o programa lê uma confirmação: se for "S" ou "s", lê mais um número; qualquer outra coisa encerra a leitura.\n\nAo final, exiba quantos números foram lidos e a soma deles.',
      entrada: {
        texto: 'As linhas se alternam assim:',
        itens: ['confirmacao -> string ("S" ou "s" para continuar)', 'numero -> float', '(repete até a confirmação ser outra coisa)'],
      },
      saida: {
        itens: ['Você digitou {quantidade} números', 'A soma final é: {soma}'],
      },
      observacoes: ['soma deve ter 2 casas decimais.'],
      exemplos: [['S', '10', 's', '20.5', 'n']],
      testes: [['n'], ['S', '1', 'S', '2', 'S', '3', 'x'], ['s', '-5', 'N']],
      solucao: String.raw`
quantidade = 0
soma = 0.0
while input() in ("S", "s"):
    soma += float(input())
    quantidade += 1
print(f"Você digitou {quantidade} números")
print(f"A soma final é: {soma:.2f}")
`,
    },
    {
      id: 'caixa-eletronico',
      titulo: 'Caixa eletrônico',
      dificuldade: 'medio',
      enunciado:
        'Faça um programa que, dado um saldo inicial, simule operações de depositar e sacar.\n\nDepois do saldo, o programa lê uma operação por vez: "depositar" ou "sacar". Depois de cada uma delas, lê o valor (float) a ser depositado ou sacado. A leitura termina quando a operação for "sair".',
      entrada: {
        itens: ['saldo -> float', 'operacao -> string ("depositar", "sacar" ou "sair")', 'valor -> float (só depois de depositar ou sacar)'],
      },
      saida: {
        texto: 'Ao final, seu programa deverá mostrar:',
        itens: ['Seu saldo era: R$ {saldo_anterior}', 'Seu novo saldo é: R$ {saldo_atual}'],
      },
      observacoes: ['Os valores devem ter 2 casas decimais.'],
      exemplos: [['100', 'depositar', '50', 'sacar', '30', 'sair']],
      testes: [['500', 'sair'], ['0', 'depositar', '1000.5', 'depositar', '0.5', 'sacar', '200', 'sair'], ['50', 'sacar', '80', 'sair']],
      solucao: String.raw`
saldo = float(input())
inicial = saldo
operacao = input()
while operacao != "sair":
    if operacao == "depositar":
        saldo += float(input())
    elif operacao == "sacar":
        saldo -= float(input())
    operacao = input()
print(f"Seu saldo era: R$ {inicial:.2f}")
print(f"Seu novo saldo é: R$ {saldo:.2f}")
`,
    },
    {
      id: 'sequencia-de-collatz',
      titulo: 'Sequência de Collatz',
      dificuldade: 'medio',
      enunciado:
        'Escreva um programa que, dado um inteiro n, imprima a sequência de Collatz começando em n até chegar a 1. Cada número da sequência deve ser impresso em uma nova linha.\n\nA sequência de Collatz funciona assim:\n• se o número for par, divida-o por 2;\n• se o número for ímpar, multiplique-o por 3 e some 1.',
      entrada: {
        itens: ['n -> inteiro (n >= 1)'],
      },
      saida: {
        texto: 'Os números da sequência, começando em n e terminando em 1, um por linha.',
      },
      observacoes: ['Use divisão inteira (//) para que os números não virem float.'],
      exemplos: [['6']],
      testes: [['1'], ['7'], ['11']],
      solucao: String.raw`
n = int(input())
print(n)
while n > 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    print(n)
`,
    },
    {
      id: 'fibonacci',
      titulo: 'Fibonacci',
      dificuldade: 'medio',
      enunciado:
        'A sequência de Fibonacci começa com 0 e 1, e cada termo seguinte é a soma dos dois anteriores:\n0, 1, 1, 2, 3, 5, 8, 13, 21, ...\n\nFaça um programa que, dado um número inteiro n, imprima todos os termos da sequência de Fibonacci menores ou iguais a n, um por linha.',
      entrada: {
        itens: ['n -> inteiro (n >= 0)'],
      },
      saida: {
        texto: 'Os termos da sequência menores ou iguais a n, um por linha.',
      },
      exemplos: [['10']],
      testes: [['0'], ['1'], ['100']],
      solucao: String.raw`
n = int(input())
a, b = 0, 1
while a <= n:
    print(a)
    a, b = b, a + b
`,
    },
  ],
}
