module.exports ={
    "entry" : "./App/main.js",
    module:{
        rules:[
            {
                test:/\.html$/,
                use:["html-loader"]
            },
            {
                test:/\.ts$/,
                loader:'ts-loader'
            }
        ]
    }
}