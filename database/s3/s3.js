const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");

const { AWS_BUCKET_REGION, AWS_BUCKET_NAME, AWS_ACCESS_KEY, AWS_SECRET_KEY } =
    process.env;

const s3 = new S3({
    region: AWS_BUCKET_REGION,
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
});

// aws-s3에 파일 업로드
const uploadFile = (file) => {
    const fileStream = fs.createReadStream(file.path);
    const uploadParams = {
        Bucket: AWS_BUCKET_NAME,
        Body: fileStream,
        Key: file.originalname,
    };

    // callback 함수로 에러 잡는거 추가해야함
    return s3.upload(uploadParams).promise();
};

// asw-s3에서 파일 다운로드
const getFile = (fileKey) => {
    const downloadParams = {
        Key: fileKey,
        Bucket: AWS_BUCKET_NAME,
    };

    return s3.getObject(downloadParams).createReadStream();
};

module.exports = { uploadFile, getFile };
