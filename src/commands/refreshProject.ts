import * as vscode from 'vscode';
import * as YAML from 'yaml';

export const refreshProject = (context: vscode.ExtensionContext) => {
    return vscode.commands.registerCommand('icestorm.refreshproject', async () => {
        const workspaces = vscode.workspace.workspaceFolders;
        if (workspaces?.length) {
            const currentWorkspaceUri = workspaces[0].uri;
            const projectSettingUri = vscode.Uri.joinPath(currentWorkspaceUri, 'iceproj.yml');
            vscode.workspace.fs.stat(projectSettingUri).then(() => {
                console.log('refresh icestorm project file');
                vscode.commands.executeCommand('setContext', 'inIcestormProject', true);
                vscode.workspace.fs.readFile(projectSettingUri).then((settings) => {
                    context.workspaceState.update('icestormsetting', YAML.parse(settings.toString()));
                });
            }, () => {
                vscode.commands.executeCommand('setContext', 'inIcestormProject', false);
            });
        }
    });
};
