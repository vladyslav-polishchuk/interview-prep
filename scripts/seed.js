const { sql } = require('@vercel/postgres');
const { questions, users } = require('./placeholder-data.js');
// const bcrypt = require('bcrypt');

async function seedUsers() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    await Promise.all(
      users.map(async (user) => {
        const hashedPassword = 'password'; //await bcrypt.hash(user.password, 10);
        return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${users.length} users`);
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedQuestions() {
  try {
    await sql`
        CREATE TABLE IF NOT EXISTS algorithm_questions (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            title VARCHAR(64) NOT NULL UNIQUE,
            complexity INT NOT NULL
        );
    `;

    console.log(`Created "questions" table`);

    await Promise.all(
      questions.map(
        ({ id, title, complexity }) => sql`
            INSERT INTO algorithm_questions (id, title, complexity)
            VALUES (${id}, ${title}, ${complexity});
        `
      )
    );

    console.log(`Seeded ${questions.length} algorithm_questions`);
  } catch (error) {
    console.error('Error seeding algorithm_question:', error);
    throw error;
  }
}

(async () => {
  await seedUsers();
  await seedQuestions();
})();
