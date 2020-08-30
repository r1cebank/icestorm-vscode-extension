# icestorm-vscode-extension

![CI](https://github.com/r1cebank/icestorm-vscode-extension/workflows/CI/badge.svg)

Extension to build and program FPGA using icestorm

## Support

* Alchitry CU (Lattice iCE40-HX8K)

## Commands

* icestorm.createproject (Create new FPGA project)
* icestorm.buildproject (Build the project into bitstream)
* icestorm.programproject (Program the FPGA board)

## Features

* Project creating with template code.
* Building using yosys and nextpnr
* Programming with iceprog

## Requirements

For Alchitry CU, nextpnr, icestorm and yosys is required.

https://github.com/YosysHQ/nextpnr

https://github.com/cliffordwolf/icestorm

https://github.com/YosysHQ/yosys


## Extension Settings

## Known Issues

Only support Alchitry CU at the moment, I don't have other FPGA board to test, but adding new hardware support should be easy.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of extension

* Alchitry CU support
* Auto refresh project settings
* Building and flashing support

## Contributing
If you want to add your own board support, feel free to submit PR for the new hardware.
