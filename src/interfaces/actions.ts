export interface ActionNotification {
    type: string;
    payload: any;
}

export interface SetJwtPayload {
    token: string | null;
}
