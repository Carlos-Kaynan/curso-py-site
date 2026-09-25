export default {
  id: 'repeticao',
  titulo: 'Repetindo com for e while',
  resumo: 'Fazer o computador repetir tarefas: range(), contadores, acumuladores, while e break.',
  minutos: 12,
  praticar: 'estruturas-de-repeticao',
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Imagine mostrar os números de 1 a 100 com 100 `print()`. Nada prático! Os **laços de repetição** (também chamados de **loops**) fazem o computador repetir um bloco de código quantas vezes for preciso.',
    },
    { tipo: 'titulo', texto: 'for com range()' },
    { tipo: 'codigo', codigo: 'for i in range(5):\n    print(i)', saida: '0\n1\n2\n3\n4' },
    {
      tipo: 'texto',
      texto: 'O `for` repete o bloco indentado uma vez para cada valor, e a variável `i` recebe um valor diferente a cada volta. O `range()` gera a sequência de números:',
    },
    {
      tipo: 'lista',
      itens: [
        '`range(5)`: de 0 até 4.',
        '`range(1, 6)`: de 1 até 5.',
        '`range(10, 0, -2)`: de 10 até 2, pulando de 2 em 2 para trás (10, 8, 6, 4, 2).',
      ],
    },
    {
      tipo: 'cuidado',
      texto: 'O `range` **para antes** do número final. Para ir de 1 até 10, use `range(1, 11)`.',
    },
    { tipo: 'codigo', codigo: 'for i in range(1, 4):\n    print(f"3 x {i} = {3 * i}")', saida: '3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9' },
    { tipo: 'titulo', texto: 'Contadores e acumuladores' },
    {
      tipo: 'texto',
      texto: 'Um padrão muito usado: criar uma variável **antes** do laço e ir atualizando ela **dentro** do laço. Por exemplo, para somar de 1 até 5:',
    },
    { tipo: 'codigo', codigo: 'soma = 0\nfor numero in range(1, 6):\n    soma = soma + numero\nprint(soma)', saida: '15' },
    {
      tipo: 'dica',
      texto:
        '`soma += numero` é um atalho para `soma = soma + numero`. Também existem `-=`, `*=` e `/=`. E repare que o `print(soma)` está **fora** do laço (sem os 4 espaços), então só roda uma vez, no final.',
    },
    { tipo: 'titulo', texto: 'while: repetir enquanto for verdade' },
    {
      tipo: 'texto',
      texto: 'O `while` ("enquanto") repete o bloco enquanto a condição for verdadeira. Ele é útil quando você não sabe de antemão quantas voltas vão ser necessárias:',
    },
    {
      tipo: 'codigo',
      codigo: 'contagem = 3\nwhile contagem > 0:\n    print(contagem)\n    contagem = contagem - 1\nprint("Fogo!")',
      saida: '3\n2\n1\nFogo!',
    },
    {
      tipo: 'cuidado',
      texto:
        'Se a condição do `while` nunca ficar falsa, o laço **nunca termina** (um "laço infinito"). Aqui no site, o código é interrompido depois de 5 segundos; no seu computador, aperte **Ctrl + C** para parar.',
    },
    { tipo: 'titulo', texto: 'Lendo até aparecer "fim" (break)' },
    {
      tipo: 'texto',
      texto: 'Vários exercícios leem valores até o usuário digitar uma palavra especial. O jeito mais simples é um `while True` com `break`:',
    },
    {
      tipo: 'codigo',
      codigo: 'total = 0\nwhile True:\n    texto = input()\n    if texto == "fim":\n        break\n    total += int(texto)\nprint(total)',
      entrada: ['10', '20', '5', 'fim'],
      saida: '35',
    },
    {
      tipo: 'texto',
      texto: '`while True` repetiria para sempre... até encontrar o `break`, que sai do laço na mesma hora. Aí o programa continua na primeira linha depois do laço.',
    },
    {
      tipo: 'resumo',
      itens: [
        '`for i in range(...)` repete um número conhecido de vezes.',
        '`range(inicio, fim)` para **antes** do fim.',
        'Contadores e acumuladores começam antes do laço e são atualizados dentro dele.',
        '`while condição:` repete enquanto a condição for verdadeira; cuidado com o laço infinito.',
        '`break` sai do laço na hora.',
      ],
    },
  ],
}
