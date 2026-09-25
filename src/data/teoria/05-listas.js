export default {
  id: 'listas',
  titulo: 'Listas: vários valores numa variável',
  resumo: 'Criar listas, acessar posições, adicionar itens, ordenar e ler vários números numa linha só.',
  minutos: 12,
  praticar: 'listas',
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Uma **lista** guarda vários valores, em ordem, numa variável só. Você cria uma lista com colchetes `[ ]`, separando os itens por vírgula:',
    },
    {
      tipo: 'codigo',
      codigo: 'frutas = ["maçã", "banana", "uva"]\nprint(frutas)\nprint(frutas[0])\nprint(frutas[-1])\nprint(len(frutas))',
      saida: "['maçã', 'banana', 'uva']\nmaçã\nuva\n3",
    },
    {
      tipo: 'cuidado',
      texto:
        'A primeira posição é a **0**, não a 1! Numa lista com 3 itens, as posições são 0, 1 e 2. E `[-1]` pega o último item, `[-2]` o penúltimo, e assim por diante.',
    },
    { tipo: 'dica', texto: '`len(lista)` diz quantos itens a lista tem. Funciona também com textos: `len("Python")` é 6.' },
    { tipo: 'titulo', texto: 'Adicionando e percorrendo' },
    {
      tipo: 'texto',
      texto: 'Comece com uma lista vazia `[]` e vá adicionando itens no final com `.append()`. Para passar por todos os itens, use um `for`:',
    },
    {
      tipo: 'codigo',
      codigo: 'numeros = []\nnumeros.append(5)\nnumeros.append(2)\nnumeros.append(8)\nfor n in numeros:\n    print(n * 10)',
      saida: '50\n20\n80',
    },
    { tipo: 'titulo', texto: 'Funções úteis' },
    {
      tipo: 'codigo',
      codigo:
        'notas = [7, 10, 5, 8]\nprint(sum(notas))\nprint(max(notas))\nprint(min(notas))\nprint(sorted(notas))\nprint(sorted(notas, reverse=True))\nprint(8 in notas)',
      saida: '30\n10\n5\n[5, 7, 8, 10]\n[10, 8, 7, 5]\nTrue',
    },
    {
      tipo: 'lista',
      itens: [
        '`sum()` soma, `max()` acha o maior e `min()` acha o menor.',
        '`sorted(lista)` cria uma **lista nova** ordenada; com `reverse=True`, a ordem é do maior para o menor.',
        '`lista.sort()` ordena a **própria** lista, sem criar outra.',
        '`valor in lista` diz se o valor está na lista (`True` ou `False`).',
      ],
    },
    { tipo: 'titulo', texto: 'Vários valores na mesma linha: split() e join()' },
    {
      tipo: 'texto',
      texto: 'Quando a entrada vem numa linha só, como `4 8 15`, o `.split()` corta o texto nos espaços e devolve uma lista de pedaços:',
    },
    {
      tipo: 'codigo',
      codigo: 'linha = input()\npartes = linha.split()\nprint(partes)\nnumeros = [int(p) for p in partes]\nprint(sum(numeros))',
      entrada: ['4 8 15'],
      saida: "['4', '8', '15']\n27",
    },
    {
      tipo: 'texto',
      texto:
        'Os pedaços ainda são **textos**. A linha `[int(p) for p in partes]` cria uma lista nova convertendo cada pedaço em número: é um jeito curto de escrever um `for` com `append`.',
    },
    { tipo: 'texto', texto: 'O caminho contrário é o `.join()`: ele junta uma lista de textos num texto só, com um separador entre eles.' },
    {
      tipo: 'codigo',
      codigo: 'palavras = ["Python", "é", "legal"]\nprint(" ".join(palavras))\nprint("-".join(palavras))',
      saida: 'Python é legal\nPython-é-legal',
    },
    {
      tipo: 'cuidado',
      texto: 'O `join()` só junta **textos**. Para juntar números, converta cada um antes: `" ".join(str(n) for n in numeros)`.',
    },
    {
      tipo: 'resumo',
      itens: [
        'Listas usam colchetes: `[1, 2, 3]`. A primeira posição é a 0.',
        '`.append()` adiciona no final; `len()` conta os itens.',
        '`sum`, `max`, `min` e `sorted` resolvem muitos problemas em uma linha.',
        '`.split()` transforma uma linha de texto em lista; `.join()` faz o contrário.',
      ],
    },
  ],
}
