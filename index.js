const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "let myVar;"
      ],
      correta: 2 // A resposta correta é a terceira opção (let myVar;)
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console.log()"
      ],
      correta: 2 // A resposta correta é a terceira opção (console.log())
    },
    {
      pergunta: "Qual é a saída do código 'console.log(typeof 42);' em JavaScript?",
      respostas: [
        "number",
        "string",
        "undefined"
      ],
      correta: 0 // A resposta correta é a primeira opção (number)
    },
    {
      pergunta: "Qual operador é usado para verificar a igualdade de valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "!="
      ],
      correta: 1 // A resposta correta é a segunda opção (===)
    },
    {
      pergunta: "Qual método JavaScript é usado para remover o último elemento de um array?",
      respostas: [
        "pop()",
        "shift()",
        "splice()"
      ],
      correta: 0 // A resposta correta é a primeira opção (pop())
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->"
      ],
      correta: 0 // A resposta correta é a primeira opção (// Este é um comentário)
    },
    {
      pergunta: "Qual função JavaScript é usada para converter uma string em minúsculas?",
      respostas: [
        "toUpperCase()",
        "toLowerCase()",
        "trim()"
      ],
      correta: 1 // A resposta correta é a segunda opção (toLowerCase())
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "undefined"
      ],
      correta: 1 // A resposta correta é a segunda opção (55)
    },
    {
      pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 5; i++)",
        "for (var i = 0; i < 5; i++)",
        "for (let i = 0; i < 5; i++)"
      ],
      correta: 2 // A resposta correta é a terceira opção (for (let i = 0; i < 5; i++))
    },
    {
      pergunta: "Qual método JavaScript é usado para adicionar um elemento ao final de um array?",
      respostas: [
        "push()",
        "concat()",
        "join()"
      ],
      correta: 0 // A resposta correta é a primeira opção (push())
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.   indexOf(item)) 
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
  
    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
     }
  
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  
  quizItem.querySelector('dl dt').remove()
  
  
    // colocar a pergunta na tela
    quiz.appendChild(quizItem)
  }