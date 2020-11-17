# icestorm-vscode-extension

![CI](https://github.com/r1cebank/icestorm-vscode-extension/workflows/CI/badge.svg)

Extension to build and program FPGA using icestorm

## Support
| Board name | FPGA | Build Method | Program method | Requirements |
| ---------- | ---- | ------------ | -------------- | ------------ |
| [Alchitry CU](https://alchitry.com/products/alchitry-cu-fpga-development-board) | Lattice iCE40-HX8K | yosys/nextpnr | iceprog | yosys, nextpnr, iceprog |
| [TinyFPGA-BX](https://tinyfpga.com/) | Lattice iCE40-LP8K | APIO | APIO | APIO

## Commands

* icestorm.createproject (Create new FPGA project)
* icestorm.buildproject (Build the project into bitstream)
* icestorm.programproject (Program the FPGA board)

## Features

* Project creating with template code.
* Building using yosys and nextpnr or APIO
* Programming with iceprog or APIO

## Requirements

For Alchitry CU, nextpnr, icestorm and yosys is required.

https://github.com/YosysHQ/nextpnr

https://github.com/cliffordwolf/icestorm

https://github.com/YosysHQ/yosys


For TinyFPGA-BX, APIO is required.

https://github.com/FPGAwars/apio


## Known Issues

Only support Alchitry CU and TinyFPGA-BX at the moment, I don't have other FPGA board to test, but adding new hardware support should be easy.

## Release Notes

### 1.0.0

Initial release of extension

* Alchitry CU support
* Auto refresh project settings
* Building and flashing support

## Contributing
If you want to add your own board support, feel free to submit PR for the new hardware.

## Credits

TinyFPGA-BX added by [matt-hu](https://github.com/matt-hu)

Icon made by [icon king](https://www.freeicons.io/profile/3) from www.freeicons.io

Build icon made by [www.wishforge.games](https://www.freeicons.io/profile/2257) from www.freeicons.io

Download icon made by [Raj Dev](https://www.freeicons.io/profile/714) from www.freeicons.io
