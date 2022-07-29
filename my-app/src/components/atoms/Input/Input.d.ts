export type InputType = {
    className: string
    value: string | undefined
    disabled?: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
    label: string
    type?: any
}