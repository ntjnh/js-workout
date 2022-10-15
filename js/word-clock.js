class Time extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: "What time is it now?"
        };
    
        this.getTime = this.getTime.bind(this);
    }
    
    getTime() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        
        this.setState({
            time: h + ":" + m + ":" + s
        });
    }
    
    render() {
        return (
            <div>
                <button onClick={this.getTime}>Get the time?</button>
                <h1>{this.state.time}</h1>
            </div>
        );
    }
}

ReactDOM.render(<Time />, document.getElementById('app'));

// https://codepen.io/ntjnh/pen/GRdOoam?editors=0010
