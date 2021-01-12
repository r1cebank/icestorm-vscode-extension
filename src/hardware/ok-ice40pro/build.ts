export const buildTools = ['apio'];
export const programTools = ['apio'];
export const buildType = 'apio';

export const projectSettings = {
    type: 'OK-iCE40Pro',
    buildType,
    buildTools,
    programTools,
    buildDir: 'build',
    build: 'apio build -b OK-iCE40Pro -p source',
    program: 'apio upload -b OK-iCE40Pro -p source'
};
