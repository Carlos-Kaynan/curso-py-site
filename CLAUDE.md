# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Sobre o usuário e como trabalhar

- O usuário é **iniciante em programação** e está aprendendo frontend.
- Ambiente: Windows, VS Code, PowerShell.
- **Responda sempre em português.**
- Explique de forma simples o que cada mudança faz e por quê.
- Para mudanças grandes, **mostre um plano antes de codar** e espere a aprovação.
- Quando uma etapa estiver funcionando, **lembre o usuário de fazer commit** (e push para o GitHub).

## Projeto

Site de exercícios de Python ("juiz online") com Vite + React 19 + JavaScript. O lint usa o **oxlint** (`.oxlintrc.json`).
As questões vêm do repositório `Carlos-Kaynan/Curso_Py`.

## Comandos

```powershell
npm run dev        # http://localhost:5173
npm run questoes   # regenera src/data/questoes.json (rode depois de mexer em questoes/)
npm run build
npm run lint
```

## Arquitetura

- `questoes/*.js`: fonte das questões, com `exemplos` e `testes` (listas de linhas de entrada) e a `solucao`. `scripts/gerar-questoes.mjs` roda a solução no Pyodide (Node) e grava as saídas esperadas em `src/data/questoes.json`, **sem** a solução. Nunca edite o JSON à mão.
- `src/python/harness.js`: código Python compartilhado pelo navegador e pelo script. Troca o `input()` (ignora a mensagem), captura o `print()` e devolve o traceback só do código do aluno.
- `src/python/python.worker.js`: Web Worker que carrega o Pyodide do CDN jsDelivr. **A versão no URL deve ser igual à do pacote `pyodide` no package.json.**
- `src/python/executor.js`: fala com o worker e aplica o tempo limite (5 s) matando e recriando o worker.
- `src/python/comparar.js`: compara saídas ignorando espaços no fim das linhas e linhas vazias no final.
- Rotas com `HashRouter` (funciona no GitHub Pages sem configuração); `vite.config.js` usa `base: './'` e `worker.format: 'es'`.
- Progresso em `localStorage` (`src/progresso.js`), com as chaves `curso-py:resolvidas` e `curso-py:codigo:<assunto>/<questao>`.
