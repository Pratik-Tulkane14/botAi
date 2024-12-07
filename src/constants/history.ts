const history = [
  {
    id: 1,
    question: "What's the difference between GET and POST requests?",
    response:
      "GET requests are used to retrieve data from the server, and are visible in the URL. POST requests are used to send data to the server to create/update resources, and the data is included in the body of the request, not visible in the URL.",
    isRating: true,
    rating: 1,
  },
  {
    id: 2,
    question: "Can you explain RESTful APIs?",
    response:
      "RESTful APIs are designed around the REST (Representational State Transfer) architecture, which uses HTTP requests to access and manipulate data. They follow a stateless, client-server, cacheable communications protocol.",
    isRating: false,
  },
  {
    id: 3,
    question: "What is a Promise in JavaScript?",
    response:
      "A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code that is more readable and efficient.",
    isRating: true,
    rating: 2,
  },
  {
    id: 4,
    question: "How do you handle errors in async/await?",
    response:
      "Errors in async/await can be handled using try/catch blocks. You wrap your await call inside a try block, and catch any errors that occur in the catch block.",
    isRating: true,
    rating: 5,
  },
  {
    id: 5,
    question: "What is the virtual DOM?",
    response:
      "The virtual DOM is a concept used in web development, primarily with libraries like React. It's a lightweight copy of the real DOM, allowing for efficient updates and rendering of the UI by minimizing direct manipulations of the DOM.",
    isRating: true,
    rating: 3,
  },
  {
    id: 6,
    question: "What is JS",
    response:
      "JavaScript is most popular programming language primary used for web development",
    isRating: true,
    rating: 4,
  },
];
export default history;
