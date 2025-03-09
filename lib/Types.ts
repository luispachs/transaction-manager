export type FormSubmitionInitialState= {
    message:string;
}
export interface FormSubmitionInitialStateWithStatus extends FormSubmitionInitialState {
    status:number;
}