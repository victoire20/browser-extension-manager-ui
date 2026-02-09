import rawData from "./data.json"
import type { ExtensionItem } from "../types/extension"

/**
 * Initializes extensions from JSON
 */
const initExtensions = (): ExtensionItem[] => {
    return rawData.map(item => ({
        id: item.id,
        logo: item.logo,
        name: item.name,
        description: item.description,
        isActive: item.isActive,
        isDeleted: false
    }))
}

let extensions: ExtensionItem[] = initExtensions()

/**
 * Recover filtered extensions
 */
export const getExtensionItems = (
    status: boolean | null = null
): ExtensionItem[] => {
    return extensions.filter(item => {
        if (item.isDeleted) return false
        if (status === null) return true
        return item.isActive === status
    })
}

/**
 * Enables/disables an extension
 */
export const toggleExtensionStatus = (id: number): void => {
    extensions = extensions.map(item => item.id === id ? { ...item, isActive: !item.isActive } : item)
}

/**
 * Logically removes an extension
 */
export const deleteExtensionItem = (id: number): void => {
    extensions = extensions.map(item => item.id === id ? { ...item, isDeleted: true } : item)
}
