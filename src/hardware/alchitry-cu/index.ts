import * as vscode from 'vscode';
import * as AlchitryCU from '../alchitry-cu';

export * from './top';
export * from './constraint';
export * from './lib';
export * from './settings';
export * from './files';

export const createProject = async (projectName: string, projectDir: vscode.Uri) => {
    await vscode.workspace.fs.writeFile(vscode.Uri.joinPath(projectDir, 'source', 'top.v'), Buffer.from(AlchitryCU.topV));
    await vscode.workspace.fs.writeFile(vscode.Uri.joinPath(projectDir, 'source', 'blinker.v'), Buffer.from(AlchitryCU.blinker));
    console.log('top module created');
    await vscode.workspace.fs.writeFile(vscode.Uri.joinPath(projectDir, 'constraint', 'all.pcf'), Buffer.from(AlchitryCU.constraint));
    console.log('constraint created');
    await vscode.workspace.fs.writeFile(vscode.Uri.joinPath(projectDir, 'source', 'reset_conditioner.v'), Buffer.from(AlchitryCU.resetConditioner));
    console.log('lib created');
    await vscode.workspace.fs.writeFile(vscode.Uri.joinPath(projectDir, 'settings.iceproj'), Buffer.from(JSON.stringify({
        ...AlchitryCU.projectSettings,
        projectName
    })));
    await vscode.workspace.fs.writeFile(vscode.Uri.joinPath(projectDir, '.gitignore'), Buffer.from(AlchitryCU.gitignore));
    console.log('lib created');
    await vscode.commands.executeCommand('vscode.openFolder', projectDir);
};
