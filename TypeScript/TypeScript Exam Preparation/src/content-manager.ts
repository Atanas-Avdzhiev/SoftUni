import { DetailedContent, findItemById } from "./content-types";
import { NotifyOnSuccess } from "./decorators";
import { Viewer } from "./models";

export class ContentManager {
    private contentItems: DetailedContent[] = [];
    private viewers: Map<number, Viewer[]> = new Map();

    addContent(item: DetailedContent) {
        this.contentItems.push(item);
        this.viewers.set(item.id, []);
        return `Content "${item.title}" (ID: ${item.id}) has been added.`;
    }

    @NotifyOnSuccess('Email')
    markAsWatched(contentId: number, viewer: Viewer) {
        if (!this.contentItems.find(item => item.id === contentId)) {
            return `ERROR: Content with ID ${contentId} not found.`;
        }

        const findViewer = this.viewers.get(contentId);

        if (!findViewer) {
            this.viewers.set(contentId, [viewer]);
        } else {
            findViewer.push(viewer);
        }
        return `Viewer ${viewer.name} marked content ID ${contentId} as watched.`;
    }

    listAllContent(): string[] {
        return this.contentItems.map(item => item.getDetails());
    }

    findContent(contentId: number) {
        return findItemById(this.contentItems, contentId);
    }
}