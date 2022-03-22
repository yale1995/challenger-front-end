# Front-End Challenger

A aplicação simula a seleção e compra de pacotes de stickers (adesivos). A mesma apresenta um formulário descritivo onde o usuário pode selecionar
o tipo e a quantidade de sticker desajada. Após a seleção o usuário é redirecionado para página de resumo de pagamento. Após efetuado o pagamento é
apresentada a mensagem de sucesso da compra.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Ter o gerenciador de pacotes yarn. Para instalar execute no terminal:

```
sudo apt install yarn nodejs
```

### 🔧 Instalação

Clonar o reposiório com o comando:

```
> git clone
```

Dentro do diretório principal da aplicação, execute no terminal:

```
> yarn dev
```

A aplicação será renderizada na página http://localhost:3000/ do seu navegador.

Selecione o tipo de sticker desejado clicando no checkbox e em seguida aponte a quantidade. Agora selecione o botão 'Adicionar ao carrinho'.
Pronto! Os stickers selecionados já estão no carrinho. Clique em 'Finalizar compra' e agora você será redirecionado para página de resumo. Você está na sessão
de resumo das compras, então confira os produtos, adicione os dados do cartão e finalize a compra.


## ⚙️ Executando os testes

### 🔩 Testes de componentes e páginas

Testes para verificar a renderização correta do html das páginas com importação de componentes;

Testes para verificar a renderização correta do html de cada componente;

Testes para verificar a correta funcionalidade dos botões de incremento;

Testes para verificar a correta funcionalidade dos botões de decremento;

Testes para verificar a correta funcionalidade dos botões de remoção de produto do carrinho;

Testes para verificar o correto recebimento de valor através de input.

```
> yarn jest
```

## 🛠️ Construído com

* [TypeScript](https://www.typescriptlang.org/) - Linguagem de programação utilizada;
* [ReactJS](https://pt-br.reactjs.org/) - framework web usado;
* [NextJS](https://nextjs.org//) - framework web usado;
* [Jest](https://jestjs.io/pt-BR/) - Framework para realização de testes automatizados;
* [SASS](https://sass-lang.com/) - Pré processador de CSS;
* [yarn](https://yarnpkg.com/) - Gerente de Dependência;

## 📌 Versão

1.0.0

## ✒️ Autor

* **Yale Araújo** - *Front-End Software Engineer* - [Yale Araújo](https://github.com/yale1995)

