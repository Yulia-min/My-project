export type InputType = {
    className: string
    value: string | undefined | number
    disabled?: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
    label?: string
    type?: any
    filter_input?: boolean
    placeholder?: string
}