import * as vscode from 'vscode';

export const refreshProject = (context: vscode.ExtensionContext) => {
    return vscode.commands.registerCommand('icestorm.refreshproject', async () => {
        const workspaces = vscode.workspace.workspaceFolders;
        if (workspaces?.length) {
            const currentWorkspaceUri = workspaces[0].uri;
            const projectSettingUri = vscode.Uri.joinPath(currentWorkspaceUri, 'settings.iceproj');
            vscode.workspace.fs.stat(projectSettingUri).then(() => {
                console.log('inside icestorm project');
                vscode.commands.executeCommand('setContext', 'inIcestormProject', true);
                vscode.workspace.fs.readFile(projectSettingUri).then((settings) => {
                    context.workspaceState.update('icestormsetting', JSON.parse(settings.toString()));
                });
            }, () => {
                vscode.commands.executeCommand('setContext', 'inIcestormProject', false);
            });
        }
    });
};
