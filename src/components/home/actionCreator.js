export default {
    get(p,x,y,z){
        // console.log(132)
        return {
            type:"GET",
            p:p,
            x:x,
            y:y,
            z:z
        }
    },
    change(p){
        return {
            type:"CHANGE",
            p:p
        }
    },
    l_start(){
        console.log('start')
        return {
            type:"L-START",
        }
    },
    
    l_end(){
        console.log('end')
        return {
            type:"L-END",
        }
    }
    
}