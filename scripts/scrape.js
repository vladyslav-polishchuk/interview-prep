export async function scrape() {
  const allQuestions = await fetch(`${url}/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization,
    },
  });

  const { questions } = await allQuestions.json();
  const fullQuestions = await Promise.all(
    questions.map(async (question) => {
      return fetch(`${url}/get`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization,
        },
        body: JSON.stringify({
          name: question.uid,
        }),
      }).then((res) => res.json());
    })
  );

  return fullQuestions.map((question) => {
    const {
      resources,
      languagesSupported,
      changelog,
      releaseDate,
      version,
      submissionStatistics,
      isLongOutput,
      isSlowExecution,
      ...rest
    } = question;
    return {
      ...rest,
      solution: resources.typescript,
    };
  });
}
