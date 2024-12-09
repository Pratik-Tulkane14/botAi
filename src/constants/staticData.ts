const staticData = [
  {
    id: 1,
    question: "What's the difference between GET and POST requests?",
    response:
      "GET requests are used to retrieve data from the server, and are visible in the URL. POST requests are used to send data to the server to create/update resources, and the data is included in the body of the request, not visible in the URL.",
    isLike: false,
  },
  {
    id: 2,
    question: "Can you explain RESTful APIs?",
    response:
      "RESTful APIs are designed around the REST (Representational State Transfer) architecture, which uses HTTP requests to access and manipulate data. They follow a stateless, client-server, cacheable communications protocol.",
    isLike: false,
  },
  {
    id: 3,
    question: "What is a Promise in JavaScript?",
    response:
      "A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code that is more readable and efficient.",
    isLike: false,
  },
  {
    id: 4,
    question: "How do you handle errors in async/await?",
    response:
      "Errors in async/await can be handled using try/catch blocks. You wrap your await call inside a try block, and catch any errors that occur in the catch block.",
    isLike: false,
  },
  {
    id: 5,
    question: "What is the virtual DOM?",
    response:
      "The virtual DOM is a concept used in web development, primarily with libraries like React. It's a lightweight copy of the real DOM, allowing for efficient updates and rendering of the UI by minimizing direct manipulations of the DOM.",
    isLike: false,
  },
  {
    id: 6,
    question: "Can you describe how CORS works?",
    response:
      "CORS, or Cross-Origin Resource Sharing, is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. It involves the server setting specific headers that allow for these cross-origin requests.",
    isLike: false,
  },
  {
    id: 7,
    question: "What are microservices?",
    response:
      "Microservices are a architectural style that structures an application as a collection of small, autonomous services modeled around a business domain. They allow for scalable, flexible, and independent development and deployment of application components.",
    isLike: false,
  },
  {
    id: 8,
    question: "Explain the concept of state management in React.",
    response:
      "State management in React involves tracking changes to the state (data) of components. This can be done using React's own state management capabilities or through external libraries like Redux, to manage state across multiple components.",
    isLike: false,
  },
  {
    id: 9,
    question: "What is a JWT and how is it used?",
    response:
      "JWT, or JSON Web Token, is a compact, URL-safe means of representing claims to be transferred between two parties. It's used in authentication and information exchange, allowing servers to verify and trust the data in the token.",
    isLike: false,
  },
  {
    id: 10,
    question: "How do you optimize website performance?",
    response:
      "Website performance can be optimized through various methods, including minimizing HTTP requests, optimizing file sizes and formats, using content delivery networks, caching, and streamlining code (HTML, CSS, JavaScript).",
    isLike: false,
  },
  {
    id: 11,
    question: "What is Docker and how is it used?",
    response:
      "Docker is a platform that enables developers to package applications into containers—standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.",
    isLike: false,
  },
  {
    id: 12,
    question: "Explain the MVC architecture.",
    response:
      "The MVC (Model-View-Controller) architecture is a design pattern used in software development to separate the internal representations of information from the ways that information is presented to and accepted from the user.",
    isLike: false,
  },
  {
    id: 13,
    question: "What is GraphQL?",
    response:
      "GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data. It provides a more efficient, powerful, and flexible alternative to REST.",
    isLike: false,
  },
  {
    id: 14,
    question: "How do you manage state in a Redux application?",
    response:
      "In a Redux application, state is managed through a single immutable state tree, called the store. Actions are dispatched to describe what happened, and reducers specify how the state changes in response to these actions.",
    isLike: false,
  },
  {
    id: 15,
    question: "What are hooks in React?",
    response:
      "Hooks are functions that let you “hook into” React state and lifecycle features from function components. They provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle.",
    isLike: false,
  },
  {
    id: 16,
    question: "Explain serverless architecture.",
    response:
      "Serverless architecture is a cloud computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers. Applications are broken down into individual functions that can be invoked and scaled independently.",
    isLike: false,
  },
  {
    id: 17,
    question: "What is a websocket?",
    response:
      "WebSockets provide a bidirectional, full-duplex communication channel that operates over a single, long-lived connection. They enable real-time data flow between clients and servers, ideal for web applications requiring constant data exchange.",
    isLike: false,
  },
  {
    id: 18,
    question: "How do you ensure code quality?",
    response:
      "Ensuring code quality involves practices like regular code reviews, unit and integration testing, adhering to coding standards, and using static code analysis tools to detect potential issues early.",
    isLike: false,
  },
  {
    id: 19,
    question:
      "What is continuous integration and continuous deployment (CI/CD)?",
    response:
      "CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development. CI refers to the automated testing of the application with each code change, while CD automates the delivery of applications to selected infrastructure environments.",
    isLike: false,
  },
  {
    id: 20,
    question: "What are Progressive Web Apps (PWAs)?",
    response:
      "Progressive Web Apps (PWAs) are web applications that use modern web capabilities to provide a user experience similar to that of mobile apps. They aim to combine the benefits of the web and mobile apps, working offline, fast loading times, and access to device features.",
    isLike: false,
  },
  {
    id: 21,
    question: "Explain the concept of dependency injection.",
    response:
      "Dependency injection is a design pattern in which an object receives other objects that it depends on, called dependencies. Instead of creating them inside the object, they are passed in as parameters, making the code more modular, testable, and maintainable.",
    isLike: false,
  },
  {
    id: 22,
    question: "What is TypeScript and why use it?",
    response:
      "TypeScript is a superset of JavaScript that adds static types to the language. Using TypeScript helps catch errors early through its type-checking feature, and makes the codebase more readable and maintainable.",
    isLike: false,
  },
  {
    id: 23,
    question: "How do you manage application secrets?",
    response:
      "Application secrets, like API keys and passwords, should be managed securely using environment variables or secret management tools like HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault to keep them out of the source code.",
    isLike: false,
  },
  {
    id: 24,
    question: "What is NoSQL and when would you use it?",
    response:
      "NoSQL databases are non-relational databases designed for large-scale data storage and for massively-parallel, high-performance data processing across a large number of commodity servers. They are used when dealing with large volumes of unstructured data, where the scalability and performance requirements exceed the capabilities of traditional relational databases.",
    isLike: false,
  },
  {
    id: 25,
    question: "Explain how you would use Docker in your development workflow.",
    response:
      "Docker can be used in development to create a consistent environment that mirrors production, ensuring that applications run the same, regardless of where they are deployed. It simplifies the management of dependencies and makes it easy to test and deploy applications in isolated containers.",
    isLike: false,
  },
  {
    id: 26,
    question: "What are environmental variables and why are they important?",
    response:
      "Environmental variables are key-value pairs in the operating system used to store data that varies between environments, such as API keys, database passwords, and file paths. They are important for security and configurability, allowing applications to run differently in development, testing, and production environments without code changes.",
    isLike: false,
  },
  {
    id: 27,
    question: "What's the importance of responsive design?",
    response:
      "Responsive design is crucial in web development to ensure that websites and applications look and function well on a variety of devices and screen sizes. It improves user experience, accessibility, and SEO.",
    isLike: false,
  },
  {
    id: 28,
    question: "How do you handle database migrations?",
    response:
      "Database migrations are handled by defining changes to the database schema in code. Tools like Liquibase or Flyway can manage and apply these migrations consistently across environments, ensuring the database schema is always in sync with the application's requirements.",
    isLike: false,
  },
  {
    id: 29,
    question: "What is the significance of Git in development?",
    response:
      "Git is vital for version control, allowing developers to track and manage changes to code over time. It facilitates collaboration, code review, and managing merges, making it easier to maintain the integrity of the codebase while working in teams.",
    isLike: false,
  },
  {
    id: 30,
    question: "How can I improve the security of my web application?",
    response:
      "Improving web application security involves implementing HTTPS, sanitizing user input to prevent SQL injection and XSS attacks, using secure cookies, managing user permissions wisely, and keeping software up to date to protect against known vulnerabilities.",
    isLike: false,
  },
  {
    id: 31,
    question: "What is the purpose of API testing?",
    response:
      "API testing focuses on verifying that APIs work as expected, perform efficiently, and are secure from external threats. It helps ensure that the interaction between different software components is error-free.",
    isLike: false,
  },
  {
    id: 32,
    question: "Can you explain the Agile development methodology?",
    response:
      "Agile is a development methodology that focuses on iterative development, where requirements and solutions evolve through collaborative effort. It promotes flexible responses to change, frequent delivery of products, and a high level of communication among team members and stakeholders.",
    isLike: false,
  },
  {
    id: 33,
    question: "What are the key principles of object-oriented programming?",
    response:
      "The key principles of object-oriented programming are encapsulation, abstraction, inheritance, and polymorphism. These principles help organize code and make it more reusable, scalable, and manageable.",
    isLike: false,
  },
  {
    id: 34,
    question: "What are design patterns and why are they useful?",
    response:
      "Design patterns are standardized solutions to common problems in software design. They provide a template for how to solve a problem that can be used in many different situations, promoting code reuse and making the design more robust and easier to maintain.",
    isLike: false,
  },
  {
    id: 35,
    question: "How do you approach debugging in your projects?",
    response:
      "Debugging involves systematically identifying and removing errors from code. The approach includes using debugging tools, thoroughly testing code, reviewing logs, understanding the system's flow, and sometimes, rubber-duck debugging, where you explain your code line by line to an inanimate object.",
    isLike: false,
  },
  {
    id: 36,
    question: "What is A/B testing?",
    response:
      "A/B testing is a method of comparing two versions of a webpage or app against each other to determine which one performs better. It involves showing the two versions to different segments of users and analyzing the results to see which version achieves a higher conversion rate or better user engagement.",
    isLike: false,
  },
  {
    id: 37,
    question:
      "Explain the concept of continuous learning in software development.",
    response:
      "Continuous learning in software development refers to the ongoing process of acquiring new skills and knowledge in the field. It's essential due to the rapid pace of technological change, helping developers stay updated with the latest tools, techniques, and best practices.",
    isLike: false,
  },
  {
    id: 38,
    question: "What are some effective team collaboration tools?",
    response:
      "Effective team collaboration tools include version control systems like Git, project management tools like Jira or Trello, communication platforms like Slack or Microsoft Teams, and document sharing tools like Google Drive or Confluence. These tools help teams coordinate work, communicate effectively, and share resources.",
    isLike: false,
  },
  {
    id: 39,
    question: "What is pair programming and what are its benefits?",
    response:
      "Pair programming is a practice where two developers work together at one workstation. One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it's written. Benefits include improved code quality, knowledge sharing, and faster problem solving.",
    isLike: false,
  },
  {
    id: 40,
    question: "How do you ensure accessibility in your web applications?",
    response:
      "Ensuring accessibility involves following web standards and guidelines, such as the WCAG, using semantic HTML, ensuring keyboard navigability, providing alternative text for images, and testing with accessibility tools and screen readers to make your application usable for people with disabilities.",
    isLike: false,
  },
  {
    id: 41,
    question: "What is the importance of user experience (UX) design?",
    response:
      "UX design is crucial because it focuses on fulfilling the user's needs, providing positive experiences that keep users loyal to the product or brand. A good UX enhances the usability, accessibility, and efficiency of user interactions with the application.",
    isLike: false,
  },
  {
    id: 42,
    question: "How do you handle data persistence in mobile applications?",
    response:
      "Data persistence in mobile applications can be handled using local databases like SQLite or Realm, or through remote database services via APIs. Choices depend on factors like the data structure, required speed, and whether the data needs to be accessible offline.",
    isLike: false,
  },
  {
    id: 43,
    question: "What are service workers and how are they used?",
    response:
      "Service workers are scripts that run in the background of a browser and support features like push notifications and background sync. They play a crucial role in creating reliable, fast, and engaging web experiences, and are a core component of Progressive Web Apps (PWAs).",
    isLike: false,
  },
  {
    id: 44,
    question: "Can you explain the concept of domain-driven design?",
    response:
      "Domain-driven design is an approach to software development that centers on the business domain, its elements, and their interactions, aiming to create software models that solve real-world problems efficiently. It emphasizes collaboration between technical and domain experts to improve software design and functionality.",
    isLike: false,
  },
  {
    id: 45,
    question:
      "What strategies do you use for effective time management in projects?",
    response:
      "Effective time management strategies include setting clear goals and priorities, breaking down projects into smaller tasks, using project management tools, avoiding multitasking, setting deadlines, and regularly reviewing and adjusting plans based on progress and feedback.",
    isLike: false,
  },
  {
    id: 46,
    question: "How do you approach mobile app security?",
    response:
      "Mobile app security involves encrypting data, securing communications with SSL/TLS, implementing proper authentication and authorization, regularly updating and patching applications, and conducting security assessments and code reviews to identify vulnerabilities.",
    isLike: false,
  },
  {
    id: 47,
    question: "What is the role of machine learning in web development?",
    response:
      "Machine learning can enhance web development by enabling personalized user experiences, optimizing search functions, automating customer support through chatbots, predicting user behavior, and improving security by detecting anomalies and potential threats.",
    isLike: false,
  },
  {
    id: 48,
    question: "How do you ensure your code is scalable?",
    response:
      "Ensuring code scalability involves writing clean, efficient code, using design patterns that support scalability, leveraging microservices where appropriate, optimizing databases, and planning for horizontal scaling by building systems that can handle increased loads by adding more resources.",
    isLike: false,
  },
  {
    id: 49,
    question: "What are the best practices for API design?",
    response:
      "Best practices for API design include using RESTful principles, providing meaningful endpoints, using HTTP methods correctly, implementing versioning, ensuring security with authentication and authorization, and documenting the API clearly for ease of use.",
    isLike: false,
  },
  {
    id: 50,
    question: "How do you stay updated with the latest technology trends?",
    response:
      "Staying updated involves following industry news, participating in developer communities, attending conferences and workshops, taking online courses, reading technical blogs and publications, and experimenting with new technologies and tools.",
    isLike: false,
  },
];
export default staticData;
