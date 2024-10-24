import { model, models, Schema } from "mongoose";

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  titleSlo: {
    type: String,
    required: true,
  },
  titleSrb: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: [String],
    required: true,
  },
  responsibilitiesSlo: {
    type: [String],
    required: true,
  },
  responsibilitiesSrb: {
    type: [String],
    required: true,
  },
  qualifications: {
    type: [String],
    required: true,
  },
  qualificationsSlo: {
    type: [String],
    required: true,
  },
  qualificationsSrb: {
    type: [String],
    required: true,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
});

const Job = models?.Job || model("Job", jobSchema);

export default Job;
