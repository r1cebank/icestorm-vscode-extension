import * as vscode from 'vscode';
import * as shell from 'shelljs';

import { runCommand, checkRequirement } from '../utils';
import { ProjectSettings } from '../hardware';

let output = vscode.window.createOutputChannel('Icestorm Build');

export const buildProject = (context: vscode.ExtensionContext) => {
    return vscode.commands.registerCommand('icestorm.buildproject', async () => {
        const { sys, constraint, pnr, pack, buildTools } = <ProjectSettings>context.workspaceState.get('icestormsetting');
        const workspaces = vscode.workspace.workspaceFolders;
        if (workspaces?.length) {
            const currentWorkspaceUri = workspaces[0].uri;
            shell.cd(currentWorkspaceUri.path);
            if (checkRequirement(buildTools)) {
                try {
                    await runCommand('mkdir -p build', output);
                    await runCommand(sys, output);
                    await runCommand(constraint, output);
                    await runCommand(pnr, output);
                    await runCommand(pack, output);
                    vscode.window.showInformationMessage('Build success!');
                } catch (error) {
                    vscode.window.showErrorMessage('Building failed, please check output.');
                }
            }
        }
    });
};
