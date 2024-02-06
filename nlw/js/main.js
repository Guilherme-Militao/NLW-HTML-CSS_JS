const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um banco de dados",
        "Um sistema operacional"
      ],
      correta: 0
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "variável minhaVariavel;",
        "var minhaVariavel;",
        "decl var minhaVariavel;"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '+' em JavaScript?",
      respostas: [
        "Concatenar strings",
        "Subtrair números",
        "Multiplicar arrays"
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um comentário no código",
        "Uma variável global",
        "Um bloco de código reutilizável"
      ],
      correta: 2
    },
    {
      pergunta: "Como se comenta uma linha de código em JavaScript?",
      respostas: [
        "/* Comentário */",
        "<!-- Comentário -->",
         "// Comentário"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Igualdade de valor apenas",
        "Igualdade de valor e tipo",
        "Igualdade de tipo apenas"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Database Object Model",
        "Dynamic Object Model",
        "Document Object Model"
      ],
      correta: 2
    },
    {
      pergunta: "Como se realiza um loop 'for' em JavaScript?",
      respostas: [
        "for (var i = 0; i < 5; i++)",
        "while (i < 5) { i++ }",
        "foreach (item in array)"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "JavaScript Operation Network",
        "JavaScript Object Notation",
        "JavaScript Option Navigator"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
      respostas: [
        "Selecionar elementos no DOM",
        "Alterar o valor de uma variável",
        "Criar um novo array"
      ],
      correta: 0
    }
  ];

  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');

  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);

    quizItem.querySelector('h3').textContent = item.pergunta;

    for (const resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        quizItem.querySelector('dl').appendChild(dt);
    }
    quizItem.querySelector('dl dt').remove();
    quiz.appendChild(quizItem)
  }