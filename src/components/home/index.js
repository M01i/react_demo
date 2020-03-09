import React, { Component } from 'react'
import './home.scss'
import { Spin } from 'antd';
import {getHomeList,getTime,getGoodsList,getTime3} from '../../api/request'
import {connect} from 'react-redux'
import actionCreator from "./actionCreator";
import Swiper from '../myswiper'
import GoodsList from '../goodslist'
@connect((state)=>state,actionCreator)
class Home extends Component {
    componentDidMount(){
        this.getHome()
    }
    getHome= async()=>{
        var time = await getTime3()
        getHomeList(time.data.version).then((res)=>{
            console.log(res)
            this.props.get(res.data.topNavigateADs,res.data.goodsOrActADs,res.data.bottomActAds,res.data.circularADs)
            this.props.l_end();

        })
    }
    navClick=(index,id)=>{
        this.props.l_start()
        if(index === 1 || index ===2){
            console.log(index)
            this.props.l_end();
            return;
        }
        let a = document.getElementById('home-nav')
        for(var x = 0;x < a.children.length;x++){
            a.children[x].className=''
        }
        a.children[index].className='checked'
        if(index===0){
            this.getHome();
            return;
        }
        getTime(id).then((res)=>{
            getGoodsList(res.data.version,id).then((xx)=>{
                this.props.change(xx.data)
                this.props.l_end();
            })
        })
    }
    render() {
        return (
            <div className=''>
                <div className='home'>
                {this.props.home.loading?<div className="example">
                    <Spin />
                </div>:''}
                
                <ul id="home-nav" className='home-nav'>
                    <li onClick={this.navClick.bind(this,0)} className='checked'><p>推荐</p></li>
                    {
                        this.props.home.title.map((item,index)=>{
                            
                        return item.image?<li onClick={this.navClick.bind(this,index+1)} key={item.title}>
                            <img className='nav-icon' alt={item.title} src={item.image}/>
                        </li>:
                        <li onClick={this.navClick.bind(this,index+1,item.adTypeDynamicDetail)} key={item.title} ><p>{item.title}</p></li>
                        })
                    }
                </ul>

                {this.props.home.visible?<div>{this.props.home.banner.length?<Swiper  />:""}
                <video className="home-video" poster="https://image.yunifang.com/yunifang/images/goods/ad0/19042120356564759810316766.jpg" controls="controls" src="https://image.yunifang.com/yunifang/images/file/goodsGalleryVideo/-1/19042920011707577485485461.mp4" />
                {
                    this.props.home.goods.map((item)=>{
                        return <div className='home-goods' key={item.title}>
                            <img alt='img' className='goods-img' src={item.image} />
                            <div className='goods-info'>
                                <p className='goods-title'>{item.adExtraAttributeVO.mainTitle}
                                <span className='overTime'>{item.adExtraAttributeVO.rTitle}</span>
                                </p>
                                
                                <span className='goods-msg'>
                                    <img alt='type' className='type-icon' src={item.adExtraAttributeVO.typeIcon} />
                                    {item.adExtraAttributeVO.subTitle}
                                </span>

                            </div>
                        </div>
                    })
                }
                <div className='bottom-box'>
                    {
                        this.props.home.bottom.map((item,index)=>{
                            return (
                                <div key={index} className='bottom'>
                                    
                                    <img className='home-bottom-img' alt={item.title} src={item.image} />
                                    {/* {item.title} */}
                                </div>
                            )
                        })
                    }
                </div>
                </div>
                :<GoodsList />}
                
            </div>
            </div>
            
        )
    }
}
export default (Home)