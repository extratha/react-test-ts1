export interface FormField {
    name: string;
    label: string;
    type: string;
    value: string;
    validation?: {
        required?: boolean;
        minLength?: number;
        maxLength?: number;
    }
}
