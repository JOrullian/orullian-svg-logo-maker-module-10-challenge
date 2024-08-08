class Text {
    setColor(textColor) {
        this.textColor = textColor;
    }

    render(text) {
        console.log(text);
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${text}</text>`
    }
}

module.exports = Text;