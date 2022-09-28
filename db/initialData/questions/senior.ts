import type { Question } from '../../../interfaces';

const questions: Array<Partial<Question>> = [
  {
    section: 'general',
    title: 'Tell us about functional programming.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title:
      'What is TDD (Test Driven Development) / BDD (Behavior Driven Development)?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'Describe how the HTTPS protocol works',
    answer: `No answer yet`,
    status: 'published',
  },
  {
    section: 'general',
    title: 'What is a V8 Engine?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'Implementation of the Class Free OOP pattern',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'Async disposer pattern',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title:
      'Using regular expressions. When is it acceptable / not acceptable? How do they work? How can you make code readable?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title:
      'Can you describe the essence of the git flow methodology in two words?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'What main data structures do you know?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title:
      'As a data container, what are the main differences between array and list?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'What is algorithm complexity?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'What are associative unordered and ordered containers?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title:
      'What is the search time complexity for binary tree? Why? Is it guaranteed?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title:
      'What is the difference between depth-first and breadth-first searches for binary tree?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'What is the structure of a hash table? How does it work?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title:
      'Explain common operations complexity on array, list, hash set, hash map.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'Explain what the binary search algorithm is.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title: 'Describe SOLID principles in JavaScript.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'general',
    title:
      'What is the difference between symmetric and asymmetric encryption?',
    answer: `## Symmetric encryption
- Uses a single, shared key to encrypt and decrypt information.
- Does not scale well: may be less secure when the key is shared with many entities.
- Very fast to encrypt and decrypt data.

## Asymmetric encryption (public key cryptography)
- Uses two separate keys: public and private. The public key is used to encrypt information and may be shared. The private key is the only key that can decrypt the information and should always be kept confidential.
- Very secure.
- Slow and resource-heavy data encryption and decryption.
- Often combined with symmetric encryption to get a fast and secure way to transfer data (example: HTTPS)`,
    status: 'published',
  },
  {
    section: 'js',
    title: 'Scope chain, lexical environment, and variable name resolution.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'Describe the Memory Lifecycle in the context of the closure.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'What does it mean: the functions in JavaScript are first-class objects?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'What is the difference between the execution context, scope, and static properties?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'Describe the practice of the borrowing method.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'OOP and FP in JavaScript',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title:
      'What is the difference between the classical and prototypal inheritance?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'What is a high-order function?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'Compare the imperative programming and declarative programming.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'Describe how async/await works.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'Provide yield-delegation examples and generators concurrency.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'js',
    title: 'Describe Web Workers, Shared Workers.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'How does the browser determine if we can communicate between tabs?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'What is Content Security Policy?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'How do I avoid loading cached script and style files?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'What is requestAnimationFrame?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'Tell us about the microservice architecture of Front-end App.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'What is Shadow DOM?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'frontend',
    title: 'What website metrics do you know?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title: 'Compare Common.js with AMD Modules and ES6 Imports.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title:
      'Have a project with sources of memory leaks, how to detect them, fix them and prevent them in the future?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title:
      'Is there a project with performance issues, how to identify, eliminate and prevent them in the future?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title:
      'What are the pros and cons of NodeJS? In what cases should NodeJS be used and when should it not?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title: 'Describe multithreading in NodeJS.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'backend',
    title: 'How to utilize multiple cores in a single NodeJS application?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'database',
    title: 'What are SQL Injections and how to avoid them?',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'database',
    title: 'Tell us about GraphQL.',
    answer: 'No answer yet',
    status: 'draft',
  },
  {
    section: 'react',
    title: 'What is react fiber?',
    answer: 'No answer yet',
    status: 'draft',
  },
];

export default questions.map((question) => ({ ...question, role: 'senior' }));
