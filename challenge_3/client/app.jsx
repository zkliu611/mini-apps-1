class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      formData: {}
    }
  }

  nextPage () {
    var pageIndex = this.state.page;
    pageIndex ++;
    if (pageIndex > 4){
      pageIndex = 0;
    }
    this.setState({
      page: pageIndex
    });
  }

  inputData (event) {
    var data = this.state.formData;
    var key = event.target.id;
    var value = event.target.value;
    data[key] = value;
    this.setState({
      formData: data
    });
    console.log(this.state.formData)
  }

  sendData () {

  }
 

  render() {
    if (this.state.page === 0){
      return (<FrontPage nextPage={this.nextPage.bind(this)}/>);
    }
    if (this.state.page === 1){
      return (<Form1 nextPage={this.nextPage.bind(this)} inputData={this.inputData.bind(this)}/>);
    }
     if (this.state.page === 2){
      return (<Form2 nextPage={this.nextPage.bind(this)} inputData={this.inputData.bind(this)}/>);
    }
     if (this.state.page === 3){
      return (<Form3 nextPage={this.nextPage.bind(this)} inputData={this.inputData.bind(this)}/>);
    }
     if (this.state.page === 4){
      return (<Form4 nextPage={this.nextPage.bind(this)} inputData={this.inputData.bind(this)}/>);
    }
  }

}

var FrontPage = ({nextPage}) => {
  return (
    <div id='app'>
      <h1>Grocery Check Out</h1>
      <div>Please double check your shopping cart and hit Check Out button when you are ready.</div>
      <br></br>
      <div> Items in your cart</div>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
      <button onClick={(event) => nextPage(event)}> Check Out </button>
    </div>
    );
}

var Form1 = ({nextPage, inputData}) => {
  return (
    <div>
      <h3>Please Enter Your Name and Login Info</h3>
      <label>Name </label>
      <input type="text" id="name" placeholder="Please Your Name" onChange={(event) => inputData(event)}/>
      <br/>
      <label>Email </label>
      <input type="text" id="email" placeholder="Please Enter Your Email" onChange={(event) => inputData(event)}/>
      <br/>
      <label>Password </label>
      <input type="text" id="password" placeholder="Please Enter Password" onChange={(event) => inputData(event)}/>
      <br/><br/>
      <button onClick={(event) => nextPage(event)}> Next </button>
    </div>
    );
}

var Form2 = ({nextPage, inputData}) => {
  return (
    <div>
      <h3>Please Enter Your Shipping Info</h3>
      <label>Address Line 1 </label>
      <input type="text" id="address1" placeholder="Address Line 1" onChange={(event) => inputData(event)}/>
      <br/>
      <label>Address Line 2 </label>
      <input type="text" id="address2" placeholder="Address Line 2" onChange={(event) => inputData(event)}/>
      <br/>
      <label>City </label>
      <input type="text" id="city" placeholder="City" onChange={(event) => inputData(event)}/>
      <br/>
      <label>State </label>
      <input type="text" id="state" placeholder="State" onChange={(event) => inputData(event)}/>
      <br/>
      <label>Zip Code </label>
      <input type="text" id="zipcode" placeholder="ZIP Code" onChange={(event) => inputData(event)}/>
      <br/><br/>
      <button onClick={(event) => nextPage(event)}> Next </button>
    </div>
  );
}

var Form3 = ({nextPage, inputData}) => {
  return (
    <div>
      <h3>Please Enter Your Payment Info</h3>
      <label>Credit Card # </label>
      <input type="text" id="creditCard" placeholder="Please Enter CC #" onChange={(event) => inputData(event)}/>
      <br/>
      <label>Expiration Date </label>
      <input type="text" id="expiration" placeholder="MMDDYYYY" onChange={(event) => inputData(event)}/>
      <br/>
      <label>CVV </label>
      <input type="text" id="cvv" placeholder="3 Digits CVV" onChange={(event) => inputData(event)}/>
      <br/>
      <label>Billing Zip Code </label>
      <input type="text" id="billing" placeholder="Billing ZIP Code" onChange={(event) => inputData(event)}/>
      <br/><br/>
      <button onClick={(event) => nextPage(event)}> Next </button>
    </div>
  );
}

var Form4 = ({nextPage}) => {
  return (
    <div>
      <h3>Please Verify Your Information and Click Complete Order</h3>
      
      <br/><br/>
      <button onClick={(event) => nextPage(event)}> Complete Order </button>
    </div>
  );
}




ReactDOM.render(<App />, document.getElementById('app'));

//mysql.server start to start mysql server