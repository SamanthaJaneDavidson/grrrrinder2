import { useEffect, useRef } from "react";

import { Button } from "react-bootstrap";

//should this be in the component folder to be added to the
const UploadWidget = ({ onChange }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dxrolxcas",
        uploadPreset: "xmqlmbhw",
      },
      function (error, result) {
        if (onChange) {
          if (result.event === "success") {
            onChange(result);
          }
          console.log(result);
        }
      }
    );
  }, []);
  return (
    <Button variant="secondary" onClick={() => widgetRef.current.open()}>
      Upload Photo
    </Button>
  );
};

export default UploadWidget;
