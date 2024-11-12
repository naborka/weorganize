export interface InitData {
    user_id: string;
    auth_date: string;
    hash: string;
    [key: string]: string;
}

export interface StartAppParams {
    startParam1: string;
    startParam2?: string;
}