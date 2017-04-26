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
            <p>
                <span className="title">Anh Nguyen Blog</span>
                <br />
                <div>Copyright &copy; Anh Nguyen : {this.state.personAge}</div>
            </p>
        );
    },
});

ReactDOM.render(
        <Contacts name="fullName" data="web developer" age="2017"/>
    , document.getElementById('contact'));