export const buildTools = ['yosys', 'nextpnr-ice40', 'icepack'];
export const programTools = ['iceprog'];
export const buildType = 'icepack';

export const projectSettings = {
    type: 'Alchitry CU',
    buildType,
    buildTools,
    programTools,
    buildDir: 'build',
    build: {
        sys: `yosys -p 'synth_ice40 -top top -json build/alchitry.json' source/*.v`,
        constraint: 'cat constraint/*.pcf > build/all.pcf',
        pnr: 'nextpnr-ice40 --hx8k --package cb132 --json build/alchitry.json  --pcf build/all.pcf  --asc build/alchitry.asc',
        pack: 'icepack build/alchitry.asc build/alchitry.bin',
        
    },
    program: 'iceprog build/alchitry.bin'
};
