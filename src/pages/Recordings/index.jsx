import { useState, useEffect } from "react";
import { ACCESS_ID, ACCESS_KEY, REGION } from "../../constants";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: ACCESS_ID,
  secretAccessKey: ACCESS_KEY,
  region: REGION,
});
const s3 = new AWS.S3();

const params = {
  Bucket: "eyesave",
};

const BucketList = () => {
  const [listFiles, setListFiles] = useState([]);
  const [fileLoadingName, setFileLoadingName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    s3.listObjects(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      }
      else{
        setListFiles(data.Contents);
      }
    });
  }, []);

  const handleClickDownload = (objectName) => () => {
    const options = {
      Bucket: "eyesave",
      Key: objectName,
    };
    setFileLoadingName(objectName);
    s3.getObject(options, (err, data) => {
      setFileLoadingName("");
      if (err) {
        console.log({ err });
      }
      else{
        console.log({ data });
        const blob = new Blob([data.Body.buffer]);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        // the filename you want
        a.download = objectName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        alert("your file has downloaded!");
      }
    });
  };

  const handleGetVideo = (objectName) => () => {
    const options = {
      Bucket: "eyesave",
      Key: objectName,
    };
    s3.getObject(options, (err, data) => {
      setVideoUrl("");
      if (err) {
        console.log({ err });
      } else {
        console.log({ data });
        const blob = new Blob([data.Body.buffer]);
        const url = window.URL.createObjectURL(blob);
        console.log("url", url);
        setVideoUrl(url);
      }
    });
  };

  return (
    <div className="card" style={{color:'#4DDA90'}} align='center'>
      <ul className="list-group" style={{listStyleType: 'none'}}>
        {listFiles &&
          listFiles.map((file, index) => {
            return (
              <li className="list-group-item" key={index}>
                <h3>{file.Key}</h3>
                <div>
                  {/* <a
                    target="_blank"
                    href={`https://eyesave.s3.eu-central-1.amazonaws.com/${file.Key}`}
                  >
                    {`View ${file.Key}`}
                  </a> */}
                  {file.Size < 20_000_000 && (
                    <div>
                      <video controls height={230} width={400}>
                        <source
                          src={`https://eyesave.s3.eu-central-1.amazonaws.com/${file.Key}`}
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  )}

                  <button
                    disabled={!!fileLoadingName}
                    onClick={handleClickDownload(file.Key)}
                  >
                    {!!fileLoadingName && fileLoadingName === file.Key ? (
                      <span>Downloading...</span>
                    ) : (
                      <span>Download {file.Key}</span>
                    )}
                  </button>
                  {/* <button
                    onClick={handleGetVideo(file.Key)}
                  >
                    Get Video {file.Key}
                  </button> */}
                </div>
              </li>
            );
          })}
      </ul>
      {/* <div>
        <video controls height={300} width={500}>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div> */}
    </div>
  );
};

export default BucketList;

// import { Stack } from "@mui/material";

// export default () => {
//   return (
//     <div>
//       <video controls>
//         <source src="https://eyesave.s3.eu-central-1.amazonaws.com/basicvideo.mp4" type="video/mp4"/>
//       </video>
//       <Stack direction={"row"} flexWrap="wrap" gap={3}>
//         {/* <iframe
//           width="390"
//           height="230"
//           src="https://eyesave.s3.eu-central-1.amazonaws.com/basicvideo.mp4"
//           frameBorder="0"
//         ></iframe> */}
//         {/* <iframe
//           width="390"
//           height="230"
//           src="https://www.youtube.com/embed/tgbNymZ7vqY"
//           frameBorder="0"
//         ></iframe> */}
//       </Stack>
//     </div>
//   );
// };
