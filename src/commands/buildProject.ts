import * as vscode from 'vscode';
import * as shell from 'shelljs';

import { runCommand, checkRequirement } from '../utils';
import { ProjectSettings, StandardBuild } from '../hardware';

let output = vscode.window.createOutputChannel('Icestorm Build');

export const buildProject = (context: vscode.ExtensionContext) => {
    return vscode.commands.registerCommand('icestorm.buildproject', async () => {
        const { build, buildTools, buildDir, buildType } = <ProjectSettings>context.workspaceState.get('icestormsetting');
        const workspaces = vscode.workspace.workspaceFolders;
        if (workspaces?.length) {
            const currentWorkspaceUri = workspaces[0].uri;
            shell.cd(currentWorkspaceUri.fsPath);
            //console.log(currentWorkspaceUri.fsPath);
            //shell.cd('c:/Users/matth/OneDrive/Desktop/fpga-test');
            if (checkRequirement(buildTools)) {
                if (buildType === 'apio') {
                    vscode.window.showInformationMessage('Using APIO');
                    try{
                        await runCommand(build, output);
                    } catch (error) {
                        vscode.window.showErrorMessage('Building failed, please check output.');
                    }
                } else {
                    try {
                        const { sys, constraint, pnr, pack} = <StandardBuild>build;
                        await runCommand(`mkdir -p ${buildDir}`, output);
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
        }
    });
};
