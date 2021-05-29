const express = require('express');
const router = express.Router();

router.get('/api/v1/health',(req,res)=>{
    res.send({"msg":"Server is working"});
})
module.exports = router;