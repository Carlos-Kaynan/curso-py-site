// Módulo 01 do Curso_Py (github.com/Carlos-Kaynan/Curso_Py)
// Cada item de "exemplos" e "testes" é uma lista com as linhas digitadas na entrada.
// A "solucao" NÃO vai para o site: ela só é usada para gerar as saídas esperadas.

export default {
  id: 'conceitos-basicos',
  titulo: 'Conceitos básicos',
  descricao: 'Variáveis, operadores, input() e print().',
  questoes: [
    {
      id: 'troca-de-valores',
      titulo: 'Troca de valores',
      dificuldade: 'facil',
      enunciado: 'Escreva um programa que permute (troque) o valor de duas variáveis inteiras.',
      entrada: {
        texto: 'O input será composto por dois números inteiros:',
        itens: ['a -> inteiro', 'b -> inteiro'],
      },
      saida: {
        texto: 'A saída será os valores de a e b após a troca de valores:',
        itens: ['Valor de a após permutação: {a}', 'Valor de b após permutação: {b}'],
      },
      exemplos: [['45', '50']],
      testes: [['1', '2'], ['-7', '100'], ['0', '0']],
      solucao: String.raw`
a = int(input())
b = int(input())
a, b = b, a
print(f"Valor de a após permutação: {a}")
print(f"Valor de b após permutação: {b}")
`,
    },
    {
      id: 'qual-o-meu-lucro',
      titulo: 'Qual o meu lucro?',
      dificuldade: 'facil',
      enunciado:
        'Escreva um programa que, a partir de um valor de custo e de um valor de venda, mostre o valor do lucro obtido com a venda do produto.',
      entrada: {
        texto: 'As entradas serão as seguintes:',
        itens: ['custo -> float', 'venda -> float'],
      },
      saida: {
        texto: 'A saída deverá ser:',
        itens: ['O lucro obtido foi R$ {lucro}.'],
      },
      observacoes: ['lucro deverá ter 2 casas decimais.'],
      exemplos: [['2', '15']],
      testes: [['10.5', '20'], ['100', '99.99'], ['0', '0']],
      solucao: String.raw`
custo = float(input())
venda = float(input())
lucro = venda - custo
print(f"O lucro obtido foi R$ {lucro:.2f}.")
`,
    },
    {
      id: 'idade-em-meses-e-dias',
      titulo: 'Idade em meses e dias',
      dificuldade: 'facil',
      enunciado:
        'Escreva um programa que receba o nome de uma pessoa e sua idade em anos. O programa deve calcular e exibir a idade da pessoa em meses e dias.',
      entrada: {
        texto: 'A entrada será formada por:',
        itens: ['nome -> string', 'idade_anos -> inteiro'],
      },
      saida: {
        texto: 'A saída deverá ser:',
        itens: ['{nome} tem {idade_anos} anos ou {idade_meses} meses ou ainda {idade_dias} dias!'],
      },
      observacoes: ['Considere que um ano tem 12 meses e 365 dias.'],
      exemplos: [['Charlote', '14']],
      testes: [['Ana', '1'], ['Carlos Kaynan', '25'], ['Bebê', '0']],
      solucao: String.raw`
nome = input()
idade_anos = int(input())
idade_meses = idade_anos * 12
idade_dias = idade_anos * 365
print(f"{nome} tem {idade_anos} anos ou {idade_meses} meses ou ainda {idade_dias} dias!")
`,
    },
    {
      id: 'volume-do-cilindro',
      titulo: 'Volume do cilindro',
      dificuldade: 'facil',
      enunciado:
        'Faça um programa que leia a altura e o raio de um cilindro, calcule o volume total do cilindro (use π = 3.14) e exiba esse valor.',
      entrada: {
        texto: 'As entradas serão as seguintes:',
        itens: ['altura -> float', 'raio -> float'],
      },
      saida: {
        texto: 'A saída deverá ser:',
        itens: ['O volume do cilindro que tem {altura} de altura e {raio} de raio é igual a {volume}'],
      },
      observacoes: [
        'Volume do cilindro = π × raio² × altura, com π = 3.14.',
        'altura e raio aparecem como float (ex.: 2.0); o volume deve ter 2 casas decimais.',
      ],
      exemplos: [['2', '3']],
      testes: [['10', '1.5'], ['0.5', '4'], ['7', '7']],
      solucao: String.raw`
altura = float(input())
raio = float(input())
volume = 3.14 * altura * raio ** 2
print(f"O volume do cilindro que tem {altura} de altura e {raio} de raio é igual a {volume:.2f}")
`,
    },
    {
      id: 'temperatura-em-kfc',
      titulo: 'Temperatura em K e °F',
      dificuldade: 'facil',
      enunciado:
        'Crie um programa que receba uma temperatura em Celsius e exiba a temperatura lida nas escalas Kelvin (K) e Fahrenheit (F).\n\nConsidere as seguintes fórmulas:\nK = C + 273\nF = 1,8 × C + 32',
      entrada: {
        texto: 'A entrada será da seguinte maneira:',
        itens: ['temperatura_celsius -> float'],
      },
      saida: {
        itens: [
          'Temperatura em Kelvin: {temperatura_kelvin}K',
          'Temperatura em Fahrenheit: {temperatura_fahrenheit}ºF',
        ],
      },
      observacoes: ['temperatura_kelvin e temperatura_fahrenheit devem ter 2 casas decimais.'],
      exemplos: [['25']],
      testes: [['0'], ['-40'], ['36.6']],
      solucao: String.raw`
c = float(input())
k = c + 273
f = 1.8 * c + 32
print(f"Temperatura em Kelvin: {k:.2f}K")
print(f"Temperatura em Fahrenheit: {f:.2f}ºF")
`,
    },
    {
      id: 'valor-final-do-produto',
      titulo: 'Valor final do produto',
      dificuldade: 'facil',
      enunciado:
        'Escreva um programa que leia um valor de custo e o percentual de lucro desejado e, na sequência, mostre o valor final do produto.',
      entrada: {
        texto: 'As entradas serão da seguinte forma:',
        itens: ['custo -> float', 'percentual -> float'],
      },
      saida: {
        texto: 'A saída deverá ser:',
        itens: ['Valor final do produto: R$ {valor_final}.'],
      },
      observacoes: ['valor_final deverá ter 4 casas decimais.'],
      exemplos: [['100', '10']],
      testes: [['59.9', '25'], ['10', '0'], ['3.33', '33.3']],
      solucao: String.raw`
custo = float(input())
percentual = float(input())
valor_final = custo + custo * percentual / 100
print(f"Valor final do produto: R$ {valor_final:.4f}.")
`,
    },
    {
      id: 'horas-de-trabalho',
      titulo: 'Quanto ganho por hora?',
      dificuldade: 'facil',
      enunciado:
        'Escreva um programa que leia o salário de uma pessoa, quantas horas ela trabalha por dia e quantos dias ela trabalhou no mês. Em seguida, calcule e exiba quanto essa pessoa recebe por hora.',
      entrada: {
        texto: 'As entradas serão:',
        itens: ['salario -> float', 'horas_por_dia -> inteiro', 'dias_trabalhados -> inteiro'],
      },
      saida: {
        texto: 'A saída deve ser da seguinte maneira:',
        itens: ['Eu recebo uma mixuruca de R$ {valor_hora} por hora trabalhada.'],
      },
      observacoes: ['valor_hora deve ter apenas uma casa decimal.'],
      exemplos: [['2200', '8', '22']],
      testes: [['1412', '8', '20'], ['5000', '6', '25'], ['3000.50', '7', '21']],
      solucao: String.raw`
salario = float(input())
horas_por_dia = int(input())
dias = int(input())
valor_hora = salario / (horas_por_dia * dias)
print(f"Eu recebo uma mixuruca de R$ {valor_hora:.1f} por hora trabalhada.")
`,
    },
    {
      id: 'distancia-da-nota-10',
      titulo: 'Distância da nota 10',
      dificuldade: 'medio',
      enunciado:
        'Escreva um programa que leia as 2 notas de um aluno em uma disciplina e depois exiba quantos pontos o aluno ficou distante da nota 10 em cada avaliação, sua média e quantos pontos a média ficou distante da nota 10.',
      entrada: {
        texto: 'O input será composto por dois números, que representam a nota 1 e a nota 2 do aluno:',
        itens: ['nota1 -> float', 'nota2 -> float'],
      },
      saida: {
        texto: 'A saída terá 4 linhas, nesta ordem:',
        itens: ['Distância da nota 1 para 10', 'Distância da nota 2 para 10', 'Média', 'Distância da média para 10'],
      },
      observacoes: ['Exiba os números do jeito que o Python mostra um float, sem formatar (ex.: 2.5).'],
      exemplos: [['7.5', '8.5']],
      testes: [['10', '10'], ['5', '6'], ['9.5', '4.5']],
      solucao: String.raw`
nota1 = float(input())
nota2 = float(input())
media = (nota1 + nota2) / 2
print(10 - nota1)
print(10 - nota2)
print(media)
print(10 - media)
`,
    },
    {
      id: 'faturamento-do-evento',
      titulo: 'Faturamento do evento',
      dificuldade: 'medio',
      enunciado:
        'Em um evento foram vendidos dois tipos de ingresso: meia-entrada (custa metade do valor do ingresso inteiro) e inteira (valor cheio).\n\nEscreva um programa que leia a quantidade total de ingressos vendidos, o percentual de ingressos vendidos como meia-entrada (o restante é inteira) e o valor do ingresso inteiro.\n\nO programa deve calcular e exibir a quantidade de ingressos de cada tipo, o valor faturado com cada tipo e o valor total arrecadado.',
      entrada: {
        texto: 'O input será composto por três valores:',
        itens: ['total_ingressos -> inteiro', 'percentual_meia -> inteiro', 'valor_inteira -> float'],
      },
      saida: {
        texto: 'O output será da seguinte forma:',
        itens: [
          'Quantidade de ingressos meia-entrada: {total_meia}',
          'Quantidade de ingressos inteiros: {total_inteira}',
          'Faturamento com meia-entrada: R${faturamento_meia}',
          'Faturamento com inteira: R${faturamento_inteira}',
          'Faturamento total: R${faturamento_total}',
        ],
      },
      observacoes: [
        'As quantidades de ingressos são exibidas sem casas decimais.',
        'Os faturamentos devem ter 2 casas decimais.',
      ],
      exemplos: [['100', '40', '50']],
      testes: [['200', '25', '80.5'], ['10', '0', '30'], ['50', '100', '20']],
      solucao: String.raw`
total = int(input())
percentual = int(input())
valor = float(input())
qtd_meia = total * percentual / 100
qtd_inteira = total - qtd_meia
fat_meia = qtd_meia * valor / 2
fat_inteira = qtd_inteira * valor
print(f"Quantidade de ingressos meia-entrada: {qtd_meia:.0f}")
print(f"Quantidade de ingressos inteiros: {qtd_inteira:.0f}")
print("Faturamento com meia-entrada: R$" + f"{fat_meia:.2f}")
print("Faturamento com inteira: R$" + f"{fat_inteira:.2f}")
print("Faturamento total: R$" + f"{fat_meia + fat_inteira:.2f}")
`,
    },
  ],
}
