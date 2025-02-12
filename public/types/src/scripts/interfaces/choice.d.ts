export interface Choice {
    id?: number;
    customProperties?: Record<string, any>;
    disabled?: boolean;
    active?: boolean;
    elementId?: number;
    groupId?: number;
    keyCode?: number;
    label: string;
    placeholder?: boolean;
    selected?: boolean;
    value: any;
    score?: number;
    choices?: Choice[];
    dataset?: Record<string, string>;
}
//# sourceMappingURL=choice.d.ts.map