var Contacts = React.createClass({
    totalAge : function () {
        this.state.personAge  =  this.state.personAge + 1;
        this.setState(this.state);
    },
    getInitialState (){
        return {personAge:parseInt(this.props.age)}
    },
    render: function () {
        return (
            <div>
                <h1 className="title">Anh Nguyen</h1>
                <br />
                <div>Total Age :  {this.state.personAge}</div>
                <button onClick={()=>{this.totalAge()}}>CHECK AGE</button>
            </div>
        );
    },
});

var InputTag = React.createClass({
    render : function () {
        return (
            <div>

            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <Contacts name="fullName" data="web developer" age="22"/>
    </div>
    , document.getElementById('root'));