import React, { Component } from 'react'
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.min.css'
import './myswiper.scss'
import {connect} from 'react-redux'
@connect((state)=>state)
class MySwiper extends Component {
    componentDidMount(){
        new Swiper('.swiper-container',{
            loop: true, // 循环模式选项
        
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            autoplay: {
                autoplay : true,
                disableOnInteraction: false,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        
            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },
            
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
        });
    }
    render() {
        return (
            <div>
                <div className="swiper-container" style={{marginTop:"0rem"}}>
                <div className="swiper-wrapper" >
                    {this.props.home.banner.map((item,index)=>{
                        return <div key={index} className="swiper-slide">
                            <img alt='img' className='siper-img' src={item.image} />
                        </div>
                    })}

                </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
export default MySwiper