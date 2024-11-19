
export const increment = (setCount, count) => {
    setCount(count+1);
}

export const decrement = (setCount, count) => {
    if(count>1){ // for prevent  smaller than 1
        setCount(count-1);
    }

}

export const handlePress = async (userLogin, navigation, item, setRefetech) => {
    if(userLogin == false){
        console.log("handle press");
        // go to a Login Page
    }else{
        try{
            //user id
            const userId = 1;
            //data
            const data = {
                userId: userId,
                productId: item.id,
                imageUrl: item.path,
                price: item.price,
                title: item.title
            }
            console.log("Sending mock data ", data);
            //endpoint
            const response = await mockApiCall(data);
            //response
            if(response.status == 201 || response.status == 200){
                setRefetech(response.data.productId);
                console.log("Set Fav Item");
            }
            //check response
        }catch(e){
            console.log("Error:", e);
        }
    }
}

const mockApiCall = (data) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve({
                status: 201, //201 mean success
                data:{ productId: data.productId },
            });
        }, 1000)
    });
}