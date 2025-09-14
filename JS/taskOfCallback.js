function sandwichmaker(raw, cb){
    console.log("Take a bread");
    cb();
}
function filling(cb){
    console.log("Filling");
    cb();
}
function grilling(cb) {
    console.log("Grilling started...");
    setTimeout(() => {
        console.log("Grilling finished");
        cb();  // Call cb AFTER grilling is done (after 5 seconds)
    }, 5000);
}
function serve(cb){
   console.log("Serve");
   cb();
}
sandwichmaker("raw",function(){
    filling(function(){
         grilling(function(){
            serve(function(){
                console.log("Sandwich is ready");
            });
         });
    });

});
