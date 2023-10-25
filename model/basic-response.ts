export interface BasicResponse<T> {
    status: string,
    message: string,
    data: T
}