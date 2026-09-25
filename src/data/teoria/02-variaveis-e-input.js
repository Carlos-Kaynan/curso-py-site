export default {
  id: 'variaveis-e-input',
  titulo: 'Variáveis, contas e input()',
  resumo: 'Guardar valores, fazer contas, ler o que o usuário digita e mostrar números com casas decimais.',
  minutos: 12,
  praticar: 'conceitos-basicos',
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Uma **variável** é como uma caixinha com um nome, onde você guarda um valor para usar depois. Você cria uma variável com o sinal de `=`:',
    },
    { tipo: 'codigo', codigo: 'nome = "Ana"\nidade = 15\nprint(nome)\nprint(idade)', saida: 'Ana\n15' },
    {
      tipo: 'dica',
      texto:
        'O `=` do Python não é o "igual" da matemática: ele quer dizer **guarde este valor nesta caixinha**. Leia `idade = 15` como "idade recebe 15".',
    },
    { tipo: 'texto', texto: 'Você pode trocar o valor de uma variável quando quiser. O valor antigo é substituído pelo novo:' },
    { tipo: 'codigo', codigo: 'pontos = 10\npontos = pontos + 5\nprint(pontos)', saida: '15' },
    {
      tipo: 'cuidado',
      texto:
        'Nomes de variáveis não podem ter espaços nem começar com número. Use letras minúsculas e `_` para separar palavras, como `nota_final`. Evite acentos nos nomes.',
    },
    { tipo: 'titulo', texto: 'Tipos de valores' },
    {
      tipo: 'lista',
      itens: [
        '`int`: números inteiros, como `10`, `-3` e `0`.',
        '`float`: números com casas decimais, como `3.14` e `-0.5`. Em Python, a casa decimal usa **ponto**, não vírgula.',
        '`str`: textos (strings), sempre entre aspas, como `"Olá"`.',
        '`bool`: verdadeiro ou falso, escritos `True` e `False`. Você vai usar bastante nas condicionais.',
      ],
    },
    {
      tipo: 'codigo',
      codigo: 'print(type(10))\nprint(type(3.14))\nprint(type("Olá"))\nprint(type(True))',
      saida: "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>",
    },
    { tipo: 'titulo', texto: 'Fazendo contas' },
    {
      tipo: 'codigo',
      codigo:
        'a = 17\nb = 5\nprint(a + b)   # soma\nprint(a - b)   # subtração\nprint(a * b)   # multiplicação\nprint(a / b)   # divisão (o resultado é sempre float)\nprint(a // b)  # divisão inteira (sem as casas decimais)\nprint(a % b)   # resto da divisão\nprint(a ** 2)  # potência: 17 ao quadrado',
      saida: '22\n12\n85\n3.4\n3\n2\n289',
    },
    {
      tipo: 'dica',
      texto: 'O `%` (resto da divisão) é ótimo para saber se um número é par: se `numero % 2` der `0`, ele é par.',
    },
    { tipo: 'titulo', texto: 'Lendo dados com input()' },
    {
      tipo: 'texto',
      texto: '`input()` faz o programa parar e esperar o usuário digitar uma linha. O que for digitado vira um **texto**, que você pode guardar numa variável:',
    },
    { tipo: 'codigo', codigo: 'nome = input()\nprint("Olá,", nome)', entrada: ['Carlos'], saida: 'Olá, Carlos' },
    {
      tipo: 'cuidado',
      texto: 'O `input()` sempre devolve **texto**, mesmo que a pessoa digite um número. Veja o que acontece ao tentar somar:',
    },
    { tipo: 'codigo', codigo: 'a = input()\nb = input()\nprint(a + b)', entrada: ['2', '3'], saida: '23' },
    {
      tipo: 'texto',
      texto:
        'Somar dois textos **junta** um no outro: `"2" + "3"` vira `"23"`. Para fazer contas, converta o texto em número com `int()` (inteiro) ou `float()` (decimal):',
    },
    { tipo: 'codigo', codigo: 'a = int(input())\nb = int(input())\nprint(a + b)', entrada: ['2', '3'], saida: '5' },
    {
      tipo: 'dica',
      texto:
        'Nos exercícios, cada `input()` lê **uma linha** da entrada, na ordem. Se o enunciado diz que a entrada tem dois números, você vai precisar de dois `input()`.',
    },
    {
      tipo: 'dica',
      texto:
        'No seu computador, `input("Digite seu nome: ")` mostra a mensagem antes de esperar a resposta. Aqui no site essa mensagem é ignorada, para não atrapalhar a correção. Pode usar ou não, tanto faz.',
    },
    { tipo: 'titulo', texto: 'Juntando texto e variáveis: f-strings' },
    {
      tipo: 'texto',
      texto: 'Colocando um `f` antes das aspas, você pode escrever variáveis **dentro** do texto, entre chaves `{ }`:',
    },
    { tipo: 'codigo', codigo: 'nome = "Ana"\nidade = 15\nprint(f"{nome} tem {idade} anos.")', saida: 'Ana tem 15 anos.' },
    {
      tipo: 'texto',
      texto:
        'Também dá para escolher quantas casas decimais mostrar: `:.2f` mostra 2 casas, `:.1f` mostra 1 casa, e assim por diante. Muitos exercícios pedem isso!',
    },
    { tipo: 'codigo', codigo: 'preco = 10 / 3\nprint(preco)\nprint(f"R$ {preco:.2f}")', saida: '3.3333333333333335\nR$ 3.33' },
    {
      tipo: 'resumo',
      itens: [
        'Variáveis guardam valores: `nome = "Ana"`.',
        'Os tipos básicos são `int`, `float`, `str` e `bool`.',
        '`/` divide, `//` faz a divisão inteira, `%` dá o resto e `**` é potência.',
        '`input()` sempre devolve texto; use `int()` ou `float()` para fazer contas.',
        'f-strings juntam texto e variáveis: `f"{preco:.2f}"` mostra 2 casas decimais.',
      ],
    },
  ],
}
