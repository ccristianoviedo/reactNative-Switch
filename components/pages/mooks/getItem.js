export function getItem () {    
    return new Promise((resolve)=>{ 
        const item=[
            {
                id:1,
                img:"http://drive.google.com/uc?export=view&id=1OoNfddGGGdEEQPKcNNg-sVmXuc6CfaJN",
                name:"RUTINI",
                price:3400,
                stock:4,                            
            },
           /* {
                id:2,
                img:"http://drive.google.com/uc?export=view&id=1OoNfddGGGdEEQPKcNNg-sVmXuc6CfaJN",
                name:"RUTINI",
                price:3400,
                stock:0,                       
            },
            {
                id:3,
                img:"http://drive.google.com/uc?export=view&id=1OoNfddGGGdEEQPKcNNg-sVmXuc6CfaJN",
                name:"RUTINI",
                price:3400,
                stock:0,                       
            },
            {
                id:4,
                img:"http://drive.google.com/uc?export=view&id=1OoNfddGGGdEEQPKcNNg-sVmXuc6CfaJN",
                name:"RUTINI",
                price:3400,
                stock:0,                       
            },
            {
                id:5,
                img:"http://drive.google.com/uc?export=view&id=1OoNfddGGGdEEQPKcNNg-sVmXuc6CfaJN",
                name:"RUTINI",
                price:3400,
                stock:0,                       
            },
            {
                id:6,
                img:"http://drive.google.com/uc?export=view&id=1OoNfddGGGdEEQPKcNNg-sVmXuc6CfaJN",
                name:"RUTINI",
                price:3400,
                stock:0,                       
            },
            {
                id:7,
                img:"http://drive.google.com/uc?export=view&id=1OoNfddGGGdEEQPKcNNg-sVmXuc6CfaJN",
                name:"RUTINI",
                price:3400,
                stock:0,                       
            },
            {
                id:8,
                img:"http://drive.google.com/uc?export=view&id=1OoNfddGGGdEEQPKcNNg-sVmXuc6CfaJN",
                name:"RUTINI",
                price:3400,
                stock:0,                       
            },
            {
                id:9,
                img:"http://drive.google.com/uc?export=view&id=1OoNfddGGGdEEQPKcNNg-sVmXuc6CfaJN",
                name:"RUTINI",
                price:3400,
                stock:0,                       
            }, */                      
        ]           
        

        setTimeout(()=>{
            resolve(item)
        },500)
    })
}