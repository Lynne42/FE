<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Content-Type: application/json](#content-type-applicationjson)
- [Content-Type: multipart/form-data](#content-type-multipartform-data)
- [Content-Type: application/x-www-form-urlencoded](#content-type-applicationx-www-form-urlencoded)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Content-Type: application/json
    import axios from 'axios'
    let data = {"code":"1234","name":"yyyy"};
    axios.post(`/test/testRequest`,data)
    .then(res=>{
        console.log('res=>',res);            
    })

# Content-Type: multipart/form-data

    import axios from 'axios'
    let data = new FormData();
    data.append('code','1234');
    data.append('name','yyyy');
    axios.post(`/test/testRequest`,data)
    .then(res=>{
        console.log('res=>',res);            
    })

# Content-Type: application/x-www-form-urlencoded

    import axios from 'axios'
    import qs from 'Qs'
    let data = {"code":"1234","name":"yyyy"};
    axios.post(`/test/testRequest`,qs.stringify({
        data
    }))
    .then(res=>{
        console.log('res=>',res);            
    })