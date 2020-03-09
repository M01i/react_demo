export default {
    add(p){
        return {
            type:"ADD",
            p
        }
    },
    del(){
        return {
            type:"DEL",
        }
    }
  
}