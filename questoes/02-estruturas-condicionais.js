// Módulo 02 do Curso_Py (github.com/Carlos-Kaynan/Curso_Py)

export default {
  id: 'estruturas-condicionais',
  titulo: 'Estruturas condicionais',
  descricao: 'if, elif e else: fazendo o programa tomar decisões.',
  questoes: [
    {
      id: 'categoria-do-atleta',
      titulo: 'Categoria do atleta',
      dificuldade: 'facil',
      enunciado:
        'Faça um programa que leia o nome, o sobrenome e a idade de um atleta e exiba seu nome completo e se ele está na categoria infantil (menor de 12 anos), juvenil (entre 12 e 17 anos), adulta (entre 18 e 35 anos) ou master (acima de 35 anos).',
      entrada: {
        itens: ['nome -> string', 'sobrenome -> string', 'idade -> inteiro'],
      },
      saida: {
        texto: 'Troque {categoria} por infantil, juvenil, adulta ou master:',
        itens: ['A categoria do atleta {nome_completo} é a {categoria}.'],
      },
      observacoes: ['O nome completo é o nome e o sobrenome separados por um espaço.'],
      exemplos: [['Ana', 'Silva', '10'], ['Carlos', 'Kaynan', '36']],
      testes: [['João', 'Souza', '12'], ['Maria', 'Lima', '17'], ['Pedro', 'Alves', '18'], ['Rita', 'Costa', '35']],
      solucao: String.raw`
nome = input()
sobrenome = input()
idade = int(input())
if idade < 12:
    categoria = "infantil"
elif idade <= 17:
    categoria = "juvenil"
elif idade <= 35:
    categoria = "adulta"
else:
    categoria = "master"
print(f"A categoria do atleta {nome} {sobrenome} é a {categoria}.")
`,
    },
    {
      id: 'qual-e-o-caractere',
      titulo: 'Vogal, número ou operação?',
      dificuldade: 'facil',
      enunciado:
        'Escreva um programa que leia um ÚNICO caractere e depois informe se ele é uma vogal, um número ou uma operação matemática (+, -, * ou /).',
      entrada: {
        itens: ['caractere -> string'],
      },
      saida: {
        itens: [
          'O caractere é uma vogal',
          'O caractere é um número',
          'O caractere é uma operação matemática',
        ],
      },
      observacoes: [
        'A vogal pode ser maiúscula ou minúscula.',
        'Você pode usar o método isnumeric() do Python.',
      ],
      exemplos: [['a'], ['7']],
      testes: [['E'], ['*'], ['/'], ['0'], ['U']],
      solucao: String.raw`
c = input()
if c.lower() in "aeiou":
    print("O caractere é uma vogal")
elif c in ("+", "-", "*", "/"):
    print("O caractere é uma operação matemática")
elif c.isnumeric():
    print("O caractere é um número")
`,
    },
    {
      id: 'calculadora',
      titulo: 'Calculadora',
      dificuldade: 'facil',
      enunciado:
        'Faça um programa que leia dois números (n1 e n2) e uma operação matemática (+, -, * ou /) e exiba o resultado dessa operação entre os dois números.',
      entrada: {
        itens: ['n1 -> float', 'n2 -> float', 'operacao -> string'],
      },
      saida: {
        texto: 'Troque {nome_operacao} por adição, subtração, multiplicação ou divisão:',
        itens: ['Você escolheu a operação de {nome_operacao}. O resultado dessa {nome_operacao} é {resultado}'],
      },
      observacoes: ['resultado deve ter 2 casas decimais.'],
      exemplos: [['10', '5', '+'], ['7', '2', '/']],
      testes: [['10', '5', '-'], ['3', '2.5', '*'], ['1', '3', '/']],
      solucao: String.raw`
n1 = float(input())
n2 = float(input())
op = input()
if op == "+":
    nome, resultado = "adição", n1 + n2
elif op == "-":
    nome, resultado = "subtração", n1 - n2
elif op == "*":
    nome, resultado = "multiplicação", n1 * n2
else:
    nome, resultado = "divisão", n1 / n2
print(f"Você escolheu a operação de {nome}. O resultado dessa {nome} é {resultado:.2f}")
`,
    },
    {
      id: 'media-salarial',
      titulo: 'Média salarial',
      dificuldade: 'medio',
      enunciado:
        'Faça um programa que leia a média salarial dos funcionários de uma empresa e, na sequência, o nome e o salário de um dos funcionários. Ao final, exiba o nome do funcionário e se o salário dele é maior, menor ou igual à média salarial.',
      entrada: {
        itens: ['media_salarial -> float', 'nome_funcionario -> string', 'salario_funcionario -> float'],
      },
      saida: {
        texto: 'Se o salário for maior, menor ou igual à média, respectivamente:',
        itens: [
          '{nome_funcionario} recebe R$ {diferenca} a mais do que a média salarial da empresa.',
          '{nome_funcionario} recebe R$ -{diferenca} a menos do que a média salarial da empresa.',
          '{nome_funcionario} recebe igual a média salarial da empresa.',
        ],
      },
      observacoes: [
        'diferenca é a distância entre o salário e a média (sempre positiva), com 2 casas decimais.',
        'Repare que, no caso "a menos", aparece um sinal de menos antes da diferença.',
      ],
      exemplos: [['3000', 'Ana', '3500'], ['2500.50', 'Bruno', '2000']],
      testes: [['4000', 'Carla', '4000'], ['1500', 'Davi', '1499.99'], ['10000', 'Eva', '12345.67']],
      solucao: String.raw`
media = float(input())
nome = input()
salario = float(input())
if salario > media:
    print(f"{nome} recebe R$ {salario - media:.2f} a mais do que a média salarial da empresa.")
elif salario < media:
    print(f"{nome} recebe R$ -{media - salario:.2f} a menos do que a média salarial da empresa.")
else:
    print(f"{nome} recebe igual a média salarial da empresa.")
`,
    },
    {
      id: 'triangulos',
      titulo: 'Forma um triângulo?',
      dificuldade: 'medio',
      enunciado:
        'Escreva um programa que leia o tamanho de três segmentos de reta e informe se eles podem formar um triângulo (a soma de quaisquer dois lados deve ser sempre maior que o terceiro lado).\n\nCaso formem, informe também se o triângulo é equilátero (três lados iguais), isósceles (apenas dois lados iguais) ou escaleno (três lados diferentes).',
      entrada: {
        itens: ['lado_1 -> inteiro', 'lado_2 -> inteiro', 'lado_3 -> inteiro'],
      },
      saida: {
        texto: 'Não forma triângulo / equilátero / isósceles / escaleno:',
        itens: [
          'Esses segmentos de reta não formam um triângulo. Tchau!!!!',
          'Triangulinho com todos os lados iguais: é equilátero!!',
          'Triangulinho com dois lados iguais: é isósceles!!',
          'Tem os três lados diferentes mas ainda continua sendo um triangulinho: é escaleno!!',
        ],
      },
      exemplos: [['3', '3', '3'], ['1', '2', '10']],
      testes: [['3', '4', '5'], ['5', '5', '8'], ['2', '2', '4'], ['7', '10', '7']],
      solucao: String.raw`
a = int(input())
b = int(input())
c = int(input())
if a + b > c and a + c > b and b + c > a:
    if a == b == c:
        print("Triangulinho com todos os lados iguais: é equilátero!!")
    elif a != b and a != c and b != c:
        print("Tem os três lados diferentes mas ainda continua sendo um triangulinho: é escaleno!!")
    else:
        print("Triangulinho com dois lados iguais: é isósceles!!")
else:
    print("Esses segmentos de reta não formam um triângulo. Tchau!!!!")
`,
    },
    {
      id: 'imposto-de-renda',
      titulo: 'Imposto de renda',
      dificuldade: 'medio',
      enunciado:
        'Faça um programa que leia o valor da diária de um funcionário e a quantidade de dias que ele trabalhou no mês, e exiba o salário bruto, o Imposto de Renda (IR) a ser pago e o salário líquido.\n\nO cálculo do IR deve considerar:\n• salário até R$ 2.000,00: isento de IR;\n• salário acima de R$ 2.000,00 e até R$ 5.000,00: paga 15% de IR;\n• salário acima de R$ 5.000,00: paga 27,5% de IR.',
      entrada: {
        itens: ['valor_diaria -> float', 'dias_trabalhados -> inteiro'],
      },
      saida: {
        texto: 'Se o salário bruto não pagar IR (2 linhas) ou se pagar IR (4 linhas):',
        itens: [
          'Você está isento do Imposto de Renda.',
          'Seu salário é: R$ {salario_bruto}',
          '— ou —',
          'Você não está isento do Imposto de Renda.',
          'Seu salário bruto é de: R$ {salario_bruto}',
          'Seu valor do IR é: R$ {ir}',
          'Seu salário líquido é de: R$ {salario_liquido}',
        ],
      },
      observacoes: ['Todos os valores devem ter 2 casas decimais.'],
      exemplos: [['100', '20'], ['150', '22']],
      testes: [['300', '20'], ['250', '20'], ['80.5', '10'], ['200.01', '10']],
      solucao: String.raw`
diaria = float(input())
dias = int(input())
salario = diaria * dias
if salario <= 2000:
    print("Você está isento do Imposto de Renda.")
    print(f"Seu salário é: R$ {salario:.2f}")
else:
    if salario <= 5000:
        ir = salario * 0.15
    else:
        ir = salario * 0.275
    print("Você não está isento do Imposto de Renda.")
    print(f"Seu salário bruto é de: R$ {salario:.2f}")
    print(f"Seu valor do IR é: R$ {ir:.2f}")
    print(f"Seu salário líquido é de: R$ {salario - ir:.2f}")
`,
    },
    {
      id: 'classificando-numeros',
      titulo: 'Classificando números',
      dificuldade: 'dificil',
      enunciado:
        'Faça um programa que leia quatro números inteiros (n1, n2, n3 e n4) e depois exiba, em grupos e nesta ordem: os pares e positivos, os pares e negativos, os ímpares e positivos, os ímpares e negativos e os zeros.',
      entrada: {
        itens: ['n1 -> inteiro', 'n2 -> inteiro', 'n3 -> inteiro', 'n4 -> inteiro'],
      },
      saida: {
        texto: 'Cada título é seguido dos números daquele grupo (um por linha, na ordem de entrada), e há uma linha em branco entre os grupos:',
        itens: [
          'Números pares e positivos:',
          'Números pares e negativos:',
          'Números ímpares e positivos:',
          'Números ímpares e negativos:',
          'Números zeros:',
        ],
      },
      exemplos: [['2', '-4', '3', '0']],
      testes: [['-1', '-3', '5', '7'], ['0', '0', '0', '0'], ['10', '-10', '11', '-11']],
      solucao: String.raw`
numeros = [int(input()) for _ in range(4)]
grupos = [
    ("Números pares e positivos:", lambda n: n > 0 and n % 2 == 0),
    ("Números pares e negativos:", lambda n: n < 0 and n % 2 == 0),
    ("Números ímpares e positivos:", lambda n: n > 0 and n % 2 != 0),
    ("Números ímpares e negativos:", lambda n: n < 0 and n % 2 != 0),
    ("Números zeros:", lambda n: n == 0),
]
for i, (titulo, regra) in enumerate(grupos):
    if i > 0:
        print("")
    print(titulo)
    for n in numeros:
        if regra(n):
            print(n)
`,
    },
  ],
}
