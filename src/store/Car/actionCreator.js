export default {
    add(name,price){
        return {
            type:"ADD",
            name,
            price
        }
    },
    inc(id){
        return {
            type:"INC",
            id
        }
    },
    dec(id){
        return {
            type:"DEC",
            id
        }
    }
}