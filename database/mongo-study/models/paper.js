const mongoose = require("mongoose");
const { Schema } = mongoose;

const paperSchema = new Schema(
    // {
    //     paperId: {
    //         type: Number,
    //     },
    // },
    {},
    { timestamps: true, strict: false }
);
const PaperCollection = mongoose.model("Paper", paperSchema);

// record = colleciton
// table => document
// join을 많이 쓰는 복잡한 관계형 데이터 처리에서는 RDS가 차라리 퍼포먼스가 좋을 수 있다.

module.exports = PaperCollection;
