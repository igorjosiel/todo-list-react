# 📚 App de Checklist de Estudos

Aplicação de checklist desenvolvida com **React** para organizar estudos e tarefas de forma simples e intuitiva.

O projeto foi desenvolvido como uma aplicação prática para aprofundar conceitos fundamentais e avançados do React, incluindo gerenciamento de estado, Context API, persistência de dados, componentização e organização de código.

## 📸 Preview

![Preview da aplicação](./screen-capture.png)

## ✨ Funcionalidades

* ➕ Adição de tarefas
* ✏️ Edição de tarefas
* 🗑️ Exclusão de tarefas
* ✅ Marcação de tarefas como concluídas
* 📋 Separação entre tarefas **"Para estudar"** e **"Concluído"**
* 🪹 Feedback visual para listas vazias (*Empty State*)
* 📝 Modal para adicionar e editar tarefas
* ✨ Lista de tarefas com animações
* 💾 Persistência das tarefas no `localStorage`

## 🛠️ Tecnologias e conceitos

O projeto utiliza:

* ⚛️ React
* 🟨 JavaScript
* 🎨 CSS
* 💾 `localStorage`
* 🧩 Context API
* 🪝 React Hooks
* 🧱 Componentização
* 📝 Formulários
* 🎯 Ícones SVG personalizados

### Principais conceitos praticados

* `useState`
* `useEffect`
* `useContext`
* `useRef`
* `Context API`
* `React.Fragment`
* `props`
* `onClick`
* `autoFocus`
* `localStorage`
* Lifting State Up
* Prop Drilling
* Smart Components e Dumb Components
* Imutabilidade
* Padrão Toggle
* Princípio DRY

Para consultar as anotações detalhadas dos conceitos estudados:

📖 **[Documentação dos conceitos](./docs/concepts.md)**

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, certifique-se de ter o **Node.js** instalado.

Você pode consultar o [guia oficial de instalação do Node.js](https://nodejs.org/en/download/).

### Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
```

Instale as dependências:

```bash
npm install
```

### Executando em desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse a aplicação pelo endereço exibido no terminal.

## 🏗️ Build para produção

Para gerar uma versão otimizada da aplicação:

```bash
npm run build
```

O resultado do build será gerado na pasta `dist/`.

## 📁 Estrutura do projeto

```text
src/
├── components/
│   ├── Button/
│   ├── Dialog/
│   ├── FabButton/
│   ├── TodoForm/
│   ├── TodoGroup/
│   └── TodoItem/
|   └── TodoProvider/
│
├── App.jsx
└── main.jsx

docs/
└── concepts.md
```

## 📖 Documentação

As anotações detalhadas sobre os conceitos aprendidos durante o desenvolvimento estão disponíveis em:

➡️ **[docs/concepts.md](./docs/concepts.md)**

---

## 🎯 Objetivo

Este projeto tem como objetivo consolidar conhecimentos de **React** por meio da construção de uma aplicação real, aplicando conceitos de organização, reutilização de componentes, gerenciamento de estado e boas práticas de desenvolvimento.
