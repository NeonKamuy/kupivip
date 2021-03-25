import { IToggleOpenedStateAction, IToggleOpenedStateActionType } from "./interfaces";

export class CommonActions {
    protected static toggleOpenedAction(
        actionType: IToggleOpenedStateActionType
    ): IToggleOpenedStateAction {
        return {
            type: actionType,
        };
    }
}
