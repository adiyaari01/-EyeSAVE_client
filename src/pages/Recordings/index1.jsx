// //TODO: DELETE
// const axios = require('axios');
// const parser = require('xml2json');

// async function getDataList() {
//     const url = "https://eyesave.s3.eu-central-1.amazonaws.com/?list-type=2";
//     let baseSelectVideo = "https://eyesave.s3.eu-central-1.amazonaws.com/";
//     try {
//         let h = {Accept: 'application/xml'};
//         const response = await axios.get(url, h);
//         let parseJsonResponse = JSON.parse(parser.toJson(response.data));
//         let videos = parseJsonResponse['ListBucketResult']['Contents']
//         let dropDown = [];
//         videos.forEach((video) => {
//             if (video.Key.includes(".mp4")) {
//                 dropDown.push({name: video.Key, LastModified: new Date(video.LastModified),url:`${baseSelectVideo}${video.Key}`})
//             }
//         });
//         dropDown.sort(function(a,b){
//             return new Date(b.LastModified) - new Date(a.LastModified);
//         });
//         console.log(dropDown)
//     } catch (error) {
//         console.error(error);
//     }
// }


// getDataList().then(console.log('jshdgjkh'))