
# CRUD de Fornecedores

Este projeto é um CRUD (Create, Read, Update, Delete) de fornecedores, implementado como parte de um desafio técnico. A aplicação permite gerenciar fornecedores em uma plataforma WEB, atendendo aos requisitos funcionais e técnicos especificados.

## Funcionalidades

### Funcionalidades Principais

- **Cadastrar Fornecedores**: Formulário com campos obrigatórios e validados, incluindo nome, descrição, contatos e endereço.
- **Listar Fornecedores**: Exibe uma lista paginada de fornecedores cadastrados, com busca por nome.
- **Editar Fornecedores**: Permite a edição dos dados de fornecedores existentes.
- **Excluir Fornecedores**: Remove fornecedores da lista.
- **Busca por Nome**: Campo de pesquisa para encontrar fornecedores por nome.
- **CEP para Preenchimento de Endereço**: Utiliza a API ViaCEP para autocompletar o endereço com base no CEP.

### Funcionalidades Extras

- **Abrir Contato de Fornecedor no WhatsApp**: Permite abrir o WhatsApp diretamente para o número de telefone cadastrado.
- **Exportar Lista de Fornecedores em CSV**: Exporta a lista de fornecedores em formato CSV.
- **Autenticação de Usuário**: Implementado login com sistema de autenticação.
- **Integração com Google Maps**: Exibe a localização do fornecedor no Google Maps com base no endereço cadastrado.
- **Fuzzy Search**: Permite realizar busca por qualquer campo dos objetos da lista de fornecedores.
- **Light/Dark Mode**: A aplicação oferece suporte aos modos claro e escuro.
- **API Desenvolvida para o Projeto**: A API que serve este frontend está disponível no repositório [https://github.com/MateusGutierrez/vexpenses-supplier-api](https://github.com/MateusGutierrez/vexpenses-supplier-api).

## Tecnologias Utilizadas

### Frontend
- **ReactJS**: Biblioteca principal para construção da interface do usuário.
- **TypeScript**: Utilizado para tipagem estática e melhorar a confiabilidade do código.
- **Styled Components**: Estilização da aplicação utilizando CSS-in-JS.
- **React Hook Form**: Gerenciamento de formulários com validações eficientes.
- **Yup**: Validações de formulário junto ao React Hook Form.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **Fuse.js**: Para implementar a busca fuzzy na lista de fornecedores.
- **JSON Server**: Mock de API RESTful para o desenvolvimento e testes locais.

### Ferramentas de Desenvolvimento
- **ViteJS**: Ferramenta para criação e build rápida da aplicação.
- **ESLint & Prettier**: Configurados para manter a qualidade e padronização do código.
  
## Requisitos Técnicos

- **Responsividade**: A aplicação é totalmente responsiva e funcional em dispositivos móveis e desktops.
- **Validação de Formulários**: Todos os campos obrigatórios seguem as seguintes regras:
  - **Nome**: alfanumérico.
  - **Descrição**: alfanumérico.
  - **Contato**: ao menos um contato com:
    - **Nome**: alfabético.
    - **Telefone**: formatado como `(##) #####-####`.
  - **Endereço**:
    - **CEP**: formatado como `#####-###`.
    - **Estado**: dois caracteres em maiúsculo (ex.: `SP`).
    - **Cidade, Logradouro, Referência**: alfabético/alfanumérico.
    - **Número**: numérico.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js e npm/yarn instalados
- Opcional: JSON Server para simular API

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/MateusGutierrez/vexpenses-supplier-crud.git
   cd vexpenses-supplier-crud
   ```

2. Instale as dependências:
   ```bash
   yarn
   ```

3. Inicie a aplicação:
   ```bash
   yarn dev
   ```
