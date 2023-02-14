console.log("START OF SCRIPT");

function promiseReturnFunction(){
    /*return new Promise((resolve,reject) => {
        setTimeout(() => {
            const data = {
                firstname: "julius",
                lastName: "Huhtasalo"
            }
            resolve(data);
        }, 2000);
    });
    */
   reject("Promise Rejected");
};

async function asyncFunction(){
    try{
    const response = await promiseReturnFunction();
    console.log(response)
    }catch (error){
        console.log(error);
    }
};

asyncFunction();


console.log("END OF SCRIPT");