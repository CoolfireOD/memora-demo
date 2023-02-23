import {
  FaRegFileAlt,
  FaRegFileAudio,
  FaRegFileImage,
  FaRegFilePdf,
  FaRegFilePowerpoint,
  FaRegFileVideo,
  FaRegFileWord,
} from "react-icons/fa";

export const checkType = (type: string) => {
  console.log(type);
  if (type.match(/^image\//)) {
    return <FaRegFileImage />;
  } else if (type.match(/^audio\//)) {
    return <FaRegFileAudio />;
  } else if (type.match(/^video\//)) {
    return <FaRegFileVideo />;
  } else if (type === "application/pdf") {
    return <FaRegFilePdf />;
  } else if (
    type.match(
      /(application\/vnd\.openxmlformats-officedocument\.presentationml\.presentation|application\/vnd\.ms-powerpoint|application\/vnd\.google-apps.presentation)/
    )
  ) {
    return <FaRegFilePowerpoint />;
  } else if (type.match(/^text\//)) {
    return <FaRegFileWord />;
  } else {
    return <FaRegFileAlt />;
  }
};
