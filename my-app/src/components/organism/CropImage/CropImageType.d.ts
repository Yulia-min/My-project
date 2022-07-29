export type CropImageType = {
    src: string | undefined
    visible: boolean
    getCroppedImage: () => void
    handleCancel: () => void
    setImage: (target: HTMLImageElement) => void
    crop: any
    setCrop:  (crop: Crop, percentCrop: PercentCrop) => void
}