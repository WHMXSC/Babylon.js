export class Tools {
    public static LookForItem(item: any, selectedEntity: any): boolean {
        if (item === selectedEntity) {
            return true;
        }

        const children = item.getChildren ? item.getChildren() : item.children;
        if (children) {
            for (var child of children) {
                if (Tools.LookForItem(child, selectedEntity)) {
                    return true;
                }
            }
        }

        return false;
    }

    public static SortAndFilter(items: any[]): any[] {
        if (!items) {
            return [];
        }
        return items.filter((i) => !i.metadata || !i.metadata.hidden).sort((a: any, b: any) => {
            const lowerCaseA = (a.name || "").toLowerCase();
            const lowerCaseB = (b.name || "").toLowerCase();

            if (lowerCaseA === lowerCaseB) {
                return 0;
            }

            if (lowerCaseA > lowerCaseB) {
                return 1;
            }

            return -1;
        });
    }
}