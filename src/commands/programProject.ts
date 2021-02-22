import * as vscode from 'vscode';
import * as shell from 'shelljs';

import { runCommand, checkRequirement } from '../utils';
import { ProjectSettings } from '../hardware';

let output = vscode.window.createOutputChannel('Icestorm Program');

export const programProject = (context: vscode.ExtensionContext) => {
    return vscode.commands.registerCommand('icestorm.programproject', async () => {
        const { program, programTools, buildDir, buildType, path } = <ProjectSettings>context.workspaceState.get('icestormsetting');
        const workspaces = vscode.workspace.workspaceFolders;
        if (workspaces?.length) {
            const currentWorkspaceUri = workspaces[0].uri;
            shell.cd(currentWorkspaceUri.fsPath);
            if (checkRequirement(programTools)) {
                vscode.window.showInformationMessage(`Programming Started with ${programTools}`);
                if (buildType === 'apio') {
                    try{
                        await runCommand(program, output, path);
                        vscode.window.showInformationMessage('Programming Succeeded');
                    } catch (error) {
                        vscode.window.showErrorMessage('Programming failed, please check output.');
                    }
                } else {
                    try {
                        await runCommand(`mkdir -p ${buildDir}`, output, path);
                        await runCommand(program, output, path);
                        vscode.window.showInformationMessage('Programming Succeeded');
                    } catch (error) {
                        vscode.window.showErrorMessage('Programming failed, please check output.');
                    }
                }
            }
        }
    });
};
