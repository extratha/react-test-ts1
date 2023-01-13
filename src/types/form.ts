export type fieldErrorMessage = [string] | []
export interface formErrorMessage {
    [any: string]: fieldErrorMessage
}
export interface FieldModel {
    name: string;
    label: string;
    type: string;
    value: string;
    validation?: {
        required?: boolean;
        minLength?: number;
        maxLength?: number;
    };
    onChange?: (event: any) => void;
    errors?: fieldErrorMessage;
}
export interface FormModel {
    errors?: formErrorMessage;
    fields: Record<string, any>;
}