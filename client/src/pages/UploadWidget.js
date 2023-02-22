import {useEffect, useRef} from 'react';

//should this be in the component folder to be added to the 
const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName:'dxrolxcas',
            uploadPreset:'xmqlmbhw'
        }, function(error, result){
            console.log(result);
        });  
    },[])
    return (
        <button onClick={() => widgetRef.current.open()}>Upload Photo</button>
    )
}