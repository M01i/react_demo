import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getTime2,getGoods} from '../../api/request'
import './goodslist.scss'
import actionCreator from './actionCeartor'
import {withRouter} from 'react-router-dom'
@withRouter
@connect((state)=>state,actionCreator)
 class GoodsList extends Component {
     goods=(id)=>{
        getTime2(id).then((res)=>{
            if(!res.data.version){
                this.props.goods(res.data)
                this.props.history.push("/goods")
                return
            }
            getGoods(res.data.version,id).then((xx)=>{
                this.props.goods(xx.data)
                this.props.history.push("/goods")
                return
            })  
        
        })
     }
    render() {
        return (
            <div className='goods-box'>
                {this.props.home.goodslist.map((item)=>{
                    return(
                        <div onClick={this.goods.bind(this,item.id)} className='goods-list-one' key={item.goods_name}>
                            <img className='goods_img' src={item.goods_img} alt={item.goods_name} />
                            <div className='goods-info'>
                                <p className='goods-msg'>{item.efficacy}</p>
                                <p className='goods-name'>{item.goods_name}</p>
                                <span className='now-price'>￥{item.shop_price}</span> <span className='old-price'>￥{item.market_price}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default GoodsList