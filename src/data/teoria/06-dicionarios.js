export default {
  id: 'dicionarios',
  titulo: 'Dicionários: pares de chave e valor',
  resumo: 'Guardar informações pelo nome, consultar com segurança, percorrer e contar coisas.',
  minutos: 10,
  praticar: 'dicionarios',
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Na lista, cada valor tem uma posição (0, 1, 2...). No **dicionário**, cada valor tem um **nome**, chamado de **chave**. É como uma agenda: você procura pelo nome da pessoa e encontra o telefone.',
    },
    {
      tipo: 'codigo',
      codigo:
        'aluno = {"nome": "Ana", "idade": 15, "cidade": "Recife"}\nprint(aluno["nome"])\naluno["idade"] = 16\naluno["curso"] = "Python"\nprint(aluno)',
      saida: "Ana\n{'nome': 'Ana', 'idade': 16, 'cidade': 'Recife', 'curso': 'Python'}",
    },
    {
      tipo: 'lista',
      itens: [
        'Dicionários usam chaves `{ }`, com pares `chave: valor` separados por vírgula.',
        'Para ler um valor, use a chave entre colchetes: `aluno["nome"]`.',
        'O mesmo comando `aluno["curso"] = ...` **atualiza** o valor se a chave já existe, ou **cria** a chave se ela ainda não existe.',
        'Cada chave aparece uma vez só no dicionário.',
      ],
    },
    { tipo: 'titulo', texto: 'Consultando com segurança' },
    { tipo: 'cuidado', texto: 'Pedir uma chave que não existe dá erro:' },
    { tipo: 'codigo', codigo: 'precos = {"pão": 0.5}\nprint(precos["leite"])', erro: true, saida: "KeyError: 'leite'" },
    {
      tipo: 'dica',
      texto:
        'Use `in` para saber se a chave existe, ou `.get(chave, valor_padrao)`, que devolve o valor padrão quando a chave não existe, em vez de dar erro:',
    },
    { tipo: 'codigo', codigo: 'precos = {"pão": 0.5}\nprint("pão" in precos)\nprint(precos.get("leite", 0))', saida: 'True\n0' },
    { tipo: 'titulo', texto: 'Percorrendo um dicionário' },
    {
      tipo: 'texto',
      texto: 'Com `.items()`, o `for` recebe a chave e o valor de cada par, na ordem em que foram adicionados:',
    },
    {
      tipo: 'codigo',
      codigo: 'estoque = {"lápis": 10, "caneta": 4}\nfor produto, quantidade in estoque.items():\n    print(f"{produto}: {quantidade}")',
      saida: 'lápis: 10\ncaneta: 4',
    },
    { tipo: 'titulo', texto: 'O padrão da contagem' },
    {
      tipo: 'texto',
      texto: 'Dicionários são perfeitos para **contar** coisas. Para cada item, pegue a contagem atual (ou 0, se ainda não existir) e some 1:',
    },
    {
      tipo: 'codigo',
      codigo: 'palavra = "banana"\ncontagem = {}\nfor letra in palavra:\n    contagem[letra] = contagem.get(letra, 0) + 1\nprint(contagem)',
      saida: "{'b': 1, 'a': 3, 'n': 2}",
    },
    {
      tipo: 'dica',
      texto: 'Para mostrar o resultado em ordem alfabética, percorra `sorted(contagem)`, que devolve as chaves já ordenadas:',
    },
    {
      tipo: 'codigo',
      codigo: 'contagem = {"b": 1, "a": 3, "n": 2}\nfor letra in sorted(contagem):\n    print(letra, contagem[letra])',
      saida: 'a 3\nb 1\nn 2',
    },
    {
      tipo: 'resumo',
      itens: [
        'Dicionários guardam pares `chave: valor` e usam `{ }`.',
        '`dic[chave] = valor` cria ou atualiza; `dic[chave]` lê.',
        '`in` e `.get(chave, padrão)` evitam o `KeyError`.',
        '`for chave, valor in dic.items():` percorre tudo.',
        'Para contar: `contagem[item] = contagem.get(item, 0) + 1`.',
      ],
    },
  ],
}
