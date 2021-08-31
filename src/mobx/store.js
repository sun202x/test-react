import { action, makeAutoObservable, makeObservable, observable, reaction, toJS } from "mobx";

export class RepoStore {

    @observable data;

    constructor() {
        this.data = {
            "202102250000001": {
                "Name": "주소록",
                "Columns": [
                    {
                        "ID": "202102250000001",
                        "Name": "이름",
                        "ReferType": "MAIL_ADDRESS_BOOK_USER_NAME",
                        "DataType": "TEXT",
                        "ColumnID": "TXT_001",
                        "Attrs": {
                            "NotNull": true,
                            "CanChange": false,
                            "HelpText": ""
                        }
                    }
                ]
            }
        };

        makeObservable(this);
    }

    @action changeAttrs = (repoId, columnId, key, value) => {
        const repo = this.data[repoId];
        const column = repo.Columns.find(column => column.ID == columnId);

        column.Attrs[key] = value;
    }

    getAttrs(path) {
        const [_, repoId, columnId, key] = path.split("/");
        const repo = this.data[repoId];
        const column = repo.Columns.find(column => column.ID == columnId);

        return column.Attrs[key];
    }

}

export class SetupStore {

    @observable data;

    constructor() {
        this.data = {
            "Sections": {
                "202102250000002": {
                    "Name": null,
                    "ReferType": "INPUT_FORM",
                    "ViewType": "FORM",
                    "Attrs": {},
                    "Fields": {
                        "202102250000001": {
                            "Name": "이름",
                            "ReferType": "INPUT_FORM_FIELD",
                            "ViewType": "FORM_FIELD",
                            "Attrs": {},
                            "Items": {
                                "202102250000001": {
                                    "Name": "이름",
                                    "ReferType": "INPUT_FORM_ITEM",
                                    "ViewType": "FORM_ITEM",
                                    "RepoSID": "202102250000001",
                                    "ColumnSID": "202102250000001",
                                    "Attrs": {},
                                    "Components": {}
                                }
                            }
                        }
                    }
                }
            }
        };

        // makeObservable(this);
        makeAutoObservable(this);
    }

    @action changeAttrs = (sectionId, itemId, key, value) => {
        const section = this.data.Sections[sectionId];

        Object.entries(section.Fields)
            .some(([id, field]) => {
                const item = field.Items[itemId];

                if (item) {
                    item.Attrs[key] = value;
                }

                return item;
            });
    }

    getAttrs(path) {
        const [_, sectionId, itemId, key] = path.split("/");

        const section = this.data.Sections[sectionId];
        let item;

        Object.entries(section.Fields)
            .some(([_, field]) => {
                item = field.Items[itemId];
                return item;
            });

        return item.Attrs[key];
    }

}