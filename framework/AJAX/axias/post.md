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