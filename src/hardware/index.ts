export * as AlchitryCU from './alchitry-cu';
export * as TinyFpgaBX from './tinyfpga-bx';
export * as OKiCE40Pro from './ok-ice40pro';

export const hardwareList = [
    'Alchitry CU',
    'TinyFpga-BX',
    'OK-iCE40Pro'
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

