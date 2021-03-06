import React from 'react';
import Card from 'react-bootstrap/Card';


class WalletItem extends React.Component{

    render(){
        return(
            <div>
            <Card  border="primary" style={{ width: '28rem' }}>
            <Card.Header>₿{this.props.wallet.amount}</Card.Header> 
            <h5 id="address">Recipient Address :({this.props.wallet.address})</h5>
            </Card>
            <br></br>
            </div>
        )
    }
}
export default WalletItem;