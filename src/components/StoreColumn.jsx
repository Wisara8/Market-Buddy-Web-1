import React, {Component} from 'react';

class StoreColumn extends Component{

  render() {

    const list = this.props.price.map( price => {
      return this.props.product.map( product => {
        if(price.product_id === product.id && price.store_id === this.props.currStore.id){
          return (
            <div className="prod-list">
              <p>{product.name}</p>
              <div className="c-list">
                <i className="material-icons">attach_money</i>
                <p>{price.price}</p>
              </div>
            </div>
          )
        }
      })
    })


    return (
      <div>
        {list}
        </div>
    )
  }
}

export default StoreColumn;
