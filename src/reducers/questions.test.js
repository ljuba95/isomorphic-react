import questions from "./questions";

describe("The questions reducer", () => {
  it("should not modify the state for random action", () => {
    const state = ["hi", "there"]
    const stateClone = ["hi", "there"]
    const newState = questions(state, {type: "UNLUCKY ACTION"})
    expect(newState).toEqual(stateClone)
    expect(newState).toBe(state)
  })

  it("should add new questions", () => {
    const state = [{question_id: "hi"}, {question_id: "there"}]
    const newQuestion = {question_id: "boy"}
    const newQuestionClone = {question_id: "boy"}
    const newState = questions(state, {type: "QUESTION_FETCHED", question: newQuestion})

    expect(newState).toContain(newQuestion)// like toBe
    expect(state).not.toContain(newQuestion)
    expect(newState).toHaveLength(3)
  })
})