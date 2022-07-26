import {Button, Form, Image, Input, Modal} from 'antd'
import React, { ReactNode, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestEditUserInfo, requestUserInfo } from 'src/redux/users/actions'
import { getUserInfo } from 'src/redux/users/selectors'
import './EditProfileTab.scss'
import ReactCrop from 'react-image-crop'
import photo from 'src/public/photo.png'
import 'react-image-crop/lib/ReactCrop.scss'
import { useNavigate } from 'react-router-dom'
import { UserData } from 'src/constants/Api/User/User.d'

export const EditProfileTab = () => {
  const [form] = Form.useForm()

  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const { user } = useAppSelector(getUserInfo)

  useEffect(() => {
    dispatch(requestUserInfo())
  }, [])

  useEffect(() => {
    form.setFieldsValue(user)
    setCropImage(user?.logo ? user?.logo : photo)
  }, [user])

  const [visible, setVisible] = useState(false)
  const [src, setSelectedImage] = useState<string>()
  const [image, setImage] = useState<any>()
  const [cropImage, setCropImage] = useState<string>()
  const [blob, setBlob] = useState<any>()
  const [crop, setCrop] = useState<any>({ unit: '%', x: 25, y: 25, width: 50, height: 50, aspect: 1 / 1 })

  const handleOk = async () => {
    const canvas = document.createElement('canvas')
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d')
  
    ctx?.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    )

    setVisible(false)

    return new Promise((resolve, reject) => {
        canvas.toBlob(
            (blob: any) => {
                if (!blob) {
                    reject(new Error('Canvas is empty'));
                    return;
                }

                blob.name = __filename;
                const croppedImageUrl = window.URL.createObjectURL(blob);
                console.log(croppedImageUrl)
                setBlob(blob)
                setCropImage(croppedImageUrl)
                resolve(croppedImageUrl);
            }, 'image/jpeg'
        );
    });

  }


  const handleCancel = () => {
    setVisible(false)
  }

  const handleFileChange = (event: any) => {
    setVisible(true)
    setSelectedImage(URL.createObjectURL(event.target.files[0]))
  }

   const onFinish = (values: UserData) => { 
    const formData = new FormData()
    formData.append('logo', blob, blob.name)
    dispatch(requestEditUserInfo({user: {...values, logo : formData }}))
   }

   const handleEditCancel = () => {
    navigate('/main')
   }


  return (
    <div className='edit-profile'>
        <div className='edit-profile_title'>Edit profile</div>
        <Form form={form} onFinish={onFinish}>
            <div className='upload-info'>
                {
                    cropImage && <img className='upload-image' alt='upload' src={cropImage} />           
                }
                <Input type="file" className='file-input' onChange={handleFileChange} />   
            </div>      
            <div className='name-info'>
                <Form.Item name="username">
                    <Input className='name-input' placeholder="Username" />
                </Form.Item>
                <Form.Item name="name">
                    <Input className='name-input' placeholder="Full name" />
                </Form.Item>
            </div>
            <Form.Item name="email">
                <Input className='email-input' placeholder="Email" disabled />
            </Form.Item>
            <Form.Item name="about">
                <Input.TextArea rows={5} className='about-input' placeholder="About your profile" />
            </Form.Item>
            <Form.Item>
                <Button onClick={handleEditCancel}>Cancel</Button>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Save</Button>
            </Form.Item>
        </Form>
        {
            src && (
                <Modal visible={visible} onOk={handleOk} onCancel={handleCancel}>
                    <ReactCrop circularCrop src={src} onImageLoaded={setImage} crop={crop} onChange={setCrop}  />
                </Modal>
            )
        }
    </div>
  )
}

