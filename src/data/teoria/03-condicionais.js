export default {
  id: 'condicionais',
  titulo: 'Tomando decisões com if',
  resumo: 'Comparar valores e fazer o programa escolher o que executar com if, elif e else.',
  minutos: 10,
  praticar: 'estruturas-condicionais',
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Até agora, todo programa executava todas as linhas, sempre. Com as **condicionais**, o programa passa a tomar decisões: "se isso for verdade, faça aquilo; senão, faça outra coisa".',
    },
    { tipo: 'titulo', texto: 'Comparações' },
    {
      tipo: 'texto',
      texto: 'Uma comparação é uma pergunta de "sim ou não". A resposta é sempre `True` (verdadeiro) ou `False` (falso):',
    },
    {
      tipo: 'codigo',
      codigo: 'idade = 16\nprint(idade >= 18)\nprint(idade < 18)\nprint(idade == 16)\nprint(idade != 16)',
      saida: 'False\nTrue\nTrue\nFalse',
    },
    {
      tipo: 'lista',
      itens: [
        '`==` igual a',
        '`!=` diferente de',
        '`>` maior que, e `<` menor que',
        '`>=` maior ou igual, e `<=` menor ou igual',
      ],
    },
    {
      tipo: 'cuidado',
      texto: '`=` guarda um valor numa variável; `==` compara dois valores. Trocar um pelo outro é um dos erros mais comuns!',
    },
    { tipo: 'titulo', texto: 'if, elif e else' },
    {
      tipo: 'codigo',
      codigo:
        'nota = float(input())\n\nif nota >= 7:\n    print("Aprovado!")\nelif nota >= 5:\n    print("Recuperação.")\nelse:\n    print("Reprovado.")',
      entrada: ['6'],
      saida: 'Recuperação.',
    },
    {
      tipo: 'lista',
      itens: [
        '`if` ("se") testa a primeira condição.',
        '`elif` ("senão, se") só é testado quando as condições de cima deram falso. Pode ter quantos quiser.',
        '`else` ("senão") é executado quando nenhuma condição deu verdadeiro. Ele é opcional.',
        'Só **um** dos blocos é executado: o primeiro cuja condição for verdadeira.',
      ],
    },
    {
      tipo: 'cuidado',
      texto:
        'Repare nos **dois-pontos** `:` no fim das linhas do `if`, `elif` e `else`, e nos **4 espaços** antes do `print`. Esses espaços (a **indentação**) dizem ao Python o que está "dentro" do `if`. Sem eles, dá erro:',
    },
    {
      tipo: 'codigo',
      codigo: 'idade = 20\nif idade >= 18:\nprint("Maior de idade")',
      erro: true,
      saida: "IndentationError: expected an indented block after 'if' statement on line 2",
    },
    {
      tipo: 'dica',
      texto: 'Aqui no editor, a tecla **Tab** e o **Enter** depois dos `:` já colocam os 4 espaços para você.',
    },
    { tipo: 'titulo', texto: 'Combinando condições: and, or e not' },
    {
      tipo: 'codigo',
      codigo:
        'idade = 25\ntem_ingresso = True\nif idade >= 18 and tem_ingresso:\n    print("Pode entrar no show!")\n\ndia = "sábado"\nif dia == "sábado" or dia == "domingo":\n    print("É fim de semana!")',
      saida: 'Pode entrar no show!\nÉ fim de semana!',
    },
    {
      tipo: 'lista',
      itens: [
        '`and` ("e"): verdadeiro só se as **duas** condições forem verdadeiras.',
        '`or` ("ou"): verdadeiro se **pelo menos uma** for verdadeira.',
        '`not` ("não"): inverte o resultado. `not True` é `False`.',
      ],
    },
    {
      tipo: 'dica',
      texto: 'Para testar se um valor está entre várias opções, use `in`. `if letra in "aeiou":` é bem mais curto que cinco comparações com `or`.',
    },
    { tipo: 'codigo', codigo: 'letra = "e"\nif letra in "aeiou":\n    print("É vogal")', saida: 'É vogal' },
    {
      tipo: 'resumo',
      itens: [
        'Comparações (`==`, `!=`, `>`, `<`, `>=`, `<=`) dão `True` ou `False`.',
        '`if`, `elif` e `else` escolhem qual bloco executar; só um deles roda.',
        'Não esqueça os `:` e os 4 espaços de indentação.',
        '`and`, `or` e `not` combinam condições; `in` testa se algo faz parte de um texto ou lista.',
      ],
    },
  ],
}
