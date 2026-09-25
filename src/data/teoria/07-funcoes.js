export default {
  id: 'funcoes',
  titulo: 'Funções: criando seus próprios comandos',
  resumo: 'Criar funções com def, receber parâmetros e entender a diferença entre print e return.',
  minutos: 10,
  praticar: 'funcoes',
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Você já usou várias funções prontas: `print()`, `input()`, `len()`... Agora vai criar as suas! Uma **função** é um bloco de código com um nome, que você escreve uma vez e pode usar (chamar) quantas vezes quiser.',
    },
    {
      tipo: 'codigo',
      codigo: 'def saudar(nome):\n    print(f"Olá, {nome}!")\n\nsaudar("Ana")\nsaudar("Carlos")',
      saida: 'Olá, Ana!\nOlá, Carlos!',
    },
    {
      tipo: 'lista',
      itens: [
        '`def` avisa que você está **definindo** uma função.',
        '`saudar` é o nome da função, e `nome` é um **parâmetro**: uma variável que recebe o valor passado na chamada.',
        'O corpo da função é o bloco indentado (com 4 espaços) depois dos `:`.',
        'Definir não executa nada! O código só roda quando você **chama** a função: `saudar("Ana")`.',
      ],
    },
    { tipo: 'titulo', texto: 'return: devolvendo um resultado' },
    {
      tipo: 'texto',
      texto: 'O `return` faz a função **devolver** um valor para quem a chamou. Aí você pode guardar esse valor numa variável, usar numa conta ou mostrar com `print()`:',
    },
    {
      tipo: 'codigo',
      codigo: 'def dobro(numero):\n    return numero * 2\n\nresultado = dobro(21)\nprint(resultado)\nprint(dobro(5) + 1)',
      saida: '42\n11',
    },
    { tipo: 'titulo', texto: 'print ou return?' },
    {
      tipo: 'texto',
      texto:
        'O `print()` só **mostra** o valor na tela; o programa não consegue usar esse valor depois. O `return` **entrega** o valor para o resto do programa. Uma função sem `return` devolve `None` ("nada"):',
    },
    {
      tipo: 'codigo',
      codigo: 'def dobro_com_print(numero):\n    print(numero * 2)\n\nx = dobro_com_print(4)\nprint(x)',
      saida: '8\nNone',
    },
    {
      tipo: 'cuidado',
      texto: 'Se o enunciado pede uma função que **retorna** um valor, use `return` dentro dela e faça o `print()` fora, no programa principal.',
    },
    { tipo: 'titulo', texto: 'Vários parâmetros e valor padrão' },
    {
      tipo: 'texto',
      texto:
        'Uma função pode receber vários parâmetros, separados por vírgula. E um parâmetro pode ter um **valor padrão**, usado quando a chamada não informa nada para ele:',
    },
    {
      tipo: 'codigo',
      codigo:
        'def media(a, b, c):\n    return (a + b + c) / 3\n\nprint(f"{media(7, 8, 9):.2f}")\n\ndef saudar(nome, saudacao="Olá"):\n    print(f"{saudacao}, {nome}!")\n\nsaudar("Ana")\nsaudar("Ana", "Bom dia")',
      saida: '8.00\nOlá, Ana!\nBom dia, Ana!',
    },
    {
      tipo: 'dica',
      texto:
        'Defina as funções no **começo** do programa e chame depois. O Python lê de cima para baixo: chamar uma função antes de defini-la dá `NameError`.',
    },
    {
      tipo: 'resumo',
      itens: [
        '`def nome(parametros):` cria uma função; ela só roda quando é chamada.',
        '`return` devolve um valor para quem chamou; `print()` só mostra na tela.',
        'Função sem `return` devolve `None`.',
        'Parâmetros podem ter valor padrão: `def saudar(nome, saudacao="Olá"):`.',
      ],
    },
  ],
}
