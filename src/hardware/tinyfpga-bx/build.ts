export const buildTools = ['apio'];
export const programTools = ['apio'];
export const buildType = 'apio';

export const projectSettings = {
    type: 'TinyFPGA-BX',
    buildType,
    buildTools,
    programTools,
    buildDir: 'build',
    build: 'apio build --board TinyFPGA-BX',
    program: 'apio upload --board TinyFPGA-BX'
};
