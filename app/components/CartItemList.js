import React from 'react';

import CartItem  from './CartItem.js';


export default (props)=>{
    return (
      <div>
        {this.props.items.map((item, index)=>{
            return <CartItem key={"item-"+index} locale={this.props.locale} item={item}/>
        })}
      </div>
    );
  }
