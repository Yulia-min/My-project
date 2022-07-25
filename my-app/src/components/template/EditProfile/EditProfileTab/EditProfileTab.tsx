import { Button, Form, Image, Input, Modal, Upload } from 'antd'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestUserInfo } from 'src/redux/users/actions'
import { getUserInfo } from 'src/redux/users/selectors'
import './EditProfileTab.scss'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/lib/ReactCrop.scss'

export const EditProfileTab = () => {
  const [form] = Form.useForm()

  const dispatch = useAppDispatch()

  const { user } = useAppSelector(getUserInfo)

  useEffect(() => {
    dispatch(requestUserInfo())
  }, [])

  useEffect(() => {
    form.setFieldsValue(user)
  }, [user])


  const [src, setSelectedImage] = useState<any>()
  const [image, setImage] = useState<any>()
  const [result, setResult] = useState<any>()
  const [crop, setCrop] = useState<any>({ aspect: 1 / 1 });

  const handleFileChange = (event: any) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]))
  }

  function getCroppedImg() {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');
  
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

    const base64Image = canvas.toDataURL('image/jpeg')
    setResult(base64Image)

    }

  return (
    <div className='edit-profile'>
        <div className='edit-profile_title'>Edit profile</div>
        <Form form={form}>
            <Form.Item name='logo'>
                <Input accept='image/*' type="file"  onChange={handleFileChange} />
            </Form.Item>
            <div>
                {
                    src && (
                        <Modal>
                            <ReactCrop src={src} onImageLoaded={() => setImage} crop={crop} onChange={() => setCrop}  />
                            <Button onClick={getCroppedImg}>Crop</Button>
                        </Modal>
                    )
                }
                {
                    result && <Image src={result} />
                }
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
                <Button>Cancel</Button>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Save</Button>
            </Form.Item>
        </Form>
    </div>
  )
}

