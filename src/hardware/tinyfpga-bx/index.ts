import * as vscode from 'vscode';
import { runCommand } from '../../utils';
import * as TinyFpgaBX from '../tinyfpga-bx';

export * from './top';
export * from './constraint';
export * from './lib';
export * from './build';
export * from './files';

export const createProject = async (projectDir: vscode.Uri) => {
    await vscode.workspace.fs.writeFile(vscode.Uri.joinPath(projectDir, 'source', 'top.v'), Buffer.from(TinyFpgaBX.topV));
    await vscode.workspace.fs.writeFile(vscode.Uri.joinPath(projectDir, 'source', 'blinker.v'), Buffer.from(TinyFpgaBX.blinker));
    console.log('top module created');
    await vscode.workspace.fs.writeFile(vscode.Uri.joinPath(projectDir, 'constraint', 'tinyfpga-bx.pcf'), Buffer.from(TinyFpgaBX.constraint));
    console.log('constraint created');
    await vscode.workspace.fs.writeFile(vscode.Uri.joinPath(projectDir, 'source', 'reset_conditioner.v'), Buffer.from(TinyFpgaBX.resetConditioner));
    console.log('lib created');
    await vscode.workspace.fs.writeFile(vscode.Uri.joinPath(projectDir, '.gitignore'), Buffer.from(TinyFpgaBX.gitignore));
    console.log('lib created');
    await vscode.commands.executeCommand('vscode.openFolder', projectDir);
};
