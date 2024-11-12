import { InitData, StartAppParams } from '../types/AppDataTypes';

export const parseInitData = (): { initData: InitData; startAppParams: StartAppParams } => {
    const params = new URLSearchParams(window.location.search);

    try {
        const initData = JSON.parse(params.get('initData') || '{}') as InitData;
        const startAppParams = JSON.parse(params.get('startapp') || '{}') as StartAppParams;
        return { initData, startAppParams };
    } catch (error) {
        console.error('Failed to parse initData or startAppParams', error);
        return { initData: {} as InitData, startAppParams: {} as StartAppParams };
    }
};