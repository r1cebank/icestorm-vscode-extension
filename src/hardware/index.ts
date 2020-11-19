export * as AlchitryCU from './alchitry-cu';
export * as TinyFpgaBX from './tinyfpga-bx';

export const hardwareList = [
    'Alchitry CU',
    'TinyFpga-BX'
];

export type ProjectSettings = {
    type: string;
    buildTools: string[];
    programTools: string[];
    buildDir: string;
    buildType: string;
    build: any;
    program: string;
};

export type StandardBuild = {
    sys: string;
    constraint: string;
    pnr: string;
    pack: string;
};

