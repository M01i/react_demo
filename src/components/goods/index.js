import React, { Component } from 'react'
import {LeftOutlined,ShoppingCartOutlined} from '@ant-design/icons'
import {connect} from 'react-redux'
import { Drawer} from 'antd';
import actionCreator from './actionCeartor'
import './goods.scss'
import {withRouter, Redirect} from 'react-router-dom'
import {getCar, addToCar} from '../../api/request'
@withRouter
@connect((state)=>state,actionCreator)
 class GoodsList extends Component {
    state = { visible: false, placement: 'bottom',type:''};
    showDrawer = (x) => {
        console.log(x)
        this.setState({
          visible: true,
          type:x
        });
      };
    
      onClose = () => {
        this.setState({
          visible: false,
        });
      };
    
      onChange = e => {
        this.setState({
          placement: e.target.value,
        });
      };
    back=()=>{
        this.props.history.push('/home')
    }
    shop_car=()=>{
        this.props.history.push('/list')
    }
    addCar= async (goods,num)=>{
        if(!sessionStorage.getItem('id')){
            console.log(this.props)
            this.props.history.push('/login')
            return
        }
        var a = await getCar()
        var car = [];
        var had = false;
        console.log(a)
        if(a[0].car.length===0){
            car = [{...goods,num:num}]
            addToCar(car)
            return
        }
        a[0].car.map((item)=>{
            // car.push({...item,num:num})
            if(item.id===goods.id){
                had = true;
                var nub = item.num + num
                car.push({...item,num:nub})
            }else{
                car.push({...item})
            }
        })  
        if(had){
            addToCar(car)
            console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            return
        }else {
            car.push({...goods,num:num})
            addToCar(car)
            console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY')
        }
    }
    render() {
        let goods = this.props.goodslist.goods
        return (
        this.props.goodslist.goods.goods?<div className='goods'>
        <div className='goods-all'>
            <LeftOutlined onClick={this.back} className='head-icon'/>
            <span>商品详情</span>
            <ShoppingCartOutlined onClick={this.shop_car} className='head-icon'/>
        </div>
        <div className='goods-main-box'>
        <img className='goods-top-img' alt='goods' src={goods.goods.goods_img} />
        
        
        <div className='goods-info'>
            <div>
                <span className='now-price'>￥{goods.goods.shop_price} <span className='juan'>劵</span></span>
                
            </div>
            <p className='price'>价格:<span className='old-price'>￥{goods.goods.market_price}</span></p>
            <p className='goods-name'> {goods.goods.goods_name}</p>
            <p className='num-msg'>
                <span>实付满49元包邮</span>
                <span>销量{goods.goods.sales_volume}</span>
            </p>
            <div className='less-money'>
                <div className='youhui'>
                    <span className='youhui-head'>优惠</span>
                    <p > 
                        <span className='less-money-head'>优惠</span>
                        {goods.coupon4GoodsBriefs.map((item,index)=>{
                            return <span className='one-juan' key={index}>{item}</span>
                        })}
                    </p>
                    <span>领券</span>
                </div>
                <div className='cuxiao'>
                <span></span>
                {goods.rebateActivityBriefs?<p>
                        <span className='less-money-head'>促销</span>
                        {goods.rebateActivityBriefs.map((item,index)=>{
                            return <span className='cuxiao-msg' key={index}>{item}</span>
                        })}
                    </p>:''}
                    
                    <span></span>
                </div>
            </div>
        </div>
        <div className='fenge'></div>

        <div className='goods-tj'>
            <h4 className='tj-head'>商品推荐</h4>
            <div className='goods-tj-list'>
                {goods.goodsRelDetails.map((item,index)=>{
                    return <div key={index} className='goods-tj-box'>
                    <img alt='img' src={item.goods_img} />
                        <p className='goods-name'>{item.goods_name}</p>
                        <p className='goods-price'> ￥{item.shop_price}</p>
                </div>
                })}
            </div>
        </div>

        <div className='fenge'></div>

        
        {
        goods.postBrief?
            <div className='goods-post'>
                <h4 className='post-head'>大家说</h4>
                <div className='post-box'>
                    <div className='hot-post'>
                        <div>
                            <img className='user-head' alt='img' src={goods.postBrief.icon} />
                            <span className='user-name'>{goods.postBrief.nickName}</span>
                            <p> {goods.postBrief.title}</p>
                        </div>
                        <img className='icon' alt='img' src={goods.postBrief.imageUrl} />
                    </div>
                    <div className='see-all'>
                        <p>查看全部</p>
                        <p> ({goods.goodsPostNum})</p>
                    </div>
                </div>
            </div>:''
        }
        
        <div className='fenge'></div>
        <div className='buy-msg'>
            {goods.activity.map((item,index)=>{
                return <p key={index}>{item.title}<span>></span></p>
            })}
        </div>
        <div className='fenge'></div>
        </div>
        <div className='goods-footer'>
            <span className='buy-now'onClick={this.showDrawer.bind(this,"buy")}>立即购买</span>
            <span className='join-car'onClick={this.showDrawer.bind(this,"car")}>加入购物车</span>
            
        </div>
        <Drawer
            placement={this.state.placement}
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
        >
            {this.state.type==="car"?<div className='goods-buy'>
                <div className='goods-buy-info'>
                    <img className='buy-img' alt='img' src={goods.goods.goods_img} />
                    <div className='num-box'>
                        <p className='goods-buy-price'>￥{goods.goods.shop_price}</p>
                        <p>库存{goods.goods.stock_number}件</p>
                        <p>限购{goods.goods.restrict_purchase_num}件</p>
                    </div>
                </div>
                <div className='buy-num'>
                    <span>购买数量</span>
                    <div>
                        <div onClick={this.props.del.bind(this,goods.goods.restrict_purchase_num)}>-</div>
                        <div className='get-num'>{this.props.goods.buy_number}</div>
                        <div onClick={this.props.add.bind(this,goods.goods.restrict_purchase_num)}>+</div>
                    </div>
                </div>
                <div className='go-buy' onClick={this.addCar.bind(this,goods.goods,this.props.goods.buy_number)}>确定</div>
            </div>:
            <div className='goods-buy'>
                <div className='goods-buy-info'>
                    <img className='buy-img' alt='img' src={goods.goods.goods_img} />
                    <div className='num-box'>
                        <p className='goods-buy-price'>￥{goods.goods.shop_price}</p>
                        <p>库存{goods.goods.stock_number}件</p>
                        <p>限购{goods.goods.restrict_purchase_num}件</p>
                    </div>
                </div>
                <div className='buy-num'>
                    <span>购买数量</span>
                    <div>
                        <div onClick={this.props.del
                            .bind(this,goods.goods.restrict_purchase_num)}>-</div>
                        <div className='get-num'>{this.props.goods.buy_number}</div>
                        <div onClick={this.props.add.bind(this,goods.goods.restrict_purchase_num)}>+</div>
                    </div>
                </div>
                <div className='go-buy' onClick={this.onClose}>确定</div>
            </div>
            
            }
        </Drawer>
        
             </div>:<Redirect to="/home" exact />
        )
    }
}
export default GoodsList