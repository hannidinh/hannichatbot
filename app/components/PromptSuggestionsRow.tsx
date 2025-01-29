import PromptSuggestionButton from "./PromptSuggestionButton";
const PromptSuggestionsRow = ({ onPromptClick }) => {
    const prompts = [
        "Which programming languages or technologies are you most comfortable with, and why?",
        "Why are you interested in working with our company/team?",
        "How many years of experience you have?",
        "What is the most complex piece of software you’ve developed",
        "Which trending technologies are you most excited about right now?"
    ]
    return (
        <div className="prompt-suggestion-row">
            {prompts.map((prompt, index) =>
                <PromptSuggestionButton
                    key={`suggestion-${index}`}
                    text={prompt}
                    onClick={() => onPromptClick(prompt)}
                />)}
        </div>
    )
}

export default PromptSuggestionsRow;