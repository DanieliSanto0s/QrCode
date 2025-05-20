# Gerador de QR Code com FastAPI

Este projeto consiste em uma aplicação desenvolvida em Python utilizando o framework FastAPI no back-end, com um front-end construído em HTML, CSS e JavaScript. A aplicação permite gerar códigos QR com base em qualquer texto fornecido pelo usuário. O projeto foi desenvolvido como parte da disciplina de Programação Multiplataforma do curso de Análise e Desenvolvimento de Sistemas.

---

## Estrutura do Projeto

```
QrCode/
├── backend/
│   ├── main.py               # Código principal FastAPI
│   └── requirements.txt      # Dependências do back-end
│
├── frontend/
│   ├── index.html            # Página principal
│   ├── style.css             # Estilos da interface
│   ├── script.js             # Lógica JavaScript
│   └── img/
│       ├── fundo.avif        # Imagem de fundo
│       └── qr-code.png       # Ícone de QR Code
│
├── venv/                     # Ambiente virtual (não versionado)
│
├── .gitignore                # Ignorar arquivos/pastas desnecessários
└── README.md                 # Documentação do projeto
```

---

## Tecnologias Utilizadas

* Python 3.12+
* FastAPI
* Uvicorn
* Biblioteca `qrcode`
* Biblioteca `Pillow`
* HTML5
* CSS3
* JavaScript

---

## Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/DanieliSanto0s/QrCode.git
cd QrCode
```

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
pip install fastapi uvicorn qrcode Pillow
```

4. Navegue até a pasta do back-end e execute o servidor:

```bash
cd backend
uvicorn main:app --reload
```

A API estará disponível em:

```
http://127.0.0.1:8000
```

5. Para abrir a interface do usuário, execute o arquivo `index.html` da pasta `frontend` em um navegador, ou utilize a extensão **Live Server** no Visual Studio Code.

---

## Autora

**Danieli Santos**

Curso: Análise e Desenvolvimento de Sistemas

Disciplina: Programação Multiplataforma

---

> Este projeto foi desenvolvido com finalidade acadêmica, com o objetivo de aplicar na prática os conceitos de APIs REST e integração com front-end utilizando tecnologias web.
