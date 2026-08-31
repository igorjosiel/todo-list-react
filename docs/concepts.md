# 📖 Conceitos

Este documento reúne os principais conceitos de **React** e JavaScript estudados durante o desenvolvimento do App de Checklist de Estudos.

---

## ⚛️ React

### React Fragment

O **React Fragment** permite agrupar múltiplos elementos JSX sem adicionar um elemento extra ao DOM.

Pode ser utilizado através de:

```jsx
<React.Fragment>
  <h1>Título</h1>
  <p>Descrição</p>
</React.Fragment>
```

Ou utilizando sua forma abreviada:

```jsx
<>
  <h1>Título</h1>
  <p>Descrição</p>
</>
```

---

### `onClick`

`onClick` é uma propriedade utilizada para lidar com eventos de clique em elementos React.

Ao passar uma função, devemos fornecer sua referência:

```jsx
onClick={closeDialog}
```

Em vez de executá-la diretamente:

```jsx
onClick={closeDialog()}
```

No primeiro caso, a função será executada quando ocorrer o clique. No segundo, ela será executada durante a renderização do componente.

---

### `autoFocus`

`autoFocus` permite que determinados elementos recebam foco automaticamente quando são renderizados.

É bastante utilizado em campos de formulário:

```jsx
<input autoFocus />
```

---

### `useRef`

`useRef` é um Hook utilizado para manter uma referência mutável que persiste entre renderizações sem causar uma nova renderização quando seu valor é alterado.

Também pode ser utilizado para acessar elementos do DOM.

Exemplo:

```jsx
const dialogRef = useRef(null);
```

Depois, podemos associar a referência a um elemento:

```jsx
<dialog ref={dialogRef}>
  ...
</dialog>
```

O valor atual da referência pode ser acessado através de:

```jsx
dialogRef.current
```

Uma alteração em `ref.current` não provoca uma nova renderização do componente.

---

## 🧩 Organização de componentes

### Dumb Components

**Dumb Components**, também chamados de componentes de apresentação, concentram-se principalmente na **apresentação da interface**.

Eles normalmente:

* Recebem dados através de props;
* Exibem informações;
* Disparam eventos;
* Possuem pouca ou nenhuma lógica de negócio.

O componente `Dialog`, por exemplo, pode receber uma prop como `isOpen` e simplesmente representar visualmente o estado recebido.

---

### Smart Components

**Smart Components** concentram-se principalmente na **lógica da aplicação**.

Eles podem:

* Gerenciar estado;
* Executar lógica de negócio;
* Buscar dados;
* Coordenar outros componentes.

No projeto, o `App.jsx`, ao controlar estados como `showDialog` e passá-los para outros componentes, assume parte dessa responsabilidade.

> Essa divisão entre "Smart" e "Dumb" Components é um padrão de organização, não uma regra obrigatória do React.

---

### Lifting State Up

**Lifting State Up** significa mover um estado para um componente pai comum quando diferentes componentes precisam compartilhar ou controlar esse estado.

No projeto, o estado relacionado à abertura do `Dialog` pode ser mantido no componente pai e passado para o componente filho através de props.

Isso permite que o componente pai controle o comportamento enquanto o componente filho permanece mais reutilizável.

---

### Padrão Toggle

O padrão **Toggle** consiste em alternar um valor booleano entre `true` e `false`.

É muito utilizado para controlar estados como:

* Modal aberta/fechada;
* Menu aberto/fechado;
* Elemento visível/oculto.

Exemplo:

```jsx
setShowDialog(prev => !prev);
```

---

## 🪝 Hooks

### `useEffect`

`useEffect` é um Hook utilizado para sincronizar o componente com sistemas externos ou executar efeitos colaterais.

Alguns exemplos incluem:

* Buscar dados de uma API;
* Interagir com APIs do navegador;
* Adicionar event listeners;
* Sincronizar dados com `localStorage`.

Exemplo:

```jsx
useEffect(() => {
  // efeito
}, []);
```

O segundo argumento é o array de dependências.

#### Sem array de dependências

```jsx
useEffect(() => {
  // ...
});
```

O efeito é executado após cada renderização.

#### Array vazio

```jsx
useEffect(() => {
  // ...
}, []);
```

O efeito é executado após a montagem inicial do componente.

#### Com dependências

```jsx
useEffect(() => {
  // ...
}, [todos]);
```

O efeito é executado novamente quando `todos` muda.

### Cleanup

Um `useEffect` pode retornar uma função de limpeza:

```jsx
useEffect(() => {
  // configuração

  return () => {
    // limpeza
  };
}, []);
```

