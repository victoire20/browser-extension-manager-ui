// @ts-ignore
import data from './data.json';

export type ExtentionItem = {
    id: number;
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
    isDeleted: boolean;
};

const result: ExtentionItem[] = [];

/** @return ExtentionItem[] */
export const getExtensionItems = (status?: boolean): ExtentionItem[] => {
    if (result.length === 0) {
        data.forEach((item) => {
            if (!item.isDeleted) {
                result.push({
                    id: item.id,
                    logo: item.logo,
                    name: item.name,
                    description: item.description,
                    isActive: item.isActive,
                    isDeleted: false,
                });
            }
        })
    }

    if (typeof status === "boolean") {
        return result.filter((item) => item.isActive === status && !item.isDeleted)
    }
    return result.filter((item) => !item.isDeleted)
}

export const changeStatus = (item: ExtentionItem) => {
    // @ts-ignore
    const target = result.find(i => i.id === item.id)

    if (!target) {
        throw new Error('This item not exist.')
    }
    target.isActive = !target.isActive
}

export const deleteExtensionItem = (item: ExtentionItem) => {
    // @ts-ignore
    const target = result.find(i => i.id === item.id)

    if (!target) {
        throw new Error('This item not exist.')
    }
    target.isDeleted = !target.isDeleted
}