import * as vscode from 'vscode';
import * as shell from 'shelljs';

import { runCommand, checkRequirement } from '../utils';
import { ProjectSettings } from '../hardware';

let output = vscode.window.createOutputChannel('Icestorm Program');

export const programProject = (context: vscode.ExtensionContext) => {
    return vscode.commands.registerCommand('icestorm.programproject', async () => {
        const { program, programTools } = <ProjectSettings>context.workspaceState.get('icestormsetting');
        const workspaces = vscode.workspace.workspaceFolders;
        if (workspaces?.length) {
            const currentWorkspaceUri = workspaces[0].uri;
            shell.cd(currentWorkspaceUri.path);
            if (checkRequirement(programTools)) {
                try {
                    await runCommand('mkdir -p build', output);
                    await runCommand(program, output);
                    vscode.window.showInformationMessage('Program success!');
                } catch (error) {
                    vscode.window.showErrorMessage('Program failed, please check output.');
                }
            }
        }
    });
};
