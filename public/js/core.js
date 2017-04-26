var Contacts = React.createClass({
    totalAge: function () {
        this.state.personAge = this.state.personAge + 1;
        this.setState(this.state);
    },
    getInitialState (){
        return {personAge: parseInt(this.props.age)}
    },
    render: function () {
        return (
            <div>
                <p className="title">Anh Nguyen Blog</p>
                <p>Copyright &copy; {this.state.personAge} A Clean Blog Theme by Start Bootstrap</p>
            </div>
        );
    },
});
ReactDOM.render(<Contacts name="fullName" data="web developer" age="2017"/>, document.getElementById('contact'));