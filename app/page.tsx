"use client"
import Image from "next/image"
import hannilogo from "./assets/hannilogo.png"
import { useChat } from "ai/react"
import { Message } from "ai"

const Home = () => {
    const { append, isLoading, messages, input, handleInputChange, handleSubmit } = useChat()
    const noMessages = true
    return (
        <main>
            <Image src={hannilogo} width="250" alt="Hanni gpt logo" />
            <section className={noMessages ? "" : "populated"}>
                {noMessages ? (
                    <>
                        <p className="starter-text">
                            Ask me anything about me. I hope you enjoy.
                        </p>
                        <br />
                        {/* <PromptSuggestionRow/> */}
                    </>
                ) : (
                    <>
                        {/* map messages onto text bubbles */}
                        {/* <LoadingBubble /> */}
                    </>
                )}

            </section>
            <form onSubmit={handleSubmit}>
                <input className="question-box" onChange={handleInputChange} value={input} placeholder="Ask me anything" />
                <input type="submit" />
            </form>
        </main>
    )
}

export default Home