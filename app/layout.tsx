import "./global.css"

export const metadata = {
    title: "HanniGPT",
    description: "You can ask anything about me. Sound like I am so in love with myself!"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export default RootLayout;