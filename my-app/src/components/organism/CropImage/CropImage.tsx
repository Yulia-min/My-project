import { Modal } from "antd";
import React from "react";
import ReactCrop from "react-image-crop"
import { CropImageType } from "./CropImageType"

export const CropImage = ({ src, visible, getCroppedImage, handleCancel, setImage, crop, setCrop }: CropImageType) => {
  return (
    <>
        {
            src && (
                <Modal 
                    visible={visible}  
                    okText="Save" 
                    cancelText="Cancel"
                    onOk={getCroppedImage} 
                    onCancel={handleCancel}
                    className='crop-modal'
                >
                    <div className='modal-info'>Upload profile photo</div>
                    <ReactCrop circularCrop src={src} onImageLoaded={setImage} crop={crop} onChange={setCrop}  />
                </Modal>
            )
        }
    </>
  )
}