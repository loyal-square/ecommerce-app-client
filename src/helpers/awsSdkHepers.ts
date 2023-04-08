import AWS from 'aws-sdk';
// Set up AWS credentials and region
AWS.config.update({
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  region: import.meta.env.VITE_AWS_REGION
});

export async function uploadToS3(file: File) {
  // Create S3 object
  const s3 = new AWS.S3();

  const fileName = 'image.jpg' + crypto.randomUUID();
  const bucketName = import.meta.env.VITE_AWS_S3_BUCKET_NAME;
  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: file
  };

  // Upload image to S3 bucket
  s3.upload(params as any, (err: any, data: any) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`File uploaded successfully. File URL: ${data.Location}`);
    }
  });
}

export async function getImageFromS3() {
  const params = {
    Bucket: 'loyalsquare-ecommerce-images',
    Key: 'image.jpgd65054d4-6c53-4c1b-8835-a00ffb5534e8'
  };
  // Create S3 object
  const s3 = new AWS.S3();
  let base64String;
  await s3
    .getObject(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
      } else {
        console.log(data);
        base64String = 'data:image/jpeg;base64,' + Buffer.from(data.Body as any).toString('base64');
        // data contains the image data as a Buffer object
      }
    })
    .promise();
  console.log(base64String);

  return base64String;
}
