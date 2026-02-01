import mongoose, { Schema, model, models } from "mongoose";

export const VIDEO_DIMENSION = {
  width: 1080,
  height: 1920,
} as const;

export interface IVideo {
  _id?: mongoose.Types.ObjectId;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  controls?: boolean;
  transformation?: {
    height: number;
    width: number;
    quality?: number;
  };
}

const videoSchema = new Schema<IVideo>(
  {
    title: { types: String, required: true },
    description: { types: String, required: true },
    videoUrl: { types: String, required: true },
    thumbnailUrl: { types: String, required: true },
    controls: { types: Boolean, default: true },
    transformation: {
      height: { type: Number, default: VIDEO_DIMENSION.height },
      width: { type: Number, default: VIDEO_DIMENSION.width },
      quality: { type: Number, min: 1, max: 100 },
    },
  },
  {
    timestamps: true,
  },
);

const Video = models?.Video || model<IVideo>("Video", videoSchema);
