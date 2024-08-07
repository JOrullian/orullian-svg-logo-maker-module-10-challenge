class Text {
    render(textColor, text) {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
}

module.exports = Text;