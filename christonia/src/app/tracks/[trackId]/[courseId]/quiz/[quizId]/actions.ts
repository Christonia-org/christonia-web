"use server";

export async function submitQuizAction(
  quizId: string,
  questions: any[],
  userAnswers: Record<string, string>
) {
  let correctCount = 0;

  const correction = questions.map((q) => {
    const isCorrect = userAnswers[q.id] === q.answer;
    if (isCorrect) correctCount++;

    return {
      questionId: q.id,
      userAnswer: userAnswers[q.id] || null, // null means skipped
      correctAnswer: q.answer,
      isCorrect,
    };
  });

  const score = (correctCount / questions.length) * 100;

  return {
    success: true,
    score,
    correctCount,
    totalQuestions: questions.length,
    correction,
  };
}
