// Ordem dos assuntos no site. Para adicionar um módulo novo:
// 1. crie o arquivo nesta pasta (copie um existente como modelo);
// 2. importe e coloque ele na lista abaixo;
// 3. rode "npm run questoes" para gerar src/data/questoes.json.
import conceitosBasicos from './01-conceitos-basicos.js'
import estruturasCondicionais from './02-estruturas-condicionais.js'
import estruturasDeRepeticao from './03-estruturas-de-repeticao.js'
import listas from './04-listas.js'
import dicionarios from './05-dicionarios.js'
import funcoes from './06-funcoes.js'

export default [conceitosBasicos, estruturasCondicionais, estruturasDeRepeticao, listas, dicionarios, funcoes]
