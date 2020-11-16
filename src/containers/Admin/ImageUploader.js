import React, { useState, useEffect } from 'react';
import './ImageUploader.css';

const ImagesUpload = ({ product, uploadedImage, register }) => {
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        // If an image was uploaded by the user, it will be shown. otherwise, the current image in the storage will be shown.
        if (uploadedImage && uploadedImage.length && uploadedImage[0] instanceof Blob) {
            convertImageToBase64(uploadedImage[0])
                .then(url => setImageUrl(url))
                .catch(err => console.log(err))
        } else if (product && product['image']) {
            setImageUrl(product['image']);
        } else {
            setImageUrl('');
        }
    }, [product, uploadedImage])

    return (
        <div style = {{display: "flex", alignItems: 'flex-end'}}>
            <div className='img-preview-container'>
                <div className='img-placeholder'>
                    אין תמונה
                </div>
                {imageUrl ? <img src={imageUrl} alt='preview' className='img-preview' /> : null}
            </div>
            <div>
                <input type="file" ref={register} name="image" id="file" className="inputfile" accept="image/*" />
                <label htmlFor="file" className="button" style={{ display: 'inline-block', marginRight: '5px' }}> {imageUrl ? 'החלף תמונה' : 'העלאת תמונה'} </label>
            </div>
        </div>
    );
}

export default ImagesUpload;

// This function gets an image and converts it to a url attachable to src attribute in img tags
function convertImageToBase64(image) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                resolve(reader.result);
            }
        }
        if (image instanceof Blob) {
            reader.readAsDataURL(image)
        } else {
            reject("error - the function requires a Blob or File in order to convert to base64");
        }
    });
}