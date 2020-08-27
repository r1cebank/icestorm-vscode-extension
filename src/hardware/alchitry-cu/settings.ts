export const projectSettings = {
    type: 'Alchiery CU',
    sys: `yosys -p 'synth_ice40 -top top -json build/alchitry.json' source/*.v`,
    constraint: 'cat constraint/*.pcf > build/all.pcf',
    pnr: 'nextpnr-ice40 --hx8k --package cb132 --json build/alchitry.json  --pcf build/all.pcf  --asc build/alchitry.asc',
    pack: 'icepack build/alchitry.asc build/alchitry.bin',
    write: 'iceprog build/alchitry.bin'
};
