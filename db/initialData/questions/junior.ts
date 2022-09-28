import type { Question } from '../../../interfaces';

const questions: Array<Partial<Question>> = [
  {
    section: 'general',
    title: 'What HTTP request methods do you know?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'What versions of the HTTP protocol do you know?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'What HTTP response status codes do you know?',
    answer: `## HTTP Status Codes

- **1xx** Informational
    - **100 Continue.** This interim response indicates that the client should continue the request or ignore the response if the request is already finished.
    - etc
- **2xx** Success
    - **200 OK.** The request succeeded.
    - **201 Created.** The request succeeded, and a new resource was created as a result.
    - **204 No Content.** There is no content to send for this request, but the headers may be useful.
    - etc.
- **3xx** Redirection
    - **301 Moved permanently.** The URL of the requested resource has been changed permanently. The new URL is given in the response.
    - **302 Found.** The URI of requested resource has been changed temporarily.
    - **304 Not Modified.** Used for caching purposes. It tells the client that the response has not been modified and client can continue to use the same cached version of the response.
    - etc.
- **4xx** Client error
    - **400 Bad Request.** The server cannot process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
    - **401 Unauthorized.** The client must authenticate itself to get the requested response.
    - **403 Forbidden.** The client does not have access rights to the content. Unlike 401 Unauthorized, the client's identity is known to the server.
    - **404 Not Found.** The server can not find the requested resource.
    - **405 Method Not Allowed.** The request method is known by the server but is not supported by the target resource. For example, an API may not allow calling DELETE to remove a resource.
    - etc.
- **5xx** Server error
    - **500 Internal Server Error.** The server has encountered a situation it does not know how to handle.
    - **501 Not Implemented.** The request method is not supported by the server and cannot be handled.
    - **503 Service Unavailable.** The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.
    - etc.`,
    status: 'published',
  },
  {
    section: 'general',
    title: 'Describe the structure of HTTP Request and Response',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title:
      'What is Cross-Origin Resource Sharing? How do you troubleshoot CORS?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'What are cookies?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'What does the use strict directive mean?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'How does JS differ when working on the front-end and back-end?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'What are static and dynamic typing?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'How does the client interact with the server?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'What is REST?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'How to find errors in code? Are you using a debugger?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'What is recursion?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'What is CI/CD? What is it for?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'What data types in JS do you know?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'Explain the concept of mutability / immutability? What types are mutable and vice versa?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'How to check if a variable is of a specific type?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'How to check if an object is an array?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'Describe the difference between == and ===.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'Compare the keywords var, let, const.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'What is scope?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'What is destructuring?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'Compare approaches to working with asynchronous code: callbacks vs promises vs async/await.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'Is it possible to write new properties / functions to prototypes of standard classes (Array, Object, etc.)? Why not? In what cases can this be done? How do you protect yourself if you need to extend the prototype?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'Name the array methods you remember and tell what they are used for.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'How do assignment / comparison / string / arithmetic / bitwise etc. operators work?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'Describe the purpose and principles of working with Map and Set collections.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'What does deep and shallow copy of an object mean? How to do each of them?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'What is the difference between a function declaration and a function expression?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'What is an anonymous function?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'What is IIFE (Immediately Invoked Function Expression) and what is it used for?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'What is hoisting, how does it work for variables and functions?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'What is closure and what are its use cases?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'What is context loss, when does it happen, and how can it be prevented?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: `Function methods bind / call / apply - why and what's the difference?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: `What is DOM?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: `Compare the async and defer script connection attributes in the HTML document.`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: `Describe the process of bubbling events in the DOM.`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: `How to stop event bubbling? How to stop default event processing?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: `What is the value of this in the event handler?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: `What are LocalStorage and SessionStorage? What is the maximum size of LocalStorage?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: `What is webpack?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: `What is the difference between a dev build and a prod?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: `What is a CSS block model?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: `What ways of centering block content horizontally and vertically do you know?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: `What layout approaches do you know (float, flex, grid, etc)?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: `How to make the application responsive?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: `What are the principles of semantic layout?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: `Why do we need prefixes for some CSS properties (-webkit-, -moz-, etc.)?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: `How to simplify writing cross-browser styles?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: `What are CSS preprocessors? Who did you work with? What new do they bring to standard CSS?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `Have you worked with class components? What is their specialty?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `Which data is better to store in component state and which to pass through props? Give an example.`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `Are you familiar with hooks? What are their advantages? Have you had to do your own and for what purpose?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `Are you familiar with Fragments and Portals? Why are they needed?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `When and what are reefs used for?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `What are the component life cycle methods you know?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `In which component lifecycle method is it best to make requests to the server? Why?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `In which component lifecycle method is it best to subscribe and unsubscribe from a listener? Why? Why unsubscribe?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `Have you had any experience with context? When should it be used?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `What is special about PureComponent?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `Did it work with memoized selectors? What are they used for and what is the principle of operation?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `What do you see as the advantages of the React library?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `Why is the React library fast? What are Virtual DOM and Shadow DOM?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `Why are keys in lists? Is it possible to make array element indices as keys? When is it justified?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `What is the main idea of ​​Redux?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `Working with styles in React.`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `Is React a library or a framework? What is the difference between these two concepts.`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `What is codemod?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `Ever had to set up a React project from scratch? What tools did you use to do this?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: `List all the libraries used in conjunction with React.`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title: `What is a REPL?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title: `What are streams in Node.js?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title: `What is middleware?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title: `What is the setImmediate function used for?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title: `Why do you need app.param() in express?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title: `What is token-based authentication?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'database',
    title: `What are JOINs?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'database',
    title: `Write a simple query to calculate the three authors with the most books.`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'database',
    title: `What is the difference between embed and reference in MongoDB?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'database',
    title: `In the project, it was necessary to make changes to the table structure, add several fields and indexes. How will programmers do this in production?`,
    answer: 'No answer yet',
    status: 'draft',
  },
];

export default questions.map((question) => ({ ...question, role: 'junior' }));