Essa função é executada quando o componente é desmontado e, quando existem dependências, antes da próxima execução do efeito.

---

### Função de atualização com estado anterior

Quando a nova atualização depende do estado anterior, devemos utilizar a forma funcional do setter:

```jsx
setTodos(prevTodos => {
  return [...prevTodos, novoTodo];
});
```

O parâmetro `prevTodos` representa o valor mais recente do estado disponível para aquela atualização.

Isso é especialmente importante quando várias atualizações de estado podem ocorrer próximas umas das outras.

> `prevState` não é outro Hook. É apenas um nome convencional utilizado para representar o estado anterior recebido pela função de atualização.

---

## 🔄 Imutabilidade

No React, devemos evitar modificar diretamente os valores armazenados no estado.

Por exemplo, evite:

```jsx
todos.push(novoTodo);
```

Em vez disso, crie um novo array:

```jsx
setTodos(prevTodos => [
  ...prevTodos,
  novoTodo
]);
```

A ideia é preservar o estado anterior e criar uma nova referência contendo as alterações necessárias.

---

## 🧠 Princípios de organização

### DRY — Don't Repeat Yourself

**DRY** significa *Don't Repeat Yourself* ("Não se Repita").

O princípio recomenda evitar duplicação desnecessária de lógica ou estrutura no código.

Quando a mesma lógica aparece em vários lugares, podemos avaliar se é possível reutilizá-la através de:

* Funções;
* Componentes;
* Hooks;
* Utilitários.

---

### Prop Drilling

**Prop Drilling** ocorre quando precisamos passar props por vários níveis de componentes até chegar ao componente que realmente precisa delas.

Exemplo conceitual:

```text
App
 ↓
Componente A
 ↓
Componente B
 ↓
Componente C
```

Se o `App` precisa passar uma informação para `Componente C`, mas `Componente A` e `Componente B` não utilizam essa informação, precisamos repassá-la através desses componentes.

Esse cenário pode ser um dos motivos para considerar o uso de Context API.

---

## 🌐 Context API

A **Context API** permite compartilhar valores entre componentes sem precisar passar props manualmente por todos os níveis da árvore.

No projeto, ela é utilizada para compartilhar o estado e as operações relacionadas aos todos.

O fluxo pode ser representado da seguinte maneira:

```text
TodoContext
     ↓
TodoProvider
     ↓
    App
     ↓
Componentes filhos
```

O contexto é criado com `createContext`:

```jsx
const TodoContext = createContext();
```

Depois, um Provider disponibiliza os valores:

```jsx
<TodoContext.Provider value={...}>
  {children}
</TodoContext.Provider>
```

Os componentes descendentes podem consumir esses valores utilizando `useContext` ou, em React 19+, o novo recurso `use`.

---

### `useContext` e `use`

O `useContext` é o Hook tradicional utilizado para consumir um contexto:

```jsx
const todos = useContext(TodoContext);
```

A partir do React 19, também podemos utilizar o `use` para consumir o contexto:

```jsx
const todos = use(TodoContext);
```

Ambas as abordagens permitem acessar o valor fornecido pelo contexto, mas possuem diferenças de uso e regras próprias.

---

## 💾 localStorage

`localStorage` é uma API do navegador que permite armazenar dados de forma persistente no dispositivo do usuário.

Os valores são armazenados como **strings**.

Para armazenar objetos ou arrays, utilizamos `JSON.stringify()`:

```jsx
localStorage.setItem(
  "TODOS",
  JSON.stringify(todos)
);
```

Para recuperar os dados e transformá-los novamente em objetos JavaScript:

```jsx
const todos = JSON.parse(
  localStorage.getItem("TODOS")
);
```

É uma boa prática armazenar a chave utilizada em uma constante:

```jsx
const TODOS = "TODOS";
```

Assim, evitamos erros de digitação quando a mesma chave é utilizada em diferentes partes da aplicação.

---

## 📝 Formulários

### `defaultValue`

`defaultValue` define o valor inicial de um campo de formulário não controlado.

Exemplo:

```jsx
<input defaultValue="Estudar React" />
```

Diferentemente de `value`, ele define o valor inicial sem transformar necessariamente o input em um componente controlado pelo estado.

---

## 🧹 Cleanup do `useEffect`

O `useEffect` pode retornar uma função responsável pela limpeza de recursos utilizados pelo efeito.

Exemplo:

```jsx
useEffect(() => {
  const handleResize = () => {
    // ...
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

Nesse exemplo, o listener é removido quando o componente é desmontado.

O cleanup também é executado antes de um efeito ser executado novamente quando suas dependências mudam.
