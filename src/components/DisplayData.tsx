import React from 'react';
import { InitData, StartAppParams } from '../types/AppDataTypes';

interface Props {
    initData: InitData;
    startAppParams: StartAppParams;
}

const DisplayData: React.FC<Props> = ({ initData, startAppParams }) => (
    <div>
        <h2>Init Data:</h2>
        <pre>{JSON.stringify(initData, null, 2)}</pre>
        <h2>Start App Params:</h2>
        <pre>{JSON.stringify(startAppParams, null, 2)}</pre>
    </div>
);

export default DisplayData;
