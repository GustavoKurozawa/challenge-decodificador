# Criptografador de Textos

## Descrição do Projeto

Este projeto é uma aplicação web que permite criptografar e descriptografar textos usando regras específicas de substituição de caracteres. A aplicação foi desenvolvida utilizando HTML, CSS e JavaScript, com foco em uma interface simples e responsiva, adaptável a diferentes dispositivos, como computadores, tablets e celulares.

## Funcionalidades

- **Criptografia de Textos**: Converte as vogais das palavras inseridas com base nas seguintes regras:
  - A letra "e" é convertida para "enter"
  - A letra "i" é convertida para "imes"
  - A letra "a" é convertida para "ai"
  - A letra "o" é convertida para "ober"
  - A letra "u" é convertida para "ufat"

- **Descriptografia de Textos**: Reverte as palavras criptografadas de volta à sua forma original, de acordo com as regras acima.

- **Interface Responsiva**: A interface se ajusta automaticamente a diferentes tamanhos de tela, garantindo uma experiência consistente em computadores, tablets e celulares.

- **Botão de Copiar**: Após a criptografia ou descriptografia, o usuário pode copiar o texto gerado com um único clique.

## Desafios Encontrados e Soluções

### 1. Responsividade da Interface
   - **Desafio**: Garantir que a interface se ajustasse adequadamente a diferentes tamanhos de tela, mantendo uma experiência de usuário consistente.
   - **Solução**: Foram utilizadas media queries para adaptar o layout em dispositivos grandes, médios e pequenos. A imagem foi oculta em telas menores para evitar desordem visual, e o conteúdo foi centralizado em todas as visualizações.

### 2. Estouro de Texto na Seção de Saída
   - **Desafio**: Quando textos muito longos eram inseridos, o conteúdo gerado ultrapassava os limites da área destinada, causando problemas de layout.
   - **Solução**: Ajustes no CSS, como `word-break: break-all;`, `overflow-wrap: break-word;` e `white-space: normal;`, foram implementados para garantir que o texto se mantivesse dentro dos limites, quebrando palavras e linhas conforme necessário.

### 3. Posicionamento do Rodapé
   - **Desafio**: O rodapé inicialmente não estava sendo exibido corretamente na parte inferior da página, especialmente em telas menores.
   - **Solução**: O rodapé foi fixado na parte inferior com `position: fixed;` e ajustes no `body` para garantir que o conteúdo não sobrepusesse o rodapé.

## Como Usar

1. **Insira o Texto**: Digite o texto que deseja criptografar ou descriptografar na área de texto à esquerda.

2. **Escolha a Ação**: Clique em "Criptografar" para converter o texto para a forma criptografada ou "Descriptografar" para reverter o texto criptografado.

3. **Copie o Resultado**: Use o botão "Copiar" para copiar o texto gerado para a área de transferência.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Deploy

A aplicação está disponível no seguinte link: [Criptografador de Textos - Deploy](https://projetos-oracle-one-qp8t.vercel.app/)

## Autor

Desenvolvido por **Gustavo Kurozawa**.
