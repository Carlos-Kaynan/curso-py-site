// Módulo 06 do Curso_Py (github.com/Carlos-Kaynan/Curso_Py)

export default {
  id: 'funcoes',
  titulo: 'Funções',
  descricao: 'def, parâmetros e return: organizando o código em blocos reutilizáveis.',
  questoes: [
    {
      id: 'area-do-retangulo',
      titulo: 'Área do retângulo',
      dificuldade: 'facil',
      enunciado:
        'Faça um programa que leia a base e a altura de um retângulo e chame uma função area_retangulo(base, altura) que calcula a área e a EXIBE com print().',
      entrada: {
        itens: ['base -> float', 'altura -> float'],
      },
      saida: {
        itens: ['A área do retângulo é {resultado}'],
      },
      observacoes: ['resultado deve ter 2 casas decimais.'],
      exemplos: [['5', '3']],
      testes: [['2.5', '4'], ['0', '10'], ['1.25', '1.25']],
      solucao: String.raw`
def area_retangulo(base, altura):
    print(f"A área do retângulo é {base * altura:.2f}")

base = float(input())
altura = float(input())
area_retangulo(base, altura)
`,
    },
    {
      id: 'qual-e-a-area',
      titulo: 'Qual é a área? (com return)',
      dificuldade: 'facil',
      enunciado:
        'Crie uma função area_retangulo(base, altura) que calcula e RETORNA (com return) a área de um retângulo. O programa lê a base e a altura, chama a função e exibe o valor retornado.',
      entrada: {
        itens: ['base -> float', 'altura -> float'],
      },
      saida: {
        itens: ['A área do retângulo é {area}'],
      },
      observacoes: ['area deve ter 2 casas decimais.', 'Qual a diferença entre esta questão e a anterior? Pense no print() e no return.'],
      exemplos: [['10', '2.5']],
      testes: [['3', '3'], ['0.1', '0.2'], ['1000', '0.5']],
      solucao: String.raw`
def area_retangulo(base, altura):
    return base * altura

base = float(input())
altura = float(input())
print(f"A área do retângulo é {area_retangulo(base, altura):.2f}")
`,
    },
    {
      id: 'media-entre-3',
      titulo: 'Média entre 3',
      dificuldade: 'facil',
      enunciado: 'Escreva uma função media(a, b, c) que recebe três números e retorna a média aritmética entre eles. O programa lê os três números e exibe a média.',
      entrada: {
        itens: ['n1 -> float', 'n2 -> float', 'n3 -> float'],
      },
      saida: {
        texto: 'A média aritmética entre os três números, com 2 casas decimais.',
      },
      exemplos: [['7', '8', '9']],
      testes: [['10', '5.5', '6'], ['0', '0', '1'], ['-3', '3', '9']],
      solucao: String.raw`
def media(a, b, c):
    return (a + b + c) / 3

n1 = float(input())
n2 = float(input())
n3 = float(input())
print(f"{media(n1, n2, n3):.2f}")
`,
    },
    {
      id: 'contar-vogais',
      titulo: 'Contando vogais',
      dificuldade: 'facil',
      enunciado: 'Faça um programa que leia uma palavra e use uma função para contar quantas vogais aparecem nela.',
      entrada: {
        itens: ['palavra -> string'],
      },
      saida: {
        itens: ['A quantidade de vogais em {palavra} é {quantidade}'],
      },
      observacoes: ['Vogais maiúsculas e minúsculas contam; letras acentuadas não contam.'],
      exemplos: [['Python']],
      testes: [['abacaxi'], ['AEIOU'], ['xyz'], ['Paralelepipedo']],
      solucao: String.raw`
def contar_vogais(palavra):
    return len([letra for letra in palavra if letra in "aeiouAEIOU"])

palavra = input()
print(f"A quantidade de vogais em {palavra} é {contar_vogais(palavra)}")
`,
    },
    {
      id: 'contagem-de-cada-vogal',
      titulo: 'Contagem de cada vogal',
      dificuldade: 'medio',
      enunciado:
        'Faça um programa que leia uma palavra e crie uma função que conta quantas vezes CADA vogal aparece nela, devolvendo um dicionário. Exiba o dicionário com print().',
      entrada: {
        itens: ['palavra -> string'],
      },
      saida: {
        texto: 'O dicionário, com as chaves na ordem a, e, i, o, u (mesmo as que aparecem 0 vezes). Exemplo de formato:',
        itens: ["{'a': 3, 'e': 0, 'i': 0, 'o': 0, 'u': 0}"],
      },
      observacoes: ['Maiúsculas e minúsculas contam como a mesma vogal; letras acentuadas não contam.'],
      exemplos: [['banana']],
      testes: [['Paralelepipedo'], ['xyz'], ['AEIOUaeiou']],
      solucao: String.raw`
def contar_vogais(palavra):
    contagem = {v: 0 for v in "aeiou"}
    for letra in palavra.lower():
        if letra in contagem:
            contagem[letra] += 1
    return contagem

print(contar_vogais(input()))
`,
    },
    {
      id: 'n-elevado-a-x',
      titulo: 'n elevado a x',
      dificuldade: 'medio',
      enunciado: 'Crie uma função potencia(n, x) que calcule e retorne n elevado a x SEM UTILIZAR o operador ** nem a função pow().',
      entrada: {
        itens: ['n -> float', 'x -> inteiro (x >= 0)'],
      },
      saida: {
        itens: ['{n} elevado a {x} é {resultado}'],
      },
      observacoes: ['n aparece como float (ex.: 2.0); resultado deve ter 2 casas decimais.', 'Dica: 2³ = 2 × 2 × 2. E qualquer número elevado a 0 dá 1.'],
      exemplos: [['2', '10']],
      testes: [['3', '0'], ['1.5', '3'], ['-2', '5']],
      solucao: String.raw`
def potencia(n, x):
    resultado = 1
    for _ in range(x):
        resultado *= n
    return resultado

n = float(input())
x = int(input())
print(f"{n} elevado a {x} é {potencia(n, x):.2f}")
`,
    },
    {
      id: 'aprovados',
      titulo: 'Quem foi aprovado?',
      dificuldade: 'medio',
      enunciado:
        'Crie uma função alunos_aprovados(nomes, notas) que recebe duas listas, uma com os nomes e outra com as notas dos alunos, e exibe o nome dos alunos aprovados (nota >= 7).',
      entrada: {
        texto: 'Primeiro a quantidade de alunos; depois, para cada aluno:',
        itens: ['n -> inteiro', 'nome_do_aluno -> string', 'nota_do_aluno -> float'],
      },
      saida: {
        texto: 'O título, seguido dos nomes dos aprovados (um por linha, na ordem de entrada):',
        itens: ['Os alunos que foram aprovados foram:'],
      },
      exemplos: [['3', 'Ana', '8', 'Bruno', '6.9', 'Carla', '7']],
      testes: [['2', 'Xavier', '1', 'Yara', '2'], ['1', 'Zé', '10']],
      solucao: String.raw`
def alunos_aprovados(nomes, notas):
    print("Os alunos que foram aprovados foram:")
    for nome, nota in zip(nomes, notas):
        if nota >= 7:
            print(nome)

n = int(input())
nomes = []
notas = []
for _ in range(n):
    nomes.append(input())
    notas.append(float(input()))
alunos_aprovados(nomes, notas)
`,
    },
  ],
}
