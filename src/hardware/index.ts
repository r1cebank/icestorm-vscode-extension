export * as AlchitryCU from './alchitry-cu';

export const hardwareList = [
    'Alchiery CU'
];

export type ProjectSettings = {
    type: string;
    sys: string;
    constraint: string;
    pnr: string;
    pack: string;
    program: string;
    buildTools: string[];
    programTools: string[];
};
