import React from 'react';
class Textbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: '',
            quote: '',
            isLoading: false
        }
        this.updateQuote = this.updateQuote.bind(this);
        
    }
    componentDidMount() {
        this.setState({ isLoading:true });

        fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
            .then(response => response.json())
            .then(data => this.setState({ author: data[0].character, quote: data[0].quote, isLoading: false }));
        }
    updateQuote() {
        fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(response => response.json())
        .then(data => this.setState({ author: data[0].character, quote: data[0].quote, isLoading: false }));
    }

    render() {
    const { author, quote, isLoading } = this.state;
        if (isLoading) {
            return <p>Loading ...</p>;
        }
        console.log(author)

        return (
            <div id="quote-box">
                <h2 id="text">{author}</h2>
                <h1 id="author">{quote}</h1>
                <button id="new-quote" onClick={this.updateQuote}>New Quote</button>
                <button id="tweet-quote"><a href={"https://twitter.com/intent/tweet/?text=" + quote}>Tweet Quote</a></button>
            </div>
        )
    }
}
export default Textbox;