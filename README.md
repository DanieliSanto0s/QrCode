# Gerador de QR Code com FastAPI

Este projeto consiste em uma aplicação desenvolvida em Python utilizando o framework FastAPI no back-end, com um front-end construído em HTML, CSS e JavaScript. A aplicação permite gerar códigos QR com base em qualquer texto fornecido pelo usuário. O projeto foi desenvolvido como parte da disciplina de Programação Multiplataforma do curso de Análise e Desenvolvimento de Sistemas.

---

## Estrutura do Projeto

```

qr-code-project/
├── main.py              # Arquivo principal do back-end com a rota para geração de QR Codes
├── index.html           # Página principal da aplicação (front-end)
├── style.css            # Estilo visual da página
├── script.js            # Lógica do front-end para consumir a API
├── img/
│   ├── fundo.avif       # Imagem de fundo da interface
│   └── qr-code.png      # Ícone de QR Code usado no título
└── README.md            # Documentação do projeto

````

---

## Tecnologias Utilizadas

- Python 3.12+
- FastAPI
- Uvicorn
- Biblioteca `qrcode` (Python)
- HTML5
- CSS3
- JavaScript

---

## Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
````

2. Crie e ative o ambiente virtual:

```bash
python -m venv venv

# Linux/macOS
source venv/bin/activate

# Windows
venv\Scripts\activate
```

3. Instale as dependências:

```bash
pip install fastapi uvicorn qrcode
```

4. Execute o servidor:

```bash
uvicorn main:app --reload
```

A API estará disponível em:

```
http://127.0.0.1:8000
```

5. Para abrir a interface do usuário, execute o arquivo `index.html` em um navegador ou utilize a extensão Live Server no Visual Studio Code.

---

## Autora

**Danieli Santos**
Curso: Análise e Desenvolvimento de Sistemas
Disciplina: Programação Multiplataforma

---

> Este projeto foi desenvolvido com finalidade acadêmica, com o objetivo de aplicar na prática os conceitos de APIs REST e integração com front-end utilizando tecnologias.

```

---

