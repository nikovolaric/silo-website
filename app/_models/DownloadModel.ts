import { model, models, Schema } from "mongoose";

const downloadSchema = new Schema({
  ime: String,
  name: {
    type: String,
    required: true,
  },
  descriptionSrb: String,
  descriptionEng: String,
  downloadLink: {
    type: String,
    required: true,
  },
  site: {
    type: String,
    required: true,
    enum: ["quality", "suppliers", "sustainability", "about"],
  },
});

const Download = models?.Download || model("Download", downloadSchema);

export default Download;
