import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class CoinItem extends React.Component{

  constructor(){
    super();
    this.UpdateCoin = this.UpdateCoin.bind(this);
  }

  UpdateCoin(e){
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/coins/"+this.props.wallet._id)
    .then()
    .catch();

  }

    render(){
        return(
            <div>              
            <br></br>
            <Card  border="primary" style={{ width: '28rem' }}>
            {/* Displaying the list of purchases - pulled from the server */}
            <h1><Card.Header>₿{this.props.wallet.amount}</Card.Header></h1>
            </Card>
            <hr></hr>
            <Button className="delete" variant="dark" onClick={this.UpdateCoin}>Withdraw</Button>
            <br></br>
            </div>
        )
    }
}
export default CoinItem;