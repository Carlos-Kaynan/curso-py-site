// Formato de uma lição (vale para todos os arquivos desta pasta):
//   blocos: lista do que aparece na página, em ordem. Tipos de bloco:
//     { tipo: 'titulo', texto }            -> subtítulo
//     { tipo: 'texto', texto }             -> parágrafo (`código` e **negrito** funcionam)
//     { tipo: 'lista', itens: [...] }      -> lista com marcadores
//     { tipo: 'codigo', codigo, saida, entrada?: [linhas], erro?: true }
//     { tipo: 'dica' | 'cuidado', texto }  -> caixas de destaque
//     { tipo: 'resumo', itens: [...] }     -> resumo final
// A "saida" de cada código é conferida com o Python de verdade: rode "npm run teoria".

export default {
  id: 'primeiros-passos',
  titulo: 'Primeiros passos: Olá, mundo!',
  resumo: 'O que é um programa, seu primeiro print() e os erros mais comuns de quem está começando.',
  minutos: 8,
  praticar: 'conceitos-basicos',
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Um **programa** é uma lista de instruções que o computador segue, uma linha de cada vez, de cima para baixo. **Python** é uma linguagem de programação: um jeito de escrever essas instruções que é fácil de ler para humanos e que o computador consegue entender.',
    },
    {
      tipo: 'texto',
      texto:
        'Por tradição, o primeiro programa que todo mundo escreve ao aprender uma linguagem nova é o que mostra a mensagem "Olá, mundo!" na tela. Vamos fazer o nosso?',
    },
    { tipo: 'titulo', texto: 'Seu primeiro programa' },
    { tipo: 'codigo', codigo: 'print("Olá, mundo!")', saida: 'Olá, mundo!' },
    { tipo: 'texto', texto: 'Só isso! Vamos entender cada pedaço:' },
    {
      tipo: 'lista',
      itens: [
        '`print` é uma **função**: um comando pronto do Python. Ela mostra na tela o que você colocar dentro dos parênteses.',
        'Os **parênteses** `( )` guardam o que vai ser entregue para a função.',
        'As **aspas** `" "` avisam que aquilo é um **texto** (em programação, texto se chama **string**). As aspas não aparecem na saída.',
      ],
    },
    {
      tipo: 'dica',
      texto:
        'Pode usar aspas duplas `"Olá"` ou simples `\'Olá\'`: para o Python é a mesma coisa. Só não misture as duas no mesmo texto, como em `"Olá\'`.',
    },
    { tipo: 'titulo', texto: 'Vários print()' },
    {
      tipo: 'texto',
      texto: 'Cada `print()` escreve uma linha. Com vários, o Python executa um depois do outro, na ordem em que aparecem:',
    },
    {
      tipo: 'codigo',
      codigo: 'print("Olá, mundo!")\nprint("Estou aprendendo Python.")\nprint("E está sendo divertido!")',
      saida: 'Olá, mundo!\nEstou aprendendo Python.\nE está sendo divertido!',
    },
    {
      tipo: 'texto',
      texto:
        'Um `print()` vazio escreve uma linha em branco. E dá para mostrar vários valores num mesmo `print()`, separados por vírgula: o Python coloca um espaço entre eles.',
    },
    {
      tipo: 'codigo',
      codigo: 'print("Primeira linha")\nprint()\nprint("Terceira linha")\nprint("Eu tenho", 20, "anos")',
      saida: 'Primeira linha\n\nTerceira linha\nEu tenho 20 anos',
    },
    {
      tipo: 'texto',
      texto: 'Repare que o `20` está **sem aspas**: é um número, não um texto. O `print()` também mostra números e até faz contas:',
    },
    { tipo: 'codigo', codigo: 'print(2 + 3)\nprint("2 + 3")', saida: '5\n2 + 3' },
    {
      tipo: 'dica',
      texto: 'Com aspas, o Python mostra o texto do jeitinho que está escrito. Sem aspas, ele calcula a conta primeiro e mostra o resultado.',
    },
    { tipo: 'titulo', texto: 'Comentários' },
    {
      tipo: 'texto',
      texto:
        'Tudo o que vem depois de um `#` numa linha é um **comentário**: o Python ignora. Serve para você deixar anotações no código, para você mesmo ou para quem for ler depois.',
    },
    {
      tipo: 'codigo',
      codigo: '# Meu primeiro programa\nprint("Olá, mundo!")  # mostra a saudação',
      saida: 'Olá, mundo!',
    },
    { tipo: 'titulo', texto: 'Os erros mais comuns' },
    {
      tipo: 'texto',
      texto:
        'Errar faz parte! Quando algo está errado, o Python para e mostra uma **mensagem de erro**. A última linha dela diz o tipo do erro. Veja os três mais comuns de quem está começando:',
    },
    {
      tipo: 'texto',
      texto: '**1. Esquecer as aspas.** Sem aspas, o Python acha que `Olá` é o nome de alguma coisa que ele já deveria conhecer:',
    },
    { tipo: 'codigo', codigo: 'print(Olá)', erro: true, saida: "NameError: name 'Olá' is not defined" },
    {
      tipo: 'texto',
      texto: '**2. Escrever Print com P maiúsculo.** O Python diferencia maiúsculas de minúsculas: `Print` e `print` são coisas diferentes para ele.',
    },
    { tipo: 'codigo', codigo: 'Print("Olá, mundo!")', erro: true, saida: "NameError: name 'Print' is not defined. Did you mean: 'print'?" },
    { tipo: 'texto', texto: '**3. Esquecer de fechar o parêntese (ou as aspas).**' },
    { tipo: 'codigo', codigo: 'print("Olá, mundo!"', erro: true, saida: "SyntaxError: '(' was never closed" },
    {
      tipo: 'cuidado',
      texto:
        'Leia sempre a **última linha** do erro e o **número da linha** que aparece como `line 1`, `line 2`... Eles dizem o que deu errado e onde. As mensagens vêm em inglês: "is not defined" quer dizer "não foi definido", e "was never closed" quer dizer "nunca foi fechado".',
    },
    { tipo: 'titulo', texto: 'Como praticar aqui no site' },
    {
      tipo: 'lista',
      itens: [
        'Abra uma questão e escreva seu código no editor.',
        'Clique em **Executar** para rodar com a entrada que está no console e ver o que acontece. Pode testar à vontade!',
        'Quando achar que está certo, clique em **Enviar**: o site roda seu código em vários casos de teste e diz se você acertou.',
      ],
    },
    {
      tipo: 'cuidado',
      texto:
        'A correção compara a sua saída **letra por letra** com a esperada. Um acento, um espaço ou um ponto a mais já conta como resposta errada. Copie as frases do enunciado com atenção!',
    },
    {
      tipo: 'resumo',
      itens: [
        '`print()` mostra coisas na tela; cada `print()` escreve uma linha.',
        'Texto vai entre aspas; número vai sem aspas.',
        '`#` cria um comentário, que o Python ignora.',
        'O Python diferencia maiúsculas de minúsculas: é `print`, não `Print`.',
        'A última linha da mensagem de erro diz o que deu errado.',
      ],
    },
  ],
}
