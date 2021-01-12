import * as vscode from 'vscode';
import { runCommand } from '../../utils';
import * as shell from 'shelljs';
import * as OKiCE40Pro from '../ok-ice40pro';

export * from './top';
export * from './constraint';
export * from './lib';
export * from './build';
export * from './files';

export const createProject = async (projectDir: vscode.Uri) => {
    await vscode.workspace.fs.writeFile(vscode.Uri.joinPath(projectDir, 'source', 'top.v'), Buffer.from(OKiCE40Pro.topV));
    console.log('top module created');
    await vscode.workspace.fs.writeFile(vscode.Uri.joinPath(projectDir, 'source', 'okice40pro.pcf'), Buffer.from(OKiCE40Pro.constraint));
    console.log('constraint created');
    await vscode.workspace.fs.writeFile(vscode.Uri.joinPath(projectDir, '.gitignore'), Buffer.from(OKiCE40Pro.gitignore));
    console.log('lib created');
    await vscode.commands.executeCommand('vscode.openFolder', projectDir);
    
};
