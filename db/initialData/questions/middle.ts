import type { Question } from '../../../interfaces';

const questions: Array<Partial<Question>> = [
  {
    section: 'general',
    title: 'What happens when you enter URL into browser?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'How browser does rendering?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'Tell about the testing pyramid.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title:
      'What types of automated tests did you have the opportunity to write? What libraries were used? Which tools do you prefer and why?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title:
      'What are unit tests? What place in the testing pyramid do unit tests occupy?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'What is code coverage? Is 100% code test coverage mandatory?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'How to prevent browser from giving cache on HTTP request?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'What is XSS (Cross-Site Scripting)?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title:
      'Tell about Observer, Pub / Sub patterns. What is the difference between them? Provide examples of implementations of these patterns in known frameworks/libraries/browser APIs.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: `For what purpose can the event listener of the event fetch self.addEventListener('fetch', event => {}) be used?`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title:
      'What is an Event loop and how does it work? Talk about micro-tasks and macro-tasks.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'Compare value and reference types.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'What is package-lock.json for?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'What is the difference between npm install and npm ci',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'What is a temporal dead zone?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'How does boxing / unboxing work in JavaScript?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'Describe the process of the type coercion and rules of comparing the same and different data types.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'Specify loops, conditions, and the execution context.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'Describe the error handling process in JavaScript.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'What does this keyword refer to in JavaScript?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'What is the difference between the in statement and the hasOwnProperty method?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'Describe how JS implements such OOP paradigms as encapsulation, polymorphism, abstraction?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'What is a prototype? How does prototype inheritance work in JS?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'What is the difference between composition and imitation?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'Why not use new String constructors?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'What are records and tuples? How do they differ from ordinary objects?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'What are the differences between ES5 behavior of constructor function and ES2015 class?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'How to implement the "Module" pattern?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'Why does typeof null return object?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'What is type casting in JS?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'What are explicit and implicit data type conversions in JS?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'What is Garbage Collector?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'Describe the basic principles of the "garbage collector" in JS engines.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'Describe the purpose and principles of working with WeakMap and WeakSet collections? How are they different from Map and Set collections respectively?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'What is the difference between Observable and Promise?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'Tell about serial and parallel execution of asynchronous functions. What is the difference between Promise.all() and Promise.allSettled()?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'What are object property descriptors? Tell about their practical application.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'Name several ways to create an immutable object in JavaScript.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'How to create a property on an object that cannot be changed?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'Tell about generators and iterators.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'Explain Symbol data type and its practical application. How to convert a number from a 10-bit system to a 16(2.8)-bit number system?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'Explain what currying means. Give an example of use in practice.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'Give an example of a function with memoization. When should this technique be used?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'What is function chaining? Write an example using this approach.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title:
      'What is the fundamental difference between the mouseleave and mouseout events?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title:
      'In what order are custom events handled in the DOM (click, mouseover, etc.)? FIFO or LIFO?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'What is event capturing?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: `Compare the event object's stopPropagation and stopImmediateProparation methods.`,
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'What are the approaches to optimizing web page performance?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title:
      'How is the same-origin policy mechanism implemented in the browser? What browser APIs does it cover?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'Name the ways of storing data in the browser. Compare them.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title:
      'Web workers. Describe the specifics of data transfer between workers and the main thread, between split workers.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'What are Transferable objects?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title:
      'Talk about ways to optimize the execution of resource-intensive JS operations to improve the performance of rendering content on the page.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title:
      'Why does ResizeObserver call resize events before the element is rendered and not after?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'Tell us how you understand Web Accessibility?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'Explain the difference between px, em, rem units.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'How to adapt a page for printing?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title:
      'Describe the features of customizing the styles of standard form elements.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'What is progressive rendering? What approaches are used?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title:
      'Name several ways to implement lazy-loading of media resources on a page.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'Name the popular CSS methodologies and their differences.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'How does CSS Grid work?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'How to reuse inline SVG elements on a page?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'Describe ways to optimize SVG files.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'Why do you need Custom Elements?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: 'What is JSX? What is its basis?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: 'How does the Virtual DOM algorithm work?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: 'What is the difference between functional and class components?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title:
      'Why and when should you pass props to super() when using class components?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: 'Why use setState() to update the internal state of a component?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: 'What is the principle of "raising the state"?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: 'Redux vs Mobx?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: 'Tell us about the basic working principle of React Hooks.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: 'What is the difference between createRef and useRef?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: 'When should you use React refs? When not to?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: 'What shortcomings of the React library do you see?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: 'What patterns do you use with React?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title:
      'Optimizing React applications? How to measure the performance of an application?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: 'Can a React app be embedded in another React app?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title: 'Why is Node.js single-threaded and not multi-threaded?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title: 'What is event driven development?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title: 'Compare the fork() and spawn() methods.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title:
      'Tell us about the Node.js frameworks you used. What is the difference between them?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title:
      'Describe in words the endpoint code that should save a 4 gigabyte file from the client and put it on S3 or another CDN.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title: 'What are microservices and why are they used?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title:
      'In which cases would you choose a monolith and in which cases would you choose microservices?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title: 'What is JWT?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title:
      'Explain the difference between programming in JS for NodeJS and browsers.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'database',
    title: 'What is Redis and what is it used for?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'database',
    title:
      'What databases were used? What is the difference between SQL and NoSQL?',
    answer: 'No answer yet',
    status: 'draft',
  },
];

export default questions.map((question) => ({ ...question, role: 'middle' }));
