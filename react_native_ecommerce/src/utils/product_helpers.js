
export const increment = (setCount, count) => {
    setCount(count+1);
}

export const decrement = (setCount, count) => {
    if(count>1){ // for prevent  smaller than 1
        setCount(count-1);
    }

}