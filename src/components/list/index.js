import React, { Component } from 'react'
import './car.scss'
import {Redirect} from 'react-router-dom' 
import {getCar, addToCar} from '../../api/request'
export default class home extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
            money:0

        }
    }
    componentDidMount(){
        getCar().then((res)=>{
            console.log(res[0].car)
            var mon = 0;
            console.log(res)
            if(res[0].car.length !== 0 ){
                res[0].car.map((item)=>{
                    mon += item.shop_price*item.num
                   })
            }
            console.log(mon)
            this.setState({
                list:res[0].car,
                money:mon
            })
        })
    }
    del_goods=(index)=>{
        console.log('del')
        this.state.list.splice(index,1)
        console.log(this.state.list)
        addToCar(this.state.list)
    }
    pay=()=>{
        console.log('buy')
        addToCar([])
    }
    render() {
        return (
            sessionStorage.getItem("username")?<div className='shop_car'>
                <div className='shop_list_box'>
                {
                    this.state.list.length===0?<div className='nothing-car'>您的购物车为空 快去选购吧</div>:
                    this.state.list.map((item,index)=>{
                        return <div key={item.goods_name} className='one_goods'>
                            <img className="goods_img" alt={item.goods_name} src={item.goods_img} />
                            <div className='goods_info'>
                                <span className='now-price'>￥{item.shop_price}</span>
                                <span className='old-price'>￥{item.market_price}</span>
                                <span className='number'>{item.num}</span>
                                <span className='del_goods' onClick={this.del_goods.bind(this,index)}>删除</span>
                            </div>
                        </div>
                    })
                }
                </div>
                <div className='pay_box'>
                    <div>总计:{this.state.money}</div>
                    <div className='pay' onClick={this.pay}>确认支付</div>
                </div>
            </div>:<Redirect to="/login" exact />
        )
    }
}
