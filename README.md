
<a id="Coffee-Delivery"></a>
# Coffee Delivery

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#1-Descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#2-Funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#3-Deploy-da-Aplicação)

:small_blue_diamond: [Screenshots](#4-Screenshots)

:small_blue_diamond: [Como rodar a aplicação](#5-Como-rodar-a-aplicação)

:small_blue_diamond: [Dados](#6-Dados)

:small_blue_diamond: [Linguagens, dependencias e libs utilizadas](#7-Linguagens,-dependencias-e-libs-utilizadas)

---

<a id="1-Descrição-do-projeto"></a>
## 1. :memo: Descrição do projeto 

O projeto **Coffee Delivery** simula um site com diversos cafés focado em *delivery*. O usuário pode adicionar e excluir os cafés do carrinho e em seguida preencher os dados do endereço, utilizei a API [ViaCEP](https://viacep.com.br/) .

---
<a id="2-Funcionalidades"></a>
## 2. :books: Funcionalidades

:heavy_check_mark: **Adicionar produto**: o usuário pode adicionar o café no carrinho;
:heavy_check_mark: **Excluir produto**: o usuário pode excluir o café do carrinho;
:heavy_check_mark: **Incremento/Decremento**: o usuário pode aumentar/diminuir a quantidade do(s) café(s) do carrinho;
:heavy_check_mark: **Dados Endereço**: o usuário ao digitar o CEP válido, os dados subsequentes são preenchidos.

---
<a id="3-Deploy-da-Aplicação"></a>
## 3. :o:Deploy da Aplicação

> Link do deploy da aplicação https://coffee-delivery-lilac-eight.vercel.app/

---
<a id="4-Screenshots"></a>
## 4. :art:Screenshots

![Home](https://github.com/claudiomss/CoffeeDelivery/blob/main/screenshots/tela%201.png?raw=true)
![Home](https://github.com/claudiomss/CoffeeDelivery/blob/main/screenshots/tela%202.png?raw=true)

![Home](https://github.com/claudiomss/CoffeeDelivery/blob/main/screenshots/tela%203.png?raw=true)
![Home](https://github.com/claudiomss/CoffeeDelivery/blob/main/screenshots/tela%204.png?raw=true)

---
<a id="5-Como-rodar-a-aplicação"></a>
## 5. :arrow_forward: Como rodar a aplicação 

Clone o projeto em sua máquina: 

```
https://github.com/claudiomss/CoffeeDelivery.git
```
Instale as dependências:

```
npm i
```
Iniciar aplicação:

```
npm run dev
```

---
<a id="6-Dados"></a>
## 6. :floppy_disk: Dados
Foram utilizados dados estáticos, podem ser localizados em [src/data/products.js](https://github.com/claudiomss/CoffeeDelivery/blob/main/src/data/products.js)

### Coffees: 

|id|imagem|type|title|subTitle|price|
| -------- |-------- |-------- |-------- |-------- |-------- |
|1|coffee01|tradicional|Expresso Tradicional|O tradicional café feito com água quente e grãos moídos| 9.9

---
<a id="7-Linguagens,-dependencias-e-libs-utilizadas"></a>
## 7. :wrench:Linguagens, dependencias e libs utilizadas
- HTML
- CSS
- Javascript
- Vite
- React
-  Phosphor-react
- React-hook-form
- Redux
- Redux-logger
- Styled-components
- [API ViaCEP](https://viacep.com.br/)


[ Voltar para o topo](#Coffee-Delivery)
