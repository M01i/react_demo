import axios from './index';  //进行了二次封装了
export const getList =(page,pageSize)=>{  //分页的接口
    return axios.get("/pagelist",{params:{page,pageSize}})
}
export const getHomeList =(time)=>{
    return axios.get("ynf/cache_home_"+time+".json")
}
export const getTime =(id)=>{
    return axios.get("vip/"+id+"?number=10")
}
export const getTime3 =()=>{
    return axios.get("vip3/")
}
export const getGoodsList=(time,id)=>{
    if(!id){
        return axios.get('all/getallgoods?type=0')
    }
        return axios.get('ynf/cache_category_detail_'+id+'_'+time+'.json')
}
export const login=(usn,psd)=>{
    return axios.get('http://localhost:4000/user?username='+usn+"&password="+psd)
}
export const reg_T=(usn)=>{
    return axios.get('http://localhost:4000/user?username='+usn)
}

export const reg=(usn,psd)=>{
    return axios.post('http://localhost:4000/user',{username:usn,password:psd,car:[]})
}
export const getGoods=(time,id)=>{
        return axios.get('ynf/cache_goods_'+id+'_'+time+'.json')
}
export const getTime2 =(id)=>{
    return axios.get("vip2/"+id)
}
export const getCar=()=>{
    return axios.get('http://localhost:4000/user?username='+sessionStorage.getItem('username'))
}

export const addToCar= async(car)=>{
    return axios.patch("http://localhost:4000/user/"+sessionStorage.getItem('id'),{car:car})
    
}

