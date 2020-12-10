const aws = require("aws-sdk");
const {S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} = process.env;

module.exports = (req, res) => {
  console.log("req:", req);
  console.log("req.query:", req.query);
  aws.config = {
    region: 'us-west-1',
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  };


  const s3 = new aws.S3({ signatureVersion: "v4" });
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];

  console.log("fileName", fileName);
  console.log("fileType", fileType);

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read',
  };

  console.log("s3Params", s3Params);

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };

    return res.status(200).send(returnData);
  });
}