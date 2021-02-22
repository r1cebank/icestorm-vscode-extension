import * as vscode from 'vscode';
import * as shell from 'shelljs';

import { runCommand, checkRequirement } from '../utils';
import { ProjectSettings, StandardBuild } from '../hardware';

let output = vscode.window.createOutputChannel('Icestorm Build');

export const buildProject = (context: vscode.ExtensionContext) => {
    return vscode.commands.registerCommand('icestorm.buildproject', async () => {
        const { build, buildTools, buildDir, buildType, path } = <ProjectSettings>context.workspaceState.get('icestormsetting');
        const workspaces = vscode.workspace.workspaceFolders;
        if (workspaces?.length) {
            const currentWorkspaceUri = workspaces[0].uri;
            shell.cd(currentWorkspaceUri.fsPath);
            if (checkRequirement(buildTools, path)) {
                vscode.window.showInformationMessage(`Build Started with ${buildTools}`);
                if (buildType === 'apio') {
                    try{
                        await runCommand(build, output, path);
                        vscode.window.showInformationMessage('Build Succeeded!');
                    } catch (error) {
                        vscode.window.showErrorMessage('Build failed, please check output.');
                    }
                } else {
                    try {
                        const { sys, constraint, pnr, pack} = <StandardBuild>build;
                        await runCommand(`mkdir -p ${buildDir}`, output, path);
                        await runCommand(sys, output, path);
                        await runCommand(constraint, output, path);
                        await runCommand(pnr, output, path);
                        await runCommand(pack, output, path);
                        vscode.window.showInformationMessage('Build Succeded!');
                    } catch (error) {
                        vscode.window.showErrorMessage('Build failed, please check output.');
                    }
                }
            }
        }
    });
};
