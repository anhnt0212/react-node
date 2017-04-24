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
                <span className="title">Anh Nguyen</span>
                <br />
                <div>Age : {this.state.personAge}</div>
            </div>
        );
    },
});

ReactDOM.render(
    <div>
        <Contacts name="fullName" data="web developer" age="22"/>
    </div>
    , document.getElementById('contact'));