# + Segura

Acesse a página clicando [aqui](https://lillabordignon.github.io/SAP005-cipher/)

## Índice

1. Definição do produto
2. Interface do produto
3. Metodo utilizado no projeto
4. Especificações técnicas do projeto

***

## 1. Definição do produto

O + Segura foi desenvolvido para auxiliar mulheres que sofrem um relacionamento abusivo, e precisam
de forma segura fazer um pedido de socorro.

## 2. Interface do produto

A interface permite ao usuário:

* Inserir uma mensagem para ser codificada.
* Eleger um offset para indicar quantas posições o caractere irá se deslocar.
* Clicar no botão cifrar obter o resultado da mensagem cifrada.
* Clicar no botão decifrar obter o resultado da mensagem decifrada.
* Clicar no botão limpar para limpar o resultado da tela.

![Imagem](src/img/telaProjeto.jpg)

## 3. Metodo utilizado no projeto

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 4. Especificações técnicas do projeto

Para o desenvolvimento do projeto foram utilizados:

* HTML - usado para estruturar o conteúdo da página;
* CSS - usado para estilizar a página;
* JavaScript - usado para a fazer a interação do usuário com a página.
* Testes - Todos os testes unitários estão cobrindo 100%. Desafios do Hacker Edition.
