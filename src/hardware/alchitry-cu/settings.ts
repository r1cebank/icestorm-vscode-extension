export const projectSettings = {
    type: 'Alchiery CU',
    sys: `yosys -p 'synth_ice40 -top top -json alchitry.json' source/*.v`,
    constraint: 'cat constraint/*.pcf > all.pcf',
    pnr: 'nextpnr-ice40 --hx8k --package cb132 --json alchitry.json  --pcf all.pcf  --asc alchitry.asc',
    pack: 'icepack alchitry.asc alchitry.bin',
    write: 'iceprog alchitry.bin'
};
