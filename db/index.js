var mongoose = require("mongoose");
//Expired urls for EC2 instances
// `mongodb://ec2-18-189-7-83.us-east-2.compute.amazonaws.com/Reviews`,
mongoose.connect(`mongodb://localhost/Reviews`, err =>
  err
    ? console.log(err, "error connecting to database")
    : console.log("Database is good to go!!!")
);

var Schema = mongoose.Schema;

const Reviews = new Schema(
  {
    product_id: Number,
    id: Number,
    rating: Number,
    summary: String,
    recommend: String,
    response: String,
    body: String,
    date: Date,
    reviewer_name: String,
    helpfulness: Number
  },
  { collection: "Reviews" }
);

const NewChar = new Schema(
  {
    id: Number,
    characteristic_id: Number,
    review_id: Number,
    value: Number,
    product_id: Number,
    name: String
  },
  { collection: "NewChar" }
);

const Characteristics = new Schema(
  {
    id: Number,
    product_id: Number,
    name: String
  },
  { collection: "Characteristics" }
);

const Characteristic_Reviews = new Schema(
  {
    id: Number,
    characteristic_id: Number,
    review_id: Number,
    value: Number
  },
  { collection: "Characteristic_Reviews" }
);

const PhotoResults = new Schema(
  {
    id: Number,
    review_id: Number,
    url: String
  },
  { collection: "Photos" }
);

const ReviewList = mongoose.model("Reviews", Reviews);
const PhotoList = mongoose.model("Photos", PhotoResults);
const Meta = mongoose.model("NewChar", NewChar);
const Char = mongoose.model("Characteristics", Characteristics);

module.exports.Char = Char;
module.exports.Meta = Meta;
module.exports.ReviewList = ReviewList;
module.exports.PhotoList = PhotoList;
