import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'imgUpload/') // 경로문제로 앞에 / 를 주지않는게 좋을것, 폴더를 만드는 것
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    // cb(null, file.fieldname + '_' + uniqueSuffix)
    cb(null, uniqueSuffix + '_' + file.originalname)
  }
})
const upload = multer({ storage: storage }).array('file');
// const upload = multer({ storage: storage }).single('file')

export async function imgUpload(req, res){

  let imgUrl = [];

  await upload(req, res, async (err) => {
    if (err) {
      console.log(err);
    } else {      
      imgUrl = req.files.map(file => {
        return file.path;
      });

      const resultString = imgUrl.join(', ');
      res.json(resultString);
    }
  });
}