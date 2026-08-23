![](thumbnail.png)

# App de Checklist de Estudos

Um projeto prático desenvolvido passo a passo para quem já tem o básico de ReactJS e quer evoluir para construir aplicações mais organizadas, escaláveis e com experiência moderna. Ao longo do curso, criamos um app de checklist para organizar estudos, tarefas e o que mais precisar.

## 🔨 Funcionalidades do projeto

* Adição, edição e exclusão de tarefas
* Organização das tarefas em "Para estudar" e "Concluído"
* Marcação de tarefas como concluídas
* Feedback visual para lista vazia (empty state)
* Modal para adicionar/editar tarefas
* Lista animada de tarefas

![](screen-capture.png)

## ✔️ Técnicas e tecnologias utilizadas

O desenvolvimento do projeto aborda as seguintes técnicas e tecnologias:

* **useState e useEffect**: Gerenciamento de estado e persistência no localStorage
* **useContext**: Contexto global para compartilhar estado das tarefas
* **Componentização**: Componentes reutilizáveis como Button, FabButton, Dialog, TodoForm, TodoItem e TodoGroup
* **Estilização com CSS Modules**: Organização dos estilos por componente
* **Manipulação de formulários controlados**
* **Persistência local com localStorage**: Salva as tarefas mesmo fechando o app
* **Ícones SVG personalizados**
* **Boas práticas de organização de código**

## 🛠️ Como rodar o projeto

Após baixar o projeto, siga os passos abaixo para executar localmente:

1. Certifique-se de que você já tem Node.js instalado ([guia oficial](https://nodejs.org/en/download/)).
2. No terminal, navegue até a pasta do projeto e instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npm run dev
```
**React.Fragment ou <></>:** é uma maneira nativa do React de envolver vários elementos HTML em uma tag pai, sem precisar criar um elemento extra na árvore de elementos da página.

**onClick:** evento que podemos utilizar em qualquer tag para lidar com eventos de cliques provindos do usuário. É importante passar a referência da função (ex: onClick={closeDialog}) e não executá-la diretamente (ex: onClick={closeDialog()}), para que a função seja chamada apenas quando o clique ocorrer.

**autoFocus:** é uma propriedade que podemos utilizar em elementos interativos, como botões ou campos de formulário, para que eles recebam o foco automaticamente assim que a página ou o componente onde estão for carregado.

**useRef:** é um hook utilizado para referenciar valores que não causam renderização e é fundamental para manipular o DOM de forma declarativa, conectando a referência criada no JavaScript com o elemento JSX através da propriedade ref. Temos que inicializar uma referência, por exemplo, const dialogRef = useRef(null); Passar essa referência para um elemento JSX usando a propriedade ref, como em <dialog ref={dialogRef}>. O .current do ref pode ser alterado diretamente sem re-renderizar o componente. Se precisar usar um ref em um componente personalizado, precisamos passar a ref com a técnica chamada "forwardRef".

**Componentes burros (Dumb Components):** Focam apenas em como as coisas são exibidas. Eles recebem dados via props e disparam eventos. O Dialog do projeto, ao receber isOpen, é um bom exemplo. Ele não sabe por que está aberto, apenas que está aberto.

**Componentes Inteligentes (Smart Components):** Focam em como as coisas funcionam. Eles gerenciam o estado, buscam dados e contêm a lógica de negócio. O App.jsx no projeto, ao gerenciar showDialog e passar para o Dialog, atua como um componente inteligente.

**Elevação de Estado (Lifting State Up)** o estado showDialog foi "elevado" para o componente pai (App.jsx), que é quem "consome" o Dialog. Isso permite que o componente pai controle o comportamento do componente filho, mantendo o filho mais simples e reutilizável.

**Padão toggle:** esse padrão consiste em alternar um estado booleano (verdadeiro/falso) para mudar entre duas opções, como abrir e fechar uma modal, com uma única ação.

**useEffect:** é um Hook do React que permite executar efeitos colaterais nos componentes funcionais. Efeitos colaterais são operações que afetam algo fora do componente, como buscar dados numa API, adicionar ouvintes de eventos ou modificar o DOM diretamente. Ele recebe dois parâmetros: uma função que define o efeito a ser executado e um array de dependências. O efeito é disparado toda vez que uma das dependências muda. Sem array: o efeito roda sempre que o componente renderizar. Array vazio ([]): o efeito roda só uma vez, logo após o componente montar. Às vezes, precisamos "limpar" nosso efeito pra evitar bugs e vazamentos de memória. Para isso, usamos uma função de cleanup, que é executada antes do efeito rodar novamente ou quando o componente desmontar.