# 🔎 Busca Repositórios

Aplicação web desenvolvida para pesquisar repositórios públicos do GitHub de forma simples e rápida.

O projeto utiliza a **API REST do GitHub** para realizar as buscas e apresentar os resultados diretamente na interface, exibindo informações como nome do repositório, proprietário, descrição, linguagem utilizada e quantidade de estrelas.

## 🚀 Demonstração

🔗 **[Acessar o projeto](https://joaogabrielrlp.github.io/BuscaRepositorios/)**

🔗 **[Repositório no GitHub](https://github.com/JoaoGabrielRLP/BuscaRepositorios)**

## 📌 Funcionalidades

* 🔎 Busca de repositórios através de palavras-chave
* ⭐ Resultados ordenados pela quantidade de estrelas
* 📦 Exibição de até 10 repositórios por pesquisa
* 👤 Exibição do proprietário e avatar do repositório
* 📝 Exibição da descrição do projeto
* 💻 Exibição da principal linguagem utilizada
* 🔗 Acesso direto ao repositório no GitHub
* ⏳ Feedback visual durante o carregamento
* ⚠️ Tratamento de erros durante a requisição
* 📭 Mensagem quando nenhum repositório é encontrado

## 🛠️ Tecnologias utilizadas

* **HTML5** — estrutura da aplicação
* **CSS3** — estilização e layout
* **JavaScript** — lógica da aplicação e consumo da API
* **GitHub REST API** — busca dos repositórios

## ⚙️ Como funciona

A aplicação utiliza a API de pesquisa de repositórios do GitHub.

Quando o usuário informa um termo e pressiona **Enter**, o JavaScript realiza uma requisição utilizando `fetch()`:

```javascript
const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(term)}&sort=stars&per_page=10`;

const response = await fetch(url);
const data = await response.json();
```

Os dados retornados pela API são processados e utilizados para gerar dinamicamente os cards dos repositórios encontrados.

Cada resultado apresenta:

* Nome do repositório
* Proprietário
* Avatar
* Descrição
* Linguagem principal
* Número de estrelas
* Link para o repositório

## 📂 Estrutura do projeto

```text
BuscaRepositorios/
│
├── assets/
│   ├── script.js
│   └── style.css
│
├── index.html
│
└── .gitignore
```

### `index.html`

Responsável pela estrutura da aplicação, incluindo o campo de pesquisa e a área onde os resultados são exibidos.

### `assets/script.js`

Contém a lógica da aplicação, incluindo:

* Captura do termo pesquisado
* Comunicação com a API do GitHub
* Tratamento da resposta
* Renderização dos resultados
* Tratamento de estados de carregamento, erro e ausência de resultados

### `assets/style.css`

Responsável pela estilização da interface, layout, cards de resultados e estados da aplicação.

## ▶️ Como executar localmente

Como o projeto utiliza apenas HTML, CSS e JavaScript, não é necessário instalar dependências ou utilizar um servidor backend.

### 1. Clone o repositório

```bash
git clone https://github.com/JoaoGabrielRLP/BuscaRepositorios.git
```

### 2. Acesse a pasta

```bash
cd BuscaRepositorios
```

### 3. Execute o projeto

Abra o arquivo `index.html` no navegador.

Também é possível utilizar uma extensão como **Live Server** no Visual Studio Code para executar a aplicação durante o desenvolvimento.

## 🔌 API utilizada

O projeto utiliza a **GitHub REST API** para pesquisar repositórios.

Endpoint utilizado:

```text
https://api.github.com/search/repositories
```

A busca utiliza parâmetros para definir:

* `q` — termo pesquisado
* `sort=stars` — ordenação por estrelas
* `per_page=10` — quantidade de resultados retornados

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido como exercício prático para aprimorar conhecimentos em:

* JavaScript
* Programação assíncrona
* `async/await`
* `fetch()`
* Consumo de APIs REST
* Manipulação do DOM
* Tratamento de erros
* Desenvolvimento de interfaces web

## 📚 Aprendizados

Durante o desenvolvimento, foram praticados conceitos importantes de desenvolvimento frontend, principalmente o consumo de uma API externa e a transformação dos dados recebidos em elementos visuais na página.

O projeto também demonstra o uso de JavaScript assíncrono para realizar requisições sem bloquear a interação da aplicação.

## 👨‍💻 Autor

**João Gabriel**

Desenvolvedor em formação e estudante de **Sistemas de Informação**.

* GitHub: [JoaoGabrielRLP](https://github.com/JoaoGabrielRLP)
* Repositório: [BuscaRepositorios](https://github.com/JoaoGabrielRLP/BuscaRepositorios)

---

⭐ Se este projeto foi útil para você, considere deixar uma estrela no repositório!
